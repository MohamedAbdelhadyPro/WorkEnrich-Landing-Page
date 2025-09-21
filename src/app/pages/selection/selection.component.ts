import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-selection',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="min-h-screen flex items-center justify-center" style="background: linear-gradient(135deg, #1A3477, #2563eb);">
      <!-- Background Elements -->
      <div class="absolute inset-0">
        <div class="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-2xl"></div>
      </div>

      <div class="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <!-- Main Title -->
        <div class="mb-16">
          <h1 class="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            اختر المنصة المناسبة لك
          </h1>
          <p class="text-xl lg:text-2xl text-blue-100 leading-relaxed">
            نقدم لك حلولين متميزين لتلبية احتياجاتك المختلفة
          </p>
        </div>

        <!-- Selection Cards -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <!-- TalentDot Card -->
          <div class="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 lg:p-12 hover:bg-white/15 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
            <div class="mb-8">
              <div class="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-white/30 transition-colors">
                <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h2 class="text-3xl lg:text-4xl font-bold text-white mb-4">
                TalentDot HR System
              </h2>
              <p class="text-lg text-blue-100 mb-8 leading-relaxed">
                نظام إدارة الموارد البشرية المتخصص والمتطور لإدارة شاملة وفعالة للموظفين
              </p>
            </div>

            <!-- Features -->
            <div class="space-y-4 mb-8">
              <div class="flex items-center text-white">
                <div class="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                <span class="text-sm">إدارة شاملة للموظفين</span>
              </div>
              <div class="flex items-center text-white">
                <div class="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                <span class="text-sm">نظام الحضور والانصراف</span>
              </div>
              <div class="flex items-center text-white">
                <div class="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                <span class="text-sm">إدارة الرواتب والمكافآت</span>
              </div>
              <div class="flex items-center text-white">
                <div class="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                <span class="text-sm">تقارير تحليلية متقدمة</span>
              </div>
            </div>

            <a href="https://talentdot.org" 
               target="_blank"
               class="block w-full bg-white hover:bg-gray-100 text-gray-900 py-4 rounded-2xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
              دخول TalentDot
            </a>
          </div>

          <!-- WorkEnrich Card -->
          <div class="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 lg:p-12 hover:bg-white/15 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
            <div class="mb-8">
              <div class="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-white/30 transition-colors">
                <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
                </svg>
              </div>
              <h2 class="text-3xl lg:text-4xl font-bold text-white mb-4">
                WorkEnrich
              </h2>
              <p class="text-lg text-blue-100 mb-8 leading-relaxed">
                شركة تطوير البرمجيات المتخصصة في الحلول التقنية المبتكرة والمتطورة
              </p>
            </div>

            <!-- Features -->
            <div class="space-y-4 mb-8">
              <div class="flex items-center text-white">
                <div class="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                <span class="text-sm">تطوير المواقع والتطبيقات</span>
              </div>
              <div class="flex items-center text-white">
                <div class="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                <span class="text-sm">أنظمة إدارة مخصصة</span>
              </div>
              <div class="flex items-center text-white">
                <div class="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                <span class="text-sm">تصميم واجهات المستخدم</span>
              </div>
              <div class="flex items-center text-white">
                <div class="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                <span class="text-sm">الحوسبة السحابية</span>
              </div>
            </div>

            <a routerLink="/home" 
               class="block w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-4 rounded-2xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
              دخول WorkEnrich
            </a>
          </div>
        </div>

        <!-- Bottom Text -->
        <div class="mt-16">
          <p class="text-blue-200 text-lg">
            اختر المنصة التي تناسب احتياجاتك وابدأ رحلتك معنا
          </p>
        </div>
      </div>
    </div>
  `
})
export class SelectionComponent {
  constructor() {}
}