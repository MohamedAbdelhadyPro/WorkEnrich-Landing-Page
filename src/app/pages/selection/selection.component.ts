import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-selection',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex flex-col items-center justify-center px-4">
      <!-- Header Section -->
      <div class="text-center mb-16 max-w-4xl">
        <div class="inline-flex items-center bg-white/80 backdrop-blur-sm border border-blue-200/50 px-6 py-3 rounded-full mb-8 shadow-sm">
          <div class="w-3 h-3 bg-blue-500 rounded-full mr-3 animate-pulse"></div>
          <span class="text-gray-700 font-semibold text-sm">نطور المستقبل الرقمي</span>
        </div>
        <h1 class="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          نبني ونطور حلولاً مبتكرة للشركات
        </h1>
        <p class="text-xl text-gray-600 leading-relaxed">
          اختر الحل المناسب لاحتياجاتك التقنية
        </p>
      </div>
      
      <!-- Cards Section -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl w-full">
        <!-- TalentDot Card -->
        <a href="https://talentdot.org" 
           target="_blank"
           class="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
          <div class="flex flex-col items-center text-center">
            <!-- Logo Container -->
            <div class="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <img src="assets/talentdot-logo.svg" alt="TalentDot" class="w-12 h-12 object-contain">
            </div>
            
            <!-- Content -->
            <h2 class="text-2xl font-bold text-gray-900 mb-2">TalentDot</h2>
            <p class="text-gray-500 text-sm mb-6 font-medium">HR System</p>
            
            <!-- CTA -->
            <div class="bg-blue-50 border border-blue-200 rounded-xl p-4 w-full group-hover:bg-blue-100 transition-colors">
              <p class="text-blue-800 font-bold text-base mb-1">استخدم نظامنا المبتكر</p>
              <p class="text-blue-600 text-sm">لإدارة الموارد البشرية</p>
            </div>
            
            <!-- Arrow Icon -->
            <div class="mt-6 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors">
              <svg class="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </div>
          </div>
        </a>

        <!-- WorkEnrich Card -->
        <a routerLink="/home" 
           class="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
          <div class="flex flex-col items-center text-center">
            <!-- Logo Container -->
            <div class="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <img src="assets/workenrich-logo.svg" alt="WorkEnrich" class="w-16 h-16 object-contain">
            </div>
            
            <!-- Content -->
            <h2 class="text-2xl font-bold text-gray-900 mb-2">WorkEnrich</h2>
            <p class="text-gray-500 text-sm mb-6 font-medium">Software Development</p>
            
            <!-- CTA -->
            <div class="bg-orange-50 border border-orange-200 rounded-xl p-4 w-full group-hover:bg-orange-100 transition-colors">
              <p class="text-orange-800 font-bold text-base mb-1">اطلب برمجة متخصصة</p>
              <p class="text-orange-600 text-sm">لحلول تقنية مبتكرة</p>
            </div>
            
            <!-- Arrow Icon -->
            <div class="mt-6 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center group-hover:bg-orange-600 transition-colors">
              <svg class="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </div>
          </div>
        </a>
      </div>
      
      <!-- Footer Text -->
      <div class="mt-16 text-center">
        <p class="text-gray-500 text-sm">
          © 2025 WorkEnrich & TalentDot - نطور المستقبل الرقمي
        </p>
      </div>
    </div>
  `
})
export class SelectionComponent {
  constructor() {}
}