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
            <img src="assets/workenrich-logo.svg" alt="WorkEnrich" class="h-10 w-auto">
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
              <a routerLink="/home"
                 [routerLinkActiveOptions]="{exact: true}"
                 class="text-gray-700 hover:text-orange-500 px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg hover:bg-orange-50"
                 routerLinkActive="text-orange-600 bg-orange-50 font-semibold">
                الرئيسية
              </a>
              <a routerLink="/services"
                 class="text-gray-700 hover:text-orange-500 px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg hover:bg-orange-50"
                 routerLinkActive="text-orange-600 bg-orange-50 font-semibold">
                خدمات البرمجة المتخصصة
              </a>
              <a routerLink="/about"
                 class="text-gray-700 hover:text-orange-500 px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg hover:bg-orange-50"
                 routerLinkActive="text-orange-600 bg-orange-50 font-semibold">
                من نحن
              </a>
              <a routerLink="/contact" 
                 class="inline-block bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-6 py-3 rounded-xl text-sm transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border-0"
                 style="background: linear-gradient(135deg, #ff6b35, #ff8c42); color: white;">
                تواصل معنا
              </a>
          </div>
        </div>
        
        <!-- Mobile menu -->
        <div class="md:hidden" [class.hidden]="!isMobileMenuOpen">
          <div class="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
            <a routerLink="/" 
               (click)="closeMobileMenu()"
               routerLinkActive="text-orange-600 font-bold border-r-4 border-orange-600"
               [routerLinkActiveOptions]="{exact: true}"
               class="block px-3 py-2 text-base font-medium text-gray-900 hover:text-orange-600 hover:bg-orange-50 transition-colors border-r-4 border-transparent">
              الرئيسية
            </a>
            
            <!-- Mobile Products Dropdown -->
            <div class="space-y-1">
              <a routerLink="/projects/hr-system" 
                 (click)="closeMobileMenu()"
                 class="block px-3 py-2 text-base font-medium text-gray-900 hover:text-orange-600 hover:bg-orange-50 transition-colors border-r-4 border-transparent"
                 routerLinkActive="text-orange-600 font-bold border-r-4 border-orange-600">
                <div class="flex items-center">
                  <span class="text-orange-600 text-lg mr-3">👥</span>
                  <div>
                    <div class="font-medium">نظام إدارة الموارد البشرية</div>
                    <div class="text-xs text-gray-500">إدارة شاملة للموظفين والرواتب</div>
                  </div>
                </div>
              </a>
            </div>
            
            <a routerLink="/services" 
               (click)="closeMobileMenu()"
               routerLinkActive="text-orange-600 font-bold border-r-4 border-orange-600" 
               class="block px-3 py-2 text-base font-medium text-gray-900 hover:text-orange-600 hover:bg-orange-50 transition-colors border-r-4 border-transparent">
              خدمات البرمجة المتخصصة
            </a>
            <a routerLink="/contact"
               (click)="closeMobileMenu()"
               routerLinkActive="text-orange-600 font-bold border-r-4 border-orange-600" 
               class="block px-3 py-2 text-base font-medium text-gray-900 hover:text-orange-600 hover:bg-orange-50 transition-colors border-r-4 border-transparent">
              من نحن
            </a>
            <a routerLink="/contact" 
               (click)="closeMobileMenu()"
               class="block mx-3 my-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-6 py-3 rounded-xl text-sm transition-all duration-300 shadow-lg hover:shadow-xl text-center border-0"
               style="background: linear-gradient(135deg, #ff6b35, #ff8c42); color: white;">
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

  constructor() {}

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }
}