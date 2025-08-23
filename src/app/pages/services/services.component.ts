import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslationService } from '../../services/translation.service';

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
            خدمات البرمجة المتخصصة
          </h1>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            نقدم مجموعة شاملة من الخدمات التقنية المتخصصة لتلبية احتياجات عملك
          </p>
        </div>
      </section>

      <!-- Services Grid -->
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              خدماتنا المتخصصة
            </h2>
            <p class="text-xl text-gray-600">
              حلول تقنية متطورة مصممة خصيصاً لتحقيق أهدافك
            </p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#1E2E40]/20 group">
              <div class="w-14 h-14 bg-gradient-to-r from-blue-400 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg text-3xl">
                🌐
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-4">تطوير المواقع الإلكترونية</h3>
              <p class="text-gray-600 leading-relaxed mb-4">مواقع إلكترونية حديثة ومتجاوبة مع جميع الأجهزة باستخدام أحدث التقنيات.</p>
              <ul class="space-y-2 mb-6">
                <li class="flex items-center text-sm text-gray-600">
                  <span class="w-2 h-2 bg-[#1E2E40] rounded-full mr-2"></span>
                  تطوير مواقع متجاوبة
                </li>
                <li class="flex items-center text-sm text-gray-600">
                  <span class="w-2 h-2 bg-[#1E2E40] rounded-full mr-2"></span>
                  تصميم واجهات احترافي
                </li>
                <li class="flex items-center text-sm text-gray-600">
                  <span class="w-2 h-2 bg-[#1E2E40] rounded-full mr-2"></span>
                  تحسين محركات البحث
                </li>
                <li class="flex items-center text-sm text-gray-600">
                  <span class="w-2 h-2 bg-[#1E2E40] rounded-full mr-2"></span>
                  أداء عالي وأمان
                </li>
              </ul>
              <div class="text-[#1E2E40] font-semibold">يبدأ من 5,000 ريال</div>
            </div>
            
            <div class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#1E2E40]/20 group">
              <div class="w-14 h-14 bg-gradient-to-r from-green-400 to-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg text-3xl">
                📱
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-4">تطبيقات الجوال</h3>
              <p class="text-gray-600 leading-relaxed mb-4">تطبيقات iOS و Android أصلية ومتعددة المنصات بأداء عالي.</p>
              <ul class="space-y-2 mb-6">
                <li class="flex items-center text-sm text-gray-600">
                  <span class="w-2 h-2 bg-[#1E2E40] rounded-full mr-2"></span>
                  iOS & Android
                </li>
                <li class="flex items-center text-sm text-gray-600">
                  <span class="w-2 h-2 bg-[#1E2E40] rounded-full mr-2"></span>
                  واجهة سهلة
                </li>
                <li class="flex items-center text-sm text-gray-600">
                  <span class="w-2 h-2 bg-[#1E2E40] rounded-full mr-2"></span>
                  أداء سريع
                </li>
                <li class="flex items-center text-sm text-gray-600">
                  <span class="w-2 h-2 bg-[#1E2E40] rounded-full mr-2"></span>
                  تحديثات مستمرة
                </li>
              </ul>
              <div class="text-[#1E2E40] font-semibold">يبدأ من 8,000 ريال</div>
            </div>
            
            <div class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#1E2E40]/20 group">
              <div class="w-14 h-14 bg-gradient-to-r from-purple-400 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg text-3xl">
                ⚙️
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-4">أنظمة إدارة مخصصة</h3>
              <p class="text-gray-600 leading-relaxed mb-4">حلول برمجية مخصصة لإدارة العمليات وتحسين الإنتاجية.</p>
              <ul class="space-y-2 mb-6">
                <li class="flex items-center text-sm text-gray-600">
                  <span class="w-2 h-2 bg-[#1E2E40] rounded-full mr-2"></span>
                  حلول مخصصة
                </li>
                <li class="flex items-center text-sm text-gray-600">
                  <span class="w-2 h-2 bg-[#1E2E40] rounded-full mr-2"></span>
                  تكامل سهل
                </li>
                <li class="flex items-center text-sm text-gray-600">
                  <span class="w-2 h-2 bg-[#1E2E40] rounded-full mr-2"></span>
                  تقارير تفصيلية
                </li>
                <li class="flex items-center text-sm text-gray-600">
                  <span class="w-2 h-2 bg-[#1E2E40] rounded-full mr-2"></span>
                  أمان عالي
                </li>
              </ul>
              <div class="text-[#1E2E40] font-semibold">يبدأ من 12,000 ريال</div>
            </div>
            
            <div class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#1E2E40]/20 group">
              <div class="w-14 h-14 bg-gradient-to-r from-pink-400 to-pink-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg text-3xl">
                🎨
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-4">تصميم واجهات المستخدم</h3>
              <p class="text-gray-600 leading-relaxed mb-4">تصاميم عصرية وجذابة تركز على تجربة المستخدم المثلى.</p>
              <ul class="space-y-2 mb-6">
                <li class="flex items-center text-sm text-gray-600">
                  <span class="w-2 h-2 bg-[#1E2E40] rounded-full mr-2"></span>
                  تصميم حديث
                </li>
                <li class="flex items-center text-sm text-gray-600">
                  <span class="w-2 h-2 bg-[#1E2E40] rounded-full mr-2"></span>
                  تجربة مستخدم
                </li>
                <li class="flex items-center text-sm text-gray-600">
                  <span class="w-2 h-2 bg-[#1E2E40] rounded-full mr-2"></span>
                  ألوان متناسقة
                </li>
                <li class="flex items-center text-sm text-gray-600">
                  <span class="w-2 h-2 bg-[#1E2E40] rounded-full mr-2"></span>
                  سهولة الاستخدام
                </li>
              </ul>
              <div class="text-[#1E2E40] font-semibold">يبدأ من 3,000 ريال</div>
            </div>
            
            <div class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#1E2E40]/20 group">
              <div class="w-14 h-14 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg text-3xl">
                ☁️
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-4">الحوسبة السحابية</h3>
              <p class="text-gray-600 leading-relaxed mb-4">حلول سحابية آمنة وقابلة للتوسع لاستضافة وإدارة التطبيقات.</p>
              <ul class="space-y-2 mb-6">
                <li class="flex items-center text-sm text-gray-600">
                  <span class="w-2 h-2 bg-[#1E2E40] rounded-full mr-2"></span>
                  استضافة آمنة
                </li>
                <li class="flex items-center text-sm text-gray-600">
                  <span class="w-2 h-2 bg-[#1E2E40] rounded-full mr-2"></span>
                  نسخ احتياطي
                </li>
                <li class="flex items-center text-sm text-gray-600">
                  <span class="w-2 h-2 bg-[#1E2E40] rounded-full mr-2"></span>
                  قابلية التوسع
                </li>
                <li class="flex items-center text-sm text-gray-600">
                  <span class="w-2 h-2 bg-[#1E2E40] rounded-full mr-2"></span>
                  مراقبة مستمرة
                </li>
              </ul>
              <div class="text-[#1E2E40] font-semibold">يبدأ من 500 ريال/شهر</div>
            </div>
            
            <div class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#1E2E40]/20 group">
              <div class="w-14 h-14 bg-gradient-to-r from-orange-400 to-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg text-3xl">
                🛠️
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-4">الدعم الفني والصيانة</h3>
              <p class="text-gray-600 leading-relaxed mb-4">دعم فني متواصل وصيانة دورية لضمان استمرارية العمل.</p>
              <ul class="space-y-2 mb-6">
                <li class="flex items-center text-sm text-gray-600">
                  <span class="w-2 h-2 bg-[#1E2E40] rounded-full mr-2"></span>
                  دعم 24/7
                </li>
                <li class="flex items-center text-sm text-gray-600">
                  <span class="w-2 h-2 bg-[#1E2E40] rounded-full mr-2"></span>
                  صيانة دورية
                </li>
                <li class="flex items-center text-sm text-gray-600">
                  <span class="w-2 h-2 bg-[#1E2E40] rounded-full mr-2"></span>
                  تحديثات أمنية
                </li>
                <li class="flex items-center text-sm text-gray-600">
                  <span class="w-2 h-2 bg-[#1E2E40] rounded-full mr-2"></span>
                  استجابة سريعة
                </li>
              </ul>
              <div class="text-[#1E2E40] font-semibold">يبدأ من 1,000 ريال/شهر</div>
            </div>
          </div>
        </div>
      </section>

      <!-- Portfolio Section -->
      <section class="py-20 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              مشاريعنا المنجزة
            </h2>
            <p class="text-xl text-gray-600">
              أمثلة حية من مشاريعنا التي حققت نجاحاً باهراً لعملائنا
            </p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div *ngFor="let project of portfolio" 
                 class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div class="relative overflow-hidden">
                <img [src]="project.image" 
                     [alt]="project.title" 
                     class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300">
                <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div class="p-6">
                <div class="flex items-center mb-2">
                  <span class="px-3 py-1 text-xs font-medium rounded-full"
                        [ngClass]="project.categoryColor">
                    {{ project.category }}
                  </span>
                </div>
                <h3 class="text-xl font-bold text-gray-900 mb-2">{{ project.title }}</h3>
                <p class="text-gray-600 text-sm mb-4">{{ project.description }}</p>
                <div class="flex flex-wrap gap-2 mb-4">
                  <span *ngFor="let tech of project.technologies" 
                        class="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                    {{ tech }}
                  </span>
                </div>
                <a [routerLink]="project.link"
                   class="text-[#1E2E40] hover:text-[#1E2E40]/80 font-medium text-sm transition-colors">
                  عرض التفاصيل ←
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- HR System Highlight -->
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="bg-gradient-to-r from-[#1E2E40] to-blue-600 rounded-2xl p-12 text-white">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 class="text-3xl lg:text-4xl font-bold mb-6">
                  نظام إدارة الموارد البشرية (HR)
                </h2>
                <p class="text-xl mb-8 text-blue-100">
                  حل شامل ومتكامل لإدارة جميع عمليات الموارد البشرية في شركتك بكفاءة عالية
                </p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div *ngFor="let feature of hrFeatures" class="flex items-start">
                    <div class="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mt-1 mr-3">
                      <span class="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h4 class="font-semibold text-white mb-1">{{ feature.title }}</h4>
                      <p class="text-blue-100 text-sm">{{ feature.description }}</p>
                    </div>
                  </div>
                </div>
                <a routerLink="/projects/hr-system" class="bg-white text-[#1E2E40] hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors">
                  عرض تفاصيل النظام
                </a>
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
              <div class="w-16 h-16 bg-[#1E2E40]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-[#1E2E40] font-bold text-xl">{{ i + 1 }}</span>
              </div>
              <h3 class="text-lg font-bold text-gray-900 mb-2">{{ step.title }}</h3>
              <p class="text-gray-600">{{ step.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="py-20 bg-[#1E2E40]">
        <div class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl lg:text-4xl font-bold text-white mb-6">
            جاهز لبدء مشروعك القادم؟
          </h2>
          <p class="text-xl text-blue-100 mb-8">
            تواصل معنا اليوم واحصل على استشارة مجانية لمشروعك
          </p>
          <a routerLink="/contact" 
             class="bg-white text-[#1E2E40] hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors text-lg">
            ابدأ مشروعك الآن
          </a>
        </div>
      </section>
    </div>
  `
})
export class ServicesComponent {
  constructor(public translationService: TranslationService) {}
  
  portfolio = [
    {
      title: 'منصة التجارة الإلكترونية',
      description: 'متجر إلكتروني متكامل مع نظام إدارة المخزون والمدفوعات',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'تطوير ويب',
      categoryColor: 'bg-blue-100 text-blue-800',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: '/projects/ecommerce'
    },
    {
      title: 'تطبيق إدارة المهام',
      description: 'تطبيق جوال لإدارة المشاريع والمهام مع فريق العمل',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'تطبيق جوال',
      categoryColor: 'bg-green-100 text-green-800',
      technologies: ['Flutter', 'Firebase', 'Dart', 'Push Notifications'],
      link: '/projects/task-management'
    },
    {
      title: 'نظام إدارة المستشفيات',
      description: 'نظام شامل لإدارة المرضى والمواعيد والسجلات الطبية',
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'نظام إدارة',
      categoryColor: 'bg-purple-100 text-purple-800',
      technologies: ['Angular', 'ASP.NET', 'SQL Server', 'Azure'],
      link: '/projects/hospital-system'
    },
    {
      title: 'منصة التعليم الإلكتروني',
      description: 'منصة تفاعلية للتعلم عن بُعد مع أدوات التقييم والمتابعة',
      image: 'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'تطوير ويب',
      categoryColor: 'bg-blue-100 text-blue-800',
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'WebRTC'],
      link: '/projects/elearning'
    },
    {
      title: 'تطبيق الخدمات المصرفية',
      description: 'تطبيق آمن للخدمات المصرفية الرقمية والتحويلات',
      image: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'تطبيق جوال',
      categoryColor: 'bg-green-100 text-green-800',
      technologies: ['React Native', 'Blockchain', 'Encryption', 'Biometrics'],
      link: '/projects/banking-app'
    },
    {
      title: 'نظام إدارة المخازن',
      description: 'حل متكامل لإدارة المخزون والمبيعات والتقارير المالية',
      image: 'https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'نظام إدارة',
      categoryColor: 'bg-purple-100 text-purple-800',
      technologies: ['Django', 'PostgreSQL', 'Redis', 'Docker'],
      link: '/projects/inventory-system'
    },
    {
      title: 'نظام إدارة الموارد البشرية',
      description: 'نظام شامل لإدارة الموظفين والحضور والرواتب والإجازات',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'نظام إدارة',
      categoryColor: 'bg-indigo-100 text-indigo-800',
      technologies: ['Angular', 'Node.js', 'PostgreSQL', 'JWT', 'Chart.js'],
      link: '/projects/hr-system'
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