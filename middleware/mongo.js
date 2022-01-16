import mongoose from 'mongoose';
import getConfig from 'next/config'
const { serverRuntimeConfig, publicRuntimeConfig } = getConfig()

const connectDB = handler => async (req, res) => {
  if (mongoose.connections[0].readyState) {
    // Use current db connection
    return handler(req, res);
  }
  const mongodburl= `mongodb://student-validator-frt:uWCdAD54944i24qSgg8FcxBxSRTvcK06Em1TI2XckcwbBUepsFLi2A90fzXWVGFZw8A5qvlSqZusOsszwGJWOA==@student-validator-frt.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@student-validator-frt@`;
  // Use new db connection
  await mongoose.connect(mongodburl, {
    
  });
  return handler(req, res);
};

export default connectDB;
