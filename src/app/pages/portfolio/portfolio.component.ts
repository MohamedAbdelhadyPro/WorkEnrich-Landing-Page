import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="pt-24 pb-12">
      <!-- Hero Section -->
      <section class="bg-gradient-to-br from-purple-50 via-white to-blue-50 py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            معرض أعمالنا
          </h1>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            مشاريع نفخر بإنجازها وعملاء وثقوا بخبرتنا لتحويل أفكارهم إلى واقع رقمي
          </p>
        </div>
      </section>

      <!-- Portfolio Grid -->
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                <div class="flex flex-wrap gap-2 mb-4">
                  <span *ngFor="let tech of project.technologies" 
                        class="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                    {{ tech }}
                  </span>
                </div>
                <a [routerLink]="project.link" 
                   class="text-purple-600 hover:text-purple-700 font-medium text-sm transition-colors">
                  عرض التفاصيل ←
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `
})
export class PortfolioComponent {
  portfolio = [
    {
      title: 'منصة التجارة الإلكترونية',
      description: 'متجر إلكتروني متكامل مع نظام إدارة المخزون والمدفوعات',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'تطوير ويب',
      categoryColor: 'bg-blue-100 text-blue-800',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: '/projects/ecommerce'
    },
    {
      title: 'تطبيق إدارة المهام',
      description: 'تطبيق جوال لإدارة المشاريع والمهام مع فريق العمل',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'تطبيق جوال',
      categoryColor: 'bg-green-100 text-green-800',
      technologies: ['Flutter', 'Firebase', 'Dart', 'Push Notifications'],
      link: '/projects/task-management'
    },
    {
      title: 'نظام إدارة المستشفيات',
      description: 'نظام شامل لإدارة المرضى والمواعيد والسجلات الطبية',
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'نظام إدارة',
      categoryColor: 'bg-purple-100 text-purple-800',
      technologies: ['Angular', 'ASP.NET', 'SQL Server', 'Azure'],
      link: '/projects/hospital-system'
    },
    {
      title: 'منصة التعليم الإلكتروني',
      description: 'منصة تفاعلية للتعلم عن بُعد مع أدوات التقييم والمتابعة',
      image: 'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'تطوير ويب',
      categoryColor: 'bg-blue-100 text-blue-800',
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'WebRTC'],
      link: '/projects/elearning'
    },
    {
      title: 'تطبيق الخدمات المصرفية',
      description: 'تطبيق آمن للخدمات المصرفية الرقمية والتحويلات',
      image: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'تطبيق جوال',
      categoryColor: 'bg-green-100 text-green-800',
      technologies: ['React Native', 'Blockchain', 'Encryption', 'Biometrics'],
      link: '/projects/banking-app'
    },
    {
      title: 'نظام إدارة المخازن',
      description: 'حل متكامل لإدارة المخزون والمبيعات والتقارير المالية',
      image: 'https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'نظام إدارة',
      categoryColor: 'bg-purple-100 text-purple-800',
      technologies: ['Django', 'PostgreSQL', 'Redis', 'Docker'],
      link: '/projects/inventory-system'
    }
  ];
}