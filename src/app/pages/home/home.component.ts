import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="hero">
      <div class="container">
        <h1>نطور حلولاً تقنية متقدمة لنجاح أعمالك</h1>
        <p>شركة متخصصة في تطوير البرمجيات والتطبيقات المبتكرة</p>
        <a routerLink="/contact" class="btn btn-primary">ابدأ مشروعك</a>
      </div>
    </div>

    <section class="py-20 bg-gray-50">
      <div class="container">
        <div class="text-center mb-8">
          <h2>خدماتنا</h2>
        </div>
        <div class="grid grid-3">
          <div class="card">
            <h3>تطوير المواقع</h3>
            <p>مواقع حديثة ومتجاوبة</p>
          </div>
          <div class="card">
            <h3>تطبيقات الجوال</h3>
            <p>تطبيقات iOS و Android</p>
          </div>
          <div class="card">
            <h3>أنظمة الإدارة</h3>
            <p>حلول مخصصة للشركات</p>
          </div>
        </div>
      </div>
    </section>
  `
})
export class HomeComponent {
  constructor() {}
}