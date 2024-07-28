"use server";

import * as z from "zod";

import { signIn } from "@/auth";
import { LoginSchema } from "@/schemas";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { AuthError } from "next-auth";
import { getUserByEmail } from "@/data/user";
import { generateVerificationToken } from "@/lib/tokens";
import { sendVerificationEmail } from "@/lib/mail";

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { email, password } = validatedFields.data;

  const existingUser = await getUserByEmail(email);

  if (!existingUser || !existingUser.email) {
    return { error: "User does not exist!" };
  }
  if (!existingUser.password) {
    return { error: "Please login through the provider you signed up with!" };
  }

  if (!existingUser.emailVerified) {
    const verificationToken = await generateVerificationToken(
      existingUser.email
    );
    const verificationEmailResult = await sendVerificationEmail(
      verificationToken.email,
      verificationToken.token
    );
    if (verificationEmailResult.success)
      return { success: verificationEmailResult.success };
    if (verificationEmailResult.error)
      return { error: verificationEmailResult.error };
  }

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid credentials!" };
        default:
          return { error: "Something went wrong!" };
      }
    }
    throw error;
  }
};
