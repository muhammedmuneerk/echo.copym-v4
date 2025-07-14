import winston from 'winston';
import path from 'path';
import fs from 'fs';

// Create logs directory if it doesn't exist
const logsDir = path.join(process.cwd(), 'logs');
if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir, { recursive: true });
}

// Define log format
const logFormat = winston.format.combine(
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    winston.format.errors({ stack: true }),
    winston.format.json(),
    winston.format.prettyPrint()
);

// Define console format for development
const consoleFormat = winston.format.combine(
    winston.format.colorize(),
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    winston.format.errors({ stack: true }),
    winston.format.printf(({ level, message, timestamp, stack, ...meta }) => {
        let log = `${timestamp} [${level}]: ${message}`;

        // Add metadata if present
        if (Object.keys(meta).length > 0) {
            log += ` ${JSON.stringify(meta)}`;
        }

        // Add stack trace if present
        if (stack) {
            log += `\n${stack}`;
        }

        return log;
    })
);

// Create logger instance
const logger = winston.createLogger({
    level: process.env.LOG_LEVEL || 'info',
    format: logFormat,
    defaultMeta: { service: 'copymai-backend' },
    transports: [
        // Write all logs to combined.log
        new winston.transports.File({
            filename: path.join(logsDir, 'combined.log'),
            maxsize: 5242880, // 5MB
            maxFiles: 5,
            tailable: true
        }),

        // Write error logs to error.log
        new winston.transports.File({
            filename: path.join(logsDir, 'error.log'),
            level: 'error',
            maxsize: 5242880, // 5MB
            maxFiles: 5,
            tailable: true
        }),

        // Write AI-related logs to ai.log
        new winston.transports.File({
            filename: path.join(logsDir, 'ai.log'),
            level: 'info',
            maxsize: 5242880, // 5MB
            maxFiles: 3,
            tailable: true,
            format: winston.format.combine(
                winston.format.timestamp(),
                winston.format.json(),
                winston.format.printf(({ timestamp, level, message, ...meta }) => {
                    // Only log AI-related messages
                    if (meta.service === 'ai' || message.includes('AI') || message.includes('tokenization')) {
                        return JSON.stringify({ timestamp, level, message, ...meta });
                    }
                    return '';
                })
            )
        }),

        // Write security logs to security.log
        new winston.transports.File({
            filename: path.join(logsDir, 'security.log'),
            level: 'warn',
            maxsize: 5242880, // 5MB
            maxFiles: 10,
            tailable: true,
            format: winston.format.combine(
                winston.format.timestamp(),
                winston.format.json(),
                winston.format.printf(({ timestamp, level, message, ...meta }) => {
                    // Only log security-related messages
                    if (meta.type === 'security' || message.includes('auth') || message.includes('login') || message.includes('unauthorized')) {
                        return JSON.stringify({ timestamp, level, message, ...meta });
                    }
                    return '';
                })
            )
        })
    ],

    // Handle uncaught exceptions
    exceptionHandlers: [
        new winston.transports.File({
            filename: path.join(logsDir, 'exceptions.log'),
            maxsize: 5242880, // 5MB
            maxFiles: 5
        })
    ],

    // Handle unhandled promise rejections
    rejectionHandlers: [
        new winston.transports.File({
            filename: path.join(logsDir, 'rejections.log'),
            maxsize: 5242880, // 5MB
            maxFiles: 5
        })
    ]
});

// Add console transport for development
if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
        format: consoleFormat,
        level: 'debug'
    }));
}

// Create specialized loggers for different components
const createSubLogger = (service) => {
    return logger.child({ service });
};

// AI operations logger
const aiLogger = createSubLogger('ai');

// Security operations logger
const securityLogger = createSubLogger('security');

// Database operations logger
const dbLogger = createSubLogger('database');

// Blockchain operations logger
const blockchainLogger = createSubLogger('blockchain');

// API operations logger
const apiLogger = createSubLogger('api');

// Performance monitoring logger
const performanceLogger = createSubLogger('performance');

// Custom logging methods
const loggers = {
    // Main logger
    logger,

    // Specialized loggers
    aiLogger,
    securityLogger,
    dbLogger,
    blockchainLogger,
    apiLogger,
    performanceLogger,

    // Convenience methods
    logAPIRequest: (req, res, duration) => {
        apiLogger.info('API Request', {
            method: req.method,
            url: req.originalUrl,
            ip: req.ip,
            userAgent: req.get('User-Agent'),
            userId: req.user ? .id,
            statusCode: res.statusCode,
            duration: `${duration}ms`,
            timestamp: new Date().toISOString()
        });
    },

    logAIOperation: (operation, data, duration, success = true) => {
        aiLogger.info('AI Operation', {
            operation,
            data,
            duration: `${duration}ms`,
            success,
            timestamp: new Date().toISOString()
        });
    },

    logSecurityEvent: (event, details) => {
        securityLogger.warn('Security Event', {
            event,
            details,
            timestamp: new Date().toISOString(),
            type: 'security'
        });
    },

    logBlockchainOperation: (operation, data, txHash, success = true) => {
        blockchainLogger.info('Blockchain Operation', {
            operation,
            data,
            txHash,
            success,
            timestamp: new Date().toISOString()
        });
    },

    logPerformance: (operation, duration, metadata = {}) => {
        performanceLogger.info('Performance Metric', {
            operation,
            duration: `${duration}ms`,
            ...metadata,
            timestamp: new Date().toISOString()
        });
    },

    logDatabaseQuery: (query, duration, success = true) => {
        dbLogger.debug('Database Query', {
            query,
            duration: `${duration}ms`,
            success,
            timestamp: new Date().toISOString()
        });
    },

    logError: (error, context = {}) => {
        logger.error('Application Error', {
            error: error.message,
            stack: error.stack,
            context,
            timestamp: new Date().toISOString()
        });
    },

    logUserAction: (userId, action, details = {}) => {
        logger.info('User Action', {
            userId,
            action,
            details,
            timestamp: new Date().toISOString()
        });
    },

    logSystemEvent: (event, details = {}) => {
        logger.info('System Event', {
            event,
            details,
            timestamp: new Date().toISOString()
        });
    }
};

// Export default logger and specialized loggers
export const {
    logger,
    aiLogger,
    securityLogger,
    dbLogger,
    blockchainLogger,
    apiLogger,
    performanceLogger,
    logAPIRequest,
    logAIOperation,
    logSecurityEvent,
    logBlockchainOperation,
    logPerformance,
    logDatabaseQuery,
    logError,
    logUserAction,
    logSystemEvent
} = loggers;

export default logger;