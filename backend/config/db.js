/* ============================================
   DATABASE CONFIGURATION & CONNECTION (Mongoose)
   ============================================ */

import mongoose from 'mongoose';

/**
 * Connect to MongoDB Atlas
 */
export const connectDB = async () => {
  const rawUri = process.env.MONGODB_URI;
  const uri = rawUri ? rawUri.trim() : '';

  if (!uri || uri === '' || uri.includes('your_mongodb_atlas_connection_string_here')) {
    console.warn(
      '\n⚠️ [MongoDB] MONGODB_URI is not set or contains placeholder text in backend/.env.\n' +
      '   Please paste your MongoDB Atlas connection string in backend/.env to persist data.\n'
    );
    return false;
  }

  try {
    const conn = await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 8000,
    });

    console.log(`\n==================================================`);
    console.log(`✓ MongoDB Connected Successfully: ${conn.connection.host}`);
    console.log(`✓ Database: ${conn.connection.name || 'default'}`);
    console.log(`==================================================\n`);
    return true;
  } catch (error) {
    console.error(`\n❌ [MongoDB] Connection error: ${error.message}`);
    console.error('   Please verify MongoDB Atlas IP Whitelist (allow 0.0.0.0/0) and credentials.\n');
    return false;
  }
};

// Connection event listeners
mongoose.connection.on('disconnected', () => {
  console.warn('⚠️ [MongoDB] Connection lost. Attempting reconnect...');
});

mongoose.connection.on('error', (err) => {
  console.error(`❌ [MongoDB] Runtime error: ${err.message}`);
});
