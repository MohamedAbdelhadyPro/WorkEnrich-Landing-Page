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

      <!-- Main Benefits -->
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                لماذا الحلول المدارة؟
              </h2>
              <p class="text-lg text-gray-600 mb-8">
                بدلاً من القلق بشأن الأنظمة التقنية، دعنا نتولى إدارتها بالكامل. 
                نحن نضمن الأداء الأمثل والأمان والتحديثات المستمرة.
              </p>
              <div class="space-y-4">
                <div *ngFor="let benefit of mainBenefits" class="flex items-start">
                  <div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mt-1 ml-4">
                    <span class="text-green-600 text-sm">✓</span>
                  </div>
                  <div>
                    <h4 class="font-bold text-gray-900 mb-1">{{ benefit.title }}</h4>
                    <p class="text-gray-600">{{ benefit.description }}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="relative">
              <img src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800" 
                   alt="Managed Solutions" 
                   class="w-full h-96 object-cover rounded-2xl shadow-lg">
            </div>
          </div>
        </div>
      </section>

      <!-- Services Grid -->
      <section class="py-20 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              خدماتنا المدارة
            </h2>
            <p class="text-xl text-gray-600">
              نقدم مجموعة شاملة من الخدمات المدارة لضمان استمرارية أعمالك
            </p>
          </div>
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

      <!-- Expected Benefits -->
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              الفوائد المتوقعة للعميل
            </h2>
            <p class="text-xl text-gray-600">
              ما الذي ستحصل عليه عند اختيار حلولنا المدارة؟
            </p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div *ngFor="let benefit of expectedBenefits" class="text-center">
              <div class="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white text-3xl">
                {{ benefit.icon }}
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-4">{{ benefit.title }}</h3>
              <p class="text-gray-600">{{ benefit.description }}</p>
              <div class="mt-4 text-2xl font-bold text-blue-600">{{ benefit.metric }}</div>
            </div>
          </div>
        </div>
      </section>

      <!-- Service Levels -->
      <section class="py-20 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              مستويات الخدمة
            </h2>
            <p class="text-xl text-gray-600">
              اختر المستوى الذي يناسب احتياجات شركتك
            </p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div *ngFor="let level of serviceLevels" 
                 class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                 [class.ring-2]="level.popular"
                 [class.ring-blue-500]="level.popular">
              <div class="text-center mb-6">
                <h3 class="text-2xl font-bold text-gray-900 mb-2">{{ level.name }}</h3>
                <div class="text-4xl font-bold text-blue-600 mb-2">{{ level.price }}</div>
                <p class="text-gray-600">{{ level.description }}</p>
                <div *ngIf="level.popular" class="mt-2">
                  <span class="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">الأكثر شعبية</span>
                </div>
              </div>
              <ul class="space-y-3 mb-8">
                <li *ngFor="let feature of level.features" class="flex items-center">
                  <span class="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center ml-3">
                    <span class="text-green-600 text-xs">✓</span>
                  </span>
                  {{ feature }}
                </li>
              </ul>
              <a routerLink="/contact" 
                 class="w-full block text-center py-3 rounded-lg font-medium transition-colors"
                 [class]="level.popular ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-900'">
                اختر هذه الخطة
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl lg:text-4xl font-bold text-white mb-6">
            جاهز لتجربة الحلول المدارة؟
          </h2>
          <p class="text-xl text-green-100 mb-8">
            دعنا نتولى إدارة أنظمتك التقنية بينما تركز على نمو أعمالك
          </p>
          <a routerLink="/contact" 
             class="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-medium transition-colors">
            احجز استشارة مجانية
          </a>
        </div>
      </section>
    </div>
  `
})
export class ManagedSolutionsComponent {
  mainBenefits = [
    {
      title: 'تركيز على الأعمال الأساسية',
      description: 'بينما نتولى إدارة التقنية، يمكنك التركيز على نمو أعمالك'
    },
    {
      title: 'توفير التكاليف',
      description: 'تكلفة أقل من توظيف فريق تقني داخلي متخصص'
    },
    {
      title: 'خبرة متخصصة',
      description: 'فريق من الخبراء متاح لك دون تكاليف التوظيف'
    },
    {
      title: 'أمان وموثوقية',
      description: 'ضمان أعلى مستويات الأمان والاستمرارية'
    }
  ];

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
    },
    {
      icon: '🔒',
      title: 'الأمان والحماية',
      description: 'حماية شاملة لأنظمتك من التهديدات السيبرانية والاختراقات',
      bgColor: 'bg-red-100',
      features: [
        'مراقبة أمنية مستمرة',
        'حماية من الفيروسات',
        'جدار حماية متقدم',
        'تقييم أمني دوري'
      ],
      price: '2,800 ريال/شهر'
    },
    {
      icon: '☁️',
      title: 'الاستضافة السحابية',
      description: 'استضافة آمنة وموثوقة لأنظمتك مع ضمان الاستمرارية',
      bgColor: 'bg-cyan-100',
      features: [
        'استضافة سحابية آمنة',
        'نسخ احتياطية تلقائية',
        'قابلية التوسع',
        'ضمان وقت التشغيل 99.9%'
      ],
      price: '1,500 ريال/شهر'
    },
    {
      icon: '📈',
      title: 'التطوير والتحسين المستمر',
      description: 'تطوير ميزات جديدة وتحسين الأنظمة الحالية باستمرار',
      bgColor: 'bg-orange-100',
      features: [
        'تطوير ميزات جديدة',
        'تحسين الأداء',
        'تحديث التقنيات',
        'تقييم دوري للاحتياجات'
      ],
      price: '4,000 ريال/شهر'
    }
  ];

  expectedBenefits = [
    {
      icon: '💰',
      title: 'توفير التكاليف',
      description: 'تقليل تكاليف التشغيل والصيانة',
      metric: '40%'
    },
    {
      icon: '⚡',
      title: 'تحسين الأداء',
      description: 'زيادة كفاءة الأنظمة والعمليات',
      metric: '60%'
    },
    {
      icon: '🛡️',
      title: 'الأمان والموثوقية',
      description: 'ضمان أعلى مستويات الأمان',
      metric: '99.9%'
    },
    {
      icon: '📊',
      title: 'رؤى أعمق',
      description: 'تحليلات وتقارير تساعد في اتخاذ القرارات',
      metric: '3x'
    }
  ];

  serviceLevels = [
    {
      name: 'الأساسي',
      price: '3,500 ريال/شهر',
      description: 'للشركات الصغيرة والمتوسطة',
      popular: false,
      features: [
        'مراقبة الأنظمة',
        'دعم فني خلال ساعات العمل',
        'نسخ احتياطية أسبوعية',
        'تقارير شهرية',
        'تحديثات أمنية'
      ]
    },
    {
      name: 'المتقدم',
      price: '6,500 ريال/شهر',
      description: 'للشركات المتنامية',
      popular: true,
      features: [
        'مراقبة 24/7',
        'دعم فني مستمر',
        'نسخ احتياطية يومية',
        'تقارير أسبوعية',
        'تحديثات فورية',
        'تحليل البيانات',
        'تدريب الموظفين'
      ]
    },
    {
      name: 'المؤسسي',
      price: '12,000 ريال/شهر',
      description: 'للشركات الكبيرة',
      popular: false,
      features: [
        'جميع ميزات المتقدم',
        'مدير حساب مخصص',
        'تطوير ميزات مخصصة',
        'استشارات استراتيجية',
        'تكامل مع أنظمة أخرى',
        'تقارير مخصصة',
        'أولوية في الدعم'
      ]
    }
  ];
}