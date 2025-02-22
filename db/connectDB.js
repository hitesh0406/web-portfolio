import mongoose from 'mongoose';

const connectDB = async (DATABASEURL) => {
  const DB_OPTIONS = {
    dbName: 'portfolio',
  };
  try {
    const data = await mongoose.connect(DATABASEURL, DB_OPTIONS);
    if (data) {
      console.log("Database Connection Successful");
    }
  } catch (error) {
    console.error("Database Connection Error:", error);
    process.exit(1);
  }
};

export default connectDB;
