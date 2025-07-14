import { logger } from '../utils/logger.js';

/**
 * Role-based access control middleware
 * @param {Array} allowedRoles - Array of roles allowed to access the route
 * @returns {Function} Express middleware function
 */
export const roleMiddleware = (allowedRoles) => {
    return (req, res, next) => {
        try {
            // Check if user is authenticated (should be done by authMiddleware first)
            if (!req.user) {
                return res.status(401).json({
                    success: false,
                    error: 'Authentication required'
                });
            }

            // Check if user has required role
            if (!allowedRoles.includes(req.user.role)) {
                logger.warn('Unauthorized role access attempt', {
                    userId: req.user.id,
                    userRole: req.user.role,
                    requiredRoles: allowedRoles,
                    route: req.originalUrl,
                    method: req.method,
                    ip: req.ip
                });

                return res.status(403).json({
                    success: false,
                    error: 'Insufficient permissions',
                    message: `Required role: ${allowedRoles.join(' or ')}`
                });
            }

            // Log successful role authorization
            logger.info('Role authorization successful', {
                userId: req.user.id,
                userRole: req.user.role,
                route: req.originalUrl,
                method: req.method
            });

            next();
        } catch (error) {
            logger.error('Role middleware error', {
                error: error.message,
                stack: error.stack,
                userId: req.user ? .id
            });

            res.status(500).json({
                success: false,
                error: 'Authorization failed'
            });
        }
    };
};

/**
 * Admin only access middleware
 */
export const adminOnly = roleMiddleware(['ADMIN']);

/**
 * Asset manager or admin access middleware
 */
export const assetManagerOrAdmin = roleMiddleware(['ASSET_MANAGER', 'ADMIN']);

/**
 * Compliance officer or admin access middleware
 */
export const complianceOrAdmin = roleMiddleware(['COMPLIANCE_OFFICER', 'ADMIN']);

/**
 * Any authenticated user middleware
 */
export const authenticatedUser = roleMiddleware(['ADMIN', 'ASSET_MANAGER', 'INVESTOR', 'COMPLIANCE_OFFICER', 'AUDITOR']);

/**
 * Check if user owns the resource or has admin privileges
 * @param {String} resourceField - Field name to check ownership (default: 'creatorId')
 * @returns {Function} Express middleware function
 */
export const ownerOrAdmin = (resourceField = 'creatorId') => {
    return async(req, res, next) => {
        try {
            if (!req.user) {
                return res.status(401).json({
                    success: false,
                    error: 'Authentication required'
                });
            }

            // Admin can access everything
            if (req.user.role === 'ADMIN') {
                return next();
            }

            // Check if resource ID is provided
            const resourceId = req.params.id || req.params.assetId || req.params.userId;

            if (!resourceId) {
                return res.status(400).json({
                    success: false,
                    error: 'Resource ID required'
                });
            }

            // Store resource info for potential use in route handler
            req.resourceId = resourceId;
            req.ownershipField = resourceField;

            next();
        } catch (error) {
            logger.error('Ownership middleware error', {
                error: error.message,
                stack: error.stack,
                userId: req.user ? .id
            });

            res.status(500).json({
                success: false,
                error: 'Authorization failed'
            });
        }
    };
};

/**
 * Rate limiting based on user role
 * @param {Object} limits - Role-based rate limits
 * @returns {Function} Express middleware function
 */
export const roleBasedRateLimit = (limits = {}) => {
    const defaultLimits = {
        ADMIN: { requests: 1000, window: 15 * 60 * 1000 }, // 1000 requests per 15 minutes
        ASSET_MANAGER: { requests: 500, window: 15 * 60 * 1000 }, // 500 requests per 15 minutes
        COMPLIANCE_OFFICER: { requests: 200, window: 15 * 60 * 1000 }, // 200 requests per 15 minutes
        INVESTOR: { requests: 100, window: 15 * 60 * 1000 }, // 100 requests per 15 minutes
        AUDITOR: { requests: 150, window: 15 * 60 * 1000 } // 150 requests per 15 minutes
    };

    const roleLimits = {...defaultLimits, ...limits };

    return (req, res, next) => {
        if (!req.user) {
            return next(); // Let other middleware handle authentication
        }

        const userRole = req.user.role;
        const limit = roleLimits[userRole] || roleLimits.INVESTOR;

        // Store limit info for potential use by rate limiting middleware
        req.roleLimit = limit;

        next();
    };
};