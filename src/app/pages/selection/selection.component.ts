import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-selection',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="min-h-screen flex items-center justify-center bg-white">
      <!-- Hero Section -->
      <div class="text-center mb-16 px-8">
        <div class="max-w-4xl mx-auto">
          <h1 class="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            نبني ونطور حلولاً مبتكرة للشركات
          </h1>
          <p class="text-xl lg:text-2xl text-gray-600 mb-12 leading-relaxed">
            اختر الحل المناسب لاحتياجاتك التقنية
          </p>
        </div>
      </div>
      
      <!-- Background Elements -->
      <div class="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-32 px-8">
        <!-- TalentDot Logo -->
        <a href="https://talentdot.org" 
           target="_blank"
           class="group flex flex-col items-center transition-all duration-300 transform hover:scale-110">
          <div class="w-32 h-32 lg:w-48 lg:h-48 bg-white rounded-3xl flex items-center justify-center mb-6 shadow-2xl group-hover:shadow-3xl transition-all p-4">
            <img src="assets/talentdot-logo.svg" alt="TalentDot" class="w-full h-full object-contain">
          </div>
          <h2 class="text-2xl lg:text-3xl font-bold text-gray-800 text-center">TalentDot</h2>
          <p class="text-gray-600 text-center mt-2">HR System</p>
          <div class="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p class="text-blue-800 font-semibold text-sm">استخدم نظامنا المبتكر</p>
            <p class="text-blue-600 text-sm">لإدارة الموارد البشرية</p>
          </div>
        </a>

        <!-- WorkEnrich Logo -->
        <a routerLink="/home" 
           class="group flex flex-col items-center transition-all duration-300 transform hover:scale-110">
          <div class="w-32 h-32 lg:w-48 lg:h-48 bg-white rounded-3xl flex items-center justify-center mb-6 shadow-2xl group-hover:shadow-3xl transition-all p-4">
            <img src="assets/workenrich-logo.svg" alt="WorkEnrich" class="w-full h-full object-contain">
          </div>
          <h2 class="text-2xl lg:text-3xl font-bold text-gray-800 text-center">WorkEnrich</h2>
          <p class="text-gray-600 text-center mt-2">Software Development</p>
          <div class="mt-4 p-4 bg-orange-50 rounded-lg border border-orange-200">
            <p class="text-orange-800 font-semibold text-sm">اطلب برمجة متخصصة</p>
            <p class="text-orange-600 text-sm">لحلول تقنية مبتكرة</p>
          </div>
        </a>
      </div>
    </div>
  `
})
export class SelectionComponent {
  constructor() {}
}