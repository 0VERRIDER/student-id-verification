import mongoose from 'mongoose';
import env from '../env/env'
const connectDB = handler => async (req, res) => {
  if (mongoose.connections[0].readyState) {
    // Use current db connection
    return handler(req, res);
  }
  const mongodburl= `mongodb://${env.dbName}:${env.key}@${env.dbName}.mongo.cosmos.azure.com:${env.port}/?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@${env.dbName}@`;
  // Use new db connection
  await mongoose.connect(mongodburl, {
    
  });
  return handler(req, res);
};

export default connectDB;
