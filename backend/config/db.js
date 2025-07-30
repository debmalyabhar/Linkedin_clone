import mongoose from "mongoose";

const connectDb=async ()=>{
  try{
    mongoose.connect(process.env.MONGODB_URL)
    console.log("Connected to MongoDB");
  } catch(error){
    console.log("db error");
  }
}

export default connectDb;