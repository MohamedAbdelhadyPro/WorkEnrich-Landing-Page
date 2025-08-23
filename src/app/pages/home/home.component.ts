import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <!-- Hero Section -->
    <section class="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="text-center lg:text-right">
            <h1 class="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              نحن نبني 
              <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                حلول البرمجة
              </span>
              التي تحتاجها شركتك
            </h1>
            <p class="text-xl text-gray-600 mb-8 leading-relaxed">
              بينما ندير بعض العمليات من أجلك. متخصصون في تطوير أنظمة إدارة الموارد البشرية، 
              علاقات العملاء، تخطيط موارد المؤسسة، والمبيعات والمخزون.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <a routerLink="/contact" 
                 class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all transform hover:scale-105 shadow-lg">
                احصل على استشارة مجانية
              </a>
              <a routerLink="/development-services" 
                 class="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg text-lg font-medium transition-all text-center">
                استكشف خدماتنا
              </a>
            </div>
            <div class="flex items-center justify-center lg:justify-start space-x-8">
              <div class="text-center">
                <div class="text-3xl font-bold text-blue-600">500+</div>
                <div class="text-gray-600 text-sm">مشروع مكتمل</div>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold text-purple-600">200+</div>
                <div class="text-gray-600 text-sm">عميل راضي</div>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold text-green-600">10+</div>
                <div class="text-gray-600 text-sm">سنوات خبرة</div>
              </div>
            </div>
          </div>
          <div class="relative">
            <div class="relative z-10 bg-white rounded-2xl shadow-2xl p-8 transform rotate-2">
              <img src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800" 
                   alt="Software Solutions" 
                   class="w-full h-64 object-cover rounded-lg mb-4">
              <div class="space-y-3">
                <div class="flex items-center space-x-3">
                  <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span class="text-gray-700">أنظمة نشطة: 150+</span>
                </div>
                <div class="flex items-center space-x-3">
                  <div class="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span class="text-gray-700">فريق المطورين: 25+</span>
                </div>
                <div class="flex items-center space-x-3">
                  <div class="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span class="text-gray-700">تقنيات حديثة: 30+</span>
                </div>
              </div>
            </div>
            <div class="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl transform -rotate-2"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Overview -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            خدماتنا الأساسية
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            نقدم حلول برمجية متكاملة تلبي احتياجات شركتك وتساعدها على النمو والازدهار
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div *ngFor="let service of mainServices" 
               class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 group text-center">
            <div class="w-16 h-16 mx-auto mb-6 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg text-4xl"
                 [ngClass]="service.bgColor">
              {{ service.icon }}
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">{{ service.title }}</h3>
            <p class="text-gray-600 leading-relaxed mb-4">{{ service.description }}</p>
            <a [routerLink]="service.link" 
               class="text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors">
              اعرف المزيد ←
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              لماذا تختار TechCraft Solutions؟
            </h2>
            <p class="text-lg text-gray-600 mb-8">
              نحن لا نقدم فقط حلول برمجية، بل نصبح شريكك في النجاح من خلال إدارة العمليات التقنية وتقديم الدعم المستمر.
            </p>
            <div class="space-y-6">
              <div *ngFor="let feature of whyChooseUs" class="flex items-start">
                <div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mt-1 ml-4">
                  <span class="text-blue-600 text-sm">✓</span>
                </div>
                <div>
                  <h4 class="font-bold text-gray-900 mb-2">{{ feature.title }}</h4>
                  <p class="text-gray-600">{{ feature.description }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="relative">
            <img src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800" 
                 alt="Our Team" 
                 class="w-full h-96 object-cover rounded-2xl shadow-lg">
            <div class="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
      <div class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl lg:text-4xl font-bold text-white mb-6">
          جاهز لتطوير حلول برمجية لشركتك؟
        </h2>
        <p class="text-xl text-blue-100 mb-8">
          احصل على استشارة مجانية واكتشف كيف يمكننا مساعدتك في تحقيق أهدافك التقنية
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a routerLink="/contact" 
             class="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-medium transition-colors">
            احجز استشارة مجانية
          </a>
          <a routerLink="/case-studies" 
             class="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-medium transition-colors">
            شاهد أعمالنا
          </a>
        </div>
      </div>
    </section>
  `
})
export class HomeComponent {
  mainServices = [
    {
      icon: '👥',
      title: 'أنظمة الموارد البشرية',
      description: 'إدارة شاملة للموظفين، الحضور، الرواتب والإجازات',
      bgColor: 'bg-blue-100',
      link: '/development-services'
    },
    {
      icon: '🤝',
      title: 'أنظمة إدارة العملاء',
      description: 'تنظيم علاقات العملاء وتحسين المبيعات',
      bgColor: 'bg-green-100',
      link: '/development-services'
    },
    {
      icon: '⚙️',
      title: 'تخطيط موارد المؤسسة',
      description: 'تكامل جميع عمليات الشركة في نظام واحد',
      bgColor: 'bg-purple-100',
      link: '/development-services'
    },
    {
      icon: '📊',
      title: 'أنظمة المبيعات والمخزون',
      description: 'إدارة المخزون وتتبع المبيعات والتقارير',
      bgColor: 'bg-orange-100',
      link: '/development-services'
    }
  ];

  whyChooseUs = [
    {
      title: 'خبرة عميقة',
      description: 'أكثر من 10 سنوات في تطوير الحلول البرمجية للشركات'
    },
    {
      title: 'حلول مخصصة',
      description: 'نطور الأنظمة وفقاً لاحتياجاتك الخاصة وليس قوالب جاهزة'
    },
    {
      title: 'دعم مستمر',
      description: 'فريق دعم فني متاح 24/7 لضمان استمرارية عملك'
    },
    {
      title: 'إدارة العمليات',
      description: 'ندير الأنظمة نيابة عنك لتركز على نمو أعمالك'
    },
    {
      title: 'تقنيات حديثة',
      description: 'نستخدم أحدث التقنيات لضمان الأداء والأمان'
    },
    {
      title: 'أسعار تنافسية',
      description: 'حلول عالية الجودة بأسعار مناسبة لجميع أحجام الشركات'
    }
  ];
}