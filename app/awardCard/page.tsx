"use client";

import React from "react";
import { motion } from "framer-motion";
import Heading from "@/my-components/heading";
import Profile from "../profileSection/page";

export default function Award() {
  const awardcard = [
    {
      id: 1,
      number: "50+",
      label: "AWARDS & RECOGNITION",
      hoverColor: "hover:bg-red-500",
      offset: "-70px",
      initialX: -100,
      initialRotate: -8,
    },
    {
      id: 2,
      number: "900+",
      label: "PROJECTS COMPLETED",
      hoverColor: "hover:bg-gray-300",
      offset: "70px",
      initialX: 100, 
      initialRotate: 8, 
    },
    {
      id: 3,
      number: "20+",
      label: "CREATIVE MIND",
      hoverColor: "hover:bg-green-100",
      offset: "-70px",
      initialX: -100,
      initialRotate: -8,
    },
    {
      id: 4,
      number: "10+",
      label: "YEARS OF EXPERIENCE",
      hoverColor: "hover:bg-yellow-400",
      offset: "70px",
      initialX: 100,
      initialRotate: 8,
    },
  ];

  return (
    <section className="py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {awardcard.map((item) => (
          <motion.div
            key={item.id}
            initial={{
              x: item.initialX,
              opacity: 0,
              scale: 0.95,
              rotate: item.initialRotate,
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
            style={{ translateY: item.offset }}
            className={`
              
              bg-accent
              rounded-3xl
              p-12
              h-120
              flex
              flex-col
              justify-between
              transition-colors
              duration-500
              group
              ${item.hoverColor}
            `}
          >
            <h2 className="text-7xl font-light transition-colors duration-500">
              {item.number}
            </h2>

            <p className="text-right text-lg font-medium tracking-wide transition-colors duration-500">
              {item.label}
            </p>
          </motion.div>
        ))}
      </div>
      {/* partner section */}
      <div className="pt-10">
        <motion.div
          initial={{ y: 50, opacity: 0, scale: 0.95 }}
          whileInView={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <Heading
            header={
              <>
                <span className="block">PARTNER</span>
                <span className="block">LOVE</span>
              </>
            }
            headstyle=""
            subheading={
              <>
                <span className="block">Take heed, as the</span>
                <span className="block">lions roar in our client</span>
                <span className="block">
                  aesthetics, crafting your vision into a
                </span>
                <span>reviews resounds.</span>
              </>
            }
            substyle="text-end"
          />
        </motion.div>
      </div>
      {/* next page */}
      <Profile />
    </section>
  );
}
