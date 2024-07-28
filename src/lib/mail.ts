import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function sendVerificationEmail(email: string, token: string) {
  try {
    const confirmLink = `${process.env.NEXTAUTH_URL}/auth/verify-email?token=${token}`;
    const info = await transporter.sendMail({
      from: `"${process.env.EMAIL_FROM}" <${process.env.EMAIL_USER}>`, // sender address
      to: email,
      subject: "Confirm your email address",
      html: `<p>Thanks for registering to Body & Soul NZ.\n\nPlease confirm your email address by clicking <a href=${confirmLink}>this link</a>.</p>`,
    });
    return { success: "Confirmation email sent!" };
  } catch (e) {
    console.log(e);
    return {
      error:
        "There may have been an issue sending the verification email. Please check your inbox and try again!",
    };
  }
}
