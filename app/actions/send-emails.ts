"use server";

import React from "react";
import { sendResendEmail } from "../lib/services/mail-services";
import ContactFormEmail from "../templates/contact-form-email";

const validString = (value: unknown): boolean => {
  return !(!value && typeof value !== "string");
};

export const sendEmail = async (formData: FormData) => {
  try {
    console.log("Processing email send request");

    const email = formData.get("senderEmail");
    const message = formData.get("message");

    if (!validString(email)) {
      return {
        error: "Invalid email address provided"
      };
    }

    console.log("Email validation passed");

    if (!validString(message)) {
      return {
        error: "Invalid message content provided"
      };
    }

    console.log("Message validation passed");

    const body = React.createElement(ContactFormEmail, {
      email: email as string,
      message: message as string,
    });

    console.log("Email template created");

    await sendResendEmail(email as string, body);

    console.log("Email sent successfully");
    return {
      success: "Email sent successfully!"
    };
  } catch (error: unknown) {
    console.error("Error in sendEmail:", error);
    
    if (error instanceof Error) {
      // Handle specific error cases
      if (error.message.includes("RESEND_API_KEY")) {
        return {
          error: "Email service is not configured. Please contact the site administrator."
        };
      }
      
      return {
        error: `Failed to send email: ${error.message}`
      };
    } else if (error && typeof error === "object" && "message" in error) {
      return {
        error: `Failed to send email: ${error.message}`
      };
    } else {
      return {
        error: "An unexpected error occurred while sending the email. Please try again later."
      };
    }
  }
};
