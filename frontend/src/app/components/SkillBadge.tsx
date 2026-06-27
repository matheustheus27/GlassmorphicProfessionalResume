import React from 'react';

interface SkillBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
}

export function SkillBadge({ children, style }: SkillBadgeProps) {
  return (
    <span 
      style={style}
      className="inline-flex px-3 py-1.5 bg-slate-800 text-slate-50 rounded-full text-[9pt] font-medium leading-none"
    >
      {children}
    </span>
  );
}