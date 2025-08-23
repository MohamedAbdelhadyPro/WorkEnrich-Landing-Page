import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="pt-24 pb-12">
      <!-- Hero Section -->
      <section class="bg-gradient-to-br from-purple-50 via-white to-blue-50 py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            خدماتنا المتخصصة
          </h1>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            نقدم مجموعة شاملة من الخدمات التقنية لتلبية جميع احتياجات أعمالك الرقمية
          </p>
        </div>
      </section>

      <!-- Services Grid -->
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div *ngFor="let service of services" 
                 class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-purple-200 group">
                 class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#1E2E40]/20 group">
              <div class="w-14 h-14 bg-gradient-to-r rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg text-3xl"
                   [ngClass]="service.bgColor">
                {{ service.icon }}
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-4">{{ service.title }}</h3>
              <p class="text-gray-600 leading-relaxed mb-4">{{ service.description }}</p>
              <ul class="space-y-2 mb-6">
                <li *ngFor="let feature of service.features" class="flex items-center text-sm text-gray-600">
                  <span class="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  {{ feature }}
                </li>
              </ul>
              <div class="text-[#1E2E40] font-semibold">{{ service.price }}</div>
            </div>
          </div>
        </div>
      </section>

      <!-- HR System Highlight -->
      <section class="py-20 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="bg-gradient-to-r from-[#1E2E40] to-blue-600 rounded-2xl p-12 text-white">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 class="text-3xl lg:text-4xl font-bold mb-6">
                  نظام إدارة الموارد البشرية (HR)
                </h2>
                <p class="text-xl mb-8 text-purple-100">
                <p class="text-xl mb-8 text-[#1E2E40]/20">
                  حل شامل ومتكامل لإدارة جميع عمليات الموارد البشرية في شركتك بكفاءة عالية
                </p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div *ngFor="let feature of hrFeatures" class="flex items-start">
                    <div class="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mt-1 mr-3">
                      <span class="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h4 class="font-semibold text-white mb-1">{{ feature.title }}</h4>
                      <p class="text-[#1E2E40]/20 text-sm">{{ feature.description }}</p>
                    </div>
                  </div>
                </div>
                <button class="bg-white text-[#1E2E40] hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors">
                  طلب عرض توضيحي
                </button>
              </div>
              <div class="relative">
                <img src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800" 
                     alt="HR System" 
                     class="w-full h-96 object-cover rounded-xl shadow-2xl">
                <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl"></div>
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
              <div class="w-16 h-16 bg-[#1E2E40]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-[#1E2E40] font-bold text-xl">{{ i + 1 }}</span>
              </div>
              <h3 class="text-lg font-bold text-gray-900 mb-2">{{ step.title }}</h3>
              <p class="text-gray-600">{{ step.description }}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  `
})
export class ServicesComponent {
  services = [
    {
      icon: '🌐',
      title: 'تطوير المواقع الإلكترونية',
      description: 'مواقع حديثة ومتجاوبة باستخدام أحدث التقنيات والأطر البرمجية.',
      bgColor: 'from-blue-400 to-blue-600',
      features: ['تصميم متجاوب', 'سرعة عالية', 'محرك بحث محسن', 'أمان متقدم'],
      price: 'يبدأ من 5,000 ريال'
    },
    {
      icon: '📱',
      title: 'تطبيقات الجوال',
      description: 'تطبيقات iOS و Android أصلية ومتعددة المنصات بأداء عالي.',
      bgColor: 'from-green-400 to-green-600',
      features: ['iOS & Android', 'واجهة سهلة', 'أداء سريع', 'تحديثات مستمرة'],
      price: 'يبدأ من 8,000 ريال'
    },
    {
      icon: '⚙️',
      title: 'أنظمة إدارة مخصصة',
      description: 'حلول برمجية مخصصة لإدارة العمليات وتحسين الإنتاجية.',
      bgColor: 'from-purple-400 to-purple-600',
      features: ['حلول مخصصة', 'تكامل سهل', 'تقارير تفصيلية', 'أمان عالي'],
      price: 'يبدأ من 12,000 ريال'
    },
    {
      icon: '🎨',
      title: 'تصميم واجهات المستخدم',
      description: 'تصاميم عصرية وجذابة تركز على تجربة المستخدم المثلى.',
      bgColor: 'from-pink-400 to-pink-600',
      features: ['تصميم حديث', 'تجربة مستخدم', 'ألوان متناسقة', 'سهولة الاستخدام'],
      price: 'يبدأ من 3,000 ريال'
    },
    {
      icon: '☁️',
      title: 'الحوسبة السحابية',
      description: 'حلول سحابية آمنة وقابلة للتوسع لاستضافة وإدارة التطبيقات.',
      bgColor: 'from-cyan-400 to-cyan-600',
      features: ['استضافة آمنة', 'نسخ احتياطي', 'قابلية التوسع', 'مراقبة مستمرة'],
      price: 'يبدأ من 500 ريال/شهر'
    },
    {
      icon: '🛠️',
      title: 'الدعم الفني والصيانة',
      description: 'دعم فني متواصل وصيانة دورية لضمان استمرارية العمل.',
      bgColor: 'from-orange-400 to-orange-600',
      features: ['دعم 24/7', 'صيانة دورية', 'تحديثات أمنية', 'استجابة سريعة'],
      price: 'يبدأ من 1,000 ريال/شهر'
    }
  ];

  hrFeatures = [
    {
      title: 'إدارة الموظفين',
      description: 'ملفات شاملة لجميع الموظفين مع تتبع البيانات الشخصية والوظيفية'
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
      title: 'التقارير والتحليلات',
      description: 'تقارير مفصلة وتحليلات ذكية لاتخاذ القرارات'
    }
  ];

  processSteps = [
    {
      title: 'التشاور والتخطيط',
      description: 'نناقش احتياجاتك ونضع خطة مفصلة للمشروع'
    },
    {
      title: 'التصميم والتطوير',
      description: 'نبدأ في تصميم وتطوير الحل وفقاً للمتطلبات'
    },
    {
      title: 'الاختبار والمراجعة',
      description: 'نختبر الحل بدقة ونراجعه معك'
    },
    {
      title: 'التسليم والدعم',
      description: 'نسلم المشروع ونقدم الدعم المستمر'
    }
  ];
}