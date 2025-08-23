import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-ecommerce-project',
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
                  تطوير ويب
                </span>
              </div>
              <h1 class="text-4xl lg:text-5xl font-bold text-white mb-6">
                منصة التجارة الإلكترونية
              </h1>
              <p class="text-xl text-blue-100 mb-8 leading-relaxed">
                متجر إلكتروني متكامل مع نظام إدارة المخزون والمدفوعات، مصمم لتوفير تجربة تسوق استثنائية للعملاء وإدارة فعالة للتجار.
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
              <img src="https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800" 
                   alt="E-commerce Platform" 
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
                  تم تطوير هذه المنصة لتكون حلاً شاملاً للتجارة الإلكترونية، حيث تجمع بين سهولة الاستخدام للعملاء وقوة الإدارة للتجار. 
                  المنصة مصممة لتدعم آلاف المنتجات والعملاء مع ضمان الأداء العالي والأمان.
                </p>
                
                <h3 class="text-xl font-bold text-gray-900 mb-4">الميزات الرئيسية:</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div *ngFor="let feature of features" class="flex items-start">
                    <div class="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1 mr-3">
                      <span class="text-blue-600 text-sm">✓</span>
                    </div>
                    <div>
                      <h4 class="font-semibold text-gray-900 mb-1">{{ feature.title }}</h4>
                      <p class="text-gray-600 text-sm">{{ feature.description }}</p>
                    </div>
                  </div>
                </div>

                <h3 class="text-xl font-bold text-gray-900 mb-4">التحديات والحلول:</h3>
                <div class="space-y-4 mb-8">
                  <div *ngFor="let challenge of challenges" class="bg-gray-50 p-4 rounded-lg">
                    <h4 class="font-semibold text-gray-900 mb-2">{{ challenge.title }}</h4>
                    <p class="text-gray-600 text-sm">{{ challenge.solution }}</p>
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
              <div class="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-xl text-white">
                <h3 class="font-bold mb-4">النتائج المحققة</h3>
                <div class="space-y-3">
                  <div *ngFor="let result of results" class="text-center">
                    <div class="text-2xl font-bold">{{ result.value }}</div>
                    <div class="text-blue-100 text-sm">{{ result.label }}</div>
                  </div>
                </div>
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
export class EcommerceProjectComponent {
  technologies = ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS', 'Redis'];

  features = [
    {
      title: 'واجهة مستخدم متقدمة',
      description: 'تصميم عصري وسهل الاستخدام مع تجربة تسوق سلسة'
    },
    {
      title: 'نظام إدارة المخزون',
      description: 'تتبع المنتجات والكميات مع تنبيهات النفاد'
    },
    {
      title: 'بوابات دفع متعددة',
      description: 'دعم جميع طرق الدفع الشائعة مع أمان عالي'
    },
    {
      title: 'نظام التقييمات',
      description: 'تقييمات العملاء والمراجعات لبناء الثقة'
    },
    {
      title: 'إدارة الطلبات',
      description: 'نظام شامل لتتبع ومعالجة الطلبات'
    },
    {
      title: 'تحليلات مفصلة',
      description: 'تقارير شاملة عن المبيعات والأداء'
    }
  ];

  challenges = [
    {
      title: 'الأداء مع آلاف المنتجات',
      solution: 'تم استخدام تقنيات التخزين المؤقت وفهرسة قاعدة البيانات لضمان سرعة التحميل'
    },
    {
      title: 'أمان المدفوعات',
      solution: 'تطبيق معايير PCI DSS وتشفير البيانات الحساسة'
    },
    {
      title: 'التوافق مع الأجهزة المختلفة',
      solution: 'تصميم متجاوب يعمل بسلاسة على جميع الأجهزة والمتصفحات'
    }
  ];

  projectInfo = [
    { label: 'العميل', value: 'شركة التجارة الذكية' },
    { label: 'المدة', value: '4 أشهر' },
    { label: 'الفريق', value: '6 مطورين' },
    { label: 'المنصة', value: 'ويب + موبايل' },
    { label: 'اللغة', value: 'عربي + إنجليزي' }
  ];

  results = [
    { value: '300%', label: 'زيادة في المبيعات' },
    { value: '50K+', label: 'مستخدم نشط' },
    { value: '99.9%', label: 'وقت التشغيل' },
    { value: '4.8/5', label: 'تقييم العملاء' }
  ];
}