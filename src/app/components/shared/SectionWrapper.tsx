import React from "react";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionWrapper({ children, className = "" }: SectionWrapperProps) {
  return (
    <div className={`w-full max-w-[1920px] mx-auto px-[250px] ${className}`}>
      {children}
    </div>
  );
}

export function GridContainer({ children, className = "" }: SectionWrapperProps) {
  return (
    <div className={`grid grid-cols-12 gap-5 ${className}`}>
      {children}
    </div>
  );
}
