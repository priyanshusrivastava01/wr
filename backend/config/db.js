/* ============================================
   DATABASE CONFIGURATION & CONNECTION (Mongoose)
   ============================================ */

import mongoose from 'mongoose';

let isConnecting = false;
let reconnectTimer = null;

/**
 * Returns human-readable state of MongoDB connection
 */
export const getDbState = () => {
  const states = {
    0: 'disconnected',
    1: 'connected',
    2: 'connecting',
    3: 'disconnecting',
    99: 'uninitialized',
  };
  return states[mongoose.connection.readyState] || 'unknown';
};

/**
 * Connect to MongoDB Atlas with robust logging and auto-retry
 */
export const connectDB = async () => {
  const rawUri = process.env.MONGODB_URI;
  const uri = rawUri ? rawUri.trim() : '';

  if (!uri || uri === '' || uri.includes('your_mongodb_atlas_connection_string_here')) {
    console.error(
      '\n❌ [MongoDB Error] MONGODB_URI environment variable is missing or empty.\n' +
      '   Please set MONGODB_URI in backend/.env or your deployment environment variables.\n'
    );
    return false;
  }

  if (mongoose.connection.readyState === 1) {
    return true;
  }

  if (isConnecting) {
    return false;
  }

  isConnecting = true;
  console.log(`[MongoDB] Connection starting to MongoDB Atlas...`);

  try {
    const conn = await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 10000,
      connectTimeoutMS: 10000,
      socketTimeoutMS: 45000,
      maxPoolSize: 10,
    });

    isConnecting = false;
    if (reconnectTimer) {
      clearTimeout(reconnectTimer);
      reconnectTimer = null;
    }

    console.log(`\n==================================================`);
    console.log(`✓ MongoDB Connected Successfully!`);
    console.log(`✓ Host: ${conn.connection.host}`);
    console.log(`✓ Database: ${conn.connection.name || 'test'}`);
    console.log(`✓ ReadyState: ${getDbState()} (code 1)`);
    console.log(`==================================================\n`);
    return true;
  } catch (error) {
    isConnecting = false;
    console.error(`\n❌ [MongoDB Connection Failed] ${error.name}: ${error.message}`);
    
    if (error.message.includes('bad auth') || error.message.includes('Authentication failed')) {
      console.error('   👉 Cause: Incorrect MongoDB username or password in MONGODB_URI.');
    } else if (error.message.includes('querySrv') || error.message.includes('ENOTFOUND') || error.message.includes('ETIMEDOUT') || error.message.includes('Could not connect to any servers')) {
      console.error('   👉 Cause: Network/DNS timeout. Please ensure MongoDB Atlas Network Access allows 0.0.0.0/0 (Access from Anywhere).');
    }

    // Schedule auto-retry in 5 seconds
    if (!reconnectTimer) {
      reconnectTimer = setTimeout(() => {
        reconnectTimer = null;
        console.log('[MongoDB] Retrying connection to MongoDB Atlas...');
        connectDB();
      }, 5000);
    }
    return false;
  }
};

// Global Mongoose event listeners
mongoose.connection.on('connected', () => {
  console.log(`[MongoDB Event] Connection established (${getDbState()})`);
});

mongoose.connection.on('disconnected', () => {
  console.warn(`⚠️ [MongoDB Event] Connection lost (${getDbState()}). Attempting reconnect...`);
  if (!reconnectTimer) {
    reconnectTimer = setTimeout(() => {
      reconnectTimer = null;
      connectDB();
    }, 5000);
  }
});

mongoose.connection.on('error', (err) => {
  console.error(`❌ [MongoDB Runtime Error]: ${err.message}`);
});
