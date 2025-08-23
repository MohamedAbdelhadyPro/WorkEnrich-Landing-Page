import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <footer class="bg-white border-t border-gray-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Main Footer Content -->
        <div class="py-12">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
            <!-- Company Info -->
            <div class="col-span-1 md:col-span-2">
              <div class="flex items-center mb-6" dir="rtl">
                <img src="assets/New Project (4).svg" alt="WorkEnrich" class="h-12 w-auto ml-3">
                <span class="text-2xl font-bold text-gray-900">WorkEnrich</span>
              </div>
              <p class="text-gray-600 mb-6 leading-relaxed max-w-md">
                شركة متخصصة في تطوير البرمجيات والتطبيقات المبتكرة التي تساعد الشركات على النمو والتطور في العصر الرقمي
              </p>
              
              <!-- Contact Info -->
              <div class="space-y-3">
                <div class="flex items-center text-gray-600">
                  <span class="text-orange-500 ml-3">📧</span>
                  <span class="text-sm">info@workenrich.com</span>
                </div>
                <div class="flex items-center text-gray-600">
                  <span class="text-orange-500 ml-3">📱</span>
                  <span class="text-sm" dir="ltr">+201092963385</span>
                </div>
                <div class="flex items-center text-gray-600">
                  <span class="text-orange-500 ml-3">📍</span>
                  <span class="text-sm">التجمع الخامس - القاهرة الجديدة</span>
                </div>
              </div>
            </div>
            
            <!-- Services Links -->
            <div>
              <h4 class="font-bold mb-6 text-gray-900 text-lg">خدماتنا</h4>
              <ul class="space-y-3">
                <li>
                  <a routerLink="/services" 
                     class="text-gray-600 hover:text-orange-500 transition-colors duration-200 text-sm flex items-center group">
                    <span class="w-1.5 h-1.5 bg-gray-400 rounded-full ml-2 group-hover:bg-orange-500 transition-colors"></span>
                    خدمات البرمجة المتخصصة
                  </a>
                </li>
                <li>
                  <a routerLink="/projects/hr-system" 
                     class="text-gray-600 hover:text-orange-500 transition-colors duration-200 text-sm flex items-center group">
                    <span class="w-1.5 h-1.5 bg-gray-400 rounded-full ml-2 group-hover:bg-orange-500 transition-colors"></span>
                    نظام الموارد البشرية
                  </a>
                </li>
                <li>
                  <a routerLink="/projects/ecommerce" 
                     class="text-gray-600 hover:text-orange-500 transition-colors duration-200 text-sm flex items-center group">
                    <span class="w-1.5 h-1.5 bg-gray-400 rounded-full ml-2 group-hover:bg-orange-500 transition-colors"></span>
                    المشاريع المنجزة
                  </a>
                </li>
              </ul>
            </div>
            
            <!-- Company Links -->
            <div>
              <h4 class="font-bold mb-6 text-gray-900 text-lg">الشركة</h4>
              <ul class="space-y-3">
                <li>
                  <a routerLink="/about" 
                     class="text-gray-600 hover:text-orange-500 transition-colors duration-200 text-sm flex items-center group">
                    <span class="w-1.5 h-1.5 bg-gray-400 rounded-full ml-2 group-hover:bg-orange-500 transition-colors"></span>
                    من نحن
                  </a>
                </li>
                <li>
                  <a routerLink="/contact" 
                     class="text-gray-600 hover:text-orange-500 transition-colors duration-200 text-sm flex items-center group">
                    <span class="w-1.5 h-1.5 bg-gray-400 rounded-full ml-2 group-hover:bg-orange-500 transition-colors"></span>
                    تواصل معنا
                  </a>
                </li>
                <li>
                  <a href="https://client.workenrich.com/auth/login" 
                     target="_blank"
                     class="text-gray-600 hover:text-orange-500 transition-colors duration-200 text-sm flex items-center group">
                    <span class="w-1.5 h-1.5 bg-gray-400 rounded-full ml-2 group-hover:bg-orange-500 transition-colors"></span>
                    دخول النظام
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <!-- Stats Section -->
        <div class="py-8 border-t border-gray-100">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div class="group">
              <div class="text-2xl font-bold text-gray-900 group-hover:text-orange-500 transition-colors">200+</div>
              <div class="text-sm text-gray-600">مشروع مكتمل</div>
            </div>
            <div class="group">
              <div class="text-2xl font-bold text-gray-900 group-hover:text-orange-500 transition-colors">150+</div>
              <div class="text-sm text-gray-600">عميل سعيد</div>
            </div>
            <div class="group">
              <div class="text-2xl font-bold text-gray-900 group-hover:text-orange-500 transition-colors">40+</div>
              <div class="text-sm text-gray-600">مطور محترف</div>
            </div>
            <div class="group">
              <div class="text-2xl font-bold text-gray-900 group-hover:text-orange-500 transition-colors">15+</div>
              <div class="text-sm text-gray-600">سنوات خبرة</div>
            </div>
          </div>
        </div>
        
        <!-- Bottom Section -->
        <div class="border-t border-gray-100 py-6">
          <div class="flex flex-col md:flex-row justify-between items-center">
            <div class="text-gray-600 text-sm mb-4 md:mb-0">
              &copy; 2025 WorkEnrich. جميع الحقوق محفوظة
            </div>
            <div class="flex items-center space-x-4 space-x-reverse">
              <span class="text-gray-500 text-sm">صُنع بـ</span>
              <span class="text-red-500">❤️</span>
              <span class="text-gray-500 text-sm">في مصر</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {
  constructor(public translationService: TranslationService) {}
}