import express from 'express';
export const app = express();
import cors from 'cors';
import cookieParser from 'cookie-parser';
require('dotenv').config();

//body parser
app.use(express.json({limit: '50mb'}));

//cookie parser
app.use(cookieParser());

//cors
app.use(cors({
    origin: process.env.ORIGIN,
    credentials: true,
}))

//testing api
app.get('/', (req, res) => {
    res.send('API is running...');
});


