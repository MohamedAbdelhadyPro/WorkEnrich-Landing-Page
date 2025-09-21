import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslationService } from '../../services/translation.service';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <!-- Hero Section -->
    <section id="hero" class="pt-24 pb-20 relative overflow-hidden" style="background: linear-gradient(135deg, #1A3477, #2563eb);">
      <!-- Background Elements -->
      <div class="absolute inset-0">
        <div class="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-2xl"></div>
      </div>
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="relative z-10 text-center">
          <!-- Badge -->
          <div class="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
            <span class="text-white text-sm font-medium">🚀 نطور المستقبل الرقمي</span>
          </div>
          
          <!-- Main Heading -->
          <div class="max-w-4xl mx-auto mb-8">
            <h1 class="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              نطور حلولاً تقنية متقدمة لنجاح أعمالك
            </h1>
            <p class="text-xl lg:text-2xl text-blue-100 mb-10 leading-relaxed max-w-3xl mx-auto">
              شركة متخصصة في تطوير البرمجيات والتطبيقات المبتكرة التي تساعد الشركات على النمو والتطور في العصر الرقمي
            </p>
          </div>
          
          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <a routerLink="/contact" class="group bg-white text-slate-900 hover:bg-orange-50 px-10 py-4 rounded-xl text-lg font-bold transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl">
              <span class="flex items-center justify-center">
                ابدأ مشروعك
                <svg class="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
              </span>
            </a>
            <a routerLink="/services" class="group border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-10 py-4 rounded-xl text-lg font-bold transition-all hover:border-white/50" style="background: linear-gradient(135deg, rgba(26, 52, 119, 0.3), rgba(37, 99, 235, 0.3));">
              <span class="flex items-center justify-center">
                اعرض أعمالنا
                <svg class="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">بس
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                </svg>
              </span>
            </a>
          </div>
          
          <!-- Stats -->
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div class="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all">
              <div class="text-4xl font-bold text-white mb-2">+200</div>
              <div class="text-blue-200 font-medium">مشروع مكتمل</div>
              <div class="text-blue-300 text-sm mt-1">مشاريع متنوعة ومبتكرة</div>
            </div>
            <div class="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all">
              <div class="text-4xl font-bold text-white mb-2">+150</div>
              <div class="text-blue-200 font-medium">عميل سعيد</div>
              <div class="text-blue-300 text-sm mt-1">عملاء راضون عن خدماتنا</div>
            </div>
            <div class="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all">
              <div class="text-4xl font-bold text-white mb-2">+15</div>
              <div class="text-blue-200 font-medium">سنوات خبرة</div>
              <div class="text-blue-300 text-sm mt-1">خبرة متراكمة في السوق</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Distinguished Clients -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            عملاؤنا المميزون
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            نفخر بثقة كبرى الشركات والمؤسسات في المنطقة وشراكتنا الناجحة معهم
          </p>
        </div>
        
        <!-- Client Logos Grid -->
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-16">
          <div class="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center group min-h-[120px]">
            <div class="text-center">
              <div class="w-16 h-16 bg-red-600 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                <span class="text-white font-bold text-xs leading-tight">BEST<br>SHIELD</span>
              </div>
              <div class="text-sm font-semibold text-gray-800">بست شيلد</div>
            </div>
          </div>
          
          <div class="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center group min-h-[120px]">
            <div class="text-center">
              <div class="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                <span class="text-white font-bold text-sm">ACME</span>
              </div>
              <div class="text-sm font-semibold text-gray-800">أكمي</div>
            </div>
          </div>
          
          <div class="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center group min-h-[120px]">
            <div class="text-center">
              <div class="w-16 h-16 bg-gradient-to-r from-green-600 to-green-700 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                <span class="text-white font-bold text-sm">CARPI</span>
              </div>
              <div class="text-sm font-semibold text-gray-800">كاربي</div>
            </div>
          </div>
          
          <div class="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center group min-h-[120px]">
            <div class="text-center">
              <div class="w-16 h-16 bg-yellow-500 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                <span class="text-white font-bold text-xs">MALAFY</span>
              </div>
              <div class="text-sm font-semibold text-gray-800">ملافي</div>
            </div>
          </div>
          
          <div class="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center group min-h-[120px]">
            <div class="text-center">
              <div class="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                <span class="text-white font-bold text-sm">AZRAQ</span>
              </div>
              <div class="text-sm font-semibold text-gray-800">أزرق</div>
            </div>
          </div>
          
          <div class="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center group min-h-[120px]">
            <div class="text-center">
              <div class="w-16 h-16 bg-gradient-to-r from-cyan-600 to-cyan-700 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                <span class="text-white font-bold text-xs">PDENTAL</span>
              </div>
              <div class="text-sm font-semibold text-gray-800">بي دنتال</div>
            </div>
          </div>
        </div>
        
        <!-- Client Testimonial -->
        <!-- Animated Testimonials Carousel -->
        <div class="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto relative overflow-hidden">
          <div class="text-center mb-6">
            <div class="text-4xl mb-2">💬</div>
            <h3 class="text-xl font-bold text-gray-900">آراء عملائنا</h3>
          </div>
          
          <!-- Testimonials Container -->
          <div class="relative h-40 overflow-hidden" 
               (touchstart)="onTouchStart($event)"
               (touchmove)="onTouchMove($event)"
               (touchend)="onTouchEnd($event)">
            <div class="absolute inset-0 transition-transform duration-700 ease-in-out"
                 [style.transform]="'translateX(' + (currentTestimonial * -100) + '%)'">
              <div class="flex">
                <div *ngFor="let testimonial of testimonials; let i = index" 
                     class="w-full flex-shrink-0 text-center px-4">
                  <blockquote class="text-lg text-gray-700 mb-4 italic leading-relaxed">
                    "{{ testimonial.quote }}"
                  </blockquote>
                  <div class="flex items-center justify-center">
                    <div class="w-12 h-12 bg-gradient-to-r from-[#1E2E40] to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
                      {{ testimonial.initials }}
                    </div>
                    <div class="text-right">
                      <div class="font-bold text-gray-900">{{ testimonial.name }}</div>
                      <div class="text-gray-600 text-sm">{{ testimonial.position }}</div>
                      <div class="text-gray-500 text-xs">{{ testimonial.company }}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- CTA -->
        <div class="text-center mt-12">
          <p class="text-lg text-gray-600 mb-6">هل تريد أن تكون من عملائنا المميزين؟</p>
          <a routerLink="/contact" class="text-white px-8 py-4 rounded-xl font-bold transition-all transform hover:scale-105 shadow-lg" style="background: linear-gradient(135deg, #1A3477, #2563eb);">
            ابدأ مشروعك معنا
          </a>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            لماذا تختار خدماتنا؟
          </h2>
          <p class="text-xl text-gray-600">
            نقدم حلولاً تقنية متميزة تساعدك على تحقيق أهدافك
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">جودة عالية</h3>
            <p class="text-gray-600">نلتزم بأعلى معايير الجودة في جميع مشاريعنا</p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">سرعة في التنفيذ</h3>
            <p class="text-gray-600">نسلم مشاريعك في الوقت المحدد دون تأخير</p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">فريق متخصص</h3>
            <p class="text-gray-600">مطورون ومصممون ذوو خبرة عالية ومهارات متقدمة</p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">دعم مستمر</h3>
            <p class="text-gray-600">نقدم الدعم الفني والصيانة المستمرة لجميع مشاريعنا</p>
          </div>
        </div>
      </div>
    </section>

  `
})
export class HomeComponent {
  currentTestimonial = 0;
  testimonials = [
    {
      quote: 'WorkEnrich قدمت لنا حلولاً تقنية متطورة ساعدتنا على تحسين كفاءة عملياتنا بشكل كبير. فريق محترف وملتزم بالمواعيد.',
      name: 'أحمد المحمد',
      position: 'مدير تقنية المعلومات',
      company: 'شركة الاتصالات السعودية',
      initials: 'أم'
    },
    {
      quote: 'نظام الموارد البشرية من WorkEnrich غير طريقة عملنا تماماً. أصبحت إدارة الموظفين أسهل وأكثر دقة.',
      name: 'فاطمة العتيبي',
      position: 'مديرة الموارد البشرية',
      company: 'البنك الأهلي التجاري',
      initials: 'فع'
    },
    {
      quote: 'التطبيق الذي طوروه لنا حقق نجاحاً كبيراً وزاد من رضا عملائنا. خدمة ممتازة ودعم فني متميز.',
      name: 'خالد الشمري',
      position: 'المدير التنفيذي',
      company: 'شركة التجارة الذكية',
      initials: 'خش'
    },
    {
      quote: 'منصة التعليم الإلكتروني التي طوروها لنا ساعدت في زيادة عدد الطلاب بنسبة 400%. نتائج مذهلة!',
      name: 'سارة القحطاني',
      position: 'مديرة التطوير الأكاديمي',
      company: 'أكاديمية المستقبل',
      initials: 'سق'
    },
    {
      quote: 'تطبيق الخدمات المصرفية الذي طوروه يتميز بأعلى معايير الأمان وسهولة الاستخدام. عمل رائع!',
      name: 'عبدالرحمن الدوسري',
      position: 'مدير التطوير الرقمي',
      company: 'بنك الراجحي',
      initials: 'عد'
    }
  ];
  private testimonialInterval: any;
  private touchStartX: number = 0;
  private touchEndX: number = 0;

  constructor(
    public translationService: TranslationService,
    private languageService: LanguageService
  ) {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    if (this.testimonialInterval) {
      clearInterval(this.testimonialInterval);
    }
  }

  startAutoSlide() {
    this.testimonialInterval = setInterval(() => {
      this.nextTestimonial();
    }, 5000); // Change every 5 seconds
  }

  nextTestimonial() {
    this.currentTestimonial = (this.currentTestimonial + 1) % this.testimonials.length;
  }

  previousTestimonial() {
    this.currentTestimonial = this.currentTestimonial === 0 
      ? this.testimonials.length - 1 
      : this.currentTestimonial - 1;
  }

  setCurrentTestimonial(index: number) {
    this.currentTestimonial = index;
    // Reset auto-slide timer when manually navigating
    this.resetAutoSlide();
  }

  resetAutoSlide() {
    if (this.testimonialInterval) {
      clearInterval(this.testimonialInterval);
    }
    this.startAutoSlide();
  }

  // Touch/Swipe functionality
  onTouchStart(event: TouchEvent) {
    this.touchStartX = event.touches[0].clientX;
  }

  onTouchMove(event: TouchEvent) {
    this.touchEndX = event.touches[0].clientX;
  }

  onTouchEnd(event: TouchEvent) {
    const swipeThreshold = 50; // Minimum distance for swipe
    const swipeDistance = this.touchStartX - this.touchEndX;

    if (Math.abs(swipeDistance) > swipeThreshold) {
      if (swipeDistance > 0) {
        // Swipe left - next testimonial
        this.nextTestimonial();
      } else {
        // Swipe right - previous testimonial
        this.previousTestimonial();
      }
      this.resetAutoSlide();
    }
  }
}