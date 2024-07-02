import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email is required!",
  }),
  password: z.string().min(1, {
    message: "Password is required!",
  }),
});

export const RegisterSchema = z.object({
  email: z.string().email({
    message: "Email is required!",
  }),
  password: z.string().min(7, {
    message: "Password must be longer than 6 characters!",
  }),
  name: z.string().min(1, {
    message: "Name is required!",
  }),
});
