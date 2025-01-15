"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { introData } from "@/app/lib/data";

const IntroSection = () => {
  return (
    <section className="m-20 max-w-[50rem] text-center justify-center">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}>
            <Image
              src={
                "https://images.unsplash.com/photo-1736148662656-83a390775f32"
              }
              alt={"Thanoraj Portrait"}
              width={192}
              height={192}
              className="h-40 w-40 object-cover rounded-full border-2 border-white shadow-xl"></Image>
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
      <motion.div
        className="font-medium text-2xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}>
        <p className="font-bold text-3xl my-8">{introData.p1}</p>
        <p>
          {introData.p2}
          <span className="font-bold">{introData.p3}</span>
          {introData.p4}
          <span className="font-bold">{introData.p5}</span>
          {introData.p6}
          <span className="italic font-bold">{introData.p7}</span>
        </p>
      </motion.div>
    </section>
  );
};

export default IntroSection;
