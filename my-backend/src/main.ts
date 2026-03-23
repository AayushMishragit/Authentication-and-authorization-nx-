import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import { authRouter } from './app/routes/auth.route';
import mongoose from 'mongoose';
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();

const corsOptions = {
  origin: 'https://authentication-and-authorization-d29simmzh.vercel.app', // exact Vercel URL
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

app.use('/api', authRouter);

 const PORT = process.env.PORT ? Number(process.env.PORT) : 4000;

mongoose.connect(process.env.MONGO_URI as string)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error(err));

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
