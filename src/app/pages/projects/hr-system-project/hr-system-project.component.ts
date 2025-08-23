import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hr-system-project',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="pt-24 pb-12">
      <!-- Hero Section -->
      <section class="bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div class="mb-4">
                <span class="px-3 py-1 bg-indigo-100 text-indigo-800 text-sm font-medium rounded-full">
                  منتج جديد
                </span>
              </div>
              <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                نظام إدارة الموارد البشرية
              </h1>
              <p class="text-xl text-gray-600 mb-6 leading-relaxed">
                نظام شامل ومتكامل من تطوير <span class="font-bold" style="color: #1A306F">WorkEnrich</span> لإدارة جميع عمليات الموارد البشرية بنظام الاشتراك الشهري المرن.
              </p>
              <div class="bg-gradient-to-r from-blue-500/10 to-blue-600/10 p-4 rounded-lg mb-8">
                <div class="flex items-center">
                  <span class="text-2xl mr-3">🚀</span>
                  <div>
                    <h3 class="font-bold text-blue-600 mb-1">نظام اشتراكات مرن</h3>
                    <p class="text-gray-600 text-sm">ادفع حسب احتياجاتك - بدون تكاليف إضافية</p>
                  </div>
                </div>
              </div>
              <div class="flex flex-col sm:flex-row gap-4">
                <a href="https://client.workenrich.com/auth/register"
                   target="_blank"
                   class="text-white px-8 py-3 rounded-lg font-medium transition-all text-center shadow-lg"
                   style="background: linear-gradient(to right, #1A306F, #2563eb); hover:background: linear-gradient(to right, #16285a, #1d4ed8);">
                  تسجيل حساب جديد
                </a>
                <a href="https://client.workenrich.com/auth/login"
                   target="_blank"
                   class="border-2 text-white px-8 py-3 rounded-lg font-medium transition-all text-center hover:text-white"
                   style="border-color: #1A306F; color: #1A306F; hover:background: linear-gradient(to right, #1A306F, #2563eb);">
                  تسجيل الدخول
                </a>
              </div>
            </div>
            <div class="relative">
              <img src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800" 
                   alt="HR Management System" 
                   class="w-full h-96 object-cover rounded-2xl shadow-2xl">
              <div class="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
                <div class="text-blue-600 font-bold text-sm">منتج جديد</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Pricing Plans -->
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              خطط الاشتراك
            </h2>
            <p class="text-xl text-gray-600">
              اختر الخطة المناسبة لحجم شركتك
            </p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <!-- Basic Plan -->
            <div class="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg">
              <div class="text-center">
                <h3 class="text-2xl font-bold text-gray-900 mb-2">الخطة الأساسية</h3>
                <p class="text-gray-600 mb-6">مناسبة للشركات الصغيرة</p>
                <div class="mb-6">
                  <span class="text-4xl font-bold text-blue-600">299</span>
                  <span class="text-gray-600 text-lg">ريال/شهر</span>
                </div>
                <div class="text-sm text-gray-500 mb-8">حتى 50 موظف</div>
              </div>
              
              <ul class="space-y-4 mb-8">
                <li *ngFor="let feature of basicFeatures" class="flex items-center">
                  <span class="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs mr-3">✓</span>
                  <span class="text-gray-700">{{ feature }}</span>
                </li>
              </ul>
              
              <button class="w-full bg-gray-100 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-600 hover:text-white text-blue-600 py-3 rounded-lg font-medium transition-all">
                ابدأ التجربة المجانية
              </button>
            </div>

            <!-- Professional Plan -->
            <div class="bg-white border-2 rounded-2xl p-8 relative hover:shadow-xl transition-all duration-300 transform hover:scale-105" style="border-color: #1A306F;">
              <div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span class="text-white px-6 py-2 rounded-full text-sm font-medium" style="background: linear-gradient(to right, #1A306F, #2563eb);">الأكثر شعبية</span>
              </div>
              <div class="text-center">
                <h3 class="text-2xl font-bold text-gray-900 mb-2">الخطة الاحترافية</h3>
                <p class="text-gray-600 mb-6">مناسبة للشركات المتوسطة</p>
                <div class="mb-6">
                  <span class="text-4xl font-bold" style="color: #1A306F;">599</span>
                  <span class="text-gray-600 text-lg">ريال/شهر</span>
                </div>
                <div class="text-sm text-gray-500 mb-8">حتى 200 موظف</div>
              </div>
              
              <ul class="space-y-4 mb-8">
                <li *ngFor="let feature of professionalFeatures" class="flex items-center">
                  <span class="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs mr-3">✓</span>
                  <span class="text-gray-700">{{ feature }}</span>
                </li>
              </ul>
              
              <button class="w-full text-white py-3 rounded-lg font-medium transition-all shadow-lg" style="background: linear-gradient(to right, #1A306F, #2563eb);">
                ابدأ التجربة المجانية
              </button>
            </div>

            <!-- Enterprise Plan -->
            <div class="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg">
              <div class="text-center">
                <h3 class="text-2xl font-bold text-gray-900 mb-2">خطة المؤسسات</h3>
                <p class="text-gray-600 mb-6">للشركات الكبيرة والمؤسسات</p>
                <div class="mb-6">
                  <span class="text-4xl font-bold" style="color: #1A306F;">1,299</span>
                  <span class="text-gray-600 text-lg">ريال/شهر</span>
                </div>
                <div class="text-sm text-gray-500 mb-8">موظفين غير محدود</div>
              </div>
              
              <ul class="space-y-4 mb-8">
                <li *ngFor="let feature of enterpriseFeatures" class="flex items-center">
                  <span class="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs mr-3">✓</span>
                  <span class="text-gray-700">{{ feature }}</span>
                </li>
              </ul>
              
              <button class="w-full bg-gray-100 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-600 hover:text-white text-blue-600 py-3 rounded-lg font-medium transition-all">
                تواصل للحصول على عرض
              </button>
            </div>
          </div>
          
          <!-- Free Trial Banner -->
          <div class="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 mt-16 text-center">
            <h3 class="text-2xl font-bold text-gray-900 mb-4">جرب النظام مجاناً لمدة 30 يوم</h3>
            <p class="text-gray-600 mb-6">لا حاجة لبطاقة ائتمان - ابدأ فوراً</p>
            <a href="https://client.workenrich.com/auth/register" 
               target="_blank"
               class="inline-block text-white px-8 py-3 rounded-lg font-medium transition-all shadow-lg" style="background: linear-gradient(to right, #1A306F, #2563eb);">
              ابدأ التجربة المجانية الآن
            </a>
          </div>
        </div>
      </section>

      <!-- System Features -->
      <section class="py-20 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              ميزات النظام
            </h2>
            <p class="text-xl text-gray-600">
              كل ما تحتاجه لإدارة الموارد البشرية في مكان واحد
            </p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div *ngFor="let feature of systemFeatures" class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div class="w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-colors" style="background-color: rgba(26, 48, 111, 0.1);" onmouseover="this.style.backgroundColor='rgba(26, 48, 111, 0.2)'" onmouseout="this.style.backgroundColor='rgba(26, 48, 111, 0.1)'">
                <span class="text-xl" style="color: #1A306F;">{{ feature.icon }}</span>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-3">{{ feature.title }}</h3>
              <p class="text-gray-600 leading-relaxed">{{ feature.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Why Choose Our System -->
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                لماذا نظام WorkEnrich للموارد البشرية؟
              </h2>
              <div class="space-y-6">
                <div *ngFor="let advantage of advantages" class="flex items-start">
                  <div class="w-8 h-8 bg-blue-500/10 rounded-full flex items-center justify-center mt-1 mr-4">
                    <span class="text-sm" style="color: #1A306F;">✓</span>
                  </div>
                  <div>
                    <h4 class="font-bold text-gray-900 mb-2">{{ advantage.title }}</h4>
                    <p class="text-gray-600">{{ advantage.description }}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="relative">
              <img src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800" 
                   alt="HR Management System"
                   class="w-full h-96 object-cover rounded-2xl shadow-2xl">
              <div class="absolute inset-0 bg-gradient-to-t from-[#1E2E40]/20 to-transparent rounded-2xl"></div>
              <div class="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm px-4 py-3 rounded-xl shadow-lg">
                <div class="text-gray-600 text-sm">نظام الموارد البشرية المتطور</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Success Stories -->
      <section class="py-20 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              قصص نجاح عملائنا
            </h2>
            <p class="text-xl text-gray-600">
              شركات حققت نتائج مذهلة باستخدام نظامنا
            </p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div *ngFor="let story of successStories" class="bg-white p-8 rounded-xl shadow-lg text-center">
              <div class="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style="background: linear-gradient(to right, #1A306F, #2563eb);">
                <span class="text-white font-bold">{{ story.company }}</span>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-4">{{ story.title }}</h3>
              <div class="text-3xl font-bold mb-2" style="color: #1A306F;">{{ story.improvement }}</div>
              <p class="text-gray-600 mb-4">{{ story.metric }}</p>
              <p class="text-gray-500 text-sm italic">"{{ story.quote }}"</p>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="py-20" style="background: linear-gradient(to right, #1A306F, #2563eb);">
        <div class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl lg:text-4xl font-bold text-white mb-6">
            جاهز لتحويل إدارة الموارد البشرية في شركتك؟
          </h2>
          <p class="text-xl text-blue-100 mb-8">
            ابدأ تجربتك المجانية اليوم ولا تدفع شيئاً لمدة 30 يوم
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://client.workenrich.com/auth/register" 
               target="_blank"
               class="bg-white hover:bg-gray-100 px-8 py-4 rounded-lg font-bold transition-all transform hover:scale-105 shadow-lg text-lg" style="color: #1A306F;">
              ابدأ التجربة المجانية
            </a>
            <button class="border-2 border-white text-white hover:bg-white px-8 py-4 rounded-lg font-bold transition-all text-lg" style="hover:color: #1A306F;">
              احجز عرض توضيحي
            </button>
          </div>
          <p class="text-blue-200 text-sm mt-4">
            ✓ تجربة مجانية 30 يوم  ✓ لا حاجة لبطاقة ائتمان  ✓ إعداد فوري
          </p>
        </div>
      </section>
    </div>
  `
})
export class HrSystemProjectComponent {
  basicFeatures = [
    'إدارة الموظفين الأساسية',
    'نظام الحضور والانصراف',
    'إدارة الإجازات',
    'كشوف الرواتب',
    'التقارير الأساسية',
    'دعم فني عبر البريد'
  ];

  professionalFeatures = [
    'جميع ميزات الخطة الأساسية',
    'تقييم الأداء المتقدم',
    'إدارة التدريب والتطوير',
    'تقارير تحليلية متقدمة',
    'تكامل مع أنظمة المحاسبة',
    'دعم فني عبر الهاتف',
    'نسخ احتياطي يومي',
    'تخصيص الواجهات'
  ];

  enterpriseFeatures = [
    'جميع ميزات الخطة الاحترافية',
    'مدير حساب مخصص',
    'تدريب مخصص للفريق',
    'تكامل مع أنظمة خارجية',
    'تقارير مخصصة',
    'أمان متقدم ومراجعة',
    'دعم فني أولوية عالية',
    'استشارات HR مجانية'
  ];

  systemFeatures = [
    {
      icon: '👥',
      title: 'إدارة الموظفين',
      description: 'ملفات شاملة للموظفين مع تتبع البيانات الشخصية والوظيفية والمهارات'
    },
    {
      icon: '⏰',
      title: 'الحضور والانصراف',
      description: 'تتبع دقيق لأوقات العمل مع تقارير تفصيلية وتكامل مع أجهزة البصمة'
    },
    {
      icon: '💰',
      title: 'إدارة الرواتب',
      description: 'حساب الرواتب والمكافآت والخصومات تلقائياً مع دعم الضرائب المحلية'
    },
    {
      icon: '🏖️',
      title: 'إدارة الإجازات',
      description: 'نظام طلب الإجازات والموافقة عليها إلكترونياً مع تتبع الأرصدة'
    },
    {
      icon: '📊',
      title: 'تقييم الأداء',
      description: 'أدوات تقييم شاملة لقياس أداء الموظفين وتحديد نقاط التطوير'
    },
    {
      icon: '📈',
      title: 'التقارير والتحليلات',
      description: 'تقارير مفصلة وتحليلات ذكية لاتخاذ القرارات الاستراتيجية'
    }
  ];

  advantages = [
    {
      title: 'سهولة الاستخدام',
      description: 'واجهة بديهية لا تحتاج تدريب معقد، يمكن لأي موظف استخدامها بسهولة'
    },
    {
      title: 'أمان متقدم',
      description: 'حماية عالية للبيانات الحساسة مع تشفير متقدم ونسخ احتياطي آمن'
    },
    {
      title: 'تكامل سلس',
      description: 'يتكامل مع أنظمة المحاسبة وأجهزة البصمة والأنظمة الأخرى بسهولة'
    },
    {
      title: 'دعم محلي',
      description: 'فريق دعم محلي يتحدث العربية ويفهم احتياجات السوق السعودي'
    },
    {
      title: 'تحديثات مستمرة',
      description: 'تحديثات دورية مجانية مع ميزات جديدة وتحسينات الأمان'
    },
    {
      title: 'مرونة في التسعير',
      description: 'خطط مرنة تناسب جميع أحجام الشركات مع إمكانية التطوير'
    }
  ];

  successStories = [
    {
      company: 'ABC',
      title: 'شركة التقنية المتقدمة',
      improvement: '75%',
      metric: 'تحسن في كفاءة إدارة الموظفين',
      quote: 'النظام وفر علينا ساعات كثيرة يومياً'
    },
    {
      company: 'XYZ',
      title: 'مجموعة الأعمال الذكية',
      improvement: '60%',
      metric: 'تقليل في أخطاء الرواتب',
      quote: 'دقة عالية في حساب الرواتب والمكافآت'
    },
    {
      company: 'DEF',
      title: 'شركة الحلول المبتكرة',
      improvement: '90%',
      metric: 'رضا الموظفين عن النظام',
      quote: 'واجهة سهلة وميزات رائعة للموظفين'
    }
  ];
}