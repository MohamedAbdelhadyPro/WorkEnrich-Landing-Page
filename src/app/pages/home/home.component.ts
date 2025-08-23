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
    <section id="hero" class="pt-24 pb-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      <!-- Background Elements -->
      <div class="absolute inset-0">
        <div class="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/10 rounded-full blur-2xl"></div>
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
            <a routerLink="/contact" class="group bg-white text-slate-900 hover:bg-blue-50 px-10 py-4 rounded-xl text-lg font-bold transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl">
              <span class="flex items-center justify-center">
                ابدأ مشروعك
                <svg class="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
              </span>
            </a>
            <a routerLink="/services" class="group border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-10 py-4 rounded-xl text-lg font-bold transition-all hover:border-white/50">
              <span class="flex items-center justify-center">
                اعرض أعمالنا
                <svg class="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

    <!-- HR Product Banner -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-gradient-to-r from-[#1E2E40] to-blue-600 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
          <div class="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
          <div class="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
          <div class="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div class="flex items-center mb-6">
                <span class="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium">منتج جديد</span>
                <span class="mr-3 text-yellow-300 text-xl">⭐</span>
              </div>
              <h2 class="text-3xl lg:text-4xl font-bold mb-6">
                نظام إدارة الموارد البشرية
              </h2>
              <p class="text-xl text-blue-100 mb-8 leading-relaxed">
                حل شامل ومتكامل لإدارة جميع عمليات الموارد البشرية في شركتك بكفاءة عالية وأمان متقدم
              </p>
              <div class="flex flex-col sm:flex-row gap-4">
                <a routerLink="/projects/hr-system" 
                   class="bg-white text-[#1E2E40] hover:bg-gray-100 px-8 py-4 rounded-xl font-bold transition-all transform hover:scale-105 text-center shadow-lg">
                  عرض التفاصيل
                </a>
                <a routerLink="/contact" 
                   class="border-2 border-white text-white hover:bg-white hover:text-[#1E2E40] px-8 py-4 rounded-xl font-bold transition-all text-center">
                  احصل على عرض سعر
                </a>
              </div>
            </div>
            <div class="relative">
              <img src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600" 
                   alt="HR System" 
                   class="w-full h-80 object-cover rounded-2xl shadow-2xl">
              <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl"></div>
              <div class="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm px-4 py-3 rounded-xl shadow-lg">
                <div class="text-[#1E2E40] font-bold">نظام إدارة الموارد البشرية</div>
                <div class="text-gray-600 text-sm">إدارة شاملة للموظفين والرواتب</div>
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
              <div class="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform">
                <span class="text-white font-bold text-lg">STC</span>
              </div>
              <div class="text-sm font-medium text-gray-700">شركة الاتصالات السعودية</div>
            </div>
          </div>
          
          <div class="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center group">
            <div class="text-center">
              <div class="w-16 h-16 bg-gradient-to-r from-green-600 to-green-700 rounded-xl flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform">
                <span class="text-white font-bold text-lg">NCB</span>
              </div>
              <div class="text-sm font-medium text-gray-700">البنك الأهلي</div>
            </div>
          </div>
          
          <div class="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center group">
            <div class="text-center">
              <div class="w-16 h-16 bg-gradient-to-r from-red-600 to-red-700 rounded-xl flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform">
                <span class="text-white font-bold text-lg">SABIC</span>
              </div>
              <div class="text-sm font-medium text-gray-700">سابك</div>
            </div>
          </div>
          
          <div class="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center group">
            <div class="text-center">
              <div class="w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-700 rounded-xl flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform">
                <span class="text-white font-bold text-lg">ARAMCO</span>
              </div>
              <div class="text-sm font-medium text-gray-700">أرامكو السعودية</div>
            </div>
          </div>
          
          <div class="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center group">
            <div class="text-center">
              <div class="w-16 h-16 bg-gradient-to-r from-orange-600 to-orange-700 rounded-xl flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform">
                <span class="text-white font-bold text-lg">MOBILY</span>
              </div>
              <div class="text-sm font-medium text-gray-700">موبايلي</div>
            </div>
          </div>
          
          <div class="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center group">
            <div class="text-center">
              <div class="w-16 h-16 bg-gradient-to-r from-teal-600 to-teal-700 rounded-xl flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform">
                <span class="text-white font-bold text-lg">SAMBA</span>
              </div>
              <div class="text-sm font-medium text-gray-700">بنك سامبا</div>
            </div>
          </div>
          
          <div class="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center group">
            <div class="text-center">
              <div class="w-16 h-16 bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-xl flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform">
                <span class="text-white font-bold text-lg">ALRAJHI</span>
              </div>
              <div class="text-sm font-medium text-gray-700">بنك الراجحي</div>
            </div>
          </div>
          
          <div class="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center group">
            <div class="text-center">
              <div class="w-16 h-16 bg-gradient-to-r from-pink-600 to-pink-700 rounded-xl flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform">
                <span class="text-white font-bold text-lg">ZAIN</span>
              </div>
              <div class="text-sm font-medium text-gray-700">زين السعودية</div>
            </div>
          </div>
          
          <div class="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center group">
            <div class="text-center">
              <div class="w-16 h-16 bg-gradient-to-r from-yellow-600 to-yellow-700 rounded-xl flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform">
                <span class="text-white font-bold text-lg">MAADEN</span>
              </div>
              <div class="text-sm font-medium text-gray-700">معادن</div>
            </div>
          </div>
          
          <div class="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center group">
            <div class="text-center">
              <div class="w-16 h-16 bg-gradient-to-r from-cyan-600 to-cyan-700 rounded-xl flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform">
                <span class="text-white font-bold text-lg">ACWA</span>
              </div>
              <div class="text-sm font-medium text-gray-700">أكوا باور</div>
            </div>
          </div>
          
          <div class="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center group">
            <div class="text-center">
              <div class="w-16 h-16 bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-xl flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform">
                <span class="text-white font-bold text-lg">NEOM</span>
              </div>
              <div class="text-sm font-medium text-gray-700">نيوم</div>
            </div>
          </div>
          
          <div class="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center group">
            <div class="text-center">
              <div class="w-16 h-16 bg-gradient-to-r from-rose-600 to-rose-700 rounded-xl flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform">
                <span class="text-white font-bold text-lg">PIF</span>
              </div>
              <div class="text-sm font-medium text-gray-700">صندوق الاستثمارات</div>
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
          <div class="flex justify-center space-x-2 mt-6">
            <button *ngFor="let testimonial of testimonials; let i = index"
                    (click)="setCurrentTestimonial(i)"
                    class="w-3 h-3 rounded-full transition-all duration-300"
                    [class.bg-[#1E2E40]]="i === currentTestimonial"
                    [class.bg-gray-300]="i !== currentTestimonial">
            </button>
          </div>
          
          <!-- Navigation Arrows -->
          <button (click)="previousTestimonial()" 
                  class="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
            <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          <button (click)="nextTestimonial()" 
                  class="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
            <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
        
        <!-- CTA -->
        <div class="text-center mt-12">
          <p class="text-lg text-gray-600 mb-6">هل تريد أن تكون من عملائنا المميزين؟</p>
          <a routerLink="/contact" class="bg-[#1E2E40] hover:bg-[#1E2E40]/90 text-white px-8 py-4 rounded-xl font-bold transition-all transform hover:scale-105 shadow-lg">
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
    // Reset auto-slide timer
    if (this.testimonialInterval) {
      clearInterval(this.testimonialInterval);
      this.startAutoSlide();
    }
  }
}