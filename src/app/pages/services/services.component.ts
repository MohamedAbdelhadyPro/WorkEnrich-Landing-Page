import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="pt-24 pb-12">
      <!-- Hero Section -->
      <section class="bg-gradient-to-br from-purple-50 via-white to-blue-50 py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            خدماتنا المتخصصة
          </h1>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            نقدم مجموعة شاملة من الحلول البرمجية المتخصصة لتلبية جميع احتياجات شركتك
          </p>
        </div>
      </section>

      <!-- Main Services -->
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <!-- HR System Service -->
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
                حل شامل ومتكامل لإدارة جميع عمليات الموارد البشرية في شركتك من إدارة الموظفين والحضور إلى الرواتب والتقييمات
              </p>
              <div class="grid grid-cols-2 gap-4 mb-6">
                <div *ngFor="let feature of hrServiceFeatures" class="flex items-center">
                  <span class="w-2 h-2 bg-blue-500 rounded-full ml-2"></span>
                  <span class="text-gray-700 text-sm">{{ feature }}</span>
                </div>
              </div>
              <div class="flex items-center justify-between">
                <div class="text-blue-600 font-bold text-lg">يبدأ من 2,500 ريال/شهر</div>
                <a routerLink="/hr-system" 
                   class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                  اعرف المزيد
                </a>
              </div>
            </div>

            <!-- Accounting System Service -->
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
                نظام محاسبي متكامل يدير جميع العمليات المالية من الفواتير والمدفوعات إلى التقارير المالية والتحليلات
              </p>
              <div class="grid grid-cols-2 gap-4 mb-6">
                <div *ngFor="let feature of accountingServiceFeatures" class="flex items-center">
                  <span class="w-2 h-2 bg-green-500 rounded-full ml-2"></span>
                  <span class="text-gray-700 text-sm">{{ feature }}</span>
                </div>
              </div>
              <div class="flex items-center justify-between">
                <div class="text-green-600 font-bold text-lg">يبدأ من 3,000 ريال/شهر</div>
                <a routerLink="/accounting-system" 
                   class="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                  اعرف المزيد
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Additional Services -->
      <section class="py-20 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              خدمات إضافية
            </h2>
            <p class="text-xl text-gray-600">
              خدمات مكملة لضمان نجاح تطبيق الأنظمة في شركتك
            </p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div *ngFor="let service of additionalServices" 
                 class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div class="w-14 h-14 mx-auto mb-4 rounded-xl flex items-center justify-center text-3xl"
                   [ngClass]="service.bgColor">
                {{ service.icon }}
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-3 text-center">{{ service.title }}</h3>
              <p class="text-gray-600 leading-relaxed mb-4 text-center">{{ service.description }}</p>
              <ul class="space-y-2 mb-6">
                <li *ngFor="let feature of service.features" class="flex items-center text-sm text-gray-600">
                  <span class="w-2 h-2 bg-purple-500 rounded-full ml-2"></span>
                  {{ feature }}
                </li>
              </ul>
              <div class="text-center">
                <div class="text-purple-600 font-bold text-lg mb-4">{{ service.price }}</div>
                <a routerLink="/contact" 
                   class="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                  اطلب الخدمة
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Process Section -->
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              كيف نعمل معك؟
            </h2>
            <p class="text-xl text-gray-600">
              عملية واضحة ومنظمة لضمان نجاح مشروعك
            </p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div *ngFor="let step of processSteps; let i = index" class="text-center">
              <div class="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-white font-bold text-xl">{{ i + 1 }}</span>
              </div>
              <h3 class="text-lg font-bold text-gray-900 mb-2">{{ step.title }}</h3>
              <p class="text-gray-600">{{ step.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl lg:text-4xl font-bold text-white mb-6">
            جاهز لبدء مشروعك؟
          </h2>
          <p class="text-xl text-purple-100 mb-8">
            تواصل معنا اليوم واحصل على استشارة مجانية لتحديد أفضل الحلول لشركتك
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a routerLink="/contact" 
               class="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-medium transition-colors">
               احجز استشارة مجانية
            </a>
            <a href="tel:+966501234567" 
               class="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-lg font-medium transition-colors">
              اتصل بنا الآن
            </a>
          </div>
        </div>
      </section>
    </div>
  `
})
export class ServicesComponent {
  hrServiceFeatures = [
    'إدارة الموظفين',
    'الحضور والانصراف',
    'حساب الرواتب',
    'إدارة الإجازات',
    'تقييم الأداء',
    'التقارير التفصيلية'
  ];

  accountingServiceFeatures = [
    'إدارة الفواتير',
    'تتبع المدفوعات',
    'التقارير المالية',
    'إدارة العملاء',
    'التحليل المالي',
    'ربط البنوك'
  ];

  additionalServices = [
    {
      icon: '🎓',
      title: 'التدريب والتأهيل',
      description: 'تدريب شامل لفريقك على استخدام الأنظمة بكفاءة',
      bgColor: 'bg-blue-100',
      features: [
        'تدريب على الموقع',
        'تدريب عن بُعد',
        'مواد تدريبية',
        'شهادات معتمدة'
      ],
      price: '1,500 ريال/يوم'
    },
    {
      icon: '🛠️',
      title: 'الدعم الفني',
      description: 'دعم فني متواصل لضمان استمرارية عمل الأنظمة',
      bgColor: 'bg-green-100',
      features: [
        'دعم 24/7',
        'صيانة دورية',
        'تحديثات مجانية',
        'استجابة سريعة'
      ],
      price: '800 ريال/شهر'
    },
    {
      icon: '🔧',
      title: 'التخصيص والتطوير',
      description: 'تخصيص الأنظمة وتطوير ميزات إضافية حسب احتياجاتك',
      bgColor: 'bg-purple-100',
      features: [
        'تخصيص الواجهات',
        'ميزات إضافية',
        'تكامل مع أنظمة أخرى',
        'تقارير مخصصة'
      ],
      price: 'حسب المتطلبات'
    }
  ];

  processSteps = [
    {
      title: 'التشاور والتحليل',
      description: 'نناقش احتياجاتك ونحلل متطلبات شركتك'
    },
    {
      title: 'التصميم والتخطيط',
      description: 'نصمم الحل المناسب ونضع خطة التنفيذ'
    },
    {
      title: 'التطوير والتنفيذ',
      description: 'نطور النظام وننفذه في بيئة شركتك'
    },
    {
      title: 'التدريب والدعم',
      description: 'ندرب فريقك ونقدم الدعم المستمر'
    }
  ];
}