import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav>
      <div class="nav-container">
        <a routerLink="/">
          <span style="font-size: 1.5rem; font-weight: bold; color: #1A3477;">WorkEnrich</span>
        </a>
        <div class="nav-links">
          <a routerLink="/">الرئيسية</a>
          <a routerLink="/services">الخدمات</a>
          <a routerLink="/about">من نحن</a>
          <a routerLink="/contact" class="btn btn-primary">تواصل معنا</a>
        </div>
      </div>
    </nav>
  `
})
export class HeaderComponent {
  constructor() {}
}