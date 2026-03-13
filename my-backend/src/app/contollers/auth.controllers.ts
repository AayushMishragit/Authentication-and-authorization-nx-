import { Request, Response, NextFunction } from "express";
import bcrypt from "bcryptjs";
import { User } from "../models/user.model";
import { generateToken } from "../utils/secret-token";
//import mongoose from "mongoose";

// --- USER REGISTRATION CONTROLLER ---
export const register = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { email, fullName, password } = req.body;

    // 1. Validate required fields
    
    if (!fullName || !email || !password ) {
      res.status(400).json({ message: "All fields are required" });
      return;
    }

    // 2. Check if user already exists
    const existed = await User.findOne({ email });
    if (existed) {
      res.status(409).json({ message: "User already exists" });
      return;
    }

    // 3. Hash password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // 4. Create new user
    const newUser = await User.create({
      email,
      fullName,
      password: hashedPassword,
      createdAt: new Date()
    });

    // 5. Generate JWT token
    const token = generateToken(newUser._id.toString());

    // 6. Set cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    // 7. Send single success response
    res.status(201).json({
      message: "User registered successfully",
      username: newUser.fullName,
      token
    });
  } catch (error) {
    next(error);
  }
};

// --- USER LOGIN CONTROLLER ---
export const login = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { email, password } = req.body;

    // 1. Validate input
    if (!email || !password) {
      res.status(400).json({ message: "All fields are required" });
      return;
    }

    // 2. Find user
    const user = await User.findOne({ email });
    if (!user) {
      res.status(400).json({ message: "User does not exist" });
      return;
    }

    // 3. Compare password
    const validated = await bcrypt.compare(password, user.password);
    if (!validated) {
      res.status(401).json({ message: "Incorrect email or password" });
      return;
    }

    // 4. Generate token
    const token = generateToken(user._id.toString());

    // 5. Send response
    res.status(200).json({
      message: "Logged in successfully",
      token,
      username: user.fullName
    });
  } catch (error) {
    next(error);
  }
};

// --- USER LOGOUT CONTROLLER ---
export const Logout = (req: Request, res: Response): void => {
    res.clearCookie("token", {
        httpOnly:true,
        secure:true,
        sameSite:"strict",
    });
    res.json({ status: true, message: "Logged out successfully" });
};

//--USER DELETE CONTROLLER--
export const deleteUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try{
      const { id } = req.params;
      console.log("Delete request for ID:", id);
        const user = await User.findByIdAndDelete(req.params.id);
        if(user){
            res.status(200).json({ message: "User deleted successfully " });
            return;
        }else{
            res.status(404).json({ message: "User not found" });
            return;
        }

    }catch(error){
      res.status(400).json({ message: "Error occurred while deleting user" });
       
    }
};