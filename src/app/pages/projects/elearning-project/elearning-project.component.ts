import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-elearning-project',
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
                منصة التعليم الإلكتروني
              </h1>
              <p class="text-xl text-blue-100 mb-8 leading-relaxed">
                منصة تفاعلية شاملة للتعلم عن بُعد مع أدوات التقييم والمتابعة، تدعم الفصول الافتراضية والمحتوى التفاعلي.
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
              <img src="https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=800" 
                   alt="E-learning Platform" 
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
                  منصة التعليم الإلكتروني هي حل متكامل يهدف إلى توفير تجربة تعليمية متميزة عبر الإنترنت. 
                  تدعم المنصة جميع أنواع المحتوى التعليمي وتوفر أدوات تفاعلية للطلاب والمعلمين.
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
              <div class="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 rounded-xl text-white">
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
export class ElearningProjectComponent {
  technologies = ['Vue.js', 'Laravel', 'MySQL', 'WebRTC', 'Socket.io', 'AWS S3'];

  features = [
    {
      title: 'الفصول الافتراضية',
      description: 'فصول مباشرة بالفيديو مع أدوات التفاعل والمشاركة'
    },
    {
      title: 'إدارة المحتوى',
      description: 'رفع وتنظيم المحتوى التعليمي بصيغ متعددة'
    },
    {
      title: 'نظام الاختبارات',
      description: 'إنشاء اختبارات تفاعلية مع تصحيح تلقائي'
    },
    {
      title: 'تتبع التقدم',
      description: 'مراقبة تقدم الطلاب وإنجازاتهم'
    },
    {
      title: 'المنتديات التعليمية',
      description: 'مساحات للنقاش والتفاعل بين الطلاب والمعلمين'
    },
    {
      title: 'الشهادات الرقمية',
      description: 'إصدار شهادات إنجاز رقمية للطلاب'
    },
    {
      title: 'التقويم الأكاديمي',
      description: 'جدولة المحاضرات والمهام والاختبارات'
    },
    {
      title: 'التقارير التحليلية',
      description: 'تحليلات مفصلة عن أداء الطلاب والمحتوى'
    }
  ];

  challenges = [
    {
      title: 'جودة البث المباشر',
      solution: 'استخدام WebRTC وخوادم متخصصة لضمان جودة عالية للفيديو والصوت'
    },
    {
      title: 'دعم أعداد كبيرة من المستخدمين',
      solution: 'تطبيق تقنيات التوسع الأفقي والتوزيع الذكي للأحمال'
    },
    {
      title: 'التوافق مع الأجهزة المختلفة',
      solution: 'تصميم متجاوب وتطبيق جوال مخصص لضمان الوصول من أي جهاز'
    },
    {
      title: 'أمان المحتوى التعليمي',
      solution: 'تشفير المحتوى وحماية حقوق الملكية الفكرية'
    }
  ];

  projectInfo = [
    { label: 'العميل', value: 'أكاديمية المستقبل' },
    { label: 'المدة', value: '6 أشهر' },
    { label: 'الفريق', value: '8 مطورين' },
    { label: 'المنصة', value: 'ويب + موبايل' },
    { label: 'الطلاب', value: '25K+ طالب' }
  ];

  results = [
    { value: '400%', label: 'زيادة في التسجيل' },
    { value: '92%', label: 'معدل إكمال الدورات' },
    { value: '4.9/5', label: 'تقييم الطلاب' },
    { value: '80%', label: 'توفير في التكاليف' }
  ];
}