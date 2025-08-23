import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="pt-24 pb-12">
      <!-- Hero Section -->
      <section class="bg-gradient-to-br from-purple-50 via-white to-blue-50 py-16">
        <div class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {{ translationService.get('contact.title') }}
          </h1>
          <p class="text-xl text-gray-600">
            {{ translationService.get('contact.subtitle') }}
          </p>
        </div>
      </section>

      <!-- Contact Form & Info -->
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <!-- Contact Form -->
            <div class="bg-gray-50 p-8 rounded-2xl">
              <h2 class="text-2xl font-bold text-gray-900 mb-6">أرسل لنا رسالة</h2>
              <form (ngSubmit)="onSubmit()" class="space-y-6">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">الاسم الكامل</label>
                  <input type="text" 
                         [(ngModel)]="contactForm.name"
                         name="name"
                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E2E40] focus:border-transparent"
                         placeholder="أدخل اسمك الكامل">
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">البريد الإلكتروني</label>
                  <input type="email" 
                         [(ngModel)]="contactForm.email"
                         name="email"
                         class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E2E40] focus:border-transparent"
                         placeholder="أدخل بريدك الإلكتروني">
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">رقم الهاتف</label>
                  <input type="tel" 
                         [(ngModel)]="contactForm.phone"
                         name="phone"
                         class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E2E40] focus:border-transparent"
                         placeholder="أدخل رقم هاتفك">
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">نوع الخدمة</label>
                  <select [(ngModel)]="contactForm.service"
                          name="service"
                          class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E2E40] focus:border-transparent">
                    <option value="">اختر نوع الخدمة</option>
                    <option value="web">تطوير موقع إلكتروني</option>
                    <option value="mobile">تطبيق جوال</option>
                    <option value="system">نظام إدارة</option>
                    <option value="hr">نظام الموارد البشرية</option>
                    <option value="design">تصميم واجهات</option>
                    <option value="other">أخرى</option>
                  </select>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">تفاصيل المشروع</label>
                  <textarea [(ngModel)]="contactForm.message"
                            name="message"
                            rows="4"
                            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E2E40] focus:border-transparent"
                            placeholder="اكتب تفاصيل مشروعك هنا..."></textarea>
                </div>
                <button type="submit" 
                        class="w-full bg-[#1E2E40] hover:bg-[#1E2E40]/90 text-white px-8 py-3 rounded-lg font-medium transition-colors">
                  إرسال الرسالة
                </button>
              </form>
            </div>

            <!-- Contact Info -->
            <div class="space-y-8">
              <div>
                <h2 class="text-2xl font-bold text-gray-900 mb-6">معلومات التواصل</h2>
                <div class="space-y-6">
                  <div *ngFor="let contact of contactInfo" class="flex items-start">
                    <div class="w-12 h-12 bg-[#1E2E40]/10 rounded-lg flex items-center justify-center mr-4">
                      <span class="text-[#1E2E40] text-xl">{{ contact.icon }}</span>
                    </div>
                    <div>
                      <h3 class="font-bold text-gray-900 mb-1">{{ contact.title }}</h3>
                      <p class="text-gray-600">{{ contact.value }}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="bg-gradient-to-r from-[#1E2E40] to-blue-600 p-8 rounded-2xl text-white">
                <h3 class="text-xl font-bold mb-4">لماذا تختارنا؟</h3>
                <ul class="space-y-3">
                  <li class="flex items-center">
                    <span class="w-2 h-2 bg-white rounded-full mr-3"></span>
                    استشارة مجانية لمشروعك
                  </li>
                  <li class="flex items-center">
                    <span class="w-2 h-2 bg-white rounded-full mr-3"></span>
                    فريق متخصص وذو خبرة
                  </li>
                  <li class="flex items-center">
                    <span class="w-2 h-2 bg-white rounded-full mr-3"></span>
                    أسعار تنافسية وجودة عالية
                  </li>
                  <li class="flex items-center">
                    <span class="w-2 h-2 bg-white rounded-full mr-3"></span>
                    دعم فني مستمر
                  </li>
                </ul>
              </div>

              <div class="bg-gray-50 p-6 rounded-xl">
                <h3 class="font-bold text-gray-900 mb-3">ساعات العمل</h3>
                <div class="space-y-2 text-sm text-gray-600">
                  <div class="flex justify-between">
                    <span>الأحد - الخميس</span>
                    <span>9:00 ص - 6:00 م</span>
                  </div>
                  <div class="flex justify-between">
                    <span>الجمعة</span>
                    <span>مغلق</span>
                  </div>
                  <div class="flex justify-between">
                    <span>السبت</span>
                    <span>10:00 ص - 4:00 م</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `
})
export class ContactComponent {
  constructor(public translationService: TranslationService) {}

  contactForm = {
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  };

  contactInfo = [
    {
      icon: '📧',
      title: 'البريد الإلكتروني',
      value: 'info@workenrich.com'
    },
    {
      icon: '📱',
      title: 'الهاتف',
      value: '+966 50 123 4567'
    },
    {
      icon: '📍',
      title: 'العنوان',
      value: 'الرياض، المملكة العربية السعودية'
    },
    {
      icon: '🕒',
      title: 'ساعات العمل',
      value: 'الأحد - الخميس: 9:00 ص - 6:00 م'
    }
  ];

  onSubmit() {
    console.log('Form submitted:', this.contactForm);
    // Here you would typically send the form data to your backend
    alert('تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.');
    
    // Reset form
    this.contactForm = {
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    };
  }
}