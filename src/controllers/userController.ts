import { Request, RequestHandler, Response } from "express";
import User from "../models/User";
import bcrypt from "bcrypt";
import { failResponse, successResponse } from "../utils/response";

export const register: RequestHandler = async (req: Request, res: Response) => {
  const { firstName, lastName, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });
    successResponse(res, "User register successfully", user);
  } catch (error) {
    failResponse(res, "Error registering user.", error);
  }
};