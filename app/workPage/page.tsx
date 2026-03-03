"use client";

import React from "react";
import Image from "next/image";
import Button from "@/my-components/button";
import { motion } from "framer-motion";
import About from "../aboutPage/page";

export default function Work() {
  const card = [
    {
      id: 1,
      image: "/assets/elevate.png",
      title: "LOFTLOOM",
      description: "UI Design, UX, Wireframe",
      buttonText: "View Project",
    },
    {
      id: 2,
      image: "/assets/trending.png",
      title: "IMUSIC",
      description: "Research, UX, UI Design",
      buttonText: "View Project",
    },
    {
      id: 3,
      image: "/assets/decision.png",
      title: "TECHNIS",
      description: "UX, UI Design, Development",
      buttonText: "View Project",
    },
  ];

  return (
    <section className="py-32 overflow-hidden">
      <div className="space-y-32">
        {card.map((item, index) => {
          const reverse = index === 0 || index === 2;

          return (
            <div
              key={item.id}
              className={`flex flex-col lg:flex-row items-center gap-16 ${
                reverse ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* image  */}
              <motion.div
                initial={{
                  x: reverse ? 80 : -80,
                  opacity: 0,
                  scale: 0.95,
                  rotate: reverse ? 4 : -4,
                }}
                whileInView={{
                  x: 0,
                  opacity: 1,
                  scale: 1,
                  rotate: 0,
                }}
                transition={{
                  duration: 1.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true, amount: 0.4 }}
                className="relative w-full lg:w-1/2 h-130"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="rounded-4xl object-cover"
                />
              </motion.div>

              {/* text and description*/}
              <motion.div
                initial={{
                  x: reverse ? -80 : 80,
                  opacity: 0,
                  rotate: reverse ? -3 : 3,
                }}
                whileInView={{
                  x: 0,
                  opacity: 1,
                  rotate: 0,
                }}
                transition={{
                  duration: 1.2,
                  delay: 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true, amount: 0.4 }}
                className="lg:w-1/2"
              >
                <h2 className="text-5xl font-light tracking-widest">
                  {item.title}
                </h2>

                <p className="mt-6 text-gray-600 text-lg">{item.description}</p>
                {/* button */}
                <Button
                  content={item.buttonText}
                  cstyle="mt-10 px-6 py-3 w-fit"
                />
              </motion.div>
            </div>
          );
        })}
      </div>
      {/* next page */}
      <About />
    </section>
  );
}
