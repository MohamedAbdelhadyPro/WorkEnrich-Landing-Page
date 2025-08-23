import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-banking-app-project',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="pt-24 pb-12">
      <!-- Hero Section -->
      <section class="py-16" style="background: linear-gradient(135deg, #1A3477, #2563eb);">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div class="mb-4">
                <span class="px-3 py-1 bg-white/20 text-white text-sm font-medium rounded-full">
                  تطبيق جوال
                </span>
              </div>
              <h1 class="text-4xl lg:text-5xl font-bold text-white mb-6">
                تطبيق الخدمات المصرفية
              </h1>
              <p class="text-xl text-blue-100 mb-8 leading-relaxed">
                تطبيق آمن ومتطور للخدمات المصرفية الرقمية والتحويلات، مع أعلى معايير الأمان والحماية.
              </p>
              <div class="flex flex-wrap gap-2 mb-8">
                <span *ngFor="let tech of technologies" 
                      class="px-3 py-1 bg-white/20 text-white text-sm rounded-full">
                  {{ tech }}
                </span>
              </div>
              <a routerLink="/contact" 
                 class="bg-white hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors" style="color: #1A3477;">
                طلب مشروع مماثل
              </a>
            </div>
            <div class="relative">
              <img src="https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800" 
                   alt="Banking App" 
                   class="w-full h-96 object-cover rounded-2xl shadow-2xl">
            </div>
          </div>
        </div>
      </section>

      <!-- Project Details -->
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div class="lg:col-span-2">
              <h2 class="text-3xl font-bold text-gray-900 mb-6">تفاصيل المشروع</h2>
              <div class="prose prose-lg max-w-none">
                <p class="text-gray-600 mb-6">
                  تطبيق الخدمات المصرفية هو حل تقني متقدم يوفر جميع الخدمات المصرفية الأساسية والمتقدمة عبر الهاتف المحمول. 
                  يتميز التطبيق بأعلى معايير الأمان والحماية مع واجهة مستخدم بديهية وسهلة الاستخدام.
                </p>
                
                <h3 class="text-xl font-bold text-gray-900 mb-4">الخدمات المتاحة:</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div *ngFor="let service of services" class="flex items-start">
                    <div class="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center mt-1 mr-3">
                      <span class="text-emerald-600 text-sm">✓</span>
                    </div>
                    <div>
                      <h4 class="font-semibold text-gray-900 mb-1">{{ service.title }}</h4>
                      <p class="text-gray-600 text-sm">{{ service.description }}</p>
                    </div>
                  </div>
                </div>

                <h3 class="text-xl font-bold text-gray-900 mb-4">ميزات الأمان:</h3>
                <div class="space-y-4 mb-8">
                  <div *ngFor="let security of securityFeatures" class="bg-gray-50 p-4 rounded-lg">
                    <h4 class="font-semibold text-gray-900 mb-2">{{ security.title }}</h4>
                    <p class="text-gray-600 text-sm">{{ security.description }}</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="space-y-8">
              <!-- Project Info -->
              <div class="bg-gray-50 p-6 rounded-xl">
                <h3 class="font-bold text-gray-900 mb-4">معلومات المشروع</h3>
                <div class="space-y-3">
                  <div *ngFor="let info of projectInfo" class="flex justify-between">
                    <span class="text-gray-600">{{ info.label }}</span>
                    <span class="font-medium text-gray-900">{{ info.value }}</span>
                  </div>
                </div>
              </div>

              <!-- Results -->
              <div class="bg-gradient-to-r from-emerald-600 to-teal-600 p-6 rounded-xl text-white">
                <h3 class="font-bold mb-4">النتائج المحققة</h3>
                <div class="space-y-3">
                  <div *ngFor="let result of results" class="text-center">
                    <div class="text-2xl font-bold">{{ result.value }}</div>
                    <div class="text-emerald-100 text-sm">{{ result.label }}</div>
                  </div>
                </div>
              </div>

              <!-- Security Badge -->
              <div class="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-xl text-white text-center">
                <div class="text-3xl mb-2">🔒</div>
                <h3 class="font-bold mb-2">معتمد من البنك المركزي</h3>
                <p class="text-gray-300 text-sm">يلتزم بجميع معايير الأمان المصرفية</p>
              </div>

              <!-- CTA -->
              <div class="bg-gray-900 p-6 rounded-xl text-white text-center">
                <h3 class="font-bold mb-2">مهتم بمشروع مماثل؟</h3>
                <p class="text-gray-300 text-sm mb-4">احصل على استشارة مجانية</p>
                <a routerLink="/contact" 
                   class="bg-white text-gray-900 hover:bg-gray-100 px-6 py-2 rounded-lg font-medium transition-colors">
                  تواصل معنا
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `
})
export class BankingAppProjectComponent {
  technologies = ['React Native', 'Blockchain', 'AES Encryption', 'Biometrics', 'JWT', 'OAuth 2.0'];

  services = [
    {
      title: 'استعلام الرصيد',
      description: 'عرض رصيد الحسابات المختلفة في الوقت الفعلي'
    },
    {
      title: 'التحويلات المصرفية',
      description: 'تحويل الأموال محلياً ودولياً بأمان عالي'
    },
    {
      title: 'دفع الفواتير',
      description: 'دفع جميع أنواع الفواتير والخدمات الحكومية'
    },
    {
      title: 'إدارة البطاقات',
      description: 'تفعيل وإلغاء وتجديد البطاقات المصرفية'
    },
    {
      title: 'الاستثمار',
      description: 'خدمات الاستثمار والتداول في الأسهم والصناديق'
    },
    {
      title: 'القروض والتمويل',
      description: 'طلب القروض ومتابعة حالة الطلبات'
    },
    {
      title: 'خدمة العملاء',
      description: 'دردشة مباشرة مع خدمة العملاء على مدار الساعة'
    },
    {
      title: 'التقارير المالية',
      description: 'كشوف حساب مفصلة وتقارير الإنفاق'
    }
  ];

  securityFeatures = [
    {
      title: 'المصادقة البيومترية',
      description: 'تسجيل الدخول باستخدام بصمة الإصبع أو التعرف على الوجه'
    },
    {
      title: 'التشفير المتقدم',
      description: 'تشفير جميع البيانات باستخدام معايير AES-256'
    },
    {
      title: 'المصادقة الثنائية',
      description: 'طبقة حماية إضافية عبر الرسائل النصية أو التطبيق'
    },
    {
      title: 'مراقبة الأنشطة المشبوهة',
      description: 'نظام ذكي لاكتشاف الأنشطة غير المعتادة'
    }
  ];

  projectInfo = [
    { label: 'العميل', value: 'البنك الأهلي التجاري' },
    { label: 'المدة', value: '10 أشهر' },
    { label: 'الفريق', value: '15 مطور' },
    { label: 'المنصة', value: 'iOS + Android' },
    { label: 'المستخدمين', value: '2M+ مستخدم' }
  ];

  results = [
    { value: '2M+', label: 'مستخدم نشط' },
    { value: '99.99%', label: 'وقت التشغيل' },
    { value: '0', label: 'خرق أمني' },
    { value: '4.8/5', label: 'تقييم المستخدمين' }
  ];
}