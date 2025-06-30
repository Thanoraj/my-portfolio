"use server";

import { ReactElement } from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: No type definition
import { Resend } from "resend";

// Initialize Resend only if API key is available
const getResendClient = () => {
  const apiKey = process.env.RESEND_API_KEY;
  
  if (!apiKey) {
    throw new Error(
      "RESEND_API_KEY is not configured. Please add it to your environment variables."
    );
  }
  
  return new Resend(apiKey);
};

export const sendResendEmail = async (
  email: string,
  body: ReactElement,
  subject: string = "Message from your portfolio"
) => {
  try {
    console.log("Attempting to send email to:", email);

    const resend = getResendClient();

    const result = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "muthulingamthanoraj@gmail.com",
      replyTo: email,
      subject: subject,
      react: body,
    });

    console.log("Email sent successfully:", result);
    return { success: true, data: result };
  } catch (error) {
    console.error("Failed to send email:", error);
    throw error;
  }
};
