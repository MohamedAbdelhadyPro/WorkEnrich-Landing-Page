import { Injectable } from '@angular/core';
import { LanguageService } from './language.service';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private translations: { [key: string]: { [key: string]: string } } = {
    ar: {
      // Navigation
      'nav.home': 'الرئيسية',
      'nav.products': 'منتجاتنا',
      'nav.services': 'خدمات البرمجة المتخصصة',
      'nav.about': 'من نحن',
      'nav.contact': 'تواصل معنا',
      'nav.getQuote': 'احصل على عرض سعر',
      'nav.hrSystem': 'نظام إدارة الموارد البشرية',
      'nav.hrSystemDesc': 'إدارة شاملة للموظفين والرواتب',
      'nav.customProduct': 'طلب منتج مخصص',

      // Home Page
      'home.newProduct': 'منتج جديد',
      'home.hrTitle': 'نظام إدارة الموارد البشرية',
      'home.hrDescription': 'حل شامل ومتكامل لإدارة جميع عمليات الموارد البشرية في شركتك بكفاءة عالية',
      'home.viewDetails': 'شاهد التفاصيل',
      'home.getQuote': 'احصل على عرض سعر',
      'home.heroTitle': 'نطور الحلول الرقمية التي تحتاجها',
      'home.heroDescription': 'شركة متخصصة في تطوير البرمجيات، تصميم المواقع، وتطبيقات الجوال. نحول أفكارك إلى حلول تقنية مبتكرة تساعد في نمو أعمالك.',
      'home.startProject': 'ابدأ مشروعك الآن',
      'home.viewWork': 'شاهد أعمالنا',
      'home.completedProjects': 'مشروع مكتمل',
      'home.happyClients': 'عميل راضي',
      'home.yearsExperience': 'سنوات خبرة',
      'home.mainServices': 'خدماتنا الرئيسية',
      'home.webDevelopment': 'تطوير المواقع',
      'home.webDevDesc': 'مواقع حديثة ومتجاوبة',
      'home.mobileApps': 'تطبيقات الجوال',
      'home.mobileAppsDesc': 'تطبيقات iOS و Android',
      'home.managementSystems': 'أنظمة إدارة',
      'home.managementSystemsDesc': 'حلول برمجية مخصصة',
      'home.viewSpecializedServices': 'عرض خدمات البرمجة المتخصصة',
      'home.developers': 'مطور متخصص',

      // Footer
      'footer.services': 'الخدمات',
      'footer.programmingServices': 'خدمات البرمجة',
      'footer.completedProjects': 'مشاريعنا المنجزة',
      'footer.hrSystem': 'نظام الموارد البشرية',
      'footer.company': 'الشركة',
      'footer.aboutUs': 'من نحن',
      'footer.contactUs': 'اتصل بنا',
      'footer.allRightsReserved': 'جميع الحقوق محفوظة.',

      // About Page
      'about.title': 'من نحن؟',
      'about.subtitle': 'WorkEnrich - شركة رائدة في مجال تطوير البرمجيات والحلول الرقمية المبتكرة',
      'about.ourStory': 'قصتنا',
      'about.description1': 'WorkEnrich هي شركة رائدة في مجال تطوير البرمجيات والحلول الرقمية. تأسست الشركة برؤية واضحة لتقديم حلول تقنية مبتكرة تساعد الشركات على النمو والازدهار في العصر الرقمي.',
      'about.description2': 'نجمع بين الخبرة التقنية العميقة والفهم الدقيق لاحتياجات السوق لنقدم حلولاً مبتكرة تتجاوز توقعات عملائنا. فريقنا المتخصص يضم نخبة من المطورين والمصممين ذوي الخبرة العالية.',
      'about.description3': 'منذ تأسيسنا، نسعى لتقديم أفضل الخدمات التقنية وأكثرها ابتكاراً، مع التركيز على الجودة والأداء المتميز في كل مشروع نعمل عليه.',
      'about.achievementsByNumbers': 'إنجازاتنا بالأرقام',
      'about.numbersSpeak': 'أرقام تتحدث عن خبرتنا ونجاحنا',
      'about.team': 'فريق العمل',
      'about.teamDesc': 'خبراء متخصصون في مختلف المجالات التقنية',
      'about.vision': 'رؤيتنا',
      'about.visionText': 'أن نكون الشركة الرائدة في المنطقة في تقديم الحلول التقنية المبتكرة التي تساعد الشركات على النمو والازدهار في العصر الرقمي، وأن نكون الخيار الأول للشركات التي تسعى للتحول الرقمي.',
      'about.mission': 'رسالتنا',
      'about.missionText': 'نسعى لتطوير حلول برمجية عالية الجودة تلبي احتياجات عملائنا وتتجاوز توقعاتهم، مع التركيز على الابتكار والتميز في الأداء وتقديم خدمة عملاء استثنائية.',
      'about.coreValues': 'قيمنا الأساسية',
      'about.coreValuesDesc': 'المبادئ التي نؤمن بها ونعمل وفقاً لها',
      'about.technologies': 'التقنيات التي نستخدمها',
      'about.technologiesDesc': 'نواكب أحدث التطورات التقنية لنقدم أفضل الحلول',
      'about.readyToWork': 'جاهز للعمل معنا؟',
      'about.readyToWorkDesc': 'تواصل معنا اليوم ودعنا نساعدك في تحويل أفكارك إلى واقع رقمي',
      'about.contactNow': 'تواصل معنا الآن',
      'about.viewServices': 'شاهد خدماتنا'
    },
    en: {
      // Navigation
      'nav.home': 'Home',
      'nav.products': 'Our Products',
      'nav.services': 'Specialized Programming Services',
      'nav.about': 'About Us',
      'nav.contact': 'Contact Us',
      'nav.getQuote': 'Get Quote',
      'nav.hrSystem': 'HR Management System',
      'nav.hrSystemDesc': 'Comprehensive employee and payroll management',
      'nav.customProduct': 'Request Custom Product',

      // Home Page
      'home.newProduct': 'New Product',
      'home.hrTitle': 'HR Management System',
      'home.hrDescription': 'A comprehensive and integrated solution for managing all HR operations in your company with high efficiency',
      'home.viewDetails': 'View Details',
      'home.getQuote': 'Get Quote',
      'home.heroTitle': 'We Develop the Digital Solutions You Need',
      'home.heroDescription': 'A company specialized in software development, website design, and mobile applications. We turn your ideas into innovative technical solutions that help grow your business.',
      'home.startProject': 'Start Your Project Now',
      'home.viewWork': 'View Our Work',
      'home.completedProjects': 'Completed Projects',
      'home.happyClients': 'Happy Clients',
      'home.yearsExperience': 'Years Experience',
      'home.mainServices': 'Our Main Services',
      'home.webDevelopment': 'Web Development',
      'home.webDevDesc': 'Modern and responsive websites',
      'home.mobileApps': 'Mobile Apps',
      'home.mobileAppsDesc': 'iOS & Android applications',
      'home.managementSystems': 'Management Systems',
      'home.managementSystemsDesc': 'Custom software solutions',
      'home.viewSpecializedServices': 'View Specialized Programming Services',
      'home.developers': 'Specialized Developers',

      // Footer
      'footer.services': 'Services',
      'footer.programmingServices': 'Programming Services',
      'footer.completedProjects': 'Our Completed Projects',
      'footer.hrSystem': 'HR System',
      'footer.company': 'Company',
      'footer.aboutUs': 'About Us',
      'footer.contactUs': 'Contact Us',
      'footer.allRightsReserved': 'All rights reserved.',

      // About Page
      'about.title': 'About Us',
      'about.subtitle': 'WorkEnrich - A leading company in software development and innovative digital solutions',
      'about.ourStory': 'Our Story',
      'about.description1': 'WorkEnrich is a leading company in software development and digital solutions. The company was founded with a clear vision to provide innovative technical solutions that help companies grow and thrive in the digital age.',
      'about.description2': 'We combine deep technical expertise with precise understanding of market needs to provide innovative solutions that exceed our clients\' expectations. Our specialized team includes elite developers and designers with high experience.',
      'about.description3': 'Since our establishment, we strive to provide the best and most innovative technical services, focusing on quality and outstanding performance in every project we work on.',
      'about.achievementsByNumbers': 'Our Achievements in Numbers',
      'about.numbersSpeak': 'Numbers that speak about our experience and success',
      'about.team': 'Our Team',
      'about.teamDesc': 'Experts specialized in various technical fields',
      'about.vision': 'Our Vision',
      'about.visionText': 'To be the leading company in the region in providing innovative technical solutions that help companies grow and thrive in the digital age, and to be the first choice for companies seeking digital transformation.',
      'about.mission': 'Our Mission',
      'about.missionText': 'We strive to develop high-quality software solutions that meet our clients\' needs and exceed their expectations, focusing on innovation and excellence in performance while providing exceptional customer service.',
      'about.coreValues': 'Our Core Values',
      'about.coreValuesDesc': 'The principles we believe in and work according to',
      'about.technologies': 'Technologies We Use',
      'about.technologiesDesc': 'We keep up with the latest technological developments to provide the best solutions',
      'about.readyToWork': 'Ready to Work with Us?',
      'about.readyToWorkDesc': 'Contact us today and let us help you turn your ideas into digital reality',
      'about.contactNow': 'Contact Us Now',
      'about.viewServices': 'View Our Services'
    }
  };

  constructor(private languageService: LanguageService) {}

  translate(key: string): string {
    const currentLang = this.languageService.getCurrentLanguage();
    return this.translations[currentLang]?.[key] || key;
  }

  get(key: string): string {
    return this.translate(key);
  }
}