
import React from 'react';
import { useApp } from '../contexts/AppContext';
import { translations } from '../utils/translations';

const Footer = () => {
  const { language } = useApp();
  const t = translations[language];

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 rtl:space-x-reverse mb-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="text-xl font-bold text-gradient">أسكار</span>
            </div>
            <p className="text-foreground/70 leading-relaxed">
              {t.footer.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">روابط سريعة</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-foreground/70 hover:text-primary transition-colors">
                  {t.nav.home}
                </a>
              </li>
              <li>
                <a href="#services" className="text-foreground/70 hover:text-primary transition-colors">
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a href="#about" className="text-foreground/70 hover:text-primary transition-colors">
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-foreground/70 hover:text-primary transition-colors">
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">معلومات الاتصال</h4>
            <div className="space-y-2">
              <p className="text-foreground/70">{t.contact.phone}</p>
              <p className="text-foreground/70">info@askar.com</p>
              <p className="text-foreground/70">{t.contact.address}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-foreground/70">
            © 2024 أسكار للحلول البرمجية. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
