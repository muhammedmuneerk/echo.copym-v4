import express from 'express';
import { body, param, query, validationResult } from 'express-validator';
import { PrismaClient } from '@prisma/client';
import { authMiddleware } from '../middleware/auth.js';
import { roleMiddleware } from '../middleware/roles.js';
import { logger } from '../utils/logger.js';
import { TokenizationAgent } from '../ai/agents/TokenizationAgent.js';
import { uploadMiddleware } from '../middleware/upload.js';
import asyncHandler from 'express-async-handler';

const router = express.Router();
const prisma = new PrismaClient();
const tokenizationAgent = new TokenizationAgent();

/**
 * @swagger
 * /api/tokenization/analyze:
 *   post:
 *     summary: Analyze asset for tokenization
 *     description: Use AI to analyze an asset and generate tokenization recommendations
 *     tags: [Tokenization]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - category
 *               - totalValue
 *               - description
 *             properties:
 *               name:
 *                 type: string
 *                 description: Asset name
 *               category:
 *                 type: string
 *                 enum: [REAL_ESTATE, FINE_ART, LUXURY_GOODS, COMMODITIES, COLLECTIBLES, INTELLECTUAL_PROPERTY, WINE_SPIRITS, PRIVATE_EQUITY, DEBT_INSTRUMENTS, OTHER]
 *               totalValue:
 *                 type: number
 *                 minimum: 1000
 *               description:
 *                 type: string
 *                 minLength: 50
 *               location:
 *                 type: string
 *               minimumInvestment:
 *                 type: number
 *                 minimum: 100
 *               expectedInvestors:
 *                 type: number
 *               geographicReach:
 *                 type: string
 *               complianceLevel:
 *                 type: string
 *     responses:
 *       200:
 *         description: Tokenization analysis completed
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 tokenizationPlan:
 *                   type: object
 *                 nextSteps:
 *                   type: array
 *                 estimatedTimeline:
 *                   type: object
 *       400:
 *         description: Invalid input data
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server error
 */
router.post('/analyze',
    authMiddleware, [
        body('name').notEmpty().withMessage('Asset name is required'),
        body('category').isIn(['REAL_ESTATE', 'FINE_ART', 'LUXURY_GOODS', 'COMMODITIES', 'COLLECTIBLES', 'INTELLECTUAL_PROPERTY', 'WINE_SPIRITS', 'PRIVATE_EQUITY', 'DEBT_INSTRUMENTS', 'OTHER']).withMessage('Invalid asset category'),
        body('totalValue').isFloat({ min: 1000 }).withMessage('Total value must be at least $1,000'),
        body('description').isLength({ min: 50 }).withMessage('Description must be at least 50 characters'),
        body('minimumInvestment').optional().isFloat({ min: 100 }).withMessage('Minimum investment must be at least $100'),
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
            const assetData = {
                id: `temp-${Date.now()}`,
                ...req.body,
                createdBy: req.user.id
            };

            logger.info('Starting tokenization analysis', {
                userId: req.user.id,
                assetName: assetData.name,
                assetValue: assetData.totalValue
            });

            const result = await tokenizationAgent.tokenizeAsset(assetData);

            res.json({
                success: true,
                ...result,
                analysisId: `analysis-${Date.now()}`,
                timestamp: new Date().toISOString()
            });

        } catch (error) {
            logger.error('Tokenization analysis failed', {
                error: error.message,
                userId: req.user.id,
                stack: error.stack
            });

            res.status(500).json({
                success: false,
                error: 'Tokenization analysis failed',
                message: error.message
            });
        }
    })
);

/**
 * @swagger
 * /api/tokenization/data-structure/{assetType}:
 *   get:
 *     summary: Get required data structure for asset type
 *     description: Get AI-generated data structure requirements for a specific asset type
 *     tags: [Tokenization]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: assetType
 *         required: true
 *         schema:
 *           type: string
 *           enum: [REAL_ESTATE, FINE_ART, LUXURY_GOODS, COMMODITIES, COLLECTIBLES, INTELLECTUAL_PROPERTY, WINE_SPIRITS, PRIVATE_EQUITY, DEBT_INSTRUMENTS, OTHER]
 *     responses:
 *       200:
 *         description: Data structure requirements
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 dataStructure:
 *                   type: object
 *                 requiredFields:
 *                   type: array
 *                 validationRules:
 *                   type: object
 */
router.get('/data-structure/:assetType',
    authMiddleware,
    param('assetType').isIn(['REAL_ESTATE', 'FINE_ART', 'LUXURY_GOODS', 'COMMODITIES', 'COLLECTIBLES', 'INTELLECTUAL_PROPERTY', 'WINE_SPIRITS', 'PRIVATE_EQUITY', 'DEBT_INSTRUMENTS', 'OTHER']).withMessage('Invalid asset type'),
    asyncHandler(async(req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                errors: errors.array()
            });
        }

        try {
            const { assetType } = req.params;

            const dataStructure = await tokenizationAgent.generateDataStructure(assetType);

            res.json({
                success: true,
                assetType,
                dataStructure,
                generatedAt: new Date().toISOString()
            });

        } catch (error) {
            logger.error('Data structure generation failed', {
                error: error.message,
                assetType: req.params.assetType,
                userId: req.user.id
            });

            res.status(500).json({
                success: false,
                error: 'Data structure generation failed',
                message: error.message
            });
        }
    })
);

/**
 * @swagger
 * /api/tokenization/issuance-flow:
 *   post:
 *     summary: Generate token issuance flow
 *     description: Generate detailed token issuance workflow with steps and requirements
 *     tags: [Tokenization]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - assetId
 *             properties:
 *               assetId:
 *                 type: string
 *                 description: Asset ID for tokenization
 *     responses:
 *       200:
 *         description: Token issuance flow generated
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 issuanceFlow:
 *                   type: object
 *                 steps:
 *                   type: array
 *                 totalDuration:
 *                   type: string
 *                 totalCost:
 *                   type: number
 */
router.post('/issuance-flow',
    authMiddleware, [
        body('assetId').notEmpty().withMessage('Asset ID is required')
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
            const { assetId } = req.body;

            // Get asset data
            const asset = await prisma.asset.findUnique({
                where: { id: assetId },
                include: {
                    creator: {
                        select: { id: true, email: true, firstName: true, lastName: true }
                    }
                }
            });

            if (!asset) {
                return res.status(404).json({
                    success: false,
                    error: 'Asset not found'
                });
            }

            // Check if user has permission to access this asset
            if (asset.creatorId !== req.user.id && req.user.role !== 'ADMIN') {
                return res.status(403).json({
                    success: false,
                    error: 'Insufficient permissions'
                });
            }

            const issuanceFlow = await tokenizationAgent.generateIssuanceFlow(asset);

            res.json({
                success: true,
                assetId,
                issuanceFlow,
                generatedAt: new Date().toISOString()
            });

        } catch (error) {
            logger.error('Issuance flow generation failed', {
                error: error.message,
                assetId: req.body.assetId,
                userId: req.user.id
            });

            res.status(500).json({
                success: false,
                error: 'Issuance flow generation failed',
                message: error.message
            });
        }
    })
);

/**
 * @swagger
 * /api/tokenization/status/{assetId}:
 *   get:
 *     summary: Get tokenization status
 *     description: Get current tokenization status and progress for an asset
 *     tags: [Tokenization]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: assetId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Tokenization status retrieved
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 status:
 *                   type: object
 *                 progress:
 *                   type: object
 *                 nextSteps:
 *                   type: array
 */
router.get('/status/:assetId',
    authMiddleware,
    param('assetId').notEmpty().withMessage('Asset ID is required'),
    asyncHandler(async(req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                errors: errors.array()
            });
        }

        try {
            const { assetId } = req.params;

            // Get asset to check permissions
            const asset = await prisma.asset.findUnique({
                where: { id: assetId },
                select: { id: true, creatorId: true, status: true }
            });

            if (!asset) {
                return res.status(404).json({
                    success: false,
                    error: 'Asset not found'
                });
            }

            // Check permissions
            if (asset.creatorId !== req.user.id && req.user.role !== 'ADMIN') {
                return res.status(403).json({
                    success: false,
                    error: 'Insufficient permissions'
                });
            }

            const status = await tokenizationAgent.getTokenizationStatus(assetId);

            res.json({
                success: true,
                assetId,
                status,
                assetStatus: asset.status,
                retrievedAt: new Date().toISOString()
            });

        } catch (error) {
            logger.error('Failed to get tokenization status', {
                error: error.message,
                assetId: req.params.assetId,
                userId: req.user.id
            });

            res.status(500).json({
                success: false,
                error: 'Failed to get tokenization status',
                message: error.message
            });
        }
    })
);

/**
 * @swagger
 * /api/tokenization/progress/{assetId}:
 *   put:
 *     summary: Update tokenization progress
 *     description: Update the progress of tokenization for an asset
 *     tags: [Tokenization]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: assetId
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - step
 *               - status
 *             properties:
 *               step:
 *                 type: string
 *                 enum: [ANALYSIS, COMPLIANCE, PRICING, BLOCKCHAIN, DEPLOYMENT, COMPLETED]
 *               status:
 *                 type: string
 *                 enum: [PENDING, IN_PROGRESS, COMPLETED, FAILED]
 *               progress:
 *                 type: number
 *                 minimum: 0
 *                 maximum: 100
 *               notes:
 *                 type: string
 *     responses:
 *       200:
 *         description: Progress updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 */
router.put('/progress/:assetId',
    authMiddleware,
    roleMiddleware(['ADMIN', 'ASSET_MANAGER']), [
        param('assetId').notEmpty().withMessage('Asset ID is required'),
        body('step').isIn(['ANALYSIS', 'COMPLIANCE', 'PRICING', 'BLOCKCHAIN', 'DEPLOYMENT', 'COMPLETED']).withMessage('Invalid step'),
        body('status').isIn(['PENDING', 'IN_PROGRESS', 'COMPLETED', 'FAILED']).withMessage('Invalid status'),
        body('progress').optional().isInt({ min: 0, max: 100 }).withMessage('Progress must be between 0 and 100')
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
            const { assetId } = req.params;
            const { step, status, progress, notes } = req.body;

            // Check if asset exists
            const asset = await prisma.asset.findUnique({
                where: { id: assetId },
                select: { id: true }
            });

            if (!asset) {
                return res.status(404).json({
                    success: false,
                    error: 'Asset not found'
                });
            }

            const progressUpdate = {
                step,
                status,
                progress: progress || 0,
                notes: notes || '',
                updatedAt: new Date().toISOString(),
                updatedBy: req.user.id
            };

            await tokenizationAgent.updateTokenizationProgress(assetId, progressUpdate);

            // Emit real-time update via Socket.IO
            const io = req.app.get('io');
            io.to(`asset-${assetId}`).emit('tokenization-progress', {
                assetId,
                progress: progressUpdate
            });

            res.json({
                success: true,
                message: 'Tokenization progress updated successfully',
                progress: progressUpdate
            });

        } catch (error) {
            logger.error('Failed to update tokenization progress', {
                error: error.message,
                assetId: req.params.assetId,
                userId: req.user.id
            });

            res.status(500).json({
                success: false,
                error: 'Failed to update tokenization progress',
                message: error.message
            });
        }
    })
);

/**
 * @swagger
 * /api/tokenization/execute/{assetId}:
 *   post:
 *     summary: Execute tokenization
 *     description: Execute the full tokenization process for an asset
 *     tags: [Tokenization]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: assetId
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - approveExecution
 *             properties:
 *               approveExecution:
 *                 type: boolean
 *                 description: User approval for tokenization execution
 *               customParameters:
 *                 type: object
 *                 description: Custom parameters for tokenization
 *     responses:
 *       200:
 *         description: Tokenization execution started
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 executionId:
 *                   type: string
 *                 status:
 *                   type: string
 *                 estimatedCompletion:
 *                   type: string
 */
router.post('/execute/:assetId',
    authMiddleware,
    roleMiddleware(['ADMIN', 'ASSET_MANAGER']), [
        param('assetId').notEmpty().withMessage('Asset ID is required'),
        body('approveExecution').isBoolean().withMessage('Approval is required')
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
            const { assetId } = req.params;
            const { approveExecution, customParameters } = req.body;

            if (!approveExecution) {
                return res.status(400).json({
                    success: false,
                    error: 'Tokenization execution requires approval'
                });
            }

            // Get asset data
            const asset = await prisma.asset.findUnique({
                where: { id: assetId },
                include: {
                    creator: {
                        select: { id: true, email: true, firstName: true, lastName: true }
                    }
                }
            });

            if (!asset) {
                return res.status(404).json({
                    success: false,
                    error: 'Asset not found'
                });
            }

            // Check asset is ready for tokenization
            if (asset.status !== 'APPROVED') {
                return res.status(400).json({
                    success: false,
                    error: 'Asset must be approved before tokenization'
                });
            }

            const executionId = `exec-${Date.now()}`;

            // Start tokenization process (this would be a background job in production)
            logger.info('Starting tokenization execution', {
                assetId,
                executionId,
                userId: req.user.id
            });

            // Update asset status
            await prisma.asset.update({
                where: { id: assetId },
                data: {
                    status: 'PROCESSING',
                    metadata: {
                        ...asset.metadata,
                        executionId,
                        executionStarted: new Date().toISOString(),
                        executionApprovedBy: req.user.id
                    }
                }
            });

            // Emit real-time update
            const io = req.app.get('io');
            io.to(`asset-${assetId}`).emit('tokenization-started', {
                assetId,
                executionId,
                status: 'PROCESSING'
            });

            res.json({
                success: true,
                executionId,
                status: 'PROCESSING',
                message: 'Tokenization execution started',
                estimatedCompletion: '13-20 days',
                trackingUrl: `/api/tokenization/status/${assetId}`
            });

        } catch (error) {
            logger.error('Failed to execute tokenization', {
                error: error.message,
                assetId: req.params.assetId,
                userId: req.user.id
            });

            res.status(500).json({
                success: false,
                error: 'Failed to execute tokenization',
                message: error.message
            });
        }
    })
);

/**
 * @swagger
 * /api/tokenization/history:
 *   get:
 *     summary: Get tokenization history
 *     description: Get paginated history of tokenization activities
 *     tags: [Tokenization]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           minimum: 1
 *           default: 1
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           minimum: 1
 *           maximum: 100
 *           default: 10
 *       - in: query
 *         name: status
 *         schema:
 *           type: string
 *           enum: [PENDING, PROCESSING, COMPLETED, FAILED]
 *     responses:
 *       200:
 *         description: Tokenization history retrieved
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 history:
 *                   type: array
 *                 pagination:
 *                   type: object
 */
router.get('/history',
    authMiddleware, [
        query('page').optional().isInt({ min: 1 }).withMessage('Page must be a positive integer'),
        query('limit').optional().isInt({ min: 1, max: 100 }).withMessage('Limit must be between 1 and 100'),
        query('status').optional().isIn(['PENDING', 'PROCESSING', 'COMPLETED', 'FAILED']).withMessage('Invalid status')
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
            const { status } = req.query;
            const skip = (page - 1) * limit;

            const where = {};

            // Filter by user's assets if not admin
            if (req.user.role !== 'ADMIN') {
                where.creatorId = req.user.id;
            }

            // Filter by status if provided
            if (status) {
                where.status = status;
            }

            const [history, total] = await Promise.all([
                prisma.asset.findMany({
                    where,
                    include: {
                        creator: {
                            select: { id: true, email: true, firstName: true, lastName: true }
                        },
                        aiAnalysis: {
                            where: { analysisType: 'TOKENIZATION' },
                            orderBy: { createdAt: 'desc' },
                            take: 1
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
                history,
                pagination: {
                    page,
                    limit,
                    total,
                    pages: Math.ceil(total / limit)
                }
            });

        } catch (error) {
            logger.error('Failed to get tokenization history', {
                error: error.message,
                userId: req.user.id
            });

            res.status(500).json({
                success: false,
                error: 'Failed to get tokenization history',
                message: error.message
            });
        }
    })
);

export default router;