import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-task-management-project',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="pt-24 pb-12">
      <!-- Hero Section -->
      <section class="bg-gradient-to-br from-green-50 via-white to-blue-50 py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div class="mb-4">
                <span class="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                  تطبيق جوال
                </span>
              </div>
              <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                تطبيق إدارة المهام
              </h1>
              <p class="text-xl text-gray-600 mb-8 leading-relaxed">
                تطبيق جوال متطور لإدارة المشاريع والمهام مع فريق العمل، يوفر أدوات تعاون فعالة وتتبع دقيق للإنجازات.
              </p>
              <div class="flex flex-wrap gap-2 mb-8">
                <span *ngFor="let tech of technologies" 
                      class="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                  {{ tech }}
                </span>
              </div>
              <a routerLink="/contact" 
                 class="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
                طلب مشروع مماثل
              </a>
            </div>
            <div class="relative">
              <img src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800" 
                   alt="Task Management App" 
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
                  تطبيق إدارة المهام هو حل شامل للفرق التي تسعى لتحسين إنتاجيتها وتنظيم عملها. 
                  يوفر التطبيق واجهة بديهية وأدوات قوية لإدارة المشاريع والتعاون بين أعضاء الفريق.
                </p>
                
                <h3 class="text-xl font-bold text-gray-900 mb-4">الميزات الرئيسية:</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div *ngFor="let feature of features" class="flex items-start">
                    <div class="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1 mr-3">
                      <span class="text-green-600 text-sm">✓</span>
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
              <div class="bg-gradient-to-r from-green-600 to-teal-600 p-6 rounded-xl text-white">
                <h3 class="font-bold mb-4">النتائج المحققة</h3>
                <div class="space-y-3">
                  <div *ngFor="let result of results" class="text-center">
                    <div class="text-2xl font-bold">{{ result.value }}</div>
                    <div class="text-green-100 text-sm">{{ result.label }}</div>
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
export class TaskManagementProjectComponent {
  technologies = ['Flutter', 'Firebase', 'Dart', 'Push Notifications', 'Cloud Functions'];

  features = [
    {
      title: 'إدارة المشاريع',
      description: 'إنشاء وتنظيم المشاريع مع تحديد الأولويات والمواعيد النهائية'
    },
    {
      title: 'تعيين المهام',
      description: 'توزيع المهام على أعضاء الفريق مع تتبع التقدم'
    },
    {
      title: 'التعاون الفوري',
      description: 'دردشة جماعية وتعليقات على المهام للتواصل السريع'
    },
    {
      title: 'التقويم المتكامل',
      description: 'عرض المهام والمواعيد في تقويم تفاعلي'
    },
    {
      title: 'التنبيهات الذكية',
      description: 'إشعارات مخصصة للمواعيد النهائية والتحديثات المهمة'
    },
    {
      title: 'تقارير الإنتاجية',
      description: 'تحليلات مفصلة عن أداء الفريق والمشاريع'
    }
  ];

  challenges = [
    {
      title: 'التزامن في الوقت الفعلي',
      solution: 'استخدام Firebase Realtime Database لضمان تحديث البيانات فورياً لجميع المستخدمين'
    },
    {
      title: 'إدارة الصلاحيات',
      solution: 'نظام أدوار متقدم يسمح بتحكم دقيق في صلاحيات كل عضو في الفريق'
    },
    {
      title: 'الأداء مع البيانات الكبيرة',
      solution: 'تطبيق تقنيات التحميل التدريجي والتخزين المؤقت الذكي'
    }
  ];

  projectInfo = [
    { label: 'العميل', value: 'شركة الإدارة الذكية' },
    { label: 'المدة', value: '3 أشهر' },
    { label: 'الفريق', value: '4 مطورين' },
    { label: 'المنصة', value: 'iOS + Android' },
    { label: 'المستخدمين', value: '10K+ مستخدم' }
  ];

  results = [
    { value: '85%', label: 'تحسن في الإنتاجية' },
    { value: '60%', label: 'توفير في الوقت' },
    { value: '4.7/5', label: 'تقييم المستخدمين' },
    { value: '95%', label: 'معدل الاستخدام اليومي' }
  ];
}