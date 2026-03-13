import jwt from 'jsonwebtoken';
import {NextFunction, Request,Response} from 'express';
import * as dotenv from 'dotenv';
import { User } from '../models/user.model';


dotenv.config();
 async function userVerification(req: Request, res: Response, next: NextFunction): Promise<void> {

    const token = req.cookies?.token; // Extract the token from the request cookies

    if (!token) {
        res.json({ status: false });
        return;
    }

    const secret = process.env.JWT_SECRET;
    if (!secret) {
        res.json({ status: false });
        return;
    }
    // Verify the token using the secret key and extract the user information from it
    try {
        const decoded = jwt.verify(token, secret) as jwt.JwtPayload;
        const user = await User.findById(decoded.id).select('-password');
        if (user) {
            res.json({ username: user.fullName });
            return;
        } else {
            res.json({ status: false });
            return;
        }
    } catch (error) {
        res.json({ status: false });
        return;
    }

}

export default userVerification;


