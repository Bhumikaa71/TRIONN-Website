import React from "react";

interface ButtonProps {
  content: React.ReactNode;
  cstyle?: string;
}

function Button({
  content,
  cstyle = "",
}: ButtonProps) {
  return (
    <button
      className={`
        px-10 py-3 w-fit
        rounded-full
        border-2 border-primary
        dark:border-cyan-400
        bg-transparent
        text-primary dark:text-cyan-50
               hover:cursor-pointer
        hover:animate-pulse
        ${cstyle}
      `}
    >
      {content}
    </button>
  );
}

export default Button;