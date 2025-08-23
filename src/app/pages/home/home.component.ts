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
    <section id="hero" class="pt-24 pb-12 bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- HR Product Banner -->
        <div class="bg-gradient-to-r from-[#1E2E40] to-blue-600 rounded-2xl p-8 mb-12 text-white relative overflow-hidden">
          <div class="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
          <div class="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
          <div class="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div class="flex items-center mb-4">
                <span class="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium">منتج جديد</span>
                <span class="mr-3 text-yellow-300">⭐</span>
              </div>
              <h2 class="text-3xl lg:text-4xl font-bold mb-4">
                نظام إدارة الموارد البشرية
              </h2>
              <p class="text-xl text-blue-100 mb-6">
                حل شامل ومتكامل لإدارة جميع عمليات الموارد البشرية في شركتك
              </p>
              <div class="flex flex-col sm:flex-row gap-4">
                <a routerLink="/projects/hr-system" 
                   class="bg-white text-[#1E2E40] hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-colors text-center">
                  عرض التفاصيل
                </a>
                <a routerLink="/contact" 
                   class="border-2 border-white text-white hover:bg-white hover:text-[#1E2E40] px-6 py-3 rounded-lg font-medium transition-colors text-center">
                  احصل على عرض سعر
                </a>
              </div>
            </div>
            <div class="relative">
              <img src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600" 
                   alt="HR System" 
                   class="w-full h-64 object-cover rounded-xl shadow-lg">
              <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl"></div>
              <div class="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg">
                <div class="text-[#1E2E40] font-bold text-sm">نظام إدارة الموارد البشرية</div>
                <div class="text-gray-600 text-xs">إدارة شاملة للموظفين والرواتب</div>
              </div>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="text-center lg:text-right">
            <h1 class="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              نطور حلولاً تقنية متقدمة لنجاح أعمالك
            </h1>
            <p class="text-xl text-gray-600 mb-8 leading-relaxed">
              شركة متخصصة في تطوير البرمجيات والتطبيقات المبتكرة التي تساعد الشركات على النمو والتطور في العصر الرقمي
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button class="bg-[#1E2E40] hover:bg-[#1E2E40]/90 text-white px-8 py-3 rounded-lg text-lg font-medium transition-all transform hover:scale-105 shadow-lg">
                ابدأ مشروعك
              </button>
              <a routerLink="/services" class="border-2 border-[#1E2E40] text-[#1E2E40] hover:bg-[#1E2E40] hover:text-white px-8 py-3 rounded-lg text-lg font-medium transition-all text-center">
                اعرض أعمالنا
              </a>
            </div>
            <div class="mt-8 flex items-center justify-center lg:justify-start space-x-8">
              <div class="text-center">
                <div class="text-2xl font-bold text-[#1E2E40]">200+</div>
                <div class="text-gray-600 text-sm">مشروع مكتمل</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold text-blue-600">150+</div>
                <div class="text-gray-600 text-sm">عميل سعيد</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold text-green-600">5+</div>
                <div class="text-gray-600 text-sm">سنوات خبرة</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Quick Services Preview -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl font-bold text-gray-900 mb-8">خدماتنا الرئيسية</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div class="p-6 bg-gray-50 rounded-xl">
            <div class="text-4xl mb-4">🌐</div>
            <h3 class="text-xl font-bold mb-2">تطوير المواقع</h3>
            <p class="text-gray-600">مواقع إلكترونية حديثة ومتجاوبة مع جميع الأجهزة</p>
          </div>
          <div class="p-6 bg-gray-50 rounded-xl">
            <div class="text-4xl mb-4">📱</div>
            <h3 class="text-xl font-bold mb-2">تطبيقات الجوال</h3>
            <p class="text-gray-600">تطبيقات iOS و Android بأداء عالي وتصميم جذاب</p>
          </div>
          <div class="p-6 bg-gray-50 rounded-xl">
            <div class="text-4xl mb-4">⚙️</div>
            <h3 class="text-xl font-bold mb-2">أنظمة الإدارة</h3>
            <p class="text-gray-600">حلول برمجية مخصصة لإدارة العمليات التجارية</p>
          </div>
        </div>
        <a routerLink="/services" class="bg-[#1E2E40] hover:bg-[#1E2E40]/90 text-white px-8 py-3 rounded-lg font-medium transition-colors">
          اعرض الخدمات المتخصصة
        </a>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-20 bg-gradient-to-r from-[#1E2E40] to-blue-600">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div class="text-white">
            <div class="text-4xl font-bold mb-2">200+</div>
            <div class="text-blue-100">مشروع مكتمل</div>
          </div>
          <div class="text-white">
            <div class="text-4xl font-bold mb-2">150+</div>
            <div class="text-blue-100">عميل سعيد</div>
          </div>
          <div class="text-white">
            <div class="text-4xl font-bold mb-2">15+</div>
            <div class="text-blue-100">مطور محترف</div>
          </div>
          <div class="text-white">
            <div class="text-4xl font-bold mb-2">5+</div>
            <div class="text-blue-100">سنوات خبرة</div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class HomeComponent {
  constructor(
    public translationService: TranslationService,
    private languageService: LanguageService
  ) {}
}