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
                 routerLinkActive="text-[#1E2E40] bg-blue-50 border-b-2 border-[#1E2E40]" 
                 [routerLinkActiveOptions]="{exact: true}"
                 class="text-gray-900 hover:text-[#1E2E40] hover:bg-blue-50 hover:scale-105 px-3 py-2 text-sm font-medium transition-all duration-300 cursor-pointer rounded-lg relative group">
                الرئيسية
                <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1E2E40] group-hover:w-full transition-all duration-300"></span>
              </a>
              <div class="relative group">
                <button class="text-gray-900 hover:text-[#1E2E40] hover:bg-blue-50 hover:scale-105 px-3 py-2 text-sm font-medium transition-all duration-300 cursor-pointer flex items-center rounded-lg relative group">
                  منتجاتنا
                  <svg class="w-4 h-4 mr-1 group-hover:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                  <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1E2E40] group-hover:w-full transition-all duration-300"></span>
                </button>
                <div class="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-1 z-50">
                  <div class="py-2">
                    <a routerLink="/projects/hr-system" 
                       class="block px-4 py-3 text-sm text-gray-700 hover:bg-[#1E2E40]/10 hover:text-[#1E2E40] hover:translate-x-2 transition-all duration-300 group/item">
                      <div class="flex items-center">
                        <div class="w-10 h-10 bg-[#1E2E40]/10 rounded-lg flex items-center justify-center mr-3 group-hover/item:bg-[#1E2E40]/20 group-hover/item:scale-110 transition-all duration-300">
                          <span class="text-[#1E2E40] text-lg">👥</span>
                        </div>
                        <div>
                          <div class="font-medium">نظام إدارة الموارد البشرية</div>
                          <div class="text-xs text-gray-500">إدارة شاملة للموظفين والرواتب</div>
                        </div>
                      </div>
                    </a>
                    <div class="border-t border-gray-100 mt-2 pt-2">
                      <a routerLink="/contact" 
                         class="block px-4 py-2 text-sm text-[#1E2E40] hover:bg-[#1E2E40]/10 hover:scale-105 transition-all duration-300 text-center rounded-lg mx-2">
                        طلب منتج مخصص
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <a routerLink="/services" 
                 routerLinkActive="text-[#1E2E40] bg-purple-50 border-b-2 border-purple-600" 
                 class="text-gray-900 hover:text-[#1E2E40] hover:bg-purple-50 hover:scale-105 px-3 py-2 text-sm font-medium transition-all duration-300 cursor-pointer rounded-lg relative group">
                خدمات البرمجة المتخصصة
                <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a routerLink="/about" 
                 routerLinkActive="text-[#1E2E40] bg-blue-50 border-b-2 border-[#1E2E40]"
                 class="text-gray-900 hover:text-[#1E2E40] hover:bg-blue-50 hover:scale-105 px-3 py-2 text-sm font-medium transition-all duration-300 cursor-pointer rounded-lg relative group">
                من نحن
                <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1E2E40] group-hover:w-full transition-all duration-300"></span>
              </a>
              <a routerLink="/contact" 
                 routerLinkActive="bg-gradient-to-r from-orange-600 to-red-700 shadow-lg scale-105"
                class="text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-110 hover:shadow-xl hover:from-orange-600 hover:to-red-700 transform" style="background: linear-gradient(135deg, #ff7000, #ff5722);">
                تواصل معنا
              </a>
          </div>
        </div>
        
        <!-- Mobile menu -->
        <div class="md:hidden" [class.hidden]="!isMobileMenuOpen">
          <div class="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
            <a routerLink="/" 
               (click)="closeMobileMenu()"
               routerLinkActive="bg-[#1E2E40]/10 text-[#1E2E40] border-r-4 border-[#1E2E40]" 
               [routerLinkActiveOptions]="{exact: true}"
               class="block px-3 py-2 text-base font-medium text-gray-900 hover:text-[#1E2E40] hover:bg-gray-50 hover:translate-x-2 rounded-lg transition-all duration-300">
              الرئيسية
            </a>
            
            <!-- Mobile Products Dropdown -->
            <div class="space-y-1">
              <button (click)="toggleProductsDropdown()"
                      class="w-full flex items-center justify-between px-3 py-2 text-base font-medium text-gray-900 hover:text-[#1E2E40] hover:bg-gray-50 hover:translate-x-2 rounded-lg transition-all duration-300">
                <span>منتجاتنا</span>
                <svg class="w-4 h-4 transition-transform duration-300" [class.rotate-180]="isProductsDropdownOpen" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div class="pr-4 space-y-1" [class.hidden]="!isProductsDropdownOpen">
                <a routerLink="/projects/hr-system" 
                   (click)="closeMobileMenu()"
                   class="block px-3 py-2 text-sm text-gray-700 hover:text-[#1E2E40] hover:bg-gray-50 hover:translate-x-2 rounded-lg transition-all duration-300">
                  <div class="flex items-center">
                    <span class="text-[#1E2E40] text-lg mr-3">👥</span>
                    <div>
                      <div class="font-medium">نظام إدارة الموارد البشرية</div>
                      <div class="text-xs text-gray-500">إدارة شاملة للموظفين والرواتب</div>
                    </div>
                  </div>
                </a>
                <a routerLink="/contact" 
                   (click)="closeMobileMenu()"
                   class="block px-3 py-2 text-sm text-[#1E2E40] hover:bg-[#1E2E40]/10 hover:translate-x-2 rounded-lg transition-all duration-300">
                  طلب منتج مخصص
                </a>
              </div>
            </div>
            
            <a routerLink="/services" 
               (click)="closeMobileMenu()"
               routerLinkActive="bg-purple-100 text-purple-600 border-r-4 border-purple-600" 
               class="block px-3 py-2 text-base font-medium text-gray-900 hover:text-[#1E2E40] hover:bg-gray-50 hover:translate-x-2 rounded-lg transition-all duration-300">
              خدمات البرمجة المتخصصة
            </a>
            <a routerLink="/about" 
               (click)="closeMobileMenu()"
               routerLinkActive="bg-[#1E2E40]/10 text-[#1E2E40] border-r-4 border-[#1E2E40]"
               class="block px-3 py-2 text-base font-medium text-gray-900 hover:text-[#1E2E40] hover:bg-gray-50 hover:translate-x-2 rounded-lg transition-all duration-300">
              من نحن
            </a>
            <a routerLink="/contact" 
               (click)="closeMobileMenu()"
               routerLinkActive="bg-[#1E2E40] text-white scale-105"
               class="block mx-3 my-2 px-4 py-2 text-base font-medium border-2 border-[#1E2E40] text-[#1E2E40] hover:bg-[#1E2E40] hover:text-white hover:scale-105 rounded-lg transition-all duration-300 text-center">
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