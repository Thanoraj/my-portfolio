"use server";

import React from "react";
import { sendResendEmail } from "../lib/services/mail-services";
import ContactFormEmail from "../templates/contact-form-email";

const validString = (value: unknown): boolean => {
  return !(!value && typeof value !== "string");
};
export const sendEmail = async (formData: FormData) => {
  try {
    console.log("dfk");

    const email = formData.get("senderEmail");
    const message = formData.get("message");
    console.log("dds");

    if (!validString(email)) {
      return "Invalid email";
    }

    console.log("valid email");

    if (!validString(message)) {
      return "Invalid message";
    }

    console.log(message);

    const body = React.createElement(ContactFormEmail, {
      email: email as string,
      message: message as string,
    });

    console.log(body);

    await sendResendEmail(email as string, body);

    console.log("Email sent successfully");
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        message: error.message,
      };
    } else if (error && typeof error === "object" && "message" in error) {
      return {
        message: error.message,
      };
    } else {
      return {
        message: "Failed to send email",
      };
    }
  }
};
