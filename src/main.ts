import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  LucideAngularModule, 
  Users, 
  Building2, 
  Award, 
  Clock, 
  BarChart3, 
  Shield 
} from 'lucide-angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <!-- Navigation -->
    <nav class="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center">
            <div class="flex-shrink-0 flex items-center">
              <div class="w-10 h-10 bg-gradient-to-r from-blue-600 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                <lucide-users class="w-6 h-6 text-white"></lucide-users>
              </div>
              <span class="ml-2 text-xl font-bold text-gray-900">WorkEnrich</span>
            </div>
          </div>
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-4">
              <a (click)="scrollToSection('features')" class="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors cursor-pointer">الميزات</a>
              <a (click)="scrollToSection('stats')" class="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors cursor-pointer">الإحصائيات</a>
              <a (click)="scrollToSection('cta')" class="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors cursor-pointer">ابدأ الآن</a>
              <button class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                تسجيل الدخول
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section id="hero" class="pt-24 pb-12 bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="text-center lg:text-right">
            <h1 class="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              نظام إدارة
              <span class="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                الموارد البشرية
              </span>
              المتكامل
            </h1>
            <p class="text-xl text-gray-600 mb-8 leading-relaxed">
              حل شامل لإدارة الموظفين، الرواتب، الإجازات، والحضور والانصراف. 
              صمم خصيصاً للشركات العربية الحديثة.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-medium transition-all transform hover:scale-105 shadow-lg">
                ابدأ تجربتك المجانية
              </button>
              <button class="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg text-lg font-medium transition-all">
                مشاهدة العرض التوضيحي
              </button>
            </div>
            <div class="mt-8 flex items-center justify-center lg:justify-start space-x-8">
              <div class="text-center">
                <div class="text-2xl font-bold text-blue-600">500+</div>
                <div class="text-gray-600 text-sm">شركة تثق بنا</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold text-green-600">50k+</div>
                <div class="text-gray-600 text-sm">موظف يستخدم النظام</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold text-orange-600">99.9%</div>
                <div class="text-gray-600 text-sm">وقت التشغيل</div>
              </div>
            </div>
          </div>
          <div class="relative">
            <div class="relative z-10 bg-white rounded-2xl shadow-2xl p-8 transform rotate-3">
              <img src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800" 
                   alt="HR Dashboard Interface" 
                   class="w-full h-64 object-cover rounded-lg mb-4">
              <div class="space-y-3">
                <div class="flex items-center space-x-3">
                  <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span class="text-gray-700">الموظفون النشطون: 1,248</span>
                </div>
                <div class="flex items-center space-x-3">
                  <div class="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span class="text-gray-700">الإجازات المعلقة: 23</span>
                </div>
                <div class="flex items-center space-x-3">
                  <div class="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span class="text-gray-700">التقارير الشهرية: جاهزة</span>
                </div>
              </div>
            </div>
            <div class="absolute inset-0 bg-gradient-to-r from-blue-400 to-green-400 rounded-2xl transform -rotate-3"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            ميزات تجعل إدارة الموارد البشرية أسهل
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            نظام متكامل يوفر كل ما تحتاجه لإدارة موظفيك بكفاءة وفعالية
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div *ngFor="let feature of features" 
               class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 group">
            <div class="w-14 h-14 bg-gradient-to-r rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg"
                 [ngClass]="feature.bgColor">
              <ng-container [ngSwitch]="feature.iconType">
                <lucide-users *ngSwitchCase="'users'" class="w-7 h-7 text-white"></lucide-users>
                <lucide-building2 *ngSwitchCase="'building'" class="w-7 h-7 text-white"></lucide-building2>
                <lucide-award *ngSwitchCase="'award'" class="w-7 h-7 text-white"></lucide-award>
                <lucide-clock *ngSwitchCase="'clock'" class="w-7 h-7 text-white"></lucide-clock>
                <lucide-bar-chart3 *ngSwitchCase="'chart'" class="w-7 h-7 text-white"></lucide-bar-chart3>
                <lucide-shield *ngSwitchCase="'shield'" class="w-7 h-7 text-white"></lucide-shield>
              </ng-container>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">{{ feature.title }}</h3>
            <p class="text-gray-600 leading-relaxed">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- App Screenshots Section -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            شاهد النظام في العمل
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            واجهات سهلة الاستخدام مصممة خصيصاً لتبسيط إدارة الموارد البشرية
          </p>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div class="bg-white rounded-xl shadow-lg overflow-hidden">
            <img src="https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800" 
                 alt="Employee Management Dashboard" 
                 class="w-full h-64 object-cover">
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-2">لوحة إدارة الموظفين</h3>
              <p class="text-gray-600">عرض شامل لجميع بيانات الموظفين مع إمكانية البحث والتصفية المتقدمة</p>
            </div>
          </div>
          
          <div class="bg-white rounded-xl shadow-lg overflow-hidden">
            <img src="https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800" 
                 alt="Payroll System" 
                 class="w-full h-64 object-cover">
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-2">نظام الرواتب المتطور</h3>
              <p class="text-gray-600">حساب تلقائي للرواتب والمكافآت مع تقارير مالية مفصلة</p>
            </div>
          </div>
          
          <div class="bg-white rounded-xl shadow-lg overflow-hidden">
            <img src="https://images.pexels.com/photos/7688465/pexels-photo-7688465.jpeg?auto=compress&cs=tinysrgb&w=800" 
                 alt="Leave Management" 
                 class="w-full h-64 object-cover">
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-2">إدارة الإجازات الذكية</h3>
              <p class="text-gray-600">نظام متكامل لطلب الإجازات والموافقة عليها مع تتبع الأرصدة</p>
            </div>
          </div>
          
          <div class="bg-white rounded-xl shadow-lg overflow-hidden">
            <img src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800" 
                 alt="Analytics Dashboard" 
                 class="w-full h-64 object-cover">
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-2">تحليلات وتقارير متقدمة</h3>
              <p class="text-gray-600">رؤى عميقة وتحليلات ذكية لاتخاذ قرارات استراتيجية مدروسة</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Customer Testimonials Section -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            ماذا يقول عملاؤنا
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            آراء حقيقية من شركات تستخدم WorkEnrich لإدارة مواردها البشرية
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div *ngFor="let testimonial of testimonials" 
               class="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300">
            <div class="flex items-center mb-4">
              <img [src]="testimonial.avatar" 
                   [alt]="testimonial.name" 
                   class="w-12 h-12 rounded-full object-cover mr-4">
              <div>
                <h4 class="font-bold text-gray-900">{{ testimonial.name }}</h4>
                <p class="text-gray-600 text-sm">{{ testimonial.position }}</p>
                <p class="text-blue-600 text-sm">{{ testimonial.company }}</p>
              </div>
            </div>
            <div class="flex mb-4">
              <span *ngFor="let star of [1,2,3,4,5]" class="text-yellow-400 text-lg">★</span>
            </div>
            <p class="text-gray-700 leading-relaxed">{{ testimonial.review }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section id="stats" class="py-20 bg-gradient-to-r from-blue-600 to-green-600">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div *ngFor="let stat of stats" class="text-white">
            <div class="text-4xl font-bold mb-2">{{ stat.number }}</div>
            <div class="text-blue-100">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section id="cta" class="py-20 bg-gray-50">
      <div class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          جاهز لتطوير إدارة الموارد البشرية في شركتك؟
        </h2>
        <p class="text-xl text-gray-600 mb-8">
          انضم إلى مئات الشركات التي تثق في نظامنا لإدارة مواردها البشرية
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all transform hover:scale-105 shadow-lg">
            ابدأ التجربة المجانية لمدة 30 يوم
          </button>
          <button class="border-2 border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-medium transition-all">
            تحدث مع فريق المبيعات
          </button>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div class="col-span-1 md:col-span-2">
            <div class="flex items-center mb-4">
              <div class="w-10 h-10 bg-gradient-to-r from-blue-600 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                <lucide-users class="w-6 h-6 text-white"></lucide-users>
              </div>
              <span class="ml-2 text-xl font-bold">WorkEnrich</span>
            </div>
            <p class="text-gray-400 mb-4">
              نظام إدارة الموارد البشرية الأول في المنطقة العربية. 
              نساعد الشركات على إدارة مواردها البشرية بكفاءة وفعالية.
            </p>
          </div>
          <div>
            <h4 class="font-bold mb-4">المنتج</h4>
            <ul class="space-y-2 text-gray-400">
              <li><a href="#" class="hover:text-white transition-colors">الميزات</a></li>
              <li><a href="#" class="hover:text-white transition-colors">الأسعار</a></li>
              <li><a href="#" class="hover:text-white transition-colors">الأمان</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-bold mb-4">الدعم</h4>
            <ul class="space-y-2 text-gray-400">
              <li><a href="#" class="hover:text-white transition-colors">مركز المساعدة</a></li>
              <li><a href="#" class="hover:text-white transition-colors">اتصل بنا</a></li>
              <li><a href="#" class="hover:text-white transition-colors">حالة النظام</a></li>
            </ul>
          </div>
        </div>
        <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 WorkEnrich. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  `,
})
export class App {
  features = [
    {
      iconType: 'users',
      title: 'إدارة الموظفين',
      description: 'نظام شامل لإدارة بيانات الموظفين، التوظيف، والتقييمات مع واجهة سهلة الاستخدام.',
      bgColor: 'from-blue-400 to-blue-600'
    },
    {
      iconType: 'building',
      title: 'نظام الرواتب',
      description: 'حساب الرواتب والمكافآت والخصومات تلقائياً مع إنتاج التقارير المالية الشاملة.',
      bgColor: 'from-green-400 to-green-600'
    },
    {
      iconType: 'award',
      title: 'إدارة الإجازات',
      description: 'نظام متطور لطلب الإجازات والموافقة عليها مع تتبع الرصيد والتنبيهات الذكية.',
      bgColor: 'from-orange-400 to-orange-600'
    },
    {
      iconType: 'clock',
      title: 'الحضور والانصراف',
      description: 'مراقبة دقيقة لأوقات الحضور والانصراف مع التكامل مع أنظمة البصمة الحديثة.',
      bgColor: 'from-purple-400 to-purple-600'
    },
    {
      iconType: 'chart',
      title: 'التقارير التحليلية',
      description: 'تقارير مفصلة وتحليلات ذكية تساعد في اتخاذ القرارات الاستراتيجية للموارد البشرية.',
      bgColor: 'from-teal-400 to-teal-600'
    },
    {
      iconType: 'shield',
      title: 'الأمان والخصوصية',
      description: 'حماية عالية المستوى لبيانات الموظفين مع التشفير والنسخ الاحتياطي التلقائي.',
      bgColor: 'from-red-400 to-red-600'
    }
  ];

  stats = [
    { number: '500+', label: 'شركة تستخدم النظام' },
    { number: '50K+', label: 'موظف يديره النظام' },
    { number: '99.9%', label: 'وقت التشغيل' },
    { number: '24/7', label: 'دعم فني متواصل' }
  ];

  testimonials = [
    {
      name: 'أحمد محمد',
      position: 'مدير الموارد البشرية',
      company: 'شركة التقنية المتقدمة',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
      review: 'WorkEnrich غيّر طريقة عملنا تماماً. النظام سهل الاستخدام والدعم الفني ممتاز. وفرنا ساعات كثيرة في إدارة الموظفين والرواتب.'
    },
    {
      name: 'فاطمة العلي',
      position: 'مديرة العمليات',
      company: 'مجموعة الخليج التجارية',
      avatar: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150',
      review: 'التقارير التحليلية في WorkEnrich ساعدتنا في اتخاذ قرارات استراتيجية مهمة. النظام موثوق وآمن ويلبي جميع احتياجاتنا.'
    },
    {
      name: 'خالد السعيد',
      position: 'الرئيس التنفيذي',
      company: 'شركة الابتكار الرقمي',
      avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150',
      review: 'منذ أن بدأنا استخدام WorkEnrich، تحسنت كفاءة إدارة الموارد البشرية بشكل كبير. أنصح به بشدة لأي شركة تريد التطوير.'
    }
  ];

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
}

bootstrapApplication(App, {
  providers: [
    importProvidersFrom(LucideAngularModule.pick({ Users, Building2, Award, Clock, BarChart3, Shield }))
  ]
});
