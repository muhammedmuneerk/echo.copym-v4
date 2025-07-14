import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { logger } from '../utils/logger.js';

// Create uploads directory if it doesn't exist
const uploadsDir = path.join(process.cwd(), 'uploads');
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true });
}

// Configure storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        let uploadPath = uploadsDir;

        // Create subdirectories based on file type
        if (file.mimetype.startsWith('image/')) {
            uploadPath = path.join(uploadsDir, 'images');
        } else if (file.mimetype === 'application/pdf') {
            uploadPath = path.join(uploadsDir, 'documents');
        } else {
            uploadPath = path.join(uploadsDir, 'files');
        }

        // Create directory if it doesn't exist
        if (!fs.existsSync(uploadPath)) {
            fs.mkdirSync(uploadPath, { recursive: true });
        }

        cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
        // Generate unique filename
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const extension = path.extname(file.originalname);
        const baseName = path.basename(file.originalname, extension);

        cb(null, `${baseName}-${uniqueSuffix}${extension}`);
    }
});

// File filter function
const fileFilter = (req, file, cb) => {
    // Allowed file types
    const allowedTypes = {
        'image/jpeg': '.jpg',
        'image/jpg': '.jpg',
        'image/png': '.png',
        'image/gif': '.gif',
        'image/webp': '.webp',
        'application/pdf': '.pdf',
        'application/msword': '.doc',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document': '.docx',
        'application/vnd.ms-excel': '.xls',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': '.xlsx',
        'text/plain': '.txt',
        'text/csv': '.csv'
    };

    if (allowedTypes[file.mimetype]) {
        cb(null, true);
    } else {
        logger.warn('File upload rejected - invalid type', {
            originalName: file.originalname,
            mimeType: file.mimetype,
            userId: req.user ? .id
        });

        cb(new Error(`File type not allowed. Allowed types: ${Object.values(allowedTypes).join(', ')}`), false);
    }
};

// Configure multer
const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: {
        fileSize: 10 * 1024 * 1024, // 10MB limit
        files: 10 // Maximum 10 files
    }
});

// Middleware for single file upload
export const uploadSingle = (fieldName = 'file') => {
    return (req, res, next) => {
        const singleUpload = upload.single(fieldName);

        singleUpload(req, res, (err) => {
            if (err) {
                logger.error('Single file upload error', {
                    error: err.message,
                    fieldName,
                    userId: req.user ? .id
                });

                if (err instanceof multer.MulterError) {
                    if (err.code === 'LIMIT_FILE_SIZE') {
                        return res.status(400).json({
                            success: false,
                            error: 'File too large. Maximum size is 10MB.'
                        });
                    }
                    if (err.code === 'LIMIT_UNEXPECTED_FILE') {
                        return res.status(400).json({
                            success: false,
                            error: 'Unexpected field name for file upload.'
                        });
                    }
                }

                return res.status(400).json({
                    success: false,
                    error: err.message
                });
            }

            // Log successful upload
            if (req.file) {
                logger.info('File uploaded successfully', {
                    originalName: req.file.originalname,
                    filename: req.file.filename,
                    size: req.file.size,
                    mimetype: req.file.mimetype,
                    userId: req.user ? .id
                });
            }

            next();
        });
    };
};

// Middleware for multiple file upload
export const uploadMultiple = (fieldName = 'files', maxCount = 5) => {
    return (req, res, next) => {
        const multipleUpload = upload.array(fieldName, maxCount);

        multipleUpload(req, res, (err) => {
            if (err) {
                logger.error('Multiple file upload error', {
                    error: err.message,
                    fieldName,
                    maxCount,
                    userId: req.user ? .id
                });

                if (err instanceof multer.MulterError) {
                    if (err.code === 'LIMIT_FILE_SIZE') {
                        return res.status(400).json({
                            success: false,
                            error: 'One or more files are too large. Maximum size is 10MB per file.'
                        });
                    }
                    if (err.code === 'LIMIT_FILE_COUNT') {
                        return res.status(400).json({
                            success: false,
                            error: `Too many files. Maximum allowed is ${maxCount}.`
                        });
                    }
                    if (err.code === 'LIMIT_UNEXPECTED_FILE') {
                        return res.status(400).json({
                            success: false,
                            error: 'Unexpected field name for file upload.'
                        });
                    }
                }

                return res.status(400).json({
                    success: false,
                    error: err.message
                });
            }

            // Log successful uploads
            if (req.files && req.files.length > 0) {
                logger.info('Files uploaded successfully', {
                    count: req.files.length,
                    files: req.files.map(file => ({
                        originalName: file.originalname,
                        filename: file.filename,
                        size: file.size,
                        mimetype: file.mimetype
                    })),
                    userId: req.user ? .id
                });
            }

            next();
        });
    };
};

// Middleware for mixed file upload (different field names)
export const uploadFields = (fields) => {
    return (req, res, next) => {
        const fieldsUpload = upload.fields(fields);

        fieldsUpload(req, res, (err) => {
            if (err) {
                logger.error('Fields file upload error', {
                    error: err.message,
                    fields,
                    userId: req.user ? .id
                });

                if (err instanceof multer.MulterError) {
                    if (err.code === 'LIMIT_FILE_SIZE') {
                        return res.status(400).json({
                            success: false,
                            error: 'One or more files are too large. Maximum size is 10MB per file.'
                        });
                    }
                    if (err.code === 'LIMIT_FILE_COUNT') {
                        return res.status(400).json({
                            success: false,
                            error: 'Too many files uploaded.'
                        });
                    }
                    if (err.code === 'LIMIT_UNEXPECTED_FILE') {
                        return res.status(400).json({
                            success: false,
                            error: 'Unexpected field name for file upload.'
                        });
                    }
                }

                return res.status(400).json({
                    success: false,
                    error: err.message
                });
            }

            // Log successful uploads
            if (req.files) {
                const totalFiles = Object.values(req.files).reduce((sum, files) => sum + files.length, 0);

                logger.info('Mixed files uploaded successfully', {
                    totalFiles,
                    fieldCounts: Object.entries(req.files).map(([field, files]) => ({
                        field,
                        count: files.length
                    })),
                    userId: req.user ? .id
                });
            }

            next();
        });
    };
};

// Asset upload middleware (for tokenization)
export const uploadAssetFiles = uploadFields([
    { name: 'documents', maxCount: 5 },
    { name: 'images', maxCount: 10 }
]);

// Profile picture upload
export const uploadProfilePicture = uploadSingle('avatar');

// Document upload for compliance
export const uploadComplianceDocuments = uploadMultiple('documents', 3);

// Cleanup function to remove uploaded files
export const cleanupFiles = (files) => {
    if (!files) return;

    const filesToClean = Array.isArray(files) ? files : [files];

    filesToClean.forEach(file => {
        try {
            if (file.path && fs.existsSync(file.path)) {
                fs.unlinkSync(file.path);
                logger.info('File cleaned up', { path: file.path });
            }
        } catch (error) {
            logger.error('File cleanup error', {
                error: error.message,
                path: file.path
            });
        }
    });
};

// Error handler for upload middleware
export const uploadErrorHandler = (err, req, res, next) => {
    if (err instanceof multer.MulterError) {
        logger.error('Multer error', {
            error: err.message,
            code: err.code,
            userId: req.user ? .id
        });

        switch (err.code) {
            case 'LIMIT_FILE_SIZE':
                return res.status(400).json({
                    success: false,
                    error: 'File too large'
                });
            case 'LIMIT_FILE_COUNT':
                return res.status(400).json({
                    success: false,
                    error: 'Too many files'
                });
            case 'LIMIT_UNEXPECTED_FILE':
                return res.status(400).json({
                    success: false,
                    error: 'Unexpected file field'
                });
            default:
                return res.status(400).json({
                    success: false,
                    error: 'File upload error'
                });
        }
    }

    next(err);
};

export { upload };