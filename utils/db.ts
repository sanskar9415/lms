import mongoose from 'mongoose';
require('dotenv').config();

const dburl: string = process.env.DB_URI || '';

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(dburl);
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error:any) {
        console.error(`Error: ${error.message}`);
        setTimeout(connectDB, 5000);
    }
}

export default connectDB;