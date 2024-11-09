import mongoose from "mongoose";

const connectDB = async () => {
  mongoose.connection.on("connected", () => {
    console.log("connected established");
  });
  await mongoose.connect(`${process.env.MONGODB_URI}/spotify-clone`);
};

export default connectDB;
