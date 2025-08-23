import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hr-system',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="pt-24 pb-12">
      <!-- Hero Section -->
      <section class="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                نظام إدارة الموارد البشرية
              </h1>
              <p class="text-xl text-gray-600 mb-8 leading-relaxed">
                حل شامل ومتكامل لإدارة جميع عمليات الموارد البشرية في شركتك من الألف إلى الياء
              </p>
              <div class="flex flex-col sm:flex-row gap-4 mb-8">
                <a routerLink="/contact" 
                   class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors text-center">
                  طلب عرض توضيحي
                </a>
                <a href="tel:+966501234567" 
                   class="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-medium transition-colors text-center">
                  اتصل بنا الآن
                </a>
              </div>
            </div>
            <div class="relative">
              <img src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800" 
                   alt="HR Management System" 
                   class="w-full h-96 object-cover rounded-2xl shadow-2xl">
              <div class="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      <!-- Key Features -->
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              الميزات الرئيسية لنظام HR
            </h2>
            <p class="text-xl text-gray-600">
              كل ما تحتاجه لإدارة الموارد البشرية في مكان واحد
            </p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div *ngFor="let feature of hrFeatures" 
                 class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div class="w-14 h-14 rounded-xl flex items-center justify-center mb-4 text-3xl"
                   [ngClass]="feature.bgColor">
                {{ feature.icon }}
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-3">{{ feature.title }}</h3>
              <p class="text-gray-600 leading-relaxed mb-4">{{ feature.description }}</p>
              <ul class="space-y-2">
                <li *ngFor="let benefit of feature.benefits" class="flex items-center text-sm text-gray-600">
                  <span class="w-2 h-2 bg-blue-500 rounded-full ml-2"></span>
                  {{ benefit }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- System Benefits -->
      <section class="py-20 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                فوائد استخدام نظام HR المتطور
              </h2>
              <div class="space-y-6">
                <div *ngFor="let benefit of systemBenefits" class="flex items-start">
                  <div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mt-1 ml-4">
                    <span class="text-blue-600 text-sm">✓</span>
                  </div>
                  <div>
                    <h4 class="font-bold text-gray-900 mb-2">{{ benefit.title }}</h4>
                    <p class="text-gray-600">{{ benefit.description }}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="relative">
              <img src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800" 
                   alt="HR Benefits" 
                   class="w-full h-96 object-cover rounded-2xl shadow-lg">
            </div>
          </div>
        </div>
      </section>

      <!-- Pricing Plans -->
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              خطط الأسعار
            </h2>
            <p class="text-xl text-gray-600">
              اختر الخطة التي تناسب حجم شركتك واحتياجاتك
            </p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div *ngFor="let plan of pricingPlans; let i = index" 
                 class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                 [class.border-2]="plan.popular"
                 [class.border-blue-500]="plan.popular"
                 [class.relative]="plan.popular">
              <div *ngIf="plan.popular" 
                   class="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                الأكثر شعبية
              </div>
              <div class="text-center mb-8">
                <h3 class="text-2xl font-bold text-gray-900 mb-2">{{ plan.name }}</h3>
                <p class="text-gray-600 mb-4">{{ plan.description }}</p>
                <div class="text-4xl font-bold text-blue-600 mb-2">{{ plan.price }}</div>
                <p class="text-gray-500">{{ plan.period }}</p>
              </div>
              <ul class="space-y-3 mb-8">
                <li *ngFor="let feature of plan.features" class="flex items-center">
                  <span class="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center ml-3">
                    <span class="text-green-600 text-xs">✓</span>
                  </span>
                  {{ feature }}
                </li>
              </ul>
              <a routerLink="/contact" 
                 class="w-full text-center py-3 px-6 rounded-lg font-medium transition-colors"
                 [class]="plan.popular ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-900'">
                {{ plan.buttonText }}
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl lg:text-4xl font-bold text-white mb-6">
            جاهز لتحسين إدارة الموارد البشرية؟
          </h2>
          <p class="text-xl text-blue-100 mb-8">
            احصل على عرض توضيحي مجاني واكتشف كيف يمكن لنظام HR تحسين كفاءة شركتك
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a routerLink="/contact" 
               class="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-medium transition-colors">
              احجز عرض توضيحي
            </a>
            <a href="tel:+966501234567" 
               class="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-medium transition-colors">
              اتصل بنا الآن
            </a>
          </div>
        </div>
      </section>
    </div>
  `
})
export class HrSystemComponent {
  hrFeatures = [
    {
      icon: '👤',
      title: 'إدارة الموظفين',
      description: 'إدارة شاملة لبيانات الموظفين والملفات الشخصية',
      bgColor: 'bg-blue-100',
      benefits: [
        'ملفات موظفين رقمية',
        'تتبع المناصب والأقسام',
        'إدارة العقود والمستندات',
        'سجل التوظيف والترقيات'
      ]
    },
    {
      icon: '⏰',
      title: 'الحضور والانصراف',
      description: 'نظام دقيق لتتبع أوقات العمل والحضور',
      bgColor: 'bg-green-100',
      benefits: [
        'تسجيل الحضور الإلكتروني',
        'تتبع ساعات العمل الإضافية',
        'تقارير الحضور التفصيلية',
        'ربط مع أجهزة البصمة'
      ]
    },
    {
      icon: '💰',
      title: 'إدارة الرواتب',
      description: 'حساب الرواتب والمكافآت تلقائياً',
      bgColor: 'bg-yellow-100',
      benefits: [
        'حساب الراتب الأساسي والبدلات',
        'خصم الضرائب والتأمينات',
        'كشوف رواتب إلكترونية',
        'تحويل بنكي مباشر'
      ]
    },
    {
      icon: '🏖️',
      title: 'إدارة الإجازات',
      description: 'نظام طلب وموافقة الإجازات الإلكتروني',
      bgColor: 'bg-purple-100',
      benefits: [
        'طلب الإجازات إلكترونياً',
        'موافقة المدراء المباشرين',
        'تتبع رصيد الإجازات',
        'تقويم الإجازات'
      ]
    },
    {
      icon: '📊',
      title: 'تقييم الأداء',
      description: 'أدوات شاملة لتقييم ومتابعة أداء الموظفين',
      bgColor: 'bg-indigo-100',
      benefits: [
        'نماذج تقييم مخصصة',
        'تقييم 360 درجة',
        'تتبع الأهداف والإنجازات',
        'خطط التطوير الوظيفي'
      ]
    },
    {
      icon: '📈',
      title: 'التقارير والتحليلات',
      description: 'تقارير مفصلة وتحليلات ذكية للموارد البشرية',
      bgColor: 'bg-pink-100',
      benefits: [
        'تقارير الحضور والغياب',
        'تحليل تكاليف الموظفين',
        'إحصائيات الأداء',
        'مؤشرات الموارد البشرية'
      ]
    }
  ];

  systemBenefits = [
    {
      title: 'توفير الوقت والجهد',
      description: 'أتمتة العمليات الروتينية توفر ساعات عمل يومياً لفريق الموارد البشرية'
    },
    {
      title: 'تقليل الأخطاء',
      description: 'الحسابات الآلية تقلل من الأخطاء البشرية في الرواتب والبيانات'
    },
    {
      title: 'تحسين الشفافية',
      description: 'الموظفون يمكنهم الوصول لبياناتهم وطلب الخدمات بشفافية كاملة'
    },
    {
      title: 'اتخاذ قرارات مدروسة',
      description: 'التقارير والتحليلات تساعد الإدارة في اتخاذ قرارات استراتيجية'
    },
    {
      title: 'الامتثال للقوانين',
      description: 'النظام يضمن الامتثال لقوانين العمل والضرائب المحلية'
    },
    {
      title: 'تحسين رضا الموظفين',
      description: 'الخدمات الذاتية والشفافية تحسن من تجربة الموظفين'
    }
  ];

  pricingPlans = [
    {
      name: 'الخطة الأساسية',
      description: 'للشركات الصغيرة (حتى 50 موظف)',
      price: '2,500 ريال',
      period: 'شهرياً',
      popular: false,
      buttonText: 'ابدأ الآن',
      features: [
        'إدارة الموظفين الأساسية',
        'تسجيل الحضور والانصراف',
        'حساب الرواتب البسيط',
        'إدارة الإجازات',
        'تقارير أساسية',
        'دعم فني خلال ساعات العمل'
      ]
    },
    {
      name: 'الخطة المتقدمة',
      description: 'للشركات المتوسطة (حتى 200 موظف)',
      price: '4,500 ريال',
      period: 'شهرياً',
      popular: true,
      buttonText: 'الأكثر شعبية',
      features: [
        'جميع ميزات الخطة الأساسية',
        'تقييم الأداء المتقدم',
        'إدارة التدريب والتطوير',
        'تقارير وتحليلات متقدمة',
        'تطبيق جوال للموظفين',
        'دعم فني 24/7',
        'تخصيص النظام'
      ]
    },
    {
      name: 'الخطة المؤسسية',
      description: 'للشركات الكبيرة (+200 موظف)',
      price: '8,000 ريال',
      period: 'شهرياً',
      popular: false,
      buttonText: 'تواصل معنا',
      features: [
        'جميع ميزات الخطة المتقدمة',
        'إدارة متعددة الفروع',
        'تكامل مع الأنظمة الأخرى',
        'ذكاء اصطناعي للتحليلات',
        'مدير حساب مخصص',
        'تدريب شامل للفريق',
        'نسخ احتياطية متقدمة'
      ]
    }
  ];
}