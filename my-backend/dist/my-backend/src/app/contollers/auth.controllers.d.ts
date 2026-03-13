import { Request, Response, NextFunction } from "express";
export declare const register: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const login: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const Logout: (req: Request, res: Response) => void;
export declare const deleteUser: (req: Request, res: Response, next: NextFunction) => Promise<void>;
//# sourceMappingURL=auth.controllers.d.ts.map