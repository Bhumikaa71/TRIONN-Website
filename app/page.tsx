"use client";
import Button from "@/my-components/button";
import Heading from "@/my-components/heading";
import IconWrapper from "@/my-components/iconWrapper";
// import NavBar from "@/my-components/navBar";
import { TiArrowDown } from "react-icons/ti";
import { useRef } from "react";

import { motion, useScroll, useTransform } from "framer-motion";
import Home from "./homePage.jsx/page";

export default function Page() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const width = useTransform(scrollYProgress, [0, 0.5], ["5%", "100%"]);

  const borderRadius = useTransform(
    scrollYProgress,
    [0, 0.5],
    ["100px", "1.5678rem"],
  );
  return (
    <>
      {/* <NavBar /> */}

      <section className="mx-auto w-full max-w-437 px-8 lg:px-12 pt-52">
        {/* heading and paragraph */}
        <div className="text-center">
          <Heading
            header={
              <>
                <span className="block">ROAR IN THE</span>
                <span className="block"> DIGITAL WILDERNESS</span>
              </>
            }
            headstyle="tracking-widest"
            subheading={
              <>
                <span className="block">
                  WE ROAR WITH SUCCESS, DELIVERING THE TRIONN®
                </span>
                <span className="block">
                  THROUGH VERSATILE DESIGN, BRANDING AND THE LATEST
                </span>
                <span className="block">
                  TECH DEVELOPMENT TO COMPANIES.
                </span>
              </>
            }
            substyle="mt-4 tracking-widest"
          />
        </div>
        {/* scroll down arrow */}
        <div className="flex justify-center">
          <IconWrapper className="w-8 h-8 mt-4">
            <TiArrowDown className="text-lg" />
          </IconWrapper>
        </div>
        {/* two button */}
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <Button content="Explore Work" cstyle="mt-4 w-full sm:w-auto" />
          <Button content="Get In Touch" cstyle="mt-4 w-full sm:w-auto" />
        </div>
        {/* video */}
        <div ref={containerRef} className="ti_banner flex justify-center py-4">
          <motion.div
            style={{ width, borderRadius, overflow: "hidden" }}
            className="mx-auto"
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              style={{ width: "100%", height: "auto", display: "block" }}
            >
              <source src="/assets/intro-video.mp4" type="video/mp4" />
            </video>
          </motion.div>
        </div>
      </section>
      {/* other pages */}
      <Home />
    </>
  );
}
