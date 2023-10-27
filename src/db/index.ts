import mongoose from "mongoose";

// Create a function to establish the database connection
export default async function connectDB() {
  await mongoose
    .connect(process.env.MONGO_URI as string)
    .then(() => console.log("Connected to MongoDB "))
    .catch((error) => console.error("Error connecting to MongoDB:", error));
}
