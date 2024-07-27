import { db } from "@/lib/db";

export async function getVerificationTokenByEmail(email: string) {
  try {
    const verificationToken = await db.verificationToken.findFirst({
      where: { email },
    });
  } catch (e) {
    return null;
  }
}

export async function getVerificationTokenByToken(token: string) {
  try {
    const verificationToken = await db.verificationToken.findUnique({
      where: { token },
    });
  } catch (e) {
    return null;
  }
}
