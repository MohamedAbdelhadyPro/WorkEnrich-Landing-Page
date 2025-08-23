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
        <div class="flex items-center h-16 justify-between" dir="rtl">
          <!-- Logo -->
          <a routerLink="/" class="flex items-center">
            <img src="assets/New Project (4).svg" alt="WorkEnrich" class="h-20 w-auto">
          </a>
          
          <!-- Mobile menu button -->
          <div class="md:hidden">
            <button (click)="toggleMobileMenu()" 
                    class="text-gray-900 hover:text-[#1E2E40] p-2 rounded-lg transition-colors">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path *ngIf="!isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                <path *ngIf="isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          
          <!-- Navigation items -->
          <div class="hidden md:flex items-center space-x-4 space-x-reverse">
              <a routerLink="/" 
                 [routerLinkActiveOptions]="{exact: true}"
                 class="text-gray-900 hover:text-orange-600 px-3 py-2 text-sm font-medium transition-colors cursor-pointer"
                 routerLinkActive="text-orange-600 font-bold bg-orange-50 rounded-lg">
                الرئيسية
              </a>
              <div class="relative group">
                <button class="text-gray-900 hover:text-orange-600 px-3 py-2 text-sm font-medium transition-colors cursor-pointer flex items-center">
                  منتجاتنا
                  <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                <div class="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                  <div class="py-2">
                    <a routerLink="/projects/hr-system" 
                       class="block px-4 py-3 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                       routerLinkActive="text-orange-600 bg-orange-50 font-semibold">
                      <div class="flex items-center">
                        <div class="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                          <span class="text-orange-600 text-lg">👥</span>
                        </div>
                        <div>
                          <div class="font-medium">نظام إدارة الموارد البشرية</div>
                          <div class="text-xs text-gray-500">إدارة شاملة للموظفين والرواتب</div>
                        </div>
                      </div>
                    </a>
                    <div class="border-t border-gray-100 mt-2 pt-2">
                      <a routerLink="/contact" 
                         class="block px-4 py-2 text-sm text-orange-600 hover:bg-orange-50 transition-colors text-center rounded-lg mx-2">
                        طلب منتج مخصص
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <a routerLink="/services" 
                 class="text-gray-900 hover:text-orange-600 px-3 py-2 text-sm font-medium transition-colors cursor-pointer"
                 routerLinkActive="text-orange-600 font-bold bg-orange-50 rounded-lg">
                خدمات البرمجة المتخصصة
              </a>
              <a routerLink="/about" 
                 class="text-gray-900 hover:text-orange-600 px-3 py-2 text-sm font-medium transition-colors cursor-pointer"
                 routerLinkActive="text-orange-600 font-bold bg-orange-50 rounded-lg">
                من نحن
              </a>
              <a routerLink="/contact" 
                 class="text-white px-4 py-2 rounded-lg text-sm font-medium transition-all hover:opacity-90" 
                 style="background: linear-gradient(135deg, #ff7000, #ff5722);"
                 routerLinkActive="opacity-90 shadow-lg">
                تواصل معنا
              </a>
          </div>
        </div>
        
        <!-- Mobile menu -->
        <div class="md:hidden" [class.hidden]="!isMobileMenuOpen">
          <div class="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
            <a routerLink="/" 
               (click)="closeMobileMenu()"
               routerLinkActive="text-orange-600 font-bold bg-orange-50 rounded-lg" 
               [routerLinkActiveOptions]="{exact: true}"
               class="block px-3 py-2 text-base font-medium text-gray-900 hover:text-orange-600 hover:bg-orange-50 transition-colors">
              الرئيسية
            </a>
            
            <!-- Mobile Products Dropdown -->
            <div class="space-y-1">
              <button (click)="toggleProductsDropdown()"
                      class="w-full flex items-center justify-between px-3 py-2 text-base font-medium text-gray-900 hover:text-orange-600 hover:bg-orange-50 transition-colors">
                <span>منتجاتنا</span>
                <svg class="w-4 h-4" [class.rotate-180]="isProductsDropdownOpen" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div class="pr-4 space-y-1" [class.hidden]="!isProductsDropdownOpen">
                <a routerLink="/projects/hr-system" 
                   (click)="closeMobileMenu()"
                   class="block px-3 py-2 text-sm text-gray-700 hover:text-orange-600 hover:bg-orange-50 transition-colors"
                   routerLinkActive="text-orange-600 bg-orange-50 font-semibold">
                  <div class="flex items-center">
                    <span class="text-orange-600 text-lg mr-3">👥</span>
                    <div>
                      <div class="font-medium">نظام إدارة الموارد البشرية</div>
                      <div class="text-xs text-gray-500">إدارة شاملة للموظفين والرواتب</div>
                    </div>
                  </div>
                </a>
                <a routerLink="/contact" 
                   (click)="closeMobileMenu()"
                   class="block px-3 py-2 text-sm text-orange-600 hover:bg-orange-50 transition-colors">
                  طلب منتج مخصص
                </a>
              </div>
            </div>
            
            <a routerLink="/services" 
               (click)="closeMobileMenu()"
               routerLinkActive="text-orange-600 font-bold bg-orange-50 rounded-lg" 
               class="block px-3 py-2 text-base font-medium text-gray-900 hover:text-orange-600 hover:bg-orange-50 transition-colors">
              خدمات البرمجة المتخصصة
            </a>
            <a routerLink="/about" 
               (click)="closeMobileMenu()"
               routerLinkActive="text-orange-600 font-bold bg-orange-50 rounded-lg"
               class="block px-3 py-2 text-base font-medium text-gray-900 hover:text-orange-600 hover:bg-orange-50 transition-colors">
              من نحن
            </a>
            <a routerLink="/contact" 
               (click)="closeMobileMenu()"
               routerLinkActive="opacity-90 shadow-lg"
               class="block mx-3 my-2 px-4 py-2 text-base font-medium border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white transition-all text-center rounded-lg">
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
  isProductsDropdownOpen = false;

  constructor() {}

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    if (!this.isMobileMenuOpen) {
      this.isProductsDropdownOpen = false;
    }
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
    this.isProductsDropdownOpen = false;
  }

  toggleProductsDropdown() {
    this.isProductsDropdownOpen = !this.isProductsDropdownOpen;
  }
}