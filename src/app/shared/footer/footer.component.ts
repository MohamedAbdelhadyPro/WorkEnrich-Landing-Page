import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <footer class="bg-gray-900 text-white py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div class="col-span-1 md:col-span-2">
            <div class="flex items-center mb-4">
              <span class="ml-2 text-xl font-bold">WorkEnrich</span>
            </div>
            <p class="text-gray-400 mb-4">
              شركة متخصصة في تطوير البرمجيات والحلول الرقمية. 
              نحول أفكارك إلى واقع تقني يساعد في نمو أعمالك.
            </p>
          </div>
          <div>
            <h4 class="font-bold mb-4">الخدمات</h4>
            <ul class="space-y-2 text-gray-400">
              <li><a routerLink="/services" class="hover:text-white transition-colors">خدمات البرمجة</a></li>
              <li><a routerLink="/services" class="hover:text-white transition-colors">مشاريعنا المنجزة</a></li>
              <li><a routerLink="/services" class="hover:text-white transition-colors">نظام الموارد البشرية</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-bold mb-4">الشركة</h4>
            <ul class="space-y-2 text-gray-400">
              <li><a routerLink="/about" class="hover:text-white transition-colors">من نحن</a></li>
              <li><a routerLink="/contact" class="hover:text-white transition-colors">اتصل بنا</a></li>
            </ul>
          </div>
        </div>
        <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 WorkEnrich. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {}