import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav class="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <!-- Logo -->
          <div class="flex items-center">
            <a routerLink="/" class="flex items-center space-x-2">
              <div class="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span class="text-white font-bold text-lg">TC</span>
              </div>
              <div class="mr-3">
                <div class="text-xl font-bold text-gray-900">TechCraft</div>
                <div class="text-xs text-gray-500">حلول البرمجة المتقدمة</div>
              </div>
            </a>
          </div>

          <!-- Desktop Navigation -->
          <div class="hidden md:flex items-center space-x-8">
            <a routerLink="/" 
               routerLinkActive="text-blue-600" 
               [routerLinkActiveOptions]="{exact: true}"
               class="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
              الرئيسية
            </a>
            <div class="relative group">
              <button class="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors flex items-center">
                خدماتنا
                <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div class="py-1">
                  <a routerLink="/development-services" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">خدمات البرمجة</a>
                  <a routerLink="/managed-solutions" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">الحلول المدارة</a>
                </div>
              </div>
            </div>
            <a routerLink="/portfolio" 
               routerLinkActive="text-blue-600"
               class="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
              معرض الأعمال
            </a>
            <a routerLink="/case-studies" 
               routerLinkActive="text-blue-600"
               class="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
              دراسات الحالة
            </a>
            <a routerLink="/blog" 
               routerLinkActive="text-blue-600"
               class="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
              المدونة
            </a>
            <a routerLink="/about" 
               routerLinkActive="text-blue-600"
               class="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
              من نحن
            </a>
            <a routerLink="/contact" 
               class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors">
              تواصل معنا
            </a>
          </div>

          <!-- Mobile menu button -->
          <div class="md:hidden">
            <button (click)="toggleMobileMenu()" 
                    class="text-gray-700 hover:text-blue-600 p-2">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                      d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>

        <!-- Mobile Navigation -->
        <div class="md:hidden" [class.hidden]="!isMobileMenuOpen">
          <div class="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
            <a routerLink="/" 
               (click)="closeMobileMenu()"
               class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md">
              الرئيسية
            </a>
            <a routerLink="/development-services" 
               (click)="closeMobileMenu()"
               class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md">
              خدمات البرمجة
            </a>
            <a routerLink="/managed-solutions" 
               (click)="closeMobileMenu()"
               class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md">
              الحلول المدارة
            </a>
            <a routerLink="/portfolio" 
               (click)="closeMobileMenu()"
               class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md">
              معرض الأعمال
            </a>
            <a routerLink="/case-studies" 
               (click)="closeMobileMenu()"
               class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md">
              دراسات الحالة
            </a>
            <a routerLink="/blog" 
               (click)="closeMobileMenu()"
               class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md">
              المدونة
            </a>
            <a routerLink="/about" 
               (click)="closeMobileMenu()"
               class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md">
              من نحن
            </a>
            <a routerLink="/contact" 
               (click)="closeMobileMenu()"
               class="block px-3 py-2 text-base font-medium bg-blue-600 text-white rounded-md text-center">
              تواصل معنا
            </a>
          </div>
        </div>
      </div>
    </nav>
  `
})
export class HeaderComponent {
  isMobileMenuOpen = false;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }
}