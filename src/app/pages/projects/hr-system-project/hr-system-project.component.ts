import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hr-system-project',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="pt-24 pb-12">
      <!-- Hero Section -->
      <section class="bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div class="mb-4">
                <span class="px-3 py-1 bg-indigo-100 text-indigo-800 text-sm font-medium rounded-full">
                  نظام إدارة
                </span>
              </div>
              <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                نظام إدارة الموارد البشرية
              </h1>
              <p class="text-xl text-gray-600 mb-8 leading-relaxed">
                نظام شامل ومتكامل لإدارة جميع عمليات الموارد البشرية من إدارة الموظفين والحضور إلى الرواتب والإجازات والتقييمات.
              </p>
              <div class="flex flex-wrap gap-2 mb-8">
                <span *ngFor="let tech of technologies" 
                      class="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                  {{ tech }}
                </span>
              </div>
              <a routerLink="/contact" 
                 class="bg-[#1E2E40] hover:bg-[#1E2E40]/90 text-white px-8 py-3 rounded-lg font-medium transition-colors">
                طلب مشروع مماثل
              </a>
            </div>
            <div class="relative">
              <img src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800" 
                   alt="HR Management System" 
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
                  نظام إدارة الموارد البشرية هو حل تقني متطور يهدف إلى رقمنة وتحسين جميع العمليات المتعلقة بإدارة الموظفين. 
                  يوفر النظام واجهات مختلفة للموظفين ومديري الموارد البشرية والإدارة العليا.
                </p>
                
                <h3 class="text-xl font-bold text-gray-900 mb-4">الوحدات الرئيسية:</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div *ngFor="let module of modules" class="flex items-start">
                    <div class="w-6 h-6 bg-[#1E2E40]/10 rounded-full flex items-center justify-center mt-1 mr-3">
                      <span class="text-[#1E2E40] text-sm">✓</span>
                    </div>
                    <div>
                      <h4 class="font-semibold text-gray-900 mb-1">{{ module.title }}</h4>
                      <p class="text-gray-600 text-sm">{{ module.description }}</p>
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
              <div class="bg-gradient-to-r from-[#1E2E40] to-blue-600 p-6 rounded-xl text-white">
                <h3 class="font-bold mb-4">النتائج المحققة</h3>
                <div class="space-y-3">
                  <div *ngFor="let result of results" class="text-center">
                    <div class="text-2xl font-bold">{{ result.value }}</div>
                    <div class="text-[#1E2E40]/20 text-sm">{{ result.label }}</div>
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
export class HrSystemProjectComponent {
  technologies = ['Angular', 'Node.js', 'PostgreSQL', 'JWT', 'Chart.js', 'Socket.io'];

  modules = [
    {
      title: 'إدارة الموظفين',
      description: 'ملفات شاملة للموظفين مع البيانات الشخصية والوظيفية'
    },
    {
      title: 'نظام الحضور والانصراف',
      description: 'تتبع دقيق لأوقات العمل مع تقارير تفصيلية'
    },
    {
      title: 'إدارة الرواتب',
      description: 'حساب الرواتب والمكافآت والخصومات تلقائياً'
    },
    {
      title: 'إدارة الإجازات',
      description: 'نظام طلب الإجازات والموافقة عليها إلكترونياً'
    },
    {
      title: 'تقييم الأداء',
      description: 'أدوات تقييم شاملة لقياس أداء الموظفين'
    },
    {
      title: 'التدريب والتطوير',
      description: 'إدارة برامج التدريب وتتبع تطوير المهارات'
    },
    {
      title: 'التوظيف والاستقطاب',
      description: 'نظام متكامل لإدارة عمليات التوظيف'
    },
    {
      title: 'التقارير والتحليلات',
      description: 'تقارير مفصلة وتحليلات ذكية لاتخاذ القرارات'
    }
  ];

  challenges = [
    {
      title: 'أمان البيانات الشخصية',
      solution: 'تطبيق معايير GDPR وتشفير البيانات الحساسة مع نظام صلاحيات متقدم'
    },
    {
      title: 'التكامل مع أنظمة الحضور',
      solution: 'تطوير واجهات برمجية للتكامل مع أجهزة البصمة وأنظمة الحضور المختلفة'
    },
    {
      title: 'حساب الرواتب المعقد',
      solution: 'محرك حسابات متقدم يدعم جميع أنواع البدلات والخصومات والضرائب'
    },
    {
      title: 'سهولة الاستخدام للموظفين',
      solution: 'تصميم واجهات بديهية مع تطبيق جوال للموظفين'
    }
  ];

  projectInfo = [
    { label: 'العميل', value: 'شركة التقنية المتقدمة' },
    { label: 'المدة', value: '6 أشهر' },
    { label: 'الفريق', value: '10 مطورين' },
    { label: 'المنصة', value: 'ويب + موبايل' },
    { label: 'الموظفين', value: '1000+ موظف' }
  ];

  results = [
    { value: '75%', label: 'تحسن في الكفاءة' },
    { value: '90%', label: 'تقليل الأخطاء' },
    { value: '60%', label: 'توفير في الوقت' },
    { value: '95%', label: 'رضا الموظفين' }
  ];
}