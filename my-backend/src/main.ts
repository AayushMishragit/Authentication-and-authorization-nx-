import express from 'express';
import cors from 'cors';
import * as  dotenv from 'dotenv';
import { authRouter } from './app/routes/auth.route';
import mongoose from 'mongoose';
import cookieParser from "cookie-parser";
//import Router from "./app/routes/products.route";

dotenv.config();// this will load the .env file and make the variables available in process.env
const host = process.env.HOST ?? 'localhost';
//const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();





//middlewares = > inke madad se hum apne request aur response ko modify kar sakte hai
//ye ek function hota hai jo request aur response ke beech me execute hota hai
app.use(cors({
  origin: [
    'http://localhost:4200',
    'https://authentication-and-authorization-nx.vercel.app'
  ],
  credentials: true
}));
//this will allow all origins to access our api

app.use(express.json());// this will allow us to parse json data in the request body
app.use(cookieParser());// this will allow us to parse cookies in the request


//routes
app.use('/my-backend/routes/auth', authRouter);// this will use the auth router for all the routes starting with /auth

//database connection

const PORT = process.env.PORT ? Number(process.env.PORT) : 4000;
mongoose.connect( process.env.MONGO_URI as string )
  .then(() => console.log("MongoDB is  connected successfully"))
  .catch((err) => console.error(err));

  app.listen(PORT, host, () => {
    console.log(`server is running at  🚀  http://${host}:${PORT}`);
});