
import React from 'react';
import { ArrowRight, ArrowLeft, Play } from 'lucide-react';
import { useApp } from '../contexts/AppContext';
import { translations } from '../utils/translations';

const HeroSection = () => {
  const { language, isRTL } = useApp();
  const t = translations[language];

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(255,255,255,0.15)_1px,transparent_0)] bg-[length:50px_50px] opacity-30" />
      
      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            <span className="text-gradient">{t.hero.title}</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl text-foreground/80 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in animation-delay-200">
            {t.hero.subtitle}
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in animation-delay-400">
            <button
              onClick={scrollToServices}
              className="group bg-gradient-primary text-white px-8 py-4 rounded-lg font-medium text-lg hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 flex items-center gap-2"
            >
              {t.hero.cta}
              {isRTL ? (
                <ArrowLeft className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              ) : (
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              )}
            </button>
            
            <button
              onClick={scrollToAbout}
              className="group bg-background border-2 border-primary text-primary px-8 py-4 rounded-lg font-medium text-lg hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              <Play className="h-5 w-5" />
              {t.hero.learnMore}
            </button>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-pulse animation-delay-1000" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary/10 rounded-full blur-lg animate-pulse animation-delay-500" />
      </div>
    </section>
  );
};

export default HeroSection;
