import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-development-services',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="pt-20 pb-12">
      <!-- Hero Section -->
      <section class="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            خدمات البرمجة والتطوير
          </h1>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            نقدم حلول برمجية متكاملة ومخصصة تلبي احتياجات شركتك وتساعدها على تحقيق أهدافها التقنية
          </p>
        </div>
      </section>

      <!-- Services Grid -->
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div *ngFor="let service of services" 
                 class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div class="flex items-center mb-6">
                <div class="w-16 h-16 rounded-xl flex items-center justify-center text-4xl ml-4"
                     [ngClass]="service.bgColor">
                  {{ service.icon }}
                </div>
                <div>
                  <h3 class="text-2xl font-bold text-gray-900">{{ service.title }}</h3>
                  <p class="text-blue-600 font-medium">{{ service.subtitle }}</p>
                </div>
              </div>
              
              <p class="text-gray-600 leading-relaxed mb-6">{{ service.description }}</p>
              
              <div class="mb-6">
                <h4 class="font-bold text-gray-900 mb-3">الفوائد الرئيسية:</h4>
                <ul class="space-y-2">
                  <li *ngFor="let benefit of service.benefits" class="flex items-start">
                    <span class="w-2 h-2 bg-blue-500 rounded-full mt-2 ml-3"></span>
                    <span class="text-gray-600">{{ benefit }}</span>
                  </li>
                </ul>
              </div>

              <div class="mb-6" *ngIf="service.useCase">
                <h4 class="font-bold text-gray-900 mb-3">مثال على الاستخدام:</h4>
                <div class="bg-gray-50 p-4 rounded-lg">
                  <p class="text-gray-700 italic">{{ service.useCase }}</p>
                </div>
              </div>

              <div class="flex flex-wrap gap-2 mb-6">
                <span *ngFor="let tech of service.technologies" 
                      class="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                  {{ tech }}
                </span>
              </div>

              <div class="flex items-center justify-between">
                <div class="text-blue-600 font-bold text-lg">{{ service.startingPrice }}</div>
                <a routerLink="/contact" 
                   class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                  طلب عرض سعر
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `
})
export class DevelopmentServicesComponent {
  services = [
    {
      icon: '👥',
      title: 'أنظمة إدارة الموارد البشرية (HR)',
      subtitle: 'إدارة شاملة للموظفين والعمليات',
      description: 'نطور أنظمة HR متكاملة تشمل إدارة الموظفين، الحضور والانصراف، الرواتب، الإجازات، تقييم الأداء، والتدريب.',
      benefits: [
        'أتمتة عمليات الموارد البشرية',
        'تقليل الأخطاء الإدارية بنسبة 90%',
        'توفير الوقت والجهد',
        'تقارير تحليلية مفصلة'
      ],
      useCase: 'شركة تضم 200 موظف تحتاج لنظام يدير الحضور والانصراف تلقائياً ويحسب الرواتب.',
      technologies: ['Angular', 'Node.js', 'PostgreSQL', 'JWT'],
      startingPrice: 'يبدأ من 25,000 ريال',
      bgColor: 'bg-blue-100'
    },
    {
      icon: '🤝',
      title: 'أنظمة إدارة علاقات العملاء (CRM)',
      subtitle: 'تنظيم وتحسين علاقات العملاء',
      description: 'أنظمة CRM مخصصة لإدارة قاعدة العملاء، تتبع المبيعات، إدارة الفرص التجارية.',
      benefits: [
        'زيادة المبيعات بنسبة تصل إلى 40%',
        'تحسين خدمة العملاء',
        'تتبع دقيق لرحلة العميل',
        'أتمتة عمليات المتابعة'
      ],
      useCase: 'شركة مبيعات تريد تتبع العملاء المحتملين وإدارة الفرص التجارية.',
      technologies: ['React', 'Laravel', 'MySQL', 'Redis'],
      startingPrice: 'يبدأ من 20,000 ريال',
      bgColor: 'bg-green-100'
    }
  ];
}