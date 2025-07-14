import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { body, validationResult } from 'express-validator';
import { PrismaClient } from '@prisma/client';
import { authMiddleware } from '../middleware/auth.js';
import { logger } from '../utils/logger.js';
import asyncHandler from 'express-async-handler';

const router = express.Router();
const prisma = new PrismaClient();

/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - username
 *               - password
 *               - firstName
 *               - lastName
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *               username:
 *                 type: string
 *                 minLength: 3
 *               password:
 *                 type: string
 *                 minLength: 8
 *               firstName:
 *                 type: string
 *               lastName:
 *                 type: string
 *               role:
 *                 type: string
 *                 enum: [INVESTOR, ASSET_MANAGER]
 *                 default: INVESTOR
 *     responses:
 *       201:
 *         description: User registered successfully
 *       400:
 *         description: Validation error or user already exists
 */
router.post('/register', [
        body('email').isEmail().withMessage('Valid email is required'),
        body('username').isLength({ min: 3 }).withMessage('Username must be at least 3 characters'),
        body('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters'),
        body('firstName').notEmpty().withMessage('First name is required'),
        body('lastName').notEmpty().withMessage('Last name is required'),
        body('role').optional().isIn(['INVESTOR', 'ASSET_MANAGER']).withMessage('Invalid role')
    ],
    asyncHandler(async(req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                errors: errors.array()
            });
        }

        const { email, username, password, firstName, lastName, role = 'INVESTOR' } = req.body;

        try {
            // Check if user already exists
            const existingUser = await prisma.user.findFirst({
                where: {
                    OR: [
                        { email },
                        { username }
                    ]
                }
            });

            if (existingUser) {
                return res.status(400).json({
                    success: false,
                    error: 'User with this email or username already exists'
                });
            }

            // Hash password
            const saltRounds = 12;
            const hashedPassword = await bcrypt.hash(password, saltRounds);

            // Create user
            const user = await prisma.user.create({
                data: {
                    email,
                    username,
                    password: hashedPassword,
                    firstName,
                    lastName,
                    role,
                    profile: {
                        create: {
                            riskTolerance: 'MEDIUM'
                        }
                    }
                },
                select: {
                    id: true,
                    email: true,
                    username: true,
                    firstName: true,
                    lastName: true,
                    role: true,
                    createdAt: true
                }
            });

            // Generate JWT token
            const token = jwt.sign({ userId: user.id },
                process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN || '7d' }
            );

            logger.info('User registered successfully', {
                userId: user.id,
                email: user.email,
                role: user.role
            });

            res.status(201).json({
                success: true,
                message: 'User registered successfully',
                user,
                token
            });

        } catch (error) {
            logger.error('Registration failed', {
                error: error.message,
                email
            });

            res.status(500).json({
                success: false,
                error: 'Registration failed'
            });
        }
    })
);

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Login user
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login successful
 *       400:
 *         description: Invalid credentials
 */
router.post('/login', [
        body('email').isEmail().withMessage('Valid email is required'),
        body('password').notEmpty().withMessage('Password is required')
    ],
    asyncHandler(async(req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                errors: errors.array()
            });
        }

        const { email, password } = req.body;

        try {
            // Find user
            const user = await prisma.user.findUnique({
                where: { email },
                include: {
                    profile: true
                }
            });

            if (!user) {
                return res.status(400).json({
                    success: false,
                    error: 'Invalid credentials'
                });
            }

            if (!user.isActive) {
                return res.status(400).json({
                    success: false,
                    error: 'Account is deactivated'
                });
            }

            // Check password
            const isValidPassword = await bcrypt.compare(password, user.password);

            if (!isValidPassword) {
                return res.status(400).json({
                    success: false,
                    error: 'Invalid credentials'
                });
            }

            // Generate JWT token
            const token = jwt.sign({ userId: user.id },
                process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN || '7d' }
            );

            // Remove password from response
            const { password: _, ...userWithoutPassword } = user;

            logger.info('User logged in successfully', {
                userId: user.id,
                email: user.email,
                role: user.role,
                ip: req.ip
            });

            res.json({
                success: true,
                message: 'Login successful',
                user: userWithoutPassword,
                token
            });

        } catch (error) {
            logger.error('Login failed', {
                error: error.message,
                email
            });

            res.status(500).json({
                success: false,
                error: 'Login failed'
            });
        }
    })
);

/**
 * @swagger
 * /api/auth/me:
 *   get:
 *     summary: Get current user profile
 *     tags: [Authentication]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: User profile retrieved successfully
 *       401:
 *         description: Unauthorized
 */
router.get('/me',
    authMiddleware,
    asyncHandler(async(req, res) => {
        try {
            const user = await prisma.user.findUnique({
                where: { id: req.user.id },
                include: {
                    profile: true,
                    portfolios: {
                        include: {
                            items: {
                                include: {
                                    asset: {
                                        select: {
                                            id: true,
                                            name: true,
                                            category: true,
                                            tokenPrice: true
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                select: {
                    id: true,
                    email: true,
                    username: true,
                    firstName: true,
                    lastName: true,
                    role: true,
                    kycStatus: true,
                    isActive: true,
                    createdAt: true,
                    updatedAt: true,
                    profile: true,
                    portfolios: true
                }
            });

            if (!user) {
                return res.status(404).json({
                    success: false,
                    error: 'User not found'
                });
            }

            res.json({
                success: true,
                user
            });

        } catch (error) {
            logger.error('Failed to get user profile', {
                error: error.message,
                userId: req.user.id
            });

            res.status(500).json({
                success: false,
                error: 'Failed to get user profile'
            });
        }
    })
);

/**
 * @swagger
 * /api/auth/update-profile:
 *   put:
 *     summary: Update user profile
 *     tags: [Authentication]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *               lastName:
 *                 type: string
 *               phoneNumber:
 *                 type: string
 *               address:
 *                 type: string
 *               city:
 *                 type: string
 *               country:
 *                 type: string
 *               riskTolerance:
 *                 type: string
 *                 enum: [LOW, MEDIUM, HIGH]
 *     responses:
 *       200:
 *         description: Profile updated successfully
 */
router.put('/update-profile',
    authMiddleware, [
        body('firstName').optional().notEmpty().withMessage('First name cannot be empty'),
        body('lastName').optional().notEmpty().withMessage('Last name cannot be empty'),
        body('phoneNumber').optional().isMobilePhone().withMessage('Valid phone number required'),
        body('riskTolerance').optional().isIn(['LOW', 'MEDIUM', 'HIGH']).withMessage('Invalid risk tolerance')
    ],
    asyncHandler(async(req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                errors: errors.array()
            });
        }

        try {
            const { firstName, lastName, phoneNumber, address, city, country, riskTolerance, investmentGoals, investmentHorizon } = req.body;

            // Update user basic info
            const updateData = {};
            if (firstName) updateData.firstName = firstName;
            if (lastName) updateData.lastName = lastName;

            const user = await prisma.user.update({
                where: { id: req.user.id },
                data: updateData,
                include: {
                    profile: true
                }
            });

            // Update profile
            const profileData = {};
            if (phoneNumber) profileData.phoneNumber = phoneNumber;
            if (address) profileData.address = address;
            if (city) profileData.city = city;
            if (country) profileData.country = country;
            if (riskTolerance) profileData.riskTolerance = riskTolerance;
            if (investmentGoals) profileData.investmentGoals = investmentGoals;
            if (investmentHorizon) profileData.investmentHorizon = investmentHorizon;

            if (Object.keys(profileData).length > 0) {
                await prisma.userProfile.upsert({
                    where: { userId: req.user.id },
                    update: profileData,
                    create: {
                        userId: req.user.id,
                        ...profileData
                    }
                });
            }

            logger.info('User profile updated', {
                userId: req.user.id,
                updatedFields: Object.keys({...updateData, ...profileData })
            });

            res.json({
                success: true,
                message: 'Profile updated successfully'
            });

        } catch (error) {
            logger.error('Profile update failed', {
                error: error.message,
                userId: req.user.id
            });

            res.status(500).json({
                success: false,
                error: 'Profile update failed'
            });
        }
    })
);

/**
 * @swagger
 * /api/auth/change-password:
 *   put:
 *     summary: Change user password
 *     tags: [Authentication]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - currentPassword
 *               - newPassword
 *             properties:
 *               currentPassword:
 *                 type: string
 *               newPassword:
 *                 type: string
 *                 minLength: 8
 *     responses:
 *       200:
 *         description: Password changed successfully
 */
router.put('/change-password',
    authMiddleware, [
        body('currentPassword').notEmpty().withMessage('Current password is required'),
        body('newPassword').isLength({ min: 8 }).withMessage('New password must be at least 8 characters')
    ],
    asyncHandler(async(req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                errors: errors.array()
            });
        }

        try {
            const { currentPassword, newPassword } = req.body;

            // Get user with password
            const user = await prisma.user.findUnique({
                where: { id: req.user.id }
            });

            // Verify current password
            const isValidPassword = await bcrypt.compare(currentPassword, user.password);

            if (!isValidPassword) {
                return res.status(400).json({
                    success: false,
                    error: 'Current password is incorrect'
                });
            }

            // Hash new password
            const saltRounds = 12;
            const hashedPassword = await bcrypt.hash(newPassword, saltRounds);

            // Update password
            await prisma.user.update({
                where: { id: req.user.id },
                data: { password: hashedPassword }
            });

            logger.info('Password changed successfully', {
                userId: req.user.id
            });

            res.json({
                success: true,
                message: 'Password changed successfully'
            });

        } catch (error) {
            logger.error('Password change failed', {
                error: error.message,
                userId: req.user.id
            });

            res.status(500).json({
                success: false,
                error: 'Password change failed'
            });
        }
    })
);

/**
 * @swagger
 * /api/auth/logout:
 *   post:
 *     summary: Logout user (client-side token removal)
 *     tags: [Authentication]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Logout successful
 */
router.post('/logout',
    authMiddleware,
    asyncHandler(async(req, res) => {
        logger.info('User logged out', {
            userId: req.user.id,
            email: req.user.email
        });

        res.json({
            success: true,
            message: 'Logout successful'
        });
    })
);

export default router;