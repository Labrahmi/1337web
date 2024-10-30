import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="group select-none p-6 rounded-lg bg-[hsl(var(--card))] border border-[hsl(var(--border))] hover:border-[hsl(var(--primary))] transition-all duration-300 glow-border">
      <div className="mb-4 transform transition-transform  duration-300">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-[hsl(var(--primary))]">{title}</h3>
      <p className="text-[hsl(var(--foreground)/.6)]">{description}</p>
    </div>
  );
}