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
                 class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                 [class.lg:grid-flow-col-dense]="i % 2 === 1">
              
              <!-- Content -->
              <div [class.lg:col-start-2]="i % 2 === 1">
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
                
                <!-- Technologies -->
                <div class="mb-6">
                  <h3 class="text-lg font-bold text-gray-900 mb-3">التقنيات المستخدمة:</h3>
                  <div class="flex flex-wrap gap-2">
                    <span *ngFor="let tech of caseStudy.technologies" 
                          class="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                      {{ tech }}
                    </span>
                  </div>
                </div>
                
                <!-- Client Testimonial -->
                <div class="bg-gray-50 p-6 rounded-lg">
                  <div class="flex items-center mb-4">
                    <img [src]="caseStudy.client.avatar" 
                         [alt]="caseStudy.client.name"
                         class="w-12 h-12 rounded-full ml-4">
                    <div>
                      <div class="font-bold text-gray-900">{{ caseStudy.client.name }}</div>
                      <div class="text-sm text-gray-600">{{ caseStudy.client.position }}</div>
                    </div>
                  </div>
                  <p class="text-gray-700 italic">"{{ caseStudy.testimonial }}"</p>
                </div>
              </div>
              
              <!-- Image -->
              <div [class.lg:col-start-1]="i % 2 === 1">
                <img [src]="caseStudy.image" 
                     [alt]="caseStudy.title"
                     class="w-full h-96 object-cover rounded-2xl shadow-lg">
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Stats Section -->
      <section class="py-20 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              إنجازاتنا بالأرقام
            </h2>
            <p class="text-xl text-gray-600">
              نتائج حقيقية حققناها مع عملائنا
            </p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div *ngFor="let stat of overallStats" class="text-center">
              <div class="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">{{ stat.value }}</div>
              <div class="text-gray-600">{{ stat.label }}</div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl lg:text-4xl font-bold text-white mb-6">
            جاهز لتكون قصة النجاح التالية؟
          </h2>
          <p class="text-xl text-purple-100 mb-8">
            دعنا نساعدك في تحقيق نتائج مماثلة لشركتك
          </p>
          <a routerLink="/contact" 
             class="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-medium transition-colors">
            ابدأ مشروعك الآن
          </a>
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
      challenge: 'كانت الشركة تعاني من تشتت البيانات بين الأقسام المختلفة، مما يؤدي إلى تأخير في اتخاذ القرارات وزيادة التكاليف التشغيلية. كان هناك نقص في الرؤية الشاملة لأداء الشركة.',
      solution: 'طورنا نظام ERP متكامل يربط المبيعات، المخزون، الإنتاج، المحاسبة، والموارد البشرية في منصة واحدة. النظام يوفر تقارير في الوقت الفعلي ولوحات معلومات تفاعلية.',
      results: [
        { value: '45%', label: 'تحسن في الكفاءة' },
        { value: '30%', label: 'تقليل التكاليف' },
        { value: '60%', label: 'سرعة اتخاذ القرارات' },
        { value: '99.5%', label: 'دقة البيانات' }
      ],
      technologies: ['Vue.js', 'Django', 'PostgreSQL', 'Docker', 'Redis'],
      client: {
        name: 'أحمد المحمد',
        position: 'المدير التنفيذي - شركة التصنيع الذكية',
        avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150'
      },
      testimonial: 'النظام غير طريقة عملنا بالكامل. أصبح لدينا رؤية واضحة لجميع العمليات واستطعنا تقليل التكاليف بشكل كبير. فريق TechCraft محترف جداً ومتعاون.'
    },
    {
      title: 'نظام HR متطور لمجموعة الخدمات المالية',
      description: 'مجموعة شركات تضم 800 موظف تحتاج لنظام موارد بشرية شامل',
      category: 'نظام HR',
      categoryColor: 'bg-blue-100 text-blue-800',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      challenge: 'إدارة 800 موظف عبر فروع متعددة كانت تتم يدوياً، مما يؤدي إلى أخطاء في الرواتب وصعوبة في تتبع الحضور والإجازات. العمليات الإدارية كانت تستغرق وقتاً طويلاً.',
      solution: 'طورنا نظام HR شامل يشمل إدارة الموظفين، الحضور والانصراف، الرواتب، الإجازات، تقييم الأداء، والتدريب. النظام يدعم عدة فروع ويوفر تطبيق جوال للموظفين.',
      results: [
        { value: '80%', label: 'توفير في الوقت' },
        { value: '95%', label: 'تقليل الأخطاء' },
        { value: '70%', label: 'تحسن في الرضا الوظيفي' },
        { value: '50%', label: 'تقليل التكاليف الإدارية' }
      ],
      technologies: ['Angular', 'Node.js', 'PostgreSQL', 'JWT', 'Chart.js'],
      client: {
        name: 'فاطمة العلي',
        position: 'مدير الموارد البشرية - مجموعة الخدمات المالية',
        avatar: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150'
      },
      testimonial: 'النظام سهل علينا إدارة الموظفين بشكل كبير. الآن كل شيء رقمي ودقيق، والموظفين راضين عن سهولة استخدام التطبيق. أنصح بشدة بالتعامل مع TechCraft.'
    },
    {
      title: 'منصة CRM ذكية لشركة العقارات الرائدة',
      description: 'شركة عقارات كبيرة تحتاج لنظام CRM لإدارة العملاء والمبيعات',
      category: 'نظام CRM',
      categoryColor: 'bg-green-100 text-green-800',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      challenge: 'فريق المبيعات المكون من 50 مندوب كان يواجه صعوبة في تتبع العملاء المحتملين وإدارة الفرص التجارية. معدل التحويل كان منخفض والكثير من الفرص تضيع.',
      solution: 'طورنا منصة CRM ذكية تتضمن إدارة العملاء المحتملين، تتبع الفرص، أتمتة المتابعة، تحليل المبيعات، وتطبيق جوال لفريق المبيعات مع إشعارات ذكية.',
      results: [
        { value: '65%', label: 'زيادة في المبيعات' },
        { value: '40%', label: 'تحسن معدل التحويل' },
        { value: '55%', label: 'توفير في الوقت' },
        { value: '90%', label: 'رضا فريق المبيعات' }
      ],
      technologies: ['React', 'Laravel', 'MySQL', 'Redis', 'WebSocket'],
      client: {
        name: 'محمد الأحمد',
        position: 'مدير المبيعات - شركة العقارات الرائدة',
        avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150'
      },
      testimonial: 'النظام رفع أداء فريق المبيعات بشكل ملحوظ. الآن نستطيع تتبع كل عميل محتمل ولا نفقد أي فرصة. المبيعات زادت بشكل كبير والفريق سعيد جداً.'
    }
  ];

  overallStats = [
    { value: '500+', label: 'مشروع مكتمل' },
    { value: '200+', label: 'عميل راضي' },
    { value: '50%', label: 'متوسط تحسن الكفاءة' },
    { value: '99.5%', label: 'معدل نجاح المشاريع' }
  ];
}