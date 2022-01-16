import mongoose from 'mongoose';
import getConfig from 'next/config'
const { serverRuntimeConfig, publicRuntimeConfig } = getConfig()

const connectDB = handler => async (req, res) => {
  if (mongoose.connections[0].readyState) {
    // Use current db connection
    return handler(req, res);
  }
  const mongodburl= `mongodb://${serverRuntimeConfig.db_name}:${serverRuntimeConfig.db_key}@${serverRuntimeConfig.db_name}.mongo.cosmos.azure.com:${serverRuntimeConfig.db_port}/?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@${serverRuntimeConfig.db_name}@`;
  // Use new db connection
  await mongoose.connect(mongodburl, {
    
  });
  return handler(req, res);
};

export default connectDB;
