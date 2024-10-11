import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  );
}

async function dbConnect(retries = 5) {
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  while (retries > 0) {
    try {
      await mongoose.connect(MONGODB_URI);
      console.log('Connected to MongoDB');
      return;
    } catch (error) {
      console.error('Failed to connect to MongoDB:', error);
      retries -= 1;
      console.log(`Retries left: ${retries}`);
      // Wait for 5 seconds before retrying
      await new Promise(resolve => setTimeout(resolve, 5000));
    }
  }

  throw new Error('Unable to connect to MongoDB');
}

export default dbConnect;
