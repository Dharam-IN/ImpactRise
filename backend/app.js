import express from 'express';
import cookieParser from 'cookie-parser';

const app = express();


// CORS
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))


// MIDDLEWARES
app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}));
app.use(cookieParser())


export {app};
