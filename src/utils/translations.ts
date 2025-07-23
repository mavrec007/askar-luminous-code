
export const translations = {
  ar: {
    nav: {
      home: 'الرئيسية',
      services: 'الخدمات',
      about: 'حول الشركة',
      contact: 'اتصل بنا',
    },
    hero: {
      title: 'أسكار للحلول البرمجية',
      subtitle: 'نحن نقدم حلولاً برمجية متطورة تلبي احتياجات عملك وتحقق أهدافك التقنية',
      cta: 'ابدأ مشروعك الآن',
      learnMore: 'اعرف المزيد',
    },
    services: {
      title: 'خدماتنا',
      subtitle: 'نقدم مجموعة شاملة من الخدمات البرمجية المتخصصة',
      web: {
        title: 'تطوير المواقع',
        description: 'تطوير مواقع حديثة وسريعة باستخدام أحدث التقنيات',
      },
      mobile: {
        title: 'تطبيقات الجوال',
        description: 'تطبيقات ذكية للأندرويد والآيفون تخدم جميع احتياجاتك',
      },
      ecommerce: {
        title: 'التجارة الإلكترونية',
        description: 'منصات تسوق متكاملة مع أنظمة دفع آمنة',
      },
      consulting: {
        title: 'استشارات تقنية',
        description: 'استشارات متخصصة لتحسين أداء أنظمتك التقنية',
      },
    },
    about: {
      title: 'حول أسكار',
      subtitle: 'شركة رائدة في مجال تطوير البرمجيات والحلول التقنية',
      description: 'نحن فريق من المطورين المحترفين نسعى لتقديم حلول برمجية مبتكرة تساعد الشركات على النمو والتطور في العصر الرقمي.',
      experience: 'سنوات خبرة',
      projects: 'مشروع مكتمل',
      clients: 'عميل راضٍ',
      team: 'عضو فريق',
    },
    contact: {
      title: 'تواصل معنا',
      subtitle: 'نحن هنا لمساعدتك في تحقيق أهدافك التقنية',
      name: 'الاسم',
      email: 'البريد الإلكتروني',
      message: 'الرسالة',
      send: 'إرسال الرسالة',
      phone: '+966 50 123 4567',
      address: 'الرياض، المملكة العربية السعودية',
    },
    footer: {
      description: 'أسكار للحلول البرمجية - شريكك في التحول الرقمي',
      rights: 'جميع الحقوق محفوظة',
    },
    backToTop: 'العودة لأعلى',
  },
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      about: 'About',
      contact: 'Contact',
    },
    hero: {
      title: 'Askar Software Solutions',
      subtitle: 'We provide advanced software solutions that meet your business needs and achieve your technical goals',
      cta: 'Start Your Project Now',
      learnMore: 'Learn More',
    },
    services: {
      title: 'Our Services',
      subtitle: 'We offer a comprehensive range of specialized software services',
      web: {
        title: 'Web Development',
        description: 'Modern and fast websites using the latest technologies',
      },
      mobile: {
        title: 'Mobile Apps',
        description: 'Smart applications for Android and iPhone serving all your needs',
      },
      ecommerce: {
        title: 'E-Commerce',
        description: 'Integrated shopping platforms with secure payment systems',
      },
      consulting: {
        title: 'Technical Consulting',
        description: 'Specialized consulting to improve your technical systems performance',
      },
    },
    about: {
      title: 'About Askar',
      subtitle: 'Leading company in software development and technical solutions',
      description: 'We are a team of professional developers striving to provide innovative software solutions that help companies grow and evolve in the digital age.',
      experience: 'Years Experience',
      projects: 'Completed Projects',
      clients: 'Happy Clients',
      team: 'Team Members',
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'We are here to help you achieve your technical goals',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send Message',
      phone: '+966 50 123 4567',
      address: 'Riyadh, Saudi Arabia',
    },
    footer: {
      description: 'Askar Software Solutions - Your partner in digital transformation',
      rights: 'All rights reserved',
    },
    backToTop: 'Back to Top',
  },
};

export type TranslationKey = keyof typeof translations.ar;
