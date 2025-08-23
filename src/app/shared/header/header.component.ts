import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav class="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <!-- Logo -->
          <div class="flex items-center">
            <a routerLink="/" class="flex items-center">
              <span class="text-2xl font-bold" style="color: #1A3477;">WorkEnrich</span>
            </a>
          </div>

          <!-- Desktop Navigation -->
          <div class="hidden md:flex items-center space-x-8 space-x-reverse">
            <a routerLink="/" 
               routerLinkActive="text-[#1A3477]" 
               [routerLinkActiveOptions]="{exact: true}"
               class="text-gray-700 hover:text-[#1A3477] px-3 py-2 text-sm font-medium transition-colors">
              الرئيسية
            </a>
            <a routerLink="/services" 
               routerLinkActive="text-[#1A3477]"
               class="text-gray-700 hover:text-[#1A3477] px-3 py-2 text-sm font-medium transition-colors">
              الخدمات
            </a>
            <a routerLink="/about" 
               routerLinkActive="text-[#1A3477]"
               class="text-gray-700 hover:text-[#1A3477] px-3 py-2 text-sm font-medium transition-colors">
              من نحن
            </a>
            <a routerLink="/contact" 
               class="text-white hover:opacity-90 px-6 py-2 rounded-lg text-sm font-medium transition-all shadow-md" style="background: linear-gradient(135deg, #1A3477, #2563eb);">
              تواصل معنا
            </a>
          </div>

          <!-- Mobile menu button -->
          <div class="md:hidden">
            <button (click)="toggleMobileMenu()" 
                    class="text-gray-700 hover:text-[#1A3477] focus:outline-none focus:text-[#1A3477] p-2">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path *ngIf="!isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                <path *ngIf="isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <!-- Mobile Navigation -->
        <div *ngIf="isMobileMenuOpen" class="md:hidden border-t border-gray-200 bg-white">
          <div class="px-2 pt-2 pb-3 space-y-1">
            <a routerLink="/" 
               (click)="closeMobileMenu()"
               routerLinkActive="bg-blue-50 text-[#1A3477]" 
               [routerLinkActiveOptions]="{exact: true}"
               class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#1A3477] hover:bg-gray-50 rounded-md transition-colors">
              الرئيسية
            </a>
            <a routerLink="/services" 
               (click)="closeMobileMenu()"
               routerLinkActive="bg-blue-50 text-[#1A3477]"
               class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#1A3477] hover:bg-gray-50 rounded-md transition-colors">
              الخدمات
            </a>
            <a routerLink="/about" 
               (click)="closeMobileMenu()"
               routerLinkActive="bg-blue-50 text-[#1A3477]"
               class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#1A3477] hover:bg-gray-50 rounded-md transition-colors">
              من نحن
            </a>
            <a routerLink="/contact" 
               (click)="closeMobileMenu()"
               class="block mx-3 my-2 px-4 py-2 text-center text-white rounded-lg text-base font-medium transition-all shadow-md" style="background: linear-gradient(135deg, #1A3477, #2563eb);">
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

  constructor(public translationService: TranslationService) {}

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }
}