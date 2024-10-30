import React from 'react';

interface ActivityCardProps {
  image: string;
  title: string;
  date: string;
  description: string;
}

export function ActivityCard({ image, title, date, description }: ActivityCardProps) {
  return (
    <div className="group select-none relative overflow-hidden rounded-xl bg-[hsl(var(--card))] transition-all glow-border shadow">
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--card))] to-transparent opacity-50" />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-bold text-[hsl(var(--primary))]">{title}</h3>
          <span className="text-sm text-[hsl(var(--foreground)/.6)]">{date}</span>
        </div>
        <p className="text-[hsl(var(--foreground)/.6)]">{description}</p>
      </div>
    </div>
  );
}