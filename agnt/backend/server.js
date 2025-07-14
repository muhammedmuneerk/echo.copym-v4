import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import compression from 'compression';
import morgan from 'morgan';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { PrismaClient } from '@prisma/client';
import { logger } from './src/utils/logger.js';
import { errorHandler } from './src/middleware/errorHandler.js';
import { authMiddleware } from './src/middleware/auth.js';

// Import routes
import authRoutes from './src/routes/auth.js';
import assetRoutes from './src/routes/assets.js';
import tokenizationRoutes from './src/routes/tokenization.js';
import complianceRoutes from './src/routes/compliance.js';
import pricingRoutes from './src/routes/pricing.js';
import blockchainRoutes from './src/routes/blockchain.js';
import portfolioRoutes from './src/routes/portfolio.js';
import transactionRoutes from './src/routes/transactions.js';
import aiRoutes from './src/routes/ai.js';
import analyticsRoutes from './src/routes/analytics.js';
import adminRoutes from './src/routes/admin.js';

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();
const httpServer = createServer(app);

// Initialize Socket.IO
const io = new Server(httpServer, {
    cors: {
        origin: process.env.FRONTEND_URL || "http://localhost:3000",
        credentials: true
    }
});

// Initialize Prisma
const prisma = new PrismaClient();

// Swagger configuration
const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'CopymAI RWA Tokenization Platform API',
            version: '1.0.0',
            description: 'AI-powered Real-World Asset Tokenization Platform API',
            contact: {
                name: 'CopymAI Team',
                email: 'support@copymai.ai'
            }
        },
        servers: [{
            url: process.env.API_URL || 'http://localhost:5000',
            description: 'Development server'
        }],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT'
                }
            }
        }
    },
    apis: ['./src/routes/*.js', './src/models/*.js']
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

// Rate limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    message: 'Too many requests from this IP, please try again later.',
    standardHeaders: true,
    legacyHeaders: false,
});

// API-specific rate limiting
const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 1000, // limit each IP to 1000 requests per windowMs for API
    message: 'API rate limit exceeded, please try again later.',
    standardHeaders: true,
    legacyHeaders: false,
});

// AI endpoint specific rate limiting
const aiLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 50, // limit each IP to 50 AI requests per hour
    message: 'AI API rate limit exceeded, please try again later.',
    standardHeaders: true,
    legacyHeaders: false,
});

// Middleware
app.use(helmet({
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],
            styleSrc: ["'self'", "'unsafe-inline'"],
            scriptSrc: ["'self'"],
            imgSrc: ["'self'", "data:", "https:"],
            connectSrc: ["'self'"],
            fontSrc: ["'self'"],
            objectSrc: ["'none'"],
            mediaSrc: ["'self'"],
            frameSrc: ["'none'"],
        },
    },
    crossOriginEmbedderPolicy: false
}));

app.use(cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    credentials: true,
    optionsSuccessStatus: 200
}));

app.use(compression());
app.use(morgan('combined', { stream: { write: (msg) => logger.info(msg.trim()) } }));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Apply rate limiting
app.use('/api/', apiLimiter);
app.use('/api/ai/', aiLimiter);
app.use(limiter);

// API Documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'healthy',
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
        environment: process.env.NODE_ENV || 'development'
    });
});

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/assets', assetRoutes);
app.use('/api/tokenization', tokenizationRoutes);
app.use('/api/compliance', complianceRoutes);
app.use('/api/pricing', pricingRoutes);
app.use('/api/blockchain', blockchainRoutes);
app.use('/api/portfolio', portfolioRoutes);
app.use('/api/transactions', transactionRoutes);
app.use('/api/ai', aiRoutes);
app.use('/api/analytics', analyticsRoutes);
app.use('/api/admin', adminRoutes);

// Root endpoint
app.get('/', (req, res) => {
    res.json({
        message: 'CopymAI RWA Tokenization Platform API',
        version: '1.0.0',
        documentation: '/api-docs',
        health: '/health'
    });
});

// Socket.IO connection handling
io.on('connection', (socket) => {
    logger.info('Client connected to WebSocket', { socketId: socket.id });

    socket.on('join-room', (room) => {
        socket.join(room);
        logger.info('Client joined room', { socketId: socket.id, room });
    });

    socket.on('leave-room', (room) => {
        socket.leave(room);
        logger.info('Client left room', { socketId: socket.id, room });
    });

    socket.on('disconnect', () => {
        logger.info('Client disconnected from WebSocket', { socketId: socket.id });
    });
});

// Make io available to routes
app.set('io', io);

// Error handling middleware (must be last)
app.use(errorHandler);

// 404 handler
app.use('*', (req, res) => {
    res.status(404).json({
        error: 'Route not found',
        message: `The route ${req.originalUrl} does not exist`
    });
});

// Graceful shutdown
process.on('SIGTERM', async() => {
    logger.info('SIGTERM received, shutting down gracefully');

    httpServer.close(() => {
        logger.info('HTTP server closed');
    });

    await prisma.$disconnect();
    logger.info('Database connection closed');

    process.exit(0);
});

process.on('SIGINT', async() => {
    logger.info('SIGINT received, shutting down gracefully');

    httpServer.close(() => {
        logger.info('HTTP server closed');
    });

    await prisma.$disconnect();
    logger.info('Database connection closed');

    process.exit(0);
});

// Handle uncaught exceptions
process.on('uncaughtException', (error) => {
    logger.error('Uncaught Exception', { error: error.message, stack: error.stack });
    process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
    logger.error('Unhandled Rejection', { reason, promise });
    process.exit(1);
});

// Start server
const PORT = process.env.PORT || 5000;

httpServer.listen(PORT, () => {
    logger.info(`Server running on port ${PORT}`, {
        environment: process.env.NODE_ENV || 'development',
        apiDocs: `http://localhost:${PORT}/api-docs`
    });
});

export default app;