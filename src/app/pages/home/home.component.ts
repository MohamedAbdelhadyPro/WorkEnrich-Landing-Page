import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="min-h-screen bg-white">
      <!-- Hero Section -->
      <section class="py-16" style="background: linear-gradient(135deg, #1A3477, #2563eb);">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div class="text-center lg:text-right">
              <h1 class="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                نطور حلولاً تقنية متقدمة لنجاح أعمالك
              </h1>
              <p class="text-xl text-blue-100 mb-8 leading-relaxed">
                شركة متخصصة في تطوير البرمجيات والتطبيقات المبتكرة التي تساعد الشركات على النمو والتطور في العصر الرقمي
              </p>
              <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a routerLink="/contact" 
                   class="text-white hover:opacity-90 px-8 py-3 rounded-lg font-medium transition-all text-lg shadow-lg" style="background: linear-gradient(135deg, #ff7000, #ff5722);">
                  ابدأ مشروعك الآن
                </a>
                <a routerLink="/services"
                   class="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-medium transition-all text-lg">
                  اعرض خدماتنا
                </a>
              </div>
            </div>
            <div class="relative">
              <img src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800" 
                   alt="فريق تطوير البرمجيات" 
                   class="w-full h-96 object-cover rounded-2xl shadow-2xl">
              <div class="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      <!-- Services Section -->
      <section class="py-20 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              خدماتنا المتخصصة
            </h2>
            <p class="text-xl text-gray-600">
              نقدم مجموعة شاملة من الحلول التقنية المتطورة
            </p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div *ngFor="let service of services" 
                 class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div class="w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg text-3xl"
                   [style.background]="service.gradient">
                {{ service.icon }}
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-4">{{ service.title }}</h3>
              <p class="text-gray-600 leading-relaxed mb-6">{{ service.description }}</p>
              <a routerLink="/services" 
                 class="text-[#1E2E40] hover:text-[#1E2E40]/80 font-medium transition-colors">
                اعرف المزيد ←
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Portfolio Section -->
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              مشاريعنا المنجزة
            </h2>
            <p class="text-xl text-gray-600">
              أمثلة حية من مشاريعنا التي حققت نجاحاً باهراً
            </p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div *ngFor="let project of portfolio" 
                 class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div class="relative overflow-hidden">
                <img [src]="project.image" 
                     [alt]="project.title" 
                     class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300">
                <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div class="p-6">
                <div class="flex items-center mb-2">
                  <span class="px-3 py-1 text-xs font-medium rounded-full"
                        [ngClass]="project.categoryColor">
                    {{ project.category }}
                  </span>
                </div>
                <h3 class="text-xl font-bold text-gray-900 mb-2">{{ project.title }}</h3>
                <p class="text-gray-600 text-sm mb-4">{{ project.description }}</p>
                <a [routerLink]="project.link"
                   class="text-[#1E2E40] hover:text-[#1E2E40]/80 font-medium text-sm transition-colors">
                  عرض التفاصيل ←
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Stats Section -->
      <section class="py-20 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              إنجازاتنا بالأرقام
            </h2>
            <p class="text-xl text-gray-600">
              الأرقام تتحدث عن نفسها
            </p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div *ngFor="let stat of stats" class="text-center bg-white p-8 rounded-xl shadow-lg">
              <div class="text-4xl font-bold mb-2" [style.color]="stat.color">{{ stat.number }}</div>
              <div class="text-gray-600 font-medium">{{ stat.label }}</div>
              <div class="text-gray-500 text-sm mt-2">{{ stat.description }}</div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            جاهز لبدء مشروعك القادم؟
          </h2>
          <p class="text-xl text-gray-600 mb-8">
            تواصل معنا اليوم واحصل على استشارة مجانية لمشروعك
          </p>
          <a routerLink="/contact" 
             class="text-white hover:opacity-90 px-8 py-3 rounded-lg font-medium transition-all text-lg shadow-lg" style="background: linear-gradient(135deg, #1A3477, #2563eb);">
            ابدأ مشروعك الآن
          </a>
        </div>
      </section>
    </div>
  `
})
export class HomeComponent {
  constructor(public translationService: TranslationService) {}

  services = [
    {
      icon: '🌐',
      title: 'تطوير المواقع الإلكترونية',
      description: 'مواقع إلكترونية حديثة ومتجاوبة مع جميع الأجهزة باستخدام أحدث التقنيات',
      gradient: 'linear-gradient(to right, #3b82f6, #1d4ed8)'
    },
    {
      icon: '📱',
      title: 'تطبيقات الجوال',
      description: 'تطبيقات iOS و Android أصلية ومتعددة المنصات بأداء عالي وتصميم متميز',
      gradient: 'linear-gradient(to right, #10b981, #059669)'
    },
    {
      icon: '⚙️',
      title: 'أنظمة إدارة مخصصة',
      description: 'حلول برمجية مخصصة لإدارة العمليات وتحسين الإنتاجية في شركتك',
      gradient: 'linear-gradient(to right, #8b5cf6, #7c3aed)'
    }
  ];

  portfolio = [
    {
      title: 'منصة التجارة الإلكترونية',
      description: 'متجر إلكتروني متكامل مع نظام إدارة المخزون والمدفوعات',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'تطوير ويب',
      categoryColor: 'bg-blue-100 text-blue-800',
      link: '/projects/ecommerce'
    },
    {
      title: 'تطبيق إدارة المهام',
      description: 'تطبيق جوال لإدارة المشاريع والمهام مع فريق العمل',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'تطبيق جوال',
      categoryColor: 'bg-green-100 text-green-800',
      link: '/projects/task-management'
    },
    {
      title: 'نظام إدارة المستشفيات',
      description: 'نظام شامل لإدارة المرضى والمواعيد والسجلات الطبية',
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'نظام إدارة',
      categoryColor: 'bg-purple-100 text-purple-800',
      link: '/projects/hospital-system'
    }
  ];

  stats = [
    {
      number: '200+',
      label: 'مشروع مكتمل',
      description: 'مشاريع متنوعة ومبتكرة',
      color: '#1E2E40'
    },
    {
      number: '150+',
      label: 'عميل سعيد',
      description: 'عملاء راضون عن خدماتنا',
      color: '#3b82f6'
    },
    {
      number: '40+',
      label: 'مطور محترف',
      description: 'فريق متخصص وذو خبرة',
      color: '#10b981'
    },
    {
      number: '15+',
      label: 'سنوات خبرة',
      description: 'خبرة متراكمة في السوق',
      color: '#8b5cf6'
    }
  ];
}