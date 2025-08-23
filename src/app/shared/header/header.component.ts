import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav class="fixed w-full top-0 z-50 bg-white border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center">
            <div class="flex-shrink-0 flex items-center">
              <a routerLink="/" class="ml-2 text-xl font-bold text-gray-900">WorkEnrich</a>
            </div>
          </div>
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-4">
              <a routerLink="/services" 
                 routerLinkActive="text-purple-600" 
                 class="text-gray-900 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors cursor-pointer">
                الخدمات
              </a>
              <a routerLink="/portfolio" 
                 routerLinkActive="text-purple-600"
                 class="text-gray-900 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors cursor-pointer">
                معرض الأعمال
              </a>
              <a routerLink="/about" 
                 routerLinkActive="text-purple-600"
                 class="text-gray-900 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors cursor-pointer">
                من نحن
              </a>
              <a routerLink="/contact" 
                 routerLinkActive="text-purple-600"
                 class="text-gray-900 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors cursor-pointer">
                تواصل معنا
              </a>
              <button class="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                احصل على عرض سعر
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  `
})
export class HeaderComponent {}