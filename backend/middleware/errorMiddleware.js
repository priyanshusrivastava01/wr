/* ============================================
   CENTRALIZED ERROR HANDLING MIDDLEWARE
   ============================================ */

/**
 * 404 Not Found handler for undefined API routes
 */
export const notFound = (req, res, next) => {
  const error = new Error(`Resource not found: ${req.originalUrl}`);
  res.status(404);
  next(error);
};

/**
 * Central Express Error Handler
 */
export const errorHandler = (err, req, res, next) => {
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  let message = err.message || 'An unexpected server error occurred.';

  // Handle Mongoose Bad ObjectId (CastError)
  if (err.name === 'CastError' && err.kind === 'ObjectId') {
    statusCode = 404;
    message = 'Requested resource was not found.';
  }

  // Handle Mongoose Validation Errors
  if (err.name === 'ValidationError') {
    statusCode = 400;
    const errors = Object.values(err.errors).map((e) => e.message);
    message = errors.length > 0 ? errors[0] : 'Validation failed. Please check your submitted details.';
  }

  // Handle Mongoose Duplicate Key Error
  if (err.code === 11000) {
    statusCode = 400;
    message = 'Duplicate field value entered.';
  }

  // Handle Bad JSON parsing syntax
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    statusCode = 400;
    message = 'Malformed JSON payload in request.';
  }

  // Log error during development
  if (process.env.NODE_ENV !== 'production') {
    console.error(`❌ [Error ${statusCode}] ${req.method} ${req.originalUrl} — ${err.message}`);
  }

  res.status(statusCode).json({
    success: false,
    message: message,
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
  });
};
