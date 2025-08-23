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
                <span class="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium">{{ translationService.get('home.newProduct') }}</span>
                <span class="mr-3 text-yellow-300">⭐</span>
              </div>
              <h2 class="text-3xl lg:text-4xl font-bold mb-4">
                {{ translationService.get('home.hrTitle') }}
              </h2>
              <p class="text-xl text-blue-100 mb-6">
                {{ translationService.get('home.hrDescription') }}
              </p>
              <div class="flex flex-col sm:flex-row gap-4">
                <a routerLink="/projects/hr-system" 
                   class="bg-white text-[#1E2E40] hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-colors text-center">
                  {{ translationService.get('home.viewDetails') }}
                </a>
                <a routerLink="/contact" 
                   class="border-2 border-white text-white hover:bg-white hover:text-[#1E2E40] px-6 py-3 rounded-lg font-medium transition-colors text-center">
                  {{ translationService.get('home.getQuote') }}
                </a>
              </div>
            </div>
            <div class="relative">
              <img src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600" 
                   alt="HR System" 
                   class="w-full h-64 object-cover rounded-xl shadow-lg">
              <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl"></div>
              <div class="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg">
                <div class="text-[#1E2E40] font-bold text-sm">{{ translationService.get('home.hrTitle') }}</div>
                <div class="text-gray-600 text-xs">{{ translationService.get('nav.hrSystemDesc') }}</div>
              </div>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div [class.text-center]="isEnglish" [class.lg:text-right]="!isEnglish" [class.lg:text-left]="isEnglish">
            <h1 class="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              {{ translationService.get('home.heroTitle') }}
            </h1>
            <p class="text-xl text-gray-600 mb-8 leading-relaxed">
              {{ translationService.get('home.heroDescription') }}
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button class="bg-[#1E2E40] hover:bg-[#1E2E40]/90 text-white px-8 py-3 rounded-lg text-lg font-medium transition-all transform hover:scale-105 shadow-lg">
                {{ translationService.get('home.startProject') }}
              </button>
              <a routerLink="/portfolio" class="border-2 border-[#1E2E40] text-[#1E2E40] hover:bg-[#1E2E40] hover:text-white px-8 py-3 rounded-lg text-lg font-medium transition-all text-center">
                {{ translationService.get('home.viewWork') }}
              </a>
            </div>
            <div class="mt-8 flex items-center justify-center lg:justify-start space-x-8">
              <div class="text-center">
                <div class="text-2xl font-bold text-[#1E2E40]">200+</div>
                <div class="text-gray-600 text-sm">{{ translationService.get('home.completedProjects') }}</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold text-blue-600">150+</div>
                <div class="text-gray-600 text-sm">{{ translationService.get('home.happyClients') }}</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold text-green-600">5+</div>
                <div class="text-gray-600 text-sm">{{ translationService.get('home.yearsExperience') }}</div>
              </div>
            </div>
          </div>
          <div class="relative">
            <div class="relative z-10 bg-white rounded-2xl shadow-2xl p-8 transform rotate-3">
              <img src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800" 
                   alt="Software Development" 
                   class="w-full h-64 object-cover rounded-lg mb-4">
              <div class="space-y-3">
                <div class="flex items-center space-x-3">
                  <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span class="text-gray-700">{{ isEnglish ? 'Projects in development: 12' : 'مشاريع قيد التطوير: 12' }}</span>
                </div>
                <div class="flex items-center space-x-3">
                  <div class="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span class="text-gray-700">{{ isEnglish ? 'Development team: 15' : 'فريق المطورين: 15' }}</span>
                </div>
                <div class="flex items-center space-x-3">
                <div class="text-2xl font-bold text-[#1E2E40] rounded-full"></div>
                  <span class="text-gray-700">{{ isEnglish ? 'Modern technologies: 25+' : 'تقنيات حديثة: 25+' }}</span>
                </div>
              </div>
            </div>
            <div class="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-2xl transform -rotate-3"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Quick Services Preview -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl font-bold text-gray-900 mb-8">{{ translationService.get('home.mainServices') }}</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div class="p-6 bg-gray-50 rounded-xl">
            <div class="text-4xl mb-4">🌐</div>
            <h3 class="text-xl font-bold mb-2">{{ translationService.get('home.webDevelopment') }}</h3>
            <p class="text-gray-600">{{ translationService.get('home.webDevDesc') }}</p>
          </div>
          <div class="p-6 bg-gray-50 rounded-xl">
            <div class="text-4xl mb-4">📱</div>
            <h3 class="text-xl font-bold mb-2">{{ translationService.get('home.mobileApps') }}</h3>
            <p class="text-gray-600">{{ translationService.get('home.mobileAppsDesc') }}</p>
          </div>
          <div class="p-6 bg-gray-50 rounded-xl">
            <div class="text-4xl mb-4">⚙️</div>
            <h3 class="text-xl font-bold mb-2">{{ translationService.get('home.managementSystems') }}</h3>
            <p class="text-gray-600">{{ translationService.get('home.managementSystemsDesc') }}</p>
          </div>
        </div>
        <a routerLink="/services" class="bg-[#1E2E40] hover:bg-[#1E2E40]/90 text-white px-8 py-3 rounded-lg font-medium transition-colors">
          {{ translationService.get('home.viewSpecializedServices') }}
        </a>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-20 bg-gradient-to-r from-[#1E2E40] to-blue-600">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div class="text-white">
            <div class="text-4xl font-bold mb-2">200+</div>
            <div class="text-purple-100">{{ translationService.get('home.completedProjects') }}</div>
          </div>
          <div class="text-white">
            <div class="text-4xl font-bold mb-2">150+</div>
            <div class="text-[#1E2E40]/20">{{ translationService.get('home.happyClients') }}</div>
          </div>
          <div class="text-white">
            <div class="text-4xl font-bold mb-2">15+</div>
            <div class="text-[#1E2E40]/20">{{ translationService.get('home.developers') }}</div>
          </div>
          <div class="text-white">
            <div class="text-4xl font-bold mb-2">5+</div>
            <div class="text-[#1E2E40]/20">{{ translationService.get('home.yearsExperience') }}</div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class HomeComponent {
  isEnglish = false;

  constructor(
    public translationService: TranslationService,
    private languageService: LanguageService
  ) {
    this.languageService.currentLanguage$.subscribe(lang => {
      this.isEnglish = lang === 'en';
    });
  }
}