import mongoose from "mongoose";

let connected: boolean = false;
const connectDB = async () => {
    mongoose.set("strictQuery", true);
    if (connected) {
        console.log("MongoDB is already connected");
        return;
    }
    try {
        await mongoose.connect(process.env.MONGO_DB_URI as string);
        connected = true;
        console.log("MongoDB connected");
    }
    catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1);
    }
}
export default connectDB;