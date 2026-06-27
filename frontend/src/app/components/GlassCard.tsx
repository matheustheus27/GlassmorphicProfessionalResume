import React from 'react';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export function GlassCard({ children, className = "", style }: GlassCardProps) {
  return (
    <div 
      style={style}
      className={`
        border
        rounded-xl 
        p-6 
        w-full
        transition-colors
        duration-300
        ${className}
      `.trim()}
    >
      {children}
    </div>
  );
}