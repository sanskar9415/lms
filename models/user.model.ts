import mongoose , { Document, Model, Schema } from 'mongoose';
import bcryptjs from 'bcryptjs';

const emailRegexPattern: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export interface IUser extends Document {
    name: string;
    email: string;
    password: string;
    avatar: {
        public_id: string;
        url: string;
    };
    role: string;
    isVerified: boolean;
    courses: Array<{courseId: string}>;
    comparePassword: (password: string) => Promise<boolean>;
};

const userSchema: Schema<IUser> = new Schema({
    
})


const n1 = 20;
const n2 = 10;

function add(n1: number,n2: number): Number {
    return (n1 + n2);
}