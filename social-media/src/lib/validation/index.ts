import { z } from "zod";

export const SignUpValidation = z.object({
    name: z.string().min(2, { message: "Too short" }),
    username: z.string().min(2).max(50),
    email: z.string().email(),
    password: z.string().min(8, {message: "PassWord must be at least 8 characters long"}),
  });