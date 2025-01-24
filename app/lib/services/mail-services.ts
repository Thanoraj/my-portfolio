"use server";

import { ReactElement } from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: No type definition
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendResendEmail = async (
  email: string,
  body: ReactElement,
  subject: string = "Message from your portfolio"
) => {
  console.log(email);

  await resend.emails.send({
    from: "Contact Form <onboarding@resend.dev>",
    to: "muthulingamthanoraj@gmail.com",
    reply_to: email,
    subject: subject,
    react: body,
  });
  console.log("sent email");
};
