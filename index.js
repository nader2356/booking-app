import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";


const app = express();
dotenv.config();

app.listen(4000, () => {
    mongoose.connect(`mongodb://127.0.0.1:27017/booking_app`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`🚀 application ready at 4000`);
  });
