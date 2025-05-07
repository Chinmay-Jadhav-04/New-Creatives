'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export function NeonGradientCard({ className, children, ...props }) {
  return (
    <div
      className={cn(
        "group relative flex h-full w-full flex-col overflow-hidden rounded-xl border border-white/20 bg-[#000033]/20 p-6 backdrop-blur-md transition-all duration-300 hover:border-white/30 hover:shadow-[0_0_30px_2px_rgba(0,255,255,0.4)]",
        className
      )}
      {...props}
    >
      {/* Glass effect */}
      <div className="absolute inset-0 z-0 h-full w-full overflow-hidden rounded-xl">
        <div className="absolute inset-0 z-[-1] h-full w-full bg-[radial-gradient(circle_at_bottom_left,rgba(255,41,117,0.15)_0%,transparent_40%),radial-gradient(circle_at_top_right,rgba(0,255,241,0.15)_0%,transparent_40%)]"></div>
      </div>

      {/* Subtle inner highlight */}
      <div className="absolute inset-0 z-0 rounded-xl bg-gradient-to-br from-white/5 to-transparent"></div>

      {/* Glow effect on hover */}
      <div className="absolute -inset-[1px] z-[-1] rounded-xl bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] opacity-0 blur transition-all duration-500 group-hover:opacity-60 group-hover:blur-xl"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col">
        {children}
      </div>
    </div>
  );
}
