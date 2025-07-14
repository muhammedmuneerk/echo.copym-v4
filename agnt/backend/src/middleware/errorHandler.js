import { logger } from '../utils/logger.js';

export const errorHandler = (err, req, res, next) => {
    let error = {...err };
    error.message = err.message;

    // Log error
    logger.error('Error Handler', {
        error: error.message,
        stack: err.stack,
        url: req.originalUrl,
        method: req.method,
        ip: req.ip,
        userAgent: req.get('User-Agent'),
        userId: req.user ? .id || 'anonymous'
    });

    // Mongoose bad ObjectId
    if (err.name === 'CastError') {
        const message = 'Resource not found';
        error = { message, statusCode: 404 };
    }

    // Mongoose duplicate key
    if (err.code === 11000) {
        const message = 'Duplicate field value entered';
        error = { message, statusCode: 400 };
    }

    // Mongoose validation error
    if (err.name === 'ValidationError') {
        const message = Object.values(err.errors).map(val => val.message);
        error = { message, statusCode: 400 };
    }

    // Prisma errors
    if (err.code === 'P2002') {
        const message = 'Duplicate field value entered';
        error = { message, statusCode: 400 };
    }

    if (err.code === 'P2025') {
        const message = 'Record not found';
        error = { message, statusCode: 404 };
    }

    // JWT errors
    if (err.name === 'JsonWebTokenError') {
        const message = 'Not authorized, token failed';
        error = { message, statusCode: 401 };
    }

    if (err.name === 'TokenExpiredError') {
        const message = 'Not authorized, token expired';
        error = { message, statusCode: 401 };
    }

    // Default to 500 server error
    const statusCode = error.statusCode || 500;
    const message = error.message || 'Server Error';

    // Don't leak error details in production
    const response = {
        success: false,
        error: message
    };

    // Add stack trace in development
    if (process.env.NODE_ENV === 'development') {
        response.stack = err.stack;
    }

    // Add error code if present
    if (err.code) {
        response.code = err.code;
    }

    res.status(statusCode).json(response);
};

// 404 handler
export const notFound = (req, res, next) => {
    const error = new Error(`Not found - ${req.originalUrl}`);
    res.status(404);
    next(error);
};

// Async error handler
export const asyncHandler = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
};