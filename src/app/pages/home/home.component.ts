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
    <section id="hero" style="padding-top: 6rem; padding-bottom: 5rem; position: relative; overflow: hidden; background: linear-gradient(135deg, #1A3477, #2563eb);">
      <!-- Background Elements -->
      <div style="position: absolute; inset: 0;">
        <div style="position: absolute; top: 0; right: 0; width: 24rem; height: 24rem; background-color: rgba(255,255,255,0.05); border-radius: 50%; filter: blur(48px);"></div>
        <div style="position: absolute; bottom: 0; left: 0; width: 20rem; height: 20rem; background-color: rgba(255,255,255,0.05); border-radius: 50%; filter: blur(48px);"></div>
        <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 16rem; height: 16rem; background-color: rgba(255,255,255,0.05); border-radius: 50%; filter: blur(32px);"></div>
      </div>
      
      <div style="max-width: 80rem; margin: 0 auto; padding: 0 1rem;">
        <div style="position: relative; z-index: 10; text-align: center;">
          <!-- Badge -->
          <div style="display: inline-flex; align-items: center; background-color: rgba(255,255,255,0.1); backdrop-filter: blur(4px); border: 1px solid rgba(255,255,255,0.2); border-radius: 9999px; padding: 0.5rem 1rem; margin-bottom: 2rem;">
            <span style="color: white; font-size: 0.875rem; font-weight: 500;">🚀 نطور المستقبل الرقمي</span>
          </div>
          
          <!-- Main Heading -->
          <div style="max-width: 56rem; margin: 0 auto 2rem;">
            <h1 style="font-size: 3rem; font-weight: 700; color: white; margin-bottom: 1.5rem; line-height: 1.1;">
              نطور حلولاً تقنية متقدمة لنجاح أعمالك
            </h1>
            <p style="font-size: 1.25rem; color: #dbeafe; margin-bottom: 2.5rem; line-height: 1.6; max-width: 48rem; margin-left: auto; margin-right: auto;">
              شركة متخصصة في تطوير البرمجيات والتطبيقات المبتكرة التي تساعد الشركات على النمو والتطور في العصر الرقمي
            </p>
          </div>
          
          <!-- CTA Buttons -->
          <div style="display: flex; flex-direction: column; gap: 1.5rem; justify-content: center; margin-bottom: 4rem;">
            <a routerLink="/contact" style="background-color: white; color: #0f172a; padding: 1rem 2.5rem; border-radius: 0.75rem; font-size: 1.125rem; font-weight: 700; transition: all 0.3s; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); text-decoration: none; display: inline-block;">
              <span style="display: flex; align-items: center; justify-content: center;">
                ابدأ مشروعك
                <svg style="width: 1.25rem; height: 1.25rem; margin-right: 0.5rem;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
              </span>
            </a>
            <a routerLink="/services" style="border: 2px solid rgba(255,255,255,0.3); color: white; backdrop-filter: blur(4px); padding: 1rem 2.5rem; border-radius: 0.75rem; font-size: 1.125rem; font-weight: 700; transition: all 0.3s; background: linear-gradient(135deg, rgba(26, 52, 119, 0.3), rgba(37, 99, 235, 0.3)); text-decoration: none; display: inline-block;">
              <span style="display: flex; align-items: center; justify-content: center;">
                اعرض أعمالنا
                <svg style="width: 1.25rem; height: 1.25rem; margin-right: 0.5rem;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                </svg>
              </span>
            </a>
          </div>
          
          <!-- Stats -->
          <div style="display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 2rem; max-width: 56rem; margin: 0 auto;">
            <div style="background-color: rgba(255,255,255,0.1); backdrop-filter: blur(4px); border: 1px solid rgba(255,255,255,0.2); border-radius: 1rem; padding: 1.5rem; transition: all 0.3s;">
              <div style="font-size: 2.25rem; font-weight: 700; color: white; margin-bottom: 0.5rem;">+200</div>
              <div style="color: #dbeafe; font-weight: 500;">مشروع مكتمل</div>
              <div style="color: #bfdbfe; font-size: 0.875rem; margin-top: 0.25rem;">مشاريع متنوعة ومبتكرة</div>
            </div>
            <div style="background-color: rgba(255,255,255,0.1); backdrop-filter: blur(4px); border: 1px solid rgba(255,255,255,0.2); border-radius: 1rem; padding: 1.5rem; transition: all 0.3s;">
              <div style="font-size: 2.25rem; font-weight: 700; color: white; margin-bottom: 0.5rem;">+150</div>
              <div style="color: #dbeafe; font-weight: 500;">عميل سعيد</div>
              <div style="color: #bfdbfe; font-size: 0.875rem; margin-top: 0.25rem;">عملاء راضون عن خدماتنا</div>
            </div>
            <div style="background-color: rgba(255,255,255,0.1); backdrop-filter: blur(4px); border: 1px solid rgba(255,255,255,0.2); border-radius: 1rem; padding: 1.5rem; transition: all 0.3s;">
              <div style="font-size: 2.25rem; font-weight: 700; color: white; margin-bottom: 0.5rem;">+15</div>
              <div style="color: #dbeafe; font-weight: 500;">سنوات خبرة</div>
              <div style="color: #bfdbfe; font-size: 0.875rem; margin-top: 0.25rem;">خبرة متراكمة في السوق</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- HR Product Banner -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Modern HR System Banner -->
        <div class="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-8 lg:p-12 relative overflow-hidden border border-slate-200 shadow-sm">
          <!-- Decorative elements -->
          <div class="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-100/50 to-purple-100/50 rounded-full blur-2xl -mr-20 -mt-20"></div>
          <div class="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-indigo-100/50 to-cyan-100/50 rounded-full blur-xl -ml-16 -mb-16"></div>
          
          <div class="relative z-10">
            <!-- Header Section -->
            <div class="text-center mb-12">
              <div class="inline-flex items-center bg-white/80 backdrop-blur-sm border border-blue-200/50 px-6 py-3 rounded-full mb-6 shadow-sm">
                <div class="w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mr-3 animate-pulse"></div>
                <span class="text-slate-700 font-semibold text-sm">منتج جديد ومتطور</span>
                <span class="mr-2 text-yellow-500 text-lg">⭐</span>
              </div>
              
              <h2 class="text-4xl lg:text-5xl font-bold text-slate-800 mb-6 leading-tight">
                نظام إدارة الموارد البشرية
              </h2>
              <p class="text-xl text-slate-600 mb-8 leading-relaxed max-w-4xl mx-auto">
                حل شامل ومتكامل لإدارة جميع عمليات الموارد البشرية في شركتك بكفاءة عالية وأمان متقدم
              </p>
            </div>
            
            <!-- Content Grid -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <!-- Left Side - Features -->
              <div class="space-y-6">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div class="bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-white/50 shadow-sm hover:shadow-md transition-all">
                    <div class="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4">
                      <span class="text-white text-xl">👥</span>
                    </div>
                    <h3 class="font-bold text-slate-800 mb-2">إدارة الموظفين</h3>
                    <p class="text-slate-600 text-sm">ملفات شاملة وتتبع دقيق</p>
                  </div>
                  
                  <div class="bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-white/50 shadow-sm hover:shadow-md transition-all">
                    <div class="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-4">
                      <span class="text-white text-xl">💰</span>
                    </div>
                    <h3 class="font-bold text-slate-800 mb-2">إدارة الرواتب</h3>
                    <p class="text-slate-600 text-sm">حساب تلقائي ودقيق</p>
                  </div>
                  
                  <div class="bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-white/50 shadow-sm hover:shadow-md transition-all">
                    <div class="w-12 h-12 bg-gradient-to-r from-orange-400 to-orange-600 rounded-xl flex items-center justify-center mb-4">
                      <span class="text-white text-xl">⏰</span>
                    </div>
                    <h3 class="font-bold text-slate-800 mb-2">الحضور والانصراف</h3>
                    <p class="text-slate-600 text-sm">تتبع دقيق للأوقات</p>
                  </div>
                  
                  <div class="bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-white/50 shadow-sm hover:shadow-md transition-all">
                    <div class="w-12 h-12 bg-gradient-to-r from-orange-600 to-red-600 rounded-xl flex items-center justify-center mb-4">
                      <span class="text-white text-xl">📊</span>
                    </div>
                    <h3 class="font-bold text-slate-800 mb-2">التقارير والتحليلات</h3>
                    <p class="text-slate-600 text-sm">رؤى ذكية لاتخاذ القرارات</p>
                  </div>
                </div>
                
                <!-- Action Buttons -->
                <div class="flex flex-col sm:flex-row gap-4 pt-4">
                  <a routerLink="/projects/hr-system" 
                     class="bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800 text-white px-8 py-4 rounded-2xl font-bold transition-all transform hover:scale-105 text-center shadow-lg hover:shadow-xl">
                    <span class="flex items-center justify-center">
                      عرض التفاصيل
                      <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                      </svg>
                    </span>
                  </a>
                  <a href="https://client.workenrich.com/auth/login"
                     target="_blank"
                     class="bg-white/80 backdrop-blur-sm border-2 border-slate-300 text-slate-700 hover:bg-white hover:border-slate-400 px-8 py-4 rounded-2xl font-bold transition-all text-center shadow-sm hover:shadow-md">
                    دخول النظام
                  </a>
                </div>
              </div>
              
              <!-- Right Side - Image -->
              <div class="relative">
                <div class="bg-white/80 backdrop-blur-sm p-6 rounded-3xl shadow-lg border border-white/50">
                  <img src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600" 
                       alt="HR System" 
                       class="w-full h-80 object-cover rounded-2xl">
                  
                  <!-- Floating Status Card -->
                  <div class="absolute -bottom-4 -right-4 bg-white/95 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-xl border border-slate-200">
                    <div class="flex items-center">
                      <div class="w-4 h-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mr-3 animate-pulse"></div>
                      <div>
                        <div class="font-bold text-slate-800 text-sm">نظام الموارد البشرية</div>
                        <div class="text-slate-500 text-xs">متاح الآن للاستخدام</div>
                      </div>
                    </div>
                  </div>
                  
                  <!-- Top Badge -->
                  <div class="absolute -top-3 left-6 bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    نظام متطور
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Quick Services Preview -->
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
          <div class="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center group">
            <div class="text-center">
              <div class="w-16 h-16 bg-gradient-to-r from-orange-600 to-orange-700 rounded-xl flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform">
                <span class="text-white font-bold text-sm">BESTSHEILD</span>
              </div>
              <div class="text-sm font-medium text-gray-700">بست شيلد</div>
            </div>
          </div>
          
          <div class="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center group">
            <div class="text-center">
              <div class="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform">
                <span class="text-white font-bold text-lg">ACME</span>
              </div>
              <div class="text-sm font-medium text-gray-700">أكمي</div>
            </div>
          </div>
          
          <div class="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center group">
            <div class="text-center">
              <div class="w-16 h-16 bg-gradient-to-r from-green-600 to-green-700 rounded-xl flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform">
                <span class="text-white font-bold text-lg">CARPI</span>
              </div>
              <div class="text-sm font-medium text-gray-700">كاربي</div>
            </div>
          </div>
          
          <div class="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center group">
            <div class="text-center">
              <div class="w-16 h-16 bg-gradient-to-r from-red-600 to-red-700 rounded-xl flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform">
                <span class="text-white font-bold text-lg">MALAFY</span>
              </div>
              <div class="text-sm font-medium text-gray-700">ملافي</div>
            </div>
          </div>
          
          <div class="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center group">
            <div class="text-center">
              <div class="w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-700 rounded-xl flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform">
                <span class="text-white font-bold text-lg">AZRAQ</span>
              </div>
              <div class="text-sm font-medium text-gray-700">أزرق</div>
            </div>
          </div>
          
          <div class="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center group">
            <div class="text-center">
              <div class="w-16 h-16 bg-gradient-to-r from-cyan-600 to-cyan-700 rounded-xl flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform">
                <span class="text-white font-bold text-sm">PDENTAL</span>
              </div>
              <div class="text-sm font-medium text-gray-700">بي دنتال</div>
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
          <div class="relative h-40 overflow-hidden">
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
          
          <!-- Navigation Dots -->
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
  }
}