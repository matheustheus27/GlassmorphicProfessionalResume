import React from 'react';

interface SectionTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

export function SectionTitle({ children, style }: SectionTitleProps) {
  return (
    <h2 
      style={style}
      className="text-[14pt] font-bold text-inherit uppercase tracking-wide"
    >
      {children}
    </h2>
  );
}