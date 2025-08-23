import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LanguageService, Language } from '../../services/language.service';
import { TranslationService } from '../../services/translation.service';

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
              <a routerLink="/" 
                 routerLinkActive="text-[#1E2E40]" 
                 [routerLinkActiveOptions]="{exact: true}"
                 class="text-gray-900 hover:text-[#1E2E40] px-3 py-2 text-sm font-medium transition-colors cursor-pointer">
                {{ translationService.get('nav.home') }}
              </a>
              <div class="relative group">
                <button class="text-gray-900 hover:text-[#1E2E40] px-3 py-2 text-sm font-medium transition-colors cursor-pointer flex items-center">
                  {{ translationService.get('nav.products') }}
                  <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                <div class="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div class="py-2">
                    <a routerLink="/projects/hr-system" 
                       class="block px-4 py-3 text-sm text-gray-700 hover:bg-[#1E2E40]/5 hover:text-[#1E2E40] transition-colors">
                      <div class="flex items-center">
                        <div class="w-10 h-10 bg-[#1E2E40]/10 rounded-lg flex items-center justify-center ml-3">
                          <span class="text-[#1E2E40] text-lg">👥</span>
                        </div>
                        <div>
                          <div class="font-medium">{{ translationService.get('nav.hrSystem') }}</div>
                          <div class="text-xs text-gray-500">{{ translationService.get('nav.hrSystemDesc') }}</div>
                        </div>
                      </div>
                    </a>
                    <div class="border-t border-gray-100 mt-2 pt-2">
                      <a routerLink="/contact" 
                         class="block px-4 py-2 text-sm text-[#1E2E40] hover:bg-[#1E2E40]/5 transition-colors text-center">
                        {{ translationService.get('nav.customProduct') }}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <a routerLink="/services" 
                 routerLinkActive="text-purple-600" 
                 class="text-gray-900 hover:text-[#1E2E40] px-3 py-2 text-sm font-medium transition-colors cursor-pointer">
                {{ translationService.get('nav.services') }}
              </a>
              <a routerLink="/about" 
                 routerLinkActive="text-[#1E2E40]"
                 class="text-gray-900 hover:text-[#1E2E40] px-3 py-2 text-sm font-medium transition-colors cursor-pointer">
                {{ translationService.get('nav.about') }}
              </a>
              <a routerLink="/contact" 
                 routerLinkActive="text-[#1E2E40]"
                 class="text-gray-900 hover:text-[#1E2E40] px-3 py-2 text-sm font-medium transition-colors cursor-pointer">
                {{ translationService.get('nav.contact') }}
              </a>
              
              <!-- Language Switcher -->
              <div class="relative group">
                <button class="flex items-center text-gray-900 hover:text-[#1E2E40] px-3 py-2 text-sm font-medium transition-colors cursor-pointer">
                  <span class="mr-1">{{ getCurrentLanguageInfo()?.flag }}</span>
                  {{ getCurrentLanguageInfo()?.name }}
                  <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                <div class="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div class="py-2">
                    <button *ngFor="let language of languageService.languages"
                            (click)="changeLanguage(language.code)"
                            [class.bg-[#1E2E40]/5]="language.code === currentLanguage"
                            class="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-[#1E2E40]/5 hover:text-[#1E2E40] transition-colors flex items-center">
                      <span class="mr-2">{{ language.flag }}</span>
                      {{ language.name }}
                    </button>
                  </div>
                </div>
              </div>
              
              <button class="bg-[#1E2E40] hover:bg-[#1E2E40]/90 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                {{ translationService.get('nav.getQuote') }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  `
})
export class HeaderComponent {
  currentLanguage: string = 'ar';

  constructor(
    public languageService: LanguageService,
    public translationService: TranslationService
  ) {
    this.languageService.currentLanguage$.subscribe(lang => {
      this.currentLanguage = lang;
    });
  }

  changeLanguage(languageCode: string) {
    this.languageService.setLanguage(languageCode);
  }

  getCurrentLanguageInfo(): Language | undefined {
    return this.languageService.getLanguageInfo(this.currentLanguage);
  }
}