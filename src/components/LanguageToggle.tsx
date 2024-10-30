import React from 'react';
import { Languages } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="p-2 rounded-lg hover:bg-[hsl(var(--primary)/.1)] transition-colors"
      aria-label="Toggle language"
    >
      <Languages className="w-5 h-5 text-violet-400" />
      <span className="sr-only">{language === 'en' ? 'عربي' : 'English'}</span>
    </button>
  );
}