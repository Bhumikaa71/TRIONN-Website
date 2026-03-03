import React from "react";

interface HeadingProps {
  header: React.ReactNode;
  subheading?: React.ReactNode;
  paragraph?: React.ReactNode;
  textstyle?: string;
  headstyle?: string;
  pstyle?: string;
  substyle?: string;
}

function Heading({
  header,
  subheading,
  paragraph,
  textstyle = "",
  headstyle = "",
  pstyle = "",
  substyle = "",
}: HeadingProps) {
  return (
    <div className="">
      <div className={`flex flex-col ${textstyle}`}>
        <h1
          className={`font-semibold text-4xl lg:text-9xl text-primary dark:text-cyan-50 ${headstyle}`}
        >
          {header}
        </h1>

        <h2
          className={`text-lg lg:text-xl font-semibold text-primary dark:text-cyan-50 ${substyle}`}
        >
          {subheading}
        </h2>

        <p className={`text-xs lg:text-lg text-primary dark:text-cyan-50 ${pstyle}`}>{paragraph}</p>
      </div>
    </div>
  );
  
}

export default Heading;
