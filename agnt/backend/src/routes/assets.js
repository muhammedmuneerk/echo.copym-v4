import express from 'express';
import { body, param, query, validationResult } from 'express-validator';
import { PrismaClient } from '@prisma/client';
import { authMiddleware } from '../middleware/auth.js';
import { roleMiddleware } from '../middleware/roles.js';
import { uploadAssetFiles } from '../middleware/upload.js';
import { logger } from '../utils/logger.js';
import asyncHandler from 'express-async-handler';

const router = express.Router();
const prisma = new PrismaClient();

/**
 * @swagger
 * /api/assets:
 *   post:
 *     summary: Create new asset
 *     tags: [Assets]
 *     security:
 *       - bearerAuth: []
 */
router.post('/',
    authMiddleware,
    uploadAssetFiles, [
        body('name').notEmpty().withMessage('Asset name is required'),
        body('category').isIn(['REAL_ESTATE', 'FINE_ART', 'LUXURY_GOODS', 'COMMODITIES', 'COLLECTIBLES', 'INTELLECTUAL_PROPERTY', 'WINE_SPIRITS', 'PRIVATE_EQUITY', 'DEBT_INSTRUMENTS', 'OTHER']).withMessage('Invalid asset category'),
        body('totalValue').isFloat({ min: 1000 }).withMessage('Total value must be at least $1,000'),
        body('description').isLength({ min: 50 }).withMessage('Description must be at least 50 characters')
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
            const {
                name,
                category,
                totalValue,
                description,
                location,
                minimumInvestment = 100,
                legalStructure,
                jurisdiction
            } = req.body;

            const asset = await prisma.asset.create({
                data: {
                    name,
                    category,
                    totalValue: parseFloat(totalValue),
                    description,
                    location,
                    minimumInvestment: parseFloat(minimumInvestment),
                    legalStructure,
                    jurisdiction,
                    tokenPrice: 100, // Default token price
                    totalSupply: Math.floor(parseFloat(totalValue) / 100),
                    availableSupply: Math.floor(parseFloat(totalValue) / 100),
                    status: 'PENDING',
                    creatorId: req.user.id,
                    images: req.files ? .images ? .map(file => file.path) || [],
                    documents: req.files ? .documents ? .map(file => file.path) || []
                }
            });

            logger.info('Asset created successfully', {
                assetId: asset.id,
                name: asset.name,
                category: asset.category,
                value: asset.totalValue,
                userId: req.user.id
            });

            res.status(201).json({
                success: true,
                message: 'Asset created successfully',
                asset
            });

        } catch (error) {
            logger.error('Asset creation failed', {
                error: error.message,
                userId: req.user.id
            });

            res.status(500).json({
                success: false,
                error: 'Asset creation failed'
            });
        }
    })
);

/**
 * @swagger
 * /api/assets:
 *   get:
 *     summary: Get assets with pagination
 *     tags: [Assets]
 */
router.get('/', [
        query('page').optional().isInt({ min: 1 }).withMessage('Page must be a positive integer'),
        query('limit').optional().isInt({ min: 1, max: 100 }).withMessage('Limit must be between 1 and 100'),
        query('category').optional().isIn(['REAL_ESTATE', 'FINE_ART', 'LUXURY_GOODS', 'COMMODITIES', 'COLLECTIBLES', 'INTELLECTUAL_PROPERTY', 'WINE_SPIRITS', 'PRIVATE_EQUITY', 'DEBT_INSTRUMENTS', 'OTHER']).withMessage('Invalid category'),
        query('status').optional().isIn(['PENDING', 'UNDER_REVIEW', 'APPROVED', 'TOKENIZED', 'LIVE', 'PAUSED', 'CLOSED', 'REJECTED']).withMessage('Invalid status')
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
            const page = parseInt(req.query.page) || 1;
            const limit = parseInt(req.query.limit) || 10;
            const { category, status, search } = req.query;
            const skip = (page - 1) * limit;

            const where = {};
            if (category) where.category = category;
            if (status) where.status = status;
            if (search) {
                where.OR = [
                    { name: { contains: search, mode: 'insensitive' } },
                    { description: { contains: search, mode: 'insensitive' } }
                ];
            }

            // Only show approved/live assets to public, all assets to authenticated users
            if (!req.user) {
                where.status = { in: ['APPROVED', 'TOKENIZED', 'LIVE'] };
            }

            const [assets, total] = await Promise.all([
                prisma.asset.findMany({
                    where,
                    include: {
                        creator: {
                            select: { id: true, firstName: true, lastName: true }
                        }
                    },
                    orderBy: { createdAt: 'desc' },
                    skip,
                    take: limit
                }),
                prisma.asset.count({ where })
            ]);

            res.json({
                success: true,
                assets,
                pagination: {
                    page,
                    limit,
                    total,
                    pages: Math.ceil(total / limit)
                }
            });

        } catch (error) {
            logger.error('Failed to get assets', {
                error: error.message
            });

            res.status(500).json({
                success: false,
                error: 'Failed to get assets'
            });
        }
    })
);

/**
 * @swagger
 * /api/assets/{id}:
 *   get:
 *     summary: Get asset by ID
 *     tags: [Assets]
 */
router.get('/:id',
    param('id').notEmpty().withMessage('Asset ID is required'),
    asyncHandler(async(req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                errors: errors.array()
            });
        }

        try {
            const { id } = req.params;

            const asset = await prisma.asset.findUnique({
                where: { id },
                include: {
                    creator: {
                        select: { id: true, firstName: true, lastName: true, email: true }
                    },
                    aiAnalysis: {
                        orderBy: { createdAt: 'desc' },
                        take: 5
                    },
                    priceHistory: {
                        orderBy: { timestamp: 'desc' },
                        take: 30
                    },
                    valuations: {
                        orderBy: { createdAt: 'desc' },
                        take: 3
                    }
                }
            });

            if (!asset) {
                return res.status(404).json({
                    success: false,
                    error: 'Asset not found'
                });
            }

            // Check if user can view this asset
            if (asset.status === 'PENDING' || asset.status === 'UNDER_REVIEW') {
                if (!req.user || (req.user.id !== asset.creatorId && req.user.role !== 'ADMIN' && req.user.role !== 'ASSET_MANAGER')) {
                    return res.status(403).json({
                        success: false,
                        error: 'Asset not available for viewing'
                    });
                }
            }

            res.json({
                success: true,
                asset
            });

        } catch (error) {
            logger.error('Failed to get asset', {
                error: error.message,
                assetId: req.params.id
            });

            res.status(500).json({
                success: false,
                error: 'Failed to get asset'
            });
        }
    })
);

export default router;