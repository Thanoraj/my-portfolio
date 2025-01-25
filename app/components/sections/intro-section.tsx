"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import PortfolioSection from "../portfolio-section";

type IntroSectionProps = {
  myData: Record<string, unknown>;
  data: Record<string, string>;
};
const IntroSection = ({ myData, data }: IntroSectionProps) => {
  return (
    <PortfolioSection id="#home">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}>
            <Image
              src={myData.profile_image as string}
              alt={"Thanoraj Portrait"}
              width={192}
              height={192}
              className="h-40 w-40 object-cover rounded-full shadow-xl"></Image>
          </motion.div>
          <motion.span
            className="absolute text-4xl bottom-2 right-2"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}>
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="font-medium text-2xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}>
        <p className="font-bold text-3xl my-8">{data.p1}</p>
        <p>
          {data.p2}
          <span className="font-bold">{data.p3}</span>
          {data.p4}
          <span className="font-bold">{data.p5}</span>
          {data.p6}
          <span className="font-bold">{data.p7}</span>
        </p>
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex flex-col sm:flex-row items-center gap-5 justify-center mt-5">
        <Link href={"#contact"} className="group primary-button">
          Contact Me{" "}
          <BsArrowRight className="opacity-80 group-hover:translate-x-1 transition" />
        </Link>
        <a
          href={(myData as Record<string, Record<string, string>>).cv.python}
          download={true}
          target="_blank"
          rel="noopener noreferrer"
          className="group px-7 py-3 secondary-button">
          Download CV
          <HiDownload className="opacity-80 group-hover:translate-x-1 transition" />
        </a>
        <a
          href="https://www.linkedin.com/in/muthulingamthanoraj/"
          target="_blank"
          rel="noopener noreferrer"
          className="secondary-button !p-4">
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/Thanoraj"
          target="_blank"
          rel="noopener noreferrer"
          className="secondary-button !p-4">
          <BsGithub />
        </a>
      </motion.div>
    </PortfolioSection>
  );
};

export default IntroSection;
