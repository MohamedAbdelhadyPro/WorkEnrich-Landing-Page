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

      <!-- Process Section -->
      <section class="py-20 bg-gray-50">
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
              <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-blue-600 font-bold text-xl">{{ i + 1 }}</span>
              </div>
              <h3 class="text-lg font-bold text-gray-900 mb-2">{{ step.title }}</h3>
              <p class="text-gray-600">{{ step.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="py-20 bg-blue-600">
        <div class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl lg:text-4xl font-bold text-white mb-6">
            جاهز لبدء مشروعك؟
          </h2>
          <p class="text-xl text-blue-100 mb-8">
            احصل على استشارة مجانية واكتشف الحل الأمثل لشركتك
          </p>
          <a routerLink="/contact" 
             class="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-medium transition-colors">
            احجز استشارة مجانية
          </a>
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
      description: 'نطور أنظمة HR متكاملة تشمل إدارة الموظفين، الحضور والانصراف، الرواتب، الإجازات، تقييم الأداء، والتدريب. حلول مصممة خصيصاً لتبسيط العمليات الإدارية وتحسين الكفاءة.',
      benefits: [
        'أتمتة عمليات الموارد البشرية',
        'تقليل الأخطاء الإدارية بنسبة 90%',
        'توفير الوقت والجهد',
        'تقارير تحليلية مفصلة',
        'واجهة سهلة الاستخدام للموظفين والإدارة'
      ],
      useCase: 'شركة تضم 200 موظف تحتاج لنظام يدير الحضور والانصراف تلقائياً، يحسب الرواتب، ويتيح للموظفين طلب الإجازات إلكترونياً مع موافقة المدراء.',
      technologies: ['Angular', 'Node.js', 'PostgreSQL', 'JWT', 'Chart.js'],
      startingPrice: 'يبدأ من 25,000 ريال',
      bgColor: 'bg-blue-100'
    },
    {
      icon: '🤝',
      title: 'أنظمة إدارة علاقات العملاء (CRM)',
      subtitle: 'تنظيم وتحسين علاقات العملاء',
      description: 'أنظمة CRM مخصصة لإدارة قاعدة العملاء، تتبع المبيعات، إدارة الفرص التجارية، والتواصل مع العملاء. تساعد فريق المبيعات على زيادة الإنتاجية وتحسين معدلات التحويل.',
      benefits: [
        'زيادة المبيعات بنسبة تصل إلى 40%',
        'تحسين خدمة العملاء',
        'تتبع دقيق لرحلة العميل',
        'أتمتة عمليات المتابعة',
        'تقارير مبيعات تفصيلية'
      ],
      useCase: 'شركة مبيعات تريد تتبع العملاء المحتملين، إدارة الفرص التجارية، وأتمتة عمليات المتابعة لزيادة معدلات الإغلاق.',
      technologies: ['React', 'Laravel', 'MySQL', 'Redis', 'WebSocket'],
      startingPrice: 'يبدأ من 20,000 ريال',
      bgColor: 'bg-green-100'
    },
    {
      icon: '⚙️',
      title: 'أنظمة تخطيط موارد المؤسسة (ERP)',
      subtitle: 'تكامل جميع عمليات الشركة',
      description: 'حلول ERP شاملة تربط جميع أقسام الشركة في نظام واحد متكامل. يشمل المحاسبة، المخزون، المبيعات، المشتريات، والموارد البشرية مع تدفق سلس للبيانات.',
      benefits: [
        'تكامل جميع العمليات في نظام واحد',
        'تحسين الكفاءة التشغيلية',
        'رؤية شاملة لأداء الشركة',
        'تقليل التكاليف التشغيلية',
        'اتخاذ قرارات مبنية على البيانات'
      ],
      useCase: 'شركة تصنيع تحتاج لربط المبيعات بالمخزون والإنتاج والمحاسبة لضمان تدفق سلس للمعلومات وتحسين اتخاذ القرارات.',
      technologies: ['Vue.js', 'Django', 'PostgreSQL', 'Docker', 'Microservices'],
      startingPrice: 'يبدأ من 50,000 ريال',
      bgColor: 'bg-purple-100'
    },
    {
      icon: '📊',
      title: 'أنظمة المبيعات والمخزون',
      subtitle: 'إدارة ذكية للمبيعات والمخزون',
      description: 'أنظمة متطورة لإدارة المخزون، تتبع المبيعات، إدارة نقاط البيع، والتحكم في المخزون مع تنبيهات ذكية وتقارير تحليلية مفصلة.',
      benefits: [
        'تتبع دقيق للمخزون في الوقت الفعلي',
        'تقليل الفاقد والتلف',
        'تحسين دورة المخزون',
        'تنبيهات نفاد المخزون',
        'تحليلات مبيعات متقدمة'
      ],
      useCase: 'متجر أو مجموعة متاجر تحتاج لنظام نقاط بيع متكامل مع إدارة المخزون وتتبع المبيعات عبر فروع متعددة.',
      technologies: ['Angular', 'ASP.NET Core', 'SQL Server', 'SignalR', 'Power BI'],
      startingPrice: 'يبدأ من 18,000 ريال',
      bgColor: 'bg-orange-100'
    }
  ];

  processSteps = [
    {
      title: 'التحليل والتخطيط',
      description: 'نحلل احتياجاتك ونضع خطة مفصلة للمشروع'
    },
    {
      title: 'التصميم والنماذج',
      description: 'نصمم واجهات المستخدم ونماذج أولية للنظام'
    },
    {
      title: 'التطوير والاختبار',
      description: 'نطور النظام ونختبره بدقة لضمان الجودة'
    },
    {
      title: 'التسليم والدعم',
      description: 'نسلم النظام ونقدم التدريب والدعم المستمر'
    }
  ];
}