"use client";

import Image from "next/image";
import Heading from "@/my-components/heading";
// import Footer from "../footerPage/page";

const socialLinks = [
  {
    name: "Dribbble",
    href: "https://dribbble.com/",
    iconSrc: "/assets/dribble.svg",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/",
    iconSrc: "/assets/linkedin.svg",
  },
  {
    name: "Instagram",
    href: "https://instagram.com/",
    iconSrc: "/assets/instagram.svg",
  },
  {
    name: "Behance",
    href: "https://behance.net/",
    iconSrc: "/assets/behance.svg",
  },
  {
    name: "Facebook",
    href: "https://facebook.com/",
    iconSrc: "/assets/facebook.svg",
  },
];

export default function Join() {
  return (
    <section className="py-24">
      <div className="">
        <Heading
          header={
            <>
              <span className="block">JOIN OUR</span>
              <span className="block">JUNGLE</span>
              <span className="block">TREK</span>
            </>
          }
          headstyle="text-center"
        />

        <div className="flex flex-col gap-10 text-5xl">
          {socialLinks.map(({ name, href, iconSrc }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between border-b border-gray-600 w-4xl pb-4"
            >
              <span>{name}</span>

              <Image
                src={iconSrc}
                alt={`${name} icon`}
                width={52}
                height={52}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
