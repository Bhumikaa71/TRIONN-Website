import { ReactNode } from "react";

interface IconWrapperProps {
  children: ReactNode;
  className?: string;
}

export default function IconWrapper({
  children,
  className = "",
}: IconWrapperProps) {
  return (
    <div
      className={`
        bg-gray-200 dark:bg-card group rounded-full flex items-center justify-center
        transition-transform duration-200  hover:cursor-pointer
        ${className}
      `}
    >
      <span
        className="transition-transform duration-200"
      >
        {children}
      </span>
    </div>
  );
}
