
import React from 'react';
import { Award, Users, Briefcase, Clock } from 'lucide-react';
import { useApp } from '../contexts/AppContext';
import { translations } from '../utils/translations';

const AboutSection = () => {
  const { language } = useApp();
  const t = translations[language];

  const stats = [
    {
      icon: Clock,
      number: '8+',
      label: t.about.experience,
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Briefcase,
      number: '150+',
      label: t.about.projects,
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Users,
      number: '100+',
      label: t.about.clients,
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Award,
      number: '25+',
      label: t.about.team,
      color: 'from-orange-500 to-orange-600',
    },
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gradient">
              {t.about.title}
            </h2>
            
            <h3 className="text-xl md:text-2xl font-semibold mb-6 text-foreground/90">
              {t.about.subtitle}
            </h3>
            
            <p className="text-lg text-foreground/80 leading-relaxed mb-8">
              {t.about.description}
            </p>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 bg-card border border-border rounded-lg hover:shadow-lg transition-shadow"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-lg flex items-center justify-center mx-auto mb-2`}>
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-primary mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-foreground/70">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary/10 via-accent/10 to-primary/5 rounded-2xl p-8 flex items-center justify-center">
              <div className="grid grid-cols-3 gap-4 w-full h-full">
                {Array.from({ length: 9 }, (_, i) => (
                  <div
                    key={i}
                    className={`bg-gradient-to-br ${
                      i % 3 === 0 ? 'from-primary/20 to-primary/10' :
                      i % 3 === 1 ? 'from-accent/20 to-accent/10' :
                      'from-blue-500/20 to-blue-500/10'
                    } rounded-lg animate-pulse`}
                    style={{
                      animationDelay: `${i * 100}ms`,
                      animationDuration: '2s'
                    }}
                  />
                ))}
              </div>
            </div>
            
            {/* Decorative circles */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary/30 rounded-full blur-sm animate-pulse" />
            <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-accent/30 rounded-full blur-sm animate-pulse animation-delay-1000" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
