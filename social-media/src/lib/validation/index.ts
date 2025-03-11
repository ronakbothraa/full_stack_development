import { z } from "zod";

export const SignUpValidation = z.object({
  name: z.string().min(2, { message: "Too short" }),
  username: z.string().min(2).max(50),
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "PassWord must be at least 8 characters long" }),
});


export const SignInValidation = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "PassWord must be at least 8 characters long" }),
});


export const PostValidation = z.object({
  caption: z.string().min(2, { message: "Caption must be at least 2 characters" }).max(2200),
  file: z.custom<File[]>(),
  location: z.string().min(2).max(100),
  tags: z.string(),
});