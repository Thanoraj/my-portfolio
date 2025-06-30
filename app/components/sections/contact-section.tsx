"use client";

import React, { useState } from "react";
import PortfolioSection from "../portfolio-section";
import SectionTitle from "../section-title";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { sendEmail } from "@/app/actions/send-emails";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleSubmit = async (formData: FormData) => {
    setIsSubmitting(true);
    setMessage(null);

    try {
      const result = await sendEmail(formData);
      
      if (result?.success) {
        setMessage({ type: 'success', text: result.success });
        // Reset form
        const form = document.querySelector('form') as HTMLFormElement;
        form?.reset();
      } else if (result?.error) {
        setMessage({ type: 'error', text: result.error });
      } else {
        setMessage({ type: 'error', text: 'An unexpected error occurred. Please try again.' });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setMessage({ type: 'error', text: 'Failed to send message. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PortfolioSection id={"#contact"} className="w-[min(100%, 38rem)]  mx-4">
      <SectionTitle>Contact Me</SectionTitle>
      <motion.p
        className="-mt-6 text-gray-900 dark:text-gray-100"
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
        action={handleSubmit}>
        
        {message && (
          <div className={`mb-4 p-3 rounded-lg ${
            message.type === 'success' 
              ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
              : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
          }`}>
            {message.text}
          </div>
        )}

        <input
          name="senderEmail"
          type="email"
          className="my-4 border rounded-[10px] h-14 px-3 dark:bg-white dark:bg-opacity-10 disabled:opacity-50"
          placeholder="Email"
          required
          disabled={isSubmitting}
        />

        <textarea
          name="message"
          className="border rounded-[10px] my-4 h-52 px-3 py-3 dark:bg-white dark:bg-opacity-10 disabled:opacity-50"
          placeholder="Message"
          required
          disabled={isSubmitting}
        />

        <button 
          type="submit" 
          className="group primary-button disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send'}{" "}
          <FaPaperPlane className={`opacity-80 transition ${
            isSubmitting ? '' : 'group-hover:translate-x-1 group-hover:-translate-y-1'
          }`} />
        </button>
      </motion.form>
    </PortfolioSection>
  );
};

export default ContactSection;
