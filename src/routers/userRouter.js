import express from "express";
import { handleJoin, handleLogin } from "../controllers/userController";

export const userRouter = express.Router();

userRouter.get("/login", handleLogin);
userRouter.get("/join", handleJoin);
