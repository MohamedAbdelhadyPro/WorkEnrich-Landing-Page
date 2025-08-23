import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-managed-solutions',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="pt-20 pb-12">
      <!-- Hero Section -->
      <section class="bg-gradient-to-br from-green-50 via-white to-blue-50 py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            الحلول المدارة
          </h1>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            ندير أنظمتك البرمجية نيابة عنك لتركز على نمو أعمالك بينما نضمن استمرارية وأمان عملياتك التقنية
          </p>
        </div>
      </section>

      <!-- Services Grid -->
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div *ngFor="let service of managedServices" 
                 class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div class="w-16 h-16 mx-auto mb-6 rounded-xl flex items-center justify-center text-4xl"
                   [ngClass]="service.bgColor">
                {{ service.icon }}
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-4 text-center">{{ service.title }}</h3>
              <p class="text-gray-600 leading-relaxed mb-6 text-center">{{ service.description }}</p>
              <ul class="space-y-2 mb-6">
                <li *ngFor="let feature of service.features" class="flex items-center text-sm">
                  <span class="w-2 h-2 bg-green-500 rounded-full ml-2"></span>
                  {{ feature }}
                </li>
              </ul>
              <div class="text-center">
                <div class="text-green-600 font-bold text-lg mb-4">{{ service.price }}</div>
                <a routerLink="/contact" 
                   class="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                  اطلب الخدمة
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `
})
export class ManagedSolutionsComponent {
  managedServices = [
    {
      icon: '🔧',
      title: 'إدارة الأنظمة البرمجية',
      description: 'نتولى إدارة وصيانة جميع أنظمتك البرمجية لضمان الأداء الأمثل',
      bgColor: 'bg-blue-100',
      features: [
        'مراقبة الأداء 24/7',
        'التحديثات الأمنية',
        'النسخ الاحتياطية اليومية',
        'إصلاح الأعطال فوراً'
      ],
      price: '2,500 ريال/شهر'
    },
    {
      icon: '🛠️',
      title: 'الدعم الفني والتدريب',
      description: 'فريق دعم فني متخصص متاح لمساعدة فريقك وتدريبهم',
      bgColor: 'bg-green-100',
      features: [
        'دعم فني مباشر',
        'تدريب الموظفين',
        'دليل المستخدم',
        'جلسات تدريبية دورية'
      ],
      price: '1,800 ريال/شهر'
    },
    {
      icon: '📊',
      title: 'إدارة البيانات والتحليل',
      description: 'نحلل بياناتك ونقدم تقارير وإحصائيات تساعد في اتخاذ القرارات',
      bgColor: 'bg-purple-100',
      features: [
        'تحليل البيانات',
        'تقارير دورية',
        'لوحات معلومات تفاعلية',
        'توصيات للتحسين'
      ],
      price: '3,200 ريال/شهر'
    }
  ];
}