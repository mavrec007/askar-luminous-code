
import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { useApp } from '../contexts/AppContext';
import { translations } from '../utils/translations';

const BackToTop = () => {
  const { language } = useApp();
  const t = translations[language];
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 rtl:right-auto rtl:left-8 z-50 p-3 bg-primary text-white rounded-full shadow-lg hover:bg-primary/90 transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      aria-label={t.backToTop}
    >
      <ChevronUp className="h-6 w-6" />
    </button>
  );
};

export default BackToTop;
