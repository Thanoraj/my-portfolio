"use client";

import React from "react";
import PortfolioSection from "../portfolio-section";
import SectionTitle from "../section-title";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { sendEmail } from "@/app/actions/send-emails";

const ContactSection = () => {
  return (
    <PortfolioSection id={"#contact"} className="w-[min(100%, 38rem)]  mx-4">
      <SectionTitle>Contact Me</SectionTitle>
      <motion.p
        className="-mt-6"
        initial={{
          y: 100,
          opacity: 0,
        }}
        whileInView={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
        viewport={{ once: true }}>
        Contact me directly at{" "}
        <a className="underline" href="mailto:muthulingamthanoraj@gmail.com">
          muthulingamthanoraj@gmail.com
        </a>{" "}
        or through this form.
      </motion.p>

      <motion.form
        className="flex flex-col w-[100%] mt-10"
        initial={{
          y: 100,
          opacity: 0,
        }}
        whileInView={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
        viewport={{ once: true }}
        action={async (formData) => {
          await sendEmail(formData);
        }}>
        <input
          name="senderEmail"
          type="email"
          className="my-4 border rounded-[10px] h-14 px-3"
          placeholder="Email"
          required
        />

        <textarea
          name="message"
          className="border rounded-[10px] my-4 h-52 px-3 py-3"
          placeholder="Message"
          required
        />

        <button type="submit" className="group primary-button">
          Send{" "}
          <FaPaperPlane className="opacity-80 group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
        </button>
      </motion.form>
    </PortfolioSection>
  );
};

export default ContactSection;
