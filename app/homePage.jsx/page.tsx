'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Heading from "@/my-components/heading";
import Button from "@/my-components/button";
import Work from '../workPage/page';


export default function Home() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const xRecent = useTransform(scrollYProgress, [0, 0.5, 1], [0, 40, 0]);
  
  const xWork = useTransform(scrollYProgress, [0, 0.5, 1], [0, -40, 0]);

  return (
    <section 
      ref={containerRef} 
      className="mx-auto w-full max-w-437 px-8 lg:px-12 pt-20 min-h-[120vh] overflow-hidden"
    >
      <Heading 
        header={
          <>
            <motion.span style={{ x: xRecent }} className="block">
              RECENT
            </motion.span>
            <motion.span style={{ x: xWork }} className="block">
              WORK
            </motion.span>
          </>
        } 
        paragraph={
          <>
            <span className="block">In the creative wilderness,</span>
            <span className="block">clients find our work truly </span>
            <span className="block">beloved.</span>
          </>
        } 
      />
      {/* buttons */}
      <div className="
        flex 
        flex-col sm:flex-row 
        gap-4 
        justify-center lg:justify-end 
        items-center 
        mt-8
      ">
        <Button content="Explore Work" cstyle="w-fit sm:w-auto" />
      </div>

      <Work />
    </section>
  );
}
