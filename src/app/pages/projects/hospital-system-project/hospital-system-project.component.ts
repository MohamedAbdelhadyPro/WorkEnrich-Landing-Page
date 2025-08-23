import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hospital-system-project',
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
                  نظام إدارة
                </span>
              </div>
              <h1 class="text-4xl lg:text-5xl font-bold text-white mb-6">
                نظام إدارة المستشفيات
              </h1>
              <p class="text-xl text-blue-100 mb-8 leading-relaxed">
                نظام شامل ومتكامل لإدارة جميع عمليات المستشفى من إدارة المرضى والمواعيد إلى السجلات الطبية والفواتير.
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
              <img src="https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800" 
                   alt="Hospital Management System" 
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
                  نظام إدارة المستشفيات هو حل تقني متطور يهدف إلى رقمنة وتحسين جميع العمليات الإدارية والطبية في المستشفى. 
                  يوفر النظام واجهات مختلفة للأطباء والممرضين والإداريين والمرضى.
                </p>
                
                <h3 class="text-xl font-bold text-gray-900 mb-4">الوحدات الرئيسية:</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div *ngFor="let module of modules" class="flex items-start">
                    <div class="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mt-1 mr-3">
                      <span class="text-purple-600 text-sm">✓</span>
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
              <div class="bg-gradient-to-r from-purple-600 to-pink-600 p-6 rounded-xl text-white">
                <h3 class="font-bold mb-4">النتائج المحققة</h3>
                <div class="space-y-3">
                  <div *ngFor="let result of results" class="text-center">
                    <div class="text-2xl font-bold">{{ result.value }}</div>
                    <div class="text-purple-100 text-sm">{{ result.label }}</div>
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
export class HospitalSystemProjectComponent {
  technologies = ['Angular', 'ASP.NET Core', 'SQL Server', 'Azure', 'SignalR', 'Crystal Reports'];

  modules = [
    {
      title: 'إدارة المرضى',
      description: 'تسجيل وإدارة بيانات المرضى والتاريخ المرضي'
    },
    {
      title: 'نظام المواعيد',
      description: 'حجز وإدارة المواعيد مع الأطباء والعيادات'
    },
    {
      title: 'السجلات الطبية',
      description: 'حفظ وإدارة الملفات الطبية الإلكترونية'
    },
    {
      title: 'إدارة الصيدلية',
      description: 'تتبع الأدوية والوصفات الطبية'
    },
    {
      title: 'نظام الفواتير',
      description: 'إصدار الفواتير وإدارة المدفوعات'
    },
    {
      title: 'إدارة الموظفين',
      description: 'تنظيم جداول العمل وإدارة الموارد البشرية'
    },
    {
      title: 'المختبرات والأشعة',
      description: 'طلب وتتبع نتائج الفحوصات'
    },
    {
      title: 'التقارير والإحصائيات',
      description: 'تقارير شاملة عن أداء المستشفى'
    }
  ];

  challenges = [
    {
      title: 'أمان البيانات الطبية',
      solution: 'تطبيق معايير HIPAA وتشفير البيانات الحساسة مع نظام صلاحيات متقدم'
    },
    {
      title: 'التكامل مع الأجهزة الطبية',
      solution: 'تطوير واجهات برمجية للتكامل مع أجهزة المختبرات والأشعة'
    },
    {
      title: 'الأداء مع البيانات الضخمة',
      solution: 'تحسين قاعدة البيانات وتطبيق تقنيات الفهرسة المتقدمة'
    },
    {
      title: 'سهولة الاستخدام للطاقم الطبي',
      solution: 'تصميم واجهات بديهية مع تدريب شامل للمستخدمين'
    }
  ];

  projectInfo = [
    { label: 'العميل', value: 'مستشفى الملك فهد' },
    { label: 'المدة', value: '8 أشهر' },
    { label: 'الفريق', value: '12 مطور' },
    { label: 'المنصة', value: 'ويب + موبايل' },
    { label: 'المستخدمين', value: '500+ مستخدم' }
  ];

  results = [
    { value: '70%', label: 'تحسن في الكفاءة' },
    { value: '90%', label: 'تقليل الأخطاء' },
    { value: '50%', label: 'توفير في الوقت' },
    { value: '95%', label: 'رضا المستخدمين' }
  ];
}