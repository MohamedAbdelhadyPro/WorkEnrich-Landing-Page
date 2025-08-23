import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-accounting-system',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="pt-24 pb-12">
      <!-- Hero Section -->
      <section class="bg-gradient-to-br from-green-50 via-white to-emerald-50 py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                نظام إدارة الحسابات المالية
              </h1>
              <p class="text-xl text-gray-600 mb-8 leading-relaxed">
                حل محاسبي شامل ومتكامل لإدارة جميع العمليات المالية والمحاسبية في شركتك بدقة واحترافية
              </p>
              <div class="flex flex-col sm:flex-row gap-4 mb-8">
                <a routerLink="/contact" 
                   class="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium transition-colors text-center">
                  طلب عرض توضيحي
                </a>
                <a href="tel:+966501234567" 
                   class="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-3 rounded-lg font-medium transition-colors text-center">
                  اتصل بنا الآن
                </a>
              </div>
            </div>
            <div class="relative">
              <img src="https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800" 
                   alt="Accounting Management System" 
                   class="w-full h-96 object-cover rounded-2xl shadow-2xl">
              <div class="absolute inset-0 bg-gradient-to-t from-green-600/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      <!-- Key Features -->
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              الميزات الرئيسية لنظام المحاسبة
            </h2>
            <p class="text-xl text-gray-600">
              إدارة مالية شاملة لجميع احتياجات شركتك المحاسبية
            </p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div *ngFor="let feature of accountingFeatures" 
                 class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div class="w-14 h-14 rounded-xl flex items-center justify-center mb-4 text-3xl"
                   [ngClass]="feature.bgColor">
                {{ feature.icon }}
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-3">{{ feature.title }}</h3>
              <p class="text-gray-600 leading-relaxed mb-4">{{ feature.description }}</p>
              <ul class="space-y-2">
                <li *ngFor="let benefit of feature.benefits" class="flex items-center text-sm text-gray-600">
                  <span class="w-2 h-2 bg-green-500 rounded-full ml-2"></span>
                  {{ benefit }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Financial Reports -->
      <section class="py-20 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              التقارير المالية المتقدمة
            </h2>
            <p class="text-xl text-gray-600">
              تقارير شاملة ودقيقة لاتخاذ القرارات المالية الصحيحة
            </p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div *ngFor="let report of financialReports" 
                 class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <div class="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-3xl"
                   [ngClass]="report.bgColor">
                {{ report.icon }}
              </div>
              <h3 class="text-lg font-bold text-gray-900 mb-2">{{ report.title }}</h3>
              <p class="text-gray-600 text-sm">{{ report.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- System Benefits -->
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div class="relative">
              <img src="https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=800" 
                   alt="Accounting Benefits" 
                   class="w-full h-96 object-cover rounded-2xl shadow-lg">
            </div>
            <div>
              <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                فوائد استخدام نظام المحاسبة المتطور
              </h2>
              <div class="space-y-6">
                <div *ngFor="let benefit of systemBenefits" class="flex items-start">
                  <div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mt-1 ml-4">
                    <span class="text-green-600 text-sm">✓</span>
                  </div>
                  <div>
                    <h4 class="font-bold text-gray-900 mb-2">{{ benefit.title }}</h4>
                    <p class="text-gray-600">{{ benefit.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Pricing Plans -->
      <section class="py-20 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              خطط الأسعار
            </h2>
            <p class="text-xl text-gray-600">
              اختر الخطة التي تناسب حجم شركتك ومتطلباتك المحاسبية
            </p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div *ngFor="let plan of pricingPlans; let i = index" 
                 class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                 [class.border-2]="plan.popular"
                 [class.border-green-500]="plan.popular"
                 [class.relative]="plan.popular">
              <div *ngIf="plan.popular" 
                   class="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                الأكثر شعبية
              </div>
              <div class="text-center mb-8">
                <h3 class="text-2xl font-bold text-gray-900 mb-2">{{ plan.name }}</h3>
                <p class="text-gray-600 mb-4">{{ plan.description }}</p>
                <div class="text-4xl font-bold text-green-600 mb-2">{{ plan.price }}</div>
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
                 [class]="plan.popular ? 'bg-green-600 hover:bg-green-700 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-900'">
                {{ plan.buttonText }}
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl lg:text-4xl font-bold text-white mb-6">
            جاهز لتحسين إدارة حساباتك المالية؟
          </h2>
          <p class="text-xl text-green-100 mb-8">
            احصل على عرض توضيحي مجاني واكتشف كيف يمكن لنظام المحاسبة تحسين إدارة أموال شركتك
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a routerLink="/contact" 
               class="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-medium transition-colors">
               احجز عرض توضيحي
            </a>
            <a href="tel:+966501234567" 
               class="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-lg font-medium transition-colors">
              اتصل بنا الآن
            </a>
          </div>
        </div>
      </section>
    </div>
  `
})
export class AccountingSystemComponent {
  accountingFeatures = [
    {
      icon: '🧾',
      title: 'إدارة الفواتير',
      description: 'إنشاء وإدارة الفواتير بسهولة مع تتبع حالة الدفع',
      bgColor: 'bg-blue-100',
      benefits: [
        'إنشاء فواتير احترافية',
        'تتبع حالة الدفع',
        'إرسال تلقائي للعملاء',
        'فواتير متعددة العملات'
      ]
    },
    {
      icon: '💳',
      title: 'إدارة المدفوعات',
      description: 'تتبع جميع المدفوعات الواردة والصادرة',
      bgColor: 'bg-green-100',
      benefits: [
        'تسجيل المدفوعات النقدية والبنكية',
        'ربط مع البنوك الإلكترونية',
        'تتبع الشيكات المؤجلة',
        'تقارير التدفق النقدي'
      ]
    },
    {
      icon: '👥',
      title: 'إدارة العملاء والموردين',
      description: 'قاعدة بيانات شاملة للعملاء والموردين',
      bgColor: 'bg-purple-100',
      benefits: [
        'ملفات العملاء والموردين',
        'تتبع المديونيات',
        'حدود ائتمانية',
        'تقارير الأعمار'
      ]
    },
    {
      icon: '📊',
      title: 'التقارير المالية',
      description: 'تقارير مالية شاملة ومفصلة',
      bgColor: 'bg-yellow-100',
      benefits: [
        'قائمة الدخل',
        'الميزانية العمومية',
        'قائمة التدفقات النقدية',
        'تقارير الربحية'
      ]
    },
    {
      icon: '🏦',
      title: 'إدارة البنوك',
      description: 'ربط وإدارة الحسابات البنكية المتعددة',
      bgColor: 'bg-indigo-100',
      benefits: [
        'ربط الحسابات البنكية',
        'تسوية بنكية تلقائية',
        'تتبع الأرصدة',
        'كشوف حساب إلكترونية'
      ]
    },
    {
      icon: '📈',
      title: 'التحليل المالي',
      description: 'أدوات تحليل متقدمة للأداء المالي',
      bgColor: 'bg-pink-100',
      benefits: [
        'مؤشرات الأداء المالي',
        'تحليل الاتجاهات',
        'مقارنات دورية',
        'توقعات مالية'
      ]
    }
  ];

  financialReports = [
    {
      icon: '📋',
      title: 'قائمة الدخل',
      description: 'الإيرادات والمصروفات والأرباح',
      bgColor: 'bg-blue-100'
    },
    {
      icon: '⚖️',
      title: 'الميزانية العمومية',
      description: 'الأصول والخصوم وحقوق الملكية',
      bgColor: 'bg-green-100'
    },
    {
      icon: '💰',
      title: 'التدفقات النقدية',
      description: 'حركة النقد الداخل والخارج',
      bgColor: 'bg-yellow-100'
    },
    {
      icon: '📊',
      title: 'تقارير الربحية',
      description: 'تحليل الربحية حسب المنتج والعميل',
      bgColor: 'bg-purple-100'
    }
  ];

  systemBenefits = [
    {
      title: 'دقة محاسبية عالية',
      description: 'النظام يضمن دقة الحسابات ويقلل من الأخطاء البشرية في العمليات المحاسبية'
    },
    {
      title: 'توفير الوقت والجهد',
      description: 'أتمتة العمليات المحاسبية توفر ساعات عمل يومياً لفريق المحاسبة'
    },
    {
      title: 'امتثال للمعايير المحاسبية',
      description: 'النظام يلتزم بالمعايير المحاسبية المحلية والدولية'
    },
    {
      title: 'تقارير فورية',
      description: 'الحصول على التقارير المالية في أي وقت بضغطة زر واحدة'
    },
    {
      title: 'أمان البيانات',
      description: 'حماية عالية للبيانات المالية الحساسة مع نسخ احتياطية منتظمة'
    },
    {
      title: 'سهولة المراجعة',
      description: 'تسهيل عمليات المراجعة الداخلية والخارجية مع مسارات تدقيق واضحة'
    }
  ];

  pricingPlans = [
    {
      name: 'الخطة الأساسية',
      description: 'للشركات الصغيرة والمتوسطة',
      price: '3,000 ريال',
      period: 'شهرياً',
      popular: false,
      buttonText: 'ابدأ الآن',
      features: [
        'إدارة الفواتير والمدفوعات',
        'إدارة العملاء والموردين',
        'التقارير المالية الأساسية',
        'إدارة حساب بنكي واحد',
        'دعم فني خلال ساعات العمل',
        'تدريب أساسي للفريق'
      ]
    },
    {
      name: 'الخطة المتقدمة',
      description: 'للشركات المتوسطة والكبيرة',
      price: '5,500 ريال',
      period: 'شهرياً',
      popular: true,
      buttonText: 'الأكثر شعبية',
      features: [
        'جميع ميزات الخطة الأساسية',
        'تقارير مالية متقدمة',
        'إدارة حسابات بنكية متعددة',
        'تحليل مالي متقدم',
        'ربط مع البنوك الإلكترونية',
        'دعم فني 24/7',
        'تخصيص التقارير'
      ]
    },
    {
      name: 'الخطة المؤسسية',
      description: 'للمؤسسات الكبيرة والمجموعات',
      price: '9,500 ريال',
      period: 'شهرياً',
      popular: false,
      buttonText: 'تواصل معنا',
      features: [
        'جميع ميزات الخطة المتقدمة',
        'إدارة متعددة الشركات',
        'تكامل مع أنظمة ERP',
        'تقارير مخصصة متقدمة',
        'مدير حساب مخصص',
        'تدريب شامل ومتقدم',
        'استشارات محاسبية'
      ]
    }
  ];
}