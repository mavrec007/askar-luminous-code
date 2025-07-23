
import React from 'react';
import { Globe, Smartphone, ShoppingCart, Lightbulb } from 'lucide-react';
import { useApp } from '../contexts/AppContext';
import { translations } from '../utils/translations';

const ServicesSection = () => {
  const { language } = useApp();
  const t = translations[language];

  const services = [
    {
      icon: Globe,
      title: t.services.web.title,
      description: t.services.web.description,
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Smartphone,
      title: t.services.mobile.title,
      description: t.services.mobile.description,
      color: 'from-green-500 to-green-600',
    },
    {
      icon: ShoppingCart,
      title: t.services.ecommerce.title,
      description: t.services.ecommerce.description,
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Lightbulb,
      title: t.services.consulting.title,
      description: t.services.consulting.description,
      color: 'from-orange-500 to-orange-600',
    },
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gradient">
            {t.services.title}
          </h2>
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto">
            {t.services.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-primary/50"
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="h-6 w-6 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-foreground/70 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
