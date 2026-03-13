import { Schema, model } from 'mongoose';
//import bcrypt from 'bcrypt';


// --- 1. CORE USER SCHEMA (Authentication) ---
const userSchema = new Schema({
  email: {
    type: String,
    required: [true, 'Your email address is required'],
    unique: true,
    lowercase: true,
    trim: true,
  },
  fullName: { // UI shows "Full Name" and "Admin Full Name"
    type: String,
    required: [true, 'Full name is required'],
    trim: true,
  },
  password: {
    type: String,
    required: [true, 'Your password is required'],
    minlength: [6, 'Password must be at least 6 characters'],
    hashed:true
    
  },
  
  createdAt: { type: Date, default: () => new Date() },
});





export const User = model('User', userSchema);
