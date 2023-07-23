import { Request } from "express";

export default interface UserRequest extends Request{
    user: {
        role: string;
        id: string;
    }
}