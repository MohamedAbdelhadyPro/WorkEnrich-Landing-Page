import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-selection',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="min-h-screen flex items-center justify-center bg-white">
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
        </a>

        <!-- WorkEnrich Logo -->
        <a routerLink="/home" 
           class="group flex flex-col items-center transition-all duration-300 transform hover:scale-110">
          <div class="w-32 h-32 lg:w-48 lg:h-48 bg-white rounded-3xl flex items-center justify-center mb-6 shadow-2xl group-hover:shadow-3xl transition-all p-4">
            <img src="assets/workenrich-logo.svg" alt="WorkEnrich" class="w-full h-full object-contain">
          </div>
          <h2 class="text-2xl lg:text-3xl font-bold text-gray-800 text-center">WorkEnrich</h2>
          <p class="text-gray-600 text-center mt-2">Software Development</p>
        </a>
      </div>
    </div>
  `
})
export class SelectionComponent {
  constructor() {}
}