import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer className="border-t border-[hsl(var(--border))]">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center text-[hsl(var(--foreground)/.5)] font-mono">
          {/* <p>&copy; {new Date().getFullYear()} 1337 Web Dev Club. {t('footerRights')}</p> */}
          <p className="mt-2">{t('footerMadeWith')}</p>
        </div>
      </div>
    </footer>
  );
}