import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Navigation -->
    <nav class="fixed w-full top-0 z-50 bg-white border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center">
            <div class="flex-shrink-0 flex items-center">
              <img src="src/assets/13 copy copy.png" alt="WorkEnrich Logo" class="w-10 h-10 rounded-lg">
              <span class="ml-2 text-xl font-bold text-gray-900">WorkEnrich</span>
            </div>
          </div>
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-4">
              <a (click)="scrollToSection('services')" class="text-gray-900 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors cursor-pointer">الخدمات</a>
              <a (click)="scrollToSection('portfolio')" class="text-gray-900 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors cursor-pointer">معرض الأعمال</a>
              <a (click)="scrollToSection('about')" class="text-gray-900 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors cursor-pointer">من نحن</a>
              <a (click)="scrollToSection('contact')" class="text-gray-900 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors cursor-pointer">تواصل معنا</a>
              <button class="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                احصل على عرض سعر
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section id="hero" class="pt-24 pb-12 bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="text-center lg:text-right">
            <h1 class="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              نطور
              <span class="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                الحلول الرقمية
              </span>
              التي تحتاجها
            </h1>
            <p class="text-xl text-gray-600 mb-8 leading-relaxed">
              شركة متخصصة في تطوير البرمجيات، تصميم المواقع، وتطبيقات الجوال. 
              نحول أفكارك إلى حلول تقنية مبتكرة تساعد في نمو أعمالك.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button class="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg text-lg font-medium transition-all transform hover:scale-105 shadow-lg">
                ابدأ مشروعك الآن
              </button>
              <button class="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-3 rounded-lg text-lg font-medium transition-all">
                شاهد أعمالنا
              </button>
            </div>
            <div class="mt-8 flex items-center justify-center lg:justify-start space-x-8">
              <div class="text-center">
                <div class="text-2xl font-bold text-purple-600">200+</div>
                <div class="text-gray-600 text-sm">مشروع مكتمل</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold text-blue-600">150+</div>
                <div class="text-gray-600 text-sm">عميل راضي</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold text-green-600">5+</div>
                <div class="text-gray-600 text-sm">سنوات خبرة</div>
              </div>
            </div>
          </div>
          <div class="relative">
            <div class="relative z-10 bg-white rounded-2xl shadow-2xl p-8 transform rotate-3">
              <img src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800" 
                   alt="Software Development" 
                   class="w-full h-64 object-cover rounded-lg mb-4">
              <div class="space-y-3">
                <div class="flex items-center space-x-3">
                  <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span class="text-gray-700">مشاريع قيد التطوير: 12</span>
                </div>
                <div class="flex items-center space-x-3">
                  <div class="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span class="text-gray-700">فريق المطورين: 15</span>
                </div>
                <div class="flex items-center space-x-3">
                  <div class="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span class="text-gray-700">تقنيات حديثة: 25+</span>
                </div>
              </div>
            </div>
            <div class="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-2xl transform -rotate-3"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            خدماتنا المتخصصة
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            نقدم مجموعة شاملة من الخدمات التقنية لتلبية جميع احتياجات أعمالك الرقمية
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div *ngFor="let service of services" 
               class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-purple-200 group">
            <div class="w-14 h-14 bg-gradient-to-r rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg text-3xl"
                 [ngClass]="service.bgColor">
              {{ service.icon }}
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">{{ service.title }}</h3>
            <p class="text-gray-600 leading-relaxed mb-4">{{ service.description }}</p>
            <ul class="space-y-2">
              <li *ngFor="let feature of service.features" class="flex items-center text-sm text-gray-600">
                <span class="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                {{ feature }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Portfolio Section -->
    <section id="portfolio" class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            معرض أعمالنا
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            مشاريع نفخر بإنجازها وعملاء وثقوا بخبرتنا لتحويل أفكارهم إلى واقع رقمي
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div *ngFor="let project of portfolio" 
               class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
            <div class="relative overflow-hidden">
              <img [src]="project.image" 
                   [alt]="project.title" 
                   class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300">
              <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div class="p-6">
              <div class="flex items-center mb-2">
                <span class="px-3 py-1 text-xs font-medium rounded-full"
                      [ngClass]="project.categoryColor">
                  {{ project.category }}
                </span>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">{{ project.title }}</h3>
              <p class="text-gray-600 text-sm mb-4">{{ project.description }}</p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span *ngFor="let tech of project.technologies" 
                      class="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                  {{ tech }}
                </span>
              </div>
              <button class="text-purple-600 hover:text-purple-700 font-medium text-sm transition-colors">
                عرض التفاصيل ←
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              من نحن؟
            </h2>
            <p class="text-lg text-gray-600 mb-6 leading-relaxed">
              WorkEnrich هي شركة رائدة في مجال تطوير البرمجيات والحلول الرقمية. 
              نجمع بين الخبرة التقنية العميقة والفهم الدقيق لاحتياجات السوق لنقدم حلولاً مبتكرة تساعد عملاءنا على تحقيق أهدافهم.
            </p>
            <div class="space-y-4">
              <div class="flex items-start">
                <div class="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mt-1 mr-3">
                  <span class="text-purple-600 text-sm">✓</span>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900">فريق متخصص</h4>
                  <p class="text-gray-600 text-sm">مطورون ومصممون ذوو خبرة عالية في أحدث التقنيات</p>
                </div>
              </div>
              <div class="flex items-start">
                <div class="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mt-1 mr-3">
                  <span class="text-purple-600 text-sm">✓</span>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900">جودة عالية</h4>
                  <p class="text-gray-600 text-sm">نلتزم بأعلى معايير الجودة في جميع مراحل التطوير</p>
                </div>
              </div>
              <div class="flex items-start">
                <div class="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mt-1 mr-3">
                  <span class="text-purple-600 text-sm">✓</span>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900">دعم مستمر</h4>
                  <p class="text-gray-600 text-sm">نقدم الدعم الفني والصيانة المستمرة لجميع مشاريعنا</p>
                </div>
              </div>
            </div>
          </div>
          <div class="relative">
            <img src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800" 
                 alt="Our Team" 
                 class="w-full h-96 object-cover rounded-2xl shadow-lg">
            <div class="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div *ngFor="let stat of stats" class="text-white">
            <div class="text-4xl font-bold mb-2">{{ stat.number }}</div>
            <div class="text-purple-100">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-20 bg-gray-50">
      <div class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          جاهز لبدء مشروعك القادم؟
        </h2>
        <p class="text-xl text-gray-600 mb-8">
          تواصل معنا اليوم واحصل على استشارة مجانية لمشروعك
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button class="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all transform hover:scale-105 shadow-lg">
            احصل على عرض سعر مجاني
          </button>
          <button class="border-2 border-gray-300 text-gray-700 hover:border-purple-600 hover:text-purple-600 px-8 py-4 rounded-lg text-lg font-medium transition-all">
            تحدث مع خبير
          </button>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div class="bg-white p-6 rounded-xl shadow-lg">
            <div class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-purple-600 text-xl">📧</span>
            </div>
            <h4 class="font-bold text-gray-900 mb-2">البريد الإلكتروني</h4>
            <p class="text-gray-600">info&#64;techcraft.com</p>
          </div>
          <div class="bg-white p-6 rounded-xl shadow-lg">
            <div class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-purple-600 text-xl">📱</span>
            </div>
            <h4 class="font-bold text-gray-900 mb-2">الهاتف</h4>
            <p class="text-gray-600">+966 50 123 4567</p>
          </div>
          <div class="bg-white p-6 rounded-xl shadow-lg">
            <div class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-purple-600 text-xl">📍</span>
            </div>
            <h4 class="font-bold text-gray-900 mb-2">العنوان</h4>
            <p class="text-gray-600">الرياض، المملكة العربية السعودية</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div class="col-span-1 md:col-span-2">
            <div class="flex items-center mb-4">
              <div class="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                💻
              </div>
              <span class="ml-2 text-xl font-bold">WorkEnrich</span>
            </div>
            <p class="text-gray-400 mb-4">
              شركة متخصصة في تطوير البرمجيات والحلول الرقمية. 
              نحول أفكارك إلى واقع تقني يساعد في نمو أعمالك.
            </p>
          </div>
          <div>
            <h4 class="font-bold mb-4">الخدمات</h4>
            <ul class="space-y-2 text-gray-400">
              <li><a href="#" class="hover:text-white transition-colors">تطوير المواقع</a></li>
              <li><a href="#" class="hover:text-white transition-colors">تطبيقات الجوال</a></li>
              <li><a href="#" class="hover:text-white transition-colors">أنظمة إدارة</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-bold mb-4">الشركة</h4>
            <ul class="space-y-2 text-gray-400">
              <li><a href="#" class="hover:text-white transition-colors">من نحن</a></li>
              <li><a href="#" class="hover:text-white transition-colors">أعمالنا</a></li>
              <li><a href="#" class="hover:text-white transition-colors">اتصل بنا</a></li>
            </ul>
          </div>
        </div>
        <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 WorkEnrich. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  `,
})
export class App {
  services = [
    {
      icon: '🌐',
      title: 'تطوير المواقع الإلكترونية',
      description: 'مواقع حديثة ومتجاوبة باستخدام أحدث التقنيات والأطر البرمجية.',
      bgColor: 'from-blue-400 to-blue-600',
      features: ['تصميم متجاوب', 'سرعة عالية', 'محرك بحث محسن', 'أمان متقدم']
    },
    {
      icon: '📱',
      title: 'تطبيقات الجوال',
      description: 'تطبيقات iOS و Android أصلية ومتعددة المنصات بأداء عالي.',
      bgColor: 'from-green-400 to-green-600',
      features: ['iOS & Android', 'واجهة سهلة', 'أداء سريع', 'تحديثات مستمرة']
    },
    {
      icon: '⚙️',
      title: 'أنظمة إدارة مخصصة',
      description: 'حلول برمجية مخصصة لإدارة العمليات وتحسين الإنتاجية.',
      bgColor: 'from-purple-400 to-purple-600',
      features: ['حلول مخصصة', 'تكامل سهل', 'تقارير تفصيلية', 'أمان عالي']
    },
    {
      icon: '🎨',
      title: 'تصميم واجهات المستخدم',
      description: 'تصاميم عصرية وجذابة تركز على تجربة المستخدم المثلى.',
      bgColor: 'from-pink-400 to-pink-600',
      features: ['تصميم حديث', 'تجربة مستخدم', 'ألوان متناسقة', 'سهولة الاستخدام']
    },
    {
      icon: '☁️',
      title: 'الحوسبة السحابية',
      description: 'حلول سحابية آمنة وقابلة للتوسع لاستضافة وإدارة التطبيقات.',
      bgColor: 'from-cyan-400 to-cyan-600',
      features: ['استضافة آمنة', 'نسخ احتياطي', 'قابلية التوسع', 'مراقبة مستمرة']
    },
    {
      icon: '🛠️',
      title: 'الدعم الفني والصيانة',
      description: 'دعم فني متواصل وصيانة دورية لضمان استمرارية العمل.',
      bgColor: 'from-orange-400 to-orange-600',
      features: ['دعم 24/7', 'صيانة دورية', 'تحديثات أمنية', 'استجابة سريعة']
    }
  ];

  portfolio = [
    {
      title: 'منصة التجارة الإلكترونية',
      description: 'متجر إلكتروني متكامل مع نظام إدارة المخزون والمدفوعات',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'تطوير ويب',
      categoryColor: 'bg-blue-100 text-blue-800',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe']
    },
    {
      title: 'تطبيق إدارة المهام',
      description: 'تطبيق جوال لإدارة المشاريع والمهام مع فريق العمل',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'تطبيق جوال',
      categoryColor: 'bg-green-100 text-green-800',
      technologies: ['Flutter', 'Firebase', 'Dart', 'Push Notifications']
    },
    {
      title: 'نظام إدارة المستشفيات',
      description: 'نظام شامل لإدارة المرضى والمواعيد والسجلات الطبية',
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'نظام إدارة',
      categoryColor: 'bg-purple-100 text-purple-800',
      technologies: ['Angular', 'ASP.NET', 'SQL Server', 'Azure']
    },
    {
      title: 'منصة التعليم الإلكتروني',
      description: 'منصة تفاعلية للتعلم عن بُعد مع أدوات التقييم والمتابعة',
      image: 'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'تطوير ويب',
      categoryColor: 'bg-blue-100 text-blue-800',
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'WebRTC']
    },
    {
      title: 'تطبيق الخدمات المصرفية',
      description: 'تطبيق آمن للخدمات المصرفية الرقمية والتحويلات',
      image: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'تطبيق جوال',
      categoryColor: 'bg-green-100 text-green-800',
      technologies: ['React Native', 'Blockchain', 'Encryption', 'Biometrics']
    },
    {
      title: 'نظام إدارة المخازن',
      description: 'حل متكامل لإدارة المخزون والمبيعات والتقارير المالية',
      image: 'https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'نظام إدارة',
      categoryColor: 'bg-purple-100 text-purple-800',
      technologies: ['Django', 'PostgreSQL', 'Redis', 'Docker']
    }
  ];

  stats = [
    { number: '200+', label: 'مشروع مكتمل' },
    { number: '150+', label: 'عميل راضي' },
    { number: '15+', label: 'مطور متخصص' },
    { number: '5+', label: 'سنوات خبرة' }
  ];

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
}

bootstrapApplication(App);