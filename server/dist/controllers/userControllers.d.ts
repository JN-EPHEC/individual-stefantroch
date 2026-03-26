import type { Request, Response } from "express";
export declare const getAllUsers: (req: Request, res: Response) => Promise<void>;
export declare const postNewUser: (req: Request, res: Response) => Promise<void>;
export declare const updatedUser: (req: Request, res: Response) => Promise<void>;
export declare const deleteUser: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
//# sourceMappingURL=userControllers.d.ts.map