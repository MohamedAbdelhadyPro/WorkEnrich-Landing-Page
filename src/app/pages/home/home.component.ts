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
              حلول برمجية 
              <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                متخصصة
              </span>
              لشركتك
            </h1>
            <p class="text-xl text-gray-600 mb-8 leading-relaxed">
              نقدم أنظمة إدارة الموارد البشرية وأنظمة المحاسبة المالية المتطورة 
              لتحسين كفاءة عمليات شركتك وزيادة الإنتاجية
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <a routerLink="/contact" 
                 class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all transform hover:scale-105 shadow-lg">
                احصل على عرض مجاني
              </a>
              <a routerLink="/services" 
                 class="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg text-lg font-medium transition-all text-center">
                استكشف حلولنا
              </a>
            </div>
            <div class="flex items-center justify-center lg:justify-start space-x-8">
              <div class="text-center">
                <div class="text-3xl font-bold text-blue-600">200+</div>
                <div class="text-gray-600 text-sm">شركة تثق بنا</div>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold text-purple-600">50K+</div>
                <div class="text-gray-600 text-sm">مستخدم نشط</div>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold text-green-600">8+</div>
                <div class="text-gray-600 text-sm">سنوات خبرة</div>
              </div>
            </div>
          </div>
          <div class="relative">
            <div class="relative z-10 bg-white rounded-2xl shadow-2xl p-8 transform rotate-2">
              <img src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800" 
                   alt="HR Management System" 
                   class="w-full h-64 object-cover rounded-lg mb-4">
              <div class="space-y-3">
                <div class="flex items-center space-x-3">
                  <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span class="text-gray-700">أنظمة نشطة: 200+</span>
                </div>
                <div class="flex items-center space-x-3">
                  <div class="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span class="text-gray-700">موظف مُدار: 50K+</span>
                </div>
                <div class="flex items-center space-x-3">
                  <div class="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span class="text-gray-700">معاملة مالية يومياً: 10K+</span>
                </div>
              </div>
            </div>
            <div class="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl transform -rotate-2"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Products -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            برامجنا المتخصصة
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            حلول برمجية متكاملة مصممة خصيصاً لتلبية احتياجات الشركات الحديثة
          </p>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- HR System -->
          <div class="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl hover:shadow-xl transition-all duration-300">
            <div class="flex items-center mb-6">
              <div class="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center text-white text-3xl ml-4">
                👥
              </div>
              <div>
                <h3 class="text-2xl font-bold text-gray-900">نظام إدارة الموارد البشرية</h3>
                <p class="text-blue-600 font-medium">HR Management System</p>
              </div>
            </div>
            <p class="text-gray-700 mb-6 leading-relaxed">
              نظام شامل لإدارة جميع عمليات الموارد البشرية من الحضور والانصراف إلى الرواتب والإجازات والتقييمات
            </p>
            <div class="grid grid-cols-2 gap-4 mb-6">
              <div *ngFor="let feature of hrFeatures" class="flex items-center">
                <span class="w-2 h-2 bg-blue-500 rounded-full ml-2"></span>
                <span class="text-gray-700 text-sm">{{ feature }}</span>
              </div>
            </div>
            <a routerLink="/hr-system" 
               class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors inline-block">
              اعرف المزيد عن نظام HR
            </a>
          </div>

          <!-- Accounting System -->
          <div class="bg-gradient-to-br from-green-50 to-emerald-100 p-8 rounded-2xl hover:shadow-xl transition-all duration-300">
            <div class="flex items-center mb-6">
              <div class="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center text-white text-3xl ml-4">
                💰
              </div>
              <div>
                <h3 class="text-2xl font-bold text-gray-900">نظام إدارة الحسابات</h3>
                <p class="text-green-600 font-medium">Accounting Management System</p>
              </div>
            </div>
            <p class="text-gray-700 mb-6 leading-relaxed">
              نظام محاسبي متكامل يدير جميع العمليات المالية من الفواتير والمدفوعات إلى التقارير المالية والميزانيات
            </p>
            <div class="grid grid-cols-2 gap-4 mb-6">
              <div *ngFor="let feature of accountingFeatures" class="flex items-center">
                <span class="w-2 h-2 bg-green-500 rounded-full ml-2"></span>
                <span class="text-gray-700 text-sm">{{ feature }}</span>
              </div>
            </div>
            <a routerLink="/accounting-system" 
               class="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors inline-block">
              اعرف المزيد عن نظام المحاسبة
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            لماذا تختار WorkEnrich؟
          </h2>
          <p class="text-xl text-gray-600">
            نحن نقدم أكثر من مجرد برامج، نقدم حلول متكاملة لنجاح أعمالك
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div *ngFor="let advantage of advantages" 
               class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center">
            <div class="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-3xl"
                 [ngClass]="advantage.bgColor">
              {{ advantage.icon }}
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">{{ advantage.title }}</h3>
            <p class="text-gray-600 leading-relaxed">{{ advantage.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
      <div class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl lg:text-4xl font-bold text-white mb-6">
          جاهز لتطوير شركتك؟
        </h2>
        <p class="text-xl text-blue-100 mb-8">
          احصل على استشارة مجانية واكتشف كيف يمكن لحلولنا البرمجية تحسين أداء شركتك
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a routerLink="/contact" 
             class="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-medium transition-colors">
            احجز استشارة مجانية
          </a>
          <a routerLink="/services" 
             class="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-medium transition-colors">
            تصفح خدماتنا
          </a>
        </div>
      </div>
    </section>
  `
})
export class HomeComponent {
  hrFeatures = [
    'إدارة الموظفين',
    'الحضور والانصراف',
    'حساب الرواتب',
    'إدارة الإجازات',
    'تقييم الأداء',
    'التقارير التفصيلية'
  ];

  accountingFeatures = [
    'إدارة الفواتير',
    'تتبع المدفوعات',
    'التقارير المالية',
    'إدارة الميزانية',
    'حسابات العملاء',
    'التحليل المالي'
  ];

  advantages = [
    {
      icon: '🎯',
      title: 'حلول مخصصة',
      description: 'نطور الأنظمة وفقاً لاحتياجاتك الخاصة وليس قوالب جاهزة',
      bgColor: 'bg-blue-100'
    },
    {
      icon: '🔒',
      title: 'أمان عالي',
      description: 'نطبق أعلى معايير الأمان لحماية بيانات شركتك الحساسة',
      bgColor: 'bg-green-100'
    },
    {
      icon: '⚡',
      title: 'أداء سريع',
      description: 'أنظمة محسنة للأداء العالي تتحمل أعباء العمل الكثيفة',
      bgColor: 'bg-yellow-100'
    },
    {
      icon: '🛠️',
      title: 'دعم مستمر',
      description: 'فريق دعم فني متاح 24/7 لضمان استمرارية عمل أنظمتك',
      bgColor: 'bg-purple-100'
    },
    {
      icon: '📊',
      title: 'تقارير ذكية',
      description: 'تقارير تحليلية متقدمة تساعدك في اتخاذ القرارات الصحيحة',
      bgColor: 'bg-indigo-100'
    },
    {
      icon: '💡',
      title: 'سهولة الاستخدام',
      description: 'واجهات بديهية وسهلة الاستخدام لجميع مستويات المستخدمين',
      bgColor: 'bg-pink-100'
    }
  ];
}