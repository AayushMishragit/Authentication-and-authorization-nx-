import { Router } from "express";

import { register,login,Logout,deleteUser } from "../contollers/auth.controllers";
import userVerification from "../middlewares/auth.middlewares";

export const authRouter = Router();
//auth requests
authRouter.post('/register',register);
authRouter.post('/login',login);
authRouter.post('/logout',Logout);
authRouter.delete('/delete/:id',deleteUser);
authRouter.post('/',userVerification);
export default authRouter;


//product apis 

