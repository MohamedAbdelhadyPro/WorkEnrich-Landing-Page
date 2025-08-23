import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-case-studies',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="pt-20 pb-12">
      <!-- Hero Section -->
      <section class="bg-gradient-to-br from-purple-50 via-white to-blue-50 py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            دراسات الحالة
          </h1>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            قصص نجاح حقيقية لعملائنا وكيف ساعدتهم حلولنا البرمجية في تحقيق أهدافهم وتطوير أعمالهم
          </p>
        </div>
      </section>

      <!-- Case Studies Grid -->
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="space-y-16">
            <div *ngFor="let caseStudy of caseStudies; let i = index" 
                 class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              <!-- Content -->
              <div>
                <div class="mb-4">
                  <span class="px-3 py-1 text-sm font-medium rounded-full"
                        [ngClass]="caseStudy.categoryColor">
                    {{ caseStudy.category }}
                  </span>
                </div>
                <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  {{ caseStudy.title }}
                </h2>
                <p class="text-lg text-gray-600 mb-6">
                  {{ caseStudy.description }}
                </p>
                
                <!-- Challenge -->
                <div class="mb-6">
                  <h3 class="text-xl font-bold text-gray-900 mb-3">التحدي:</h3>
                  <p class="text-gray-600">{{ caseStudy.challenge }}</p>
                </div>
                
                <!-- Solution -->
                <div class="mb-6">
                  <h3 class="text-xl font-bold text-gray-900 mb-3">الحل:</h3>
                  <p class="text-gray-600">{{ caseStudy.solution }}</p>
                </div>
                
                <!-- Results -->
                <div class="mb-6">
                  <h3 class="text-xl font-bold text-gray-900 mb-3">النتائج:</h3>
                  <div class="grid grid-cols-2 gap-4">
                    <div *ngFor="let result of caseStudy.results" class="text-center p-4 bg-gray-50 rounded-lg">
                      <div class="text-2xl font-bold text-blue-600">{{ result.value }}</div>
                      <div class="text-sm text-gray-600">{{ result.label }}</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Image -->
              <div>
                <img [src]="caseStudy.image" 
                     [alt]="caseStudy.title"
                     class="w-full h-96 object-cover rounded-2xl shadow-lg">
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `
})
export class CaseStudiesComponent {
  caseStudies = [
    {
      title: 'تحويل رقمي شامل لشركة التصنيع الذكية',
      description: 'شركة تصنيع رائدة تحتاج لنظام ERP متكامل لربط جميع عملياتها',
      category: 'نظام ERP',
      categoryColor: 'bg-purple-100 text-purple-800',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      challenge: 'كانت الشركة تعاني من تشتت البيانات بين الأقسام المختلفة، مما يؤدي إلى تأخير في اتخاذ القرارات وزيادة التكاليف التشغيلية.',
      solution: 'طورنا نظام ERP متكامل يربط المبيعات، المخزون، الإنتاج، المحاسبة، والموارد البشرية في منصة واحدة.',
      results: [
        { value: '45%', label: 'تحسن في الكفاءة' },
        { value: '30%', label: 'تقليل التكاليف' },
        { value: '60%', label: 'سرعة اتخاذ القرارات' },
        { value: '99.5%', label: 'دقة البيانات' }
      ]
    },
    {
      title: 'نظام HR متطور لمجموعة الخدمات المالية',
      description: 'مجموعة شركات تضم 800 موظف تحتاج لنظام موارد بشرية شامل',
      category: 'نظام HR',
      categoryColor: 'bg-blue-100 text-blue-800',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      challenge: 'إدارة 800 موظف عبر فروع متعددة كانت تتم يدوياً، مما يؤدي إلى أخطاء في الرواتب وصعوبة في تتبع الحضور والإجازات.',
      solution: 'طورنا نظام HR شامل يشمل إدارة الموظفين، الحضور والانصراف، الرواتب، الإجازات، تقييم الأداء، والتدريب.',
      results: [
        { value: '80%', label: 'توفير في الوقت' },
        { value: '95%', label: 'تقليل الأخطاء' },
        { value: '70%', label: 'تحسن في الرضا الوظيفي' },
        { value: '50%', label: 'تقليل التكاليف الإدارية' }
      ]
    }
  ];
}