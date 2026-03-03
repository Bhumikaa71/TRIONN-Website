"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import MovingText from "../movingText/page";

export default function Profile() {
  const profileCard = [
    {
      id: 1,
      name: "Malte Kramer",
      role: "Founder & CEO of Luxury Presence",
      imgSrc: "/assets/men1.png",
      showButton: true,
    },
    {
      id: 2,
      name: "Doung petrie",
      role: "Founder & CEO of Fast Resume",
      imgSrc: "/assets/man2.png",
      showButton: true,
    },
    {
      id: 3,
      name: "Zoltan Csonka",
      role: "Founder & CEO of Ventigence",
      imgSrc: "/assets/man3.png",
      showButton: true,
    },
    {
      id: 4,
      quote:
        "We had a fantastic experience partnering with Trionn for our website. The communication and collaboration were excellent, resulting in a top-notch design and functionality. We highly recommend Trionn to businesses in the service sector or anyone in need of a web design & development solution.",
      name: "Albert Mizuno",
      role: "Founder of The Mizuno",
      imgSrc: "/assets/man4.png",
      showButton: false,
    },
    {
      id: 5,
      quote:
        "We had a fantastic experience partnering with Trionn for our website. The communication and collaboration were excellent, resulting in a top-notch design and functionality. We highly recommend Trionn to businesses in the service sector or anyone in need of a web design & development solution.",
      name: "Albert Mizuno",
      role: "Founder of The Mizuno",
      imgSrc: "/assets/man5.png",
      showButton: false,
    },
  ];

  const carouselRef = useRef(null);

  return (
    <section className="overflow-hidden py-10 px-6">
      <motion.div
        ref={carouselRef}
        className="flex space-x-10 cursor-grab"
        drag="x"
        dragConstraints={carouselRef}
        whileTap={{ cursor: "grabbing" }}
      >
        {profileCard.map((item) => (
          <motion.div
            key={item.id}
            className="shrink-0 bg-accent rounded-xl p-10 w-110 flex flex-col items-center text-center border border-gray-700 shadow-md hover:shadow-xl transition-shadow duration-300 hover:border-cyan-600"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            {item.quote && (
              <p className="mb-10 relative  italic text-base leading-relaxed before:absolute before:-top-8 before:left-1/2 before:-translate-x-1/2 before:text-8xl before:text-blue-600 before:font-serif before:content-['“']">
                {item.quote}
              </p>
            )}

            <Image
              src={item.imgSrc}
              alt={item.name}
              width={140}
              height={140}
              className="rounded-full object-cover mb-6"
            />

            <h3 className="text-2xl font-semibold mb-1">{item.name}</h3>
            <p className="text-sm mb-8">{item.role}</p>

            {item.showButton && (
              <button className="bg-red-600 hover:bg-red-700 rounded-full px-8 py-3 text-sm font-semibold  shadow-md hover:shadow-lg transition duration-300 cursor-pointer">
                Watch now! ►
              </button>
            )}
          </motion.div>
        ))}
      </motion.div>
      {/* text */}
      {/* <div>
        <p>_WILD IDEAS!_ LETS DIVE IN!_</p>
      </div> */}
      <MovingText />
      
    </section>
  );
}