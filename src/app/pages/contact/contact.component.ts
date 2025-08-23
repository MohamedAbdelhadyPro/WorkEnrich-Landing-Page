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
      <section class="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div class="inline-flex items-center bg-white/80 backdrop-blur-sm border border-orange-200/50 px-6 py-3 rounded-full mb-8 shadow-sm">
            <div class="w-3 h-3 bg-orange-500 rounded-full mr-3 animate-pulse"></div>
            <span class="text-gray-700 font-semibold text-sm">نحن هنا لمساعدتك</span>
          </div>
          <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            تواصل معنا
          </h1>
          <p class="text-xl text-gray-600 leading-relaxed">
            نحن هنا لمساعدتك في تحقيق أهدافك التقنية وتحويل أفكارك إلى واقع رقمي
          </p>
        </div>
      </section>

      <!-- Contact Form & Info -->
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <!-- Contact Form -->
            <div class="lg:col-span-2 bg-white border border-gray-200 p-8 rounded-2xl shadow-sm">
              <div class="flex items-center mb-6">
                <div class="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center mr-4">
                  <span class="text-orange-600 text-lg">📧</span>
                </div>
                <h2 class="text-2xl font-bold text-gray-900">أرسل لنا رسالة</h2>
              </div>
              <form (ngSubmit)="onSubmit()" class="space-y-6">
                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-2">الاسم الكامل</label>
                  <input type="text" 
                         [(ngModel)]="contactForm.name"
                         name="name"
                         class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                         placeholder="أدخل اسمك الكامل">
                </div>
                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-2">البريد الإلكتروني</label>
                  <input type="email" 
                         [(ngModel)]="contactForm.email"
                         name="email"
                         class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                         placeholder="أدخل بريدك الإلكتروني">
                </div>
                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-2">رقم الهاتف</label>
                  <input type="tel" 
                         [(ngModel)]="contactForm.phone"
                         name="phone"
                         class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                         placeholder="أدخل رقم هاتفك">
                </div>
                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-2">نوع الخدمة</label>
                  <select [(ngModel)]="contactForm.service"
                          name="service"
                          class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all">
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
                  <label class="block text-sm font-semibold text-gray-700 mb-2">تفاصيل المشروع</label>
                  <textarea [(ngModel)]="contactForm.message"
                            name="message"
                            rows="4"
                            class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-none"
                            placeholder="اكتب تفاصيل مشروعك هنا..."></textarea>
                </div>
                <button type="submit" 
                        class="w-full bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
                  إرسال الرسالة
                </button>
              </form>
            </div>

            <!-- Contact Info -->
            <div class="space-y-6">
              <div>
                <div class="flex items-center mb-6">
                  <div class="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                    <span class="text-blue-600 text-lg">📞</span>
                  </div>
                  <h3 class="text-xl font-bold text-gray-900">معلومات التواصل</h3>
                </div>
                <div class="space-y-4">
                  <div *ngFor="let contact of contactInfo" class="flex items-start">
                    <div class="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <span class="text-gray-600 text-lg">{{ contact.icon }}</span>
                    </div>
                    <div>
                      <h4 class="font-semibold text-gray-900 mb-1">{{ contact.title }}</h4>
                      <p class="text-gray-600 text-sm" dir="ltr" [style.font-family]="contact.title === 'الهاتف' ? 'Arial, sans-serif' : 'inherit'">{{ contact.value }}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Why Choose Us Card -->
              <div class="bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200 p-6 rounded-2xl">
                <div class="flex items-center mb-4">
                  <div class="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center mr-3">
                    <span class="text-white text-sm">⭐</span>
                  </div>
                  <h3 class="text-lg font-bold text-gray-900">لماذا تختارنا؟</h3>
                </div>
                <ul class="space-y-3">
                  <li class="flex items-center">
                    <span class="w-2 h-2 bg-orange-500 rounded-full mr-3 flex-shrink-0"></span>
                    <span class="text-gray-700 text-sm">استشارة مجانية لمشروعك</span>
                  </li>
                  <li class="flex items-center">
                    <span class="w-2 h-2 bg-orange-500 rounded-full mr-3 flex-shrink-0"></span>
                    <span class="text-gray-700 text-sm">فريق متخصص وذو خبرة</span>
                  </li>
                  <li class="flex items-center">
                    <span class="w-2 h-2 bg-orange-500 rounded-full mr-3 flex-shrink-0"></span>
                    <span class="text-gray-700 text-sm">أسعار تنافسية وجودة عالية</span>
                  </li>
                  <li class="flex items-center">
                    <span class="w-2 h-2 bg-orange-500 rounded-full mr-3 flex-shrink-0"></span>
                    <span class="text-gray-700 text-sm">دعم فني مستمر</span>
                  </li>
                </ul>
              </div>
              
              <!-- Quick Contact Card -->
              <div class="bg-gray-900 p-6 rounded-2xl text-white text-center">
                <div class="text-2xl mb-3">🚀</div>
                <h3 class="font-bold mb-2">جاهز للبدء؟</h3>
                <p class="text-gray-300 text-sm mb-4">احصل على رد سريع خلال 24 ساعة</p>
                <div class="flex flex-col gap-2">
                  <a href="tel:+201092963385" 
                     class="bg-white text-gray-900 hover:bg-gray-100 px-4 py-2 rounded-lg font-medium transition-colors text-sm">
                    اتصل الآن
                  </a>
                  <a href="mailto:info@workenrich.com"
                     class="border border-white/30 text-white hover:bg-white/10 px-4 py-2 rounded-lg font-medium transition-colors text-sm">
                    أرسل إيميل
                  </a>
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
      value: '+201092963385'
    },
    {
      icon: '📍',
      title: 'العنوان',
      value: 'التجمع الخامس - القاهرة الجديدة'
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