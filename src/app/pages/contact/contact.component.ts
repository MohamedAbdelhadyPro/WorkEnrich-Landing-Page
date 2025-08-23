import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="pt-20 pb-12">
      <!-- Hero Section -->
      <section class="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16">
        <div class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            تواصل معنا
          </h1>
          <p class="text-xl text-gray-600">
            جاهز لتطوير شركتك؟ تواصل معنا اليوم واحصل على استشارة مجانية
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
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">الاسم الكامل *</label>
                    <input type="text" 
                           [(ngModel)]="contactForm.name"
                           name="name"
                           required
                           class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                           placeholder="أدخل اسمك الكامل">
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">الشركة</label>
                    <input type="text" 
                           [(ngModel)]="contactForm.company"
                           name="company"
                           class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                           placeholder="اسم الشركة">
                  </div>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">البريد الإلكتروني *</label>
                    <input type="email" 
                           [(ngModel)]="contactForm.email"
                           name="email"
                           required
                           class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                           placeholder="أدخل بريدك الإلكتروني">
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">رقم الهاتف *</label>
                    <input type="tel" 
                           [(ngModel)]="contactForm.phone"
                           name="phone"
                           required
                           class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                           placeholder="أدخل رقم هاتفك">
                  </div>
                </div>
                
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">الخدمة المطلوبة</label>
                  <select [(ngModel)]="contactForm.service"
                          name="service"
                          class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option value="">اختر الخدمة المطلوبة</option>
                    <option value="hr">نظام إدارة الموارد البشرية</option>
                    <option value="accounting">نظام إدارة الحسابات</option>
                    <option value="both">كلا النظامين</option>
                    <option value="consultation">استشارة تقنية</option>
                    <option value="support">دعم فني</option>
                    <option value="training">تدريب</option>
                  </select>
                </div>
                
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">حجم الشركة</label>
                  <select [(ngModel)]="contactForm.companySize"
                          name="companySize"
                          class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option value="">اختر حجم الشركة</option>
                    <option value="small">صغيرة (1-50 موظف)</option>
                    <option value="medium">متوسطة (51-200 موظف)</option>
                    <option value="large">كبيرة (201-500 موظف)</option>
                    <option value="enterprise">مؤسسية (أكثر من 500 موظف)</option>
                  </select>
                </div>
                
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">تفاصيل المشروع *</label>
                  <textarea [(ngModel)]="contactForm.message"
                            name="message"
                            required
                            rows="5"
                            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="اكتب تفاصيل احتياجاتك والنتائج المتوقعة..."></textarea>
                </div>
                
                <button type="submit" 
                        class="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-colors">
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
                    <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center ml-4">
                      <span class="text-blue-600 text-xl">{{ contact.icon }}</span>
                    </div>
                    <div>
                      <h3 class="font-bold text-gray-900 mb-1">{{ contact.title }}</h3>
                      <p class="text-gray-600">{{ contact.value }}</p>
                      <p *ngIf="contact.additional" class="text-gray-500 text-sm">{{ contact.additional }}</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Why Choose Us -->
              <div class="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl text-white">
                <h3 class="text-xl font-bold mb-4">لماذا تختارنا؟</h3>
                <ul class="space-y-3">
                  <li class="flex items-center">
                    <span class="w-2 h-2 bg-white rounded-full ml-3"></span>
                    استشارة مجانية شاملة لمشروعك
                  </li>
                  <li class="flex items-center">
                    <span class="w-2 h-2 bg-white rounded-full ml-3"></span>
                    فريق متخصص في أنظمة HR والمحاسبة
                  </li>
                  <li class="flex items-center">
                    <span class="w-2 h-2 bg-white rounded-full ml-3"></span>
                    حلول مخصصة وليس قوالب جاهزة
                  </li>
                  <li class="flex items-center">
                    <span class="w-2 h-2 bg-white rounded-full ml-3"></span>
                    دعم فني مستمر وتدريب شامل
                  </li>
                  <li class="flex items-center">
                    <span class="w-2 h-2 bg-white rounded-full ml-3"></span>
                    أسعار تنافسية وجودة عالية
                  </li>
                </ul>
              </div>

              <!-- Business Hours -->
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
                <div class="mt-4 p-3 bg-green-100 rounded-lg">
                  <p class="text-green-800 text-sm font-medium">
                    💬 دردشة مباشرة متاحة خلال ساعات العمل
                  </p>
                </div>
              </div>

              <!-- Free Consultation CTA -->
              <div class="bg-green-50 p-6 rounded-xl border border-green-200">
                <h3 class="font-bold text-green-900 mb-2">🎯 احجز استشارة مجانية</h3>
                <p class="text-green-700 text-sm mb-4">
                  احصل على استشارة مجانية لمدة 30 دقيقة لمناقشة احتياجاتك
                </p>
                <a href="tel:+966501234567" 
                   class="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                  احجز الآن
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `
})
export class ContactComponent {
  contactForm = {
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    companySize: '',
    message: ''
  };

  contactInfo = [
    {
      icon: '📧',
      title: 'البريد الإلكتروني',
      value: 'info@workenrich.com',
      additional: 'نرد خلال 24 ساعة'
    },
    {
      icon: '📱',
      title: 'الهاتف والواتساب',
      value: '+966 50 123 4567',
      additional: 'متاح خلال ساعات العمل'
    },
    {
      icon: '📍',
      title: 'العنوان',
      value: 'الرياض، المملكة العربية السعودية',
      additional: 'حي الملك فهد، طريق الملك عبدالعزيز'
    },
    {
      icon: '🕒',
      title: 'ساعات العمل',
      value: 'الأحد - الخميس: 9:00 ص - 6:00 م',
      additional: 'السبت: 10:00 ص - 4:00 م'
    }
  ];

  onSubmit() {
    // Validate required fields
    if (!this.contactForm.name || !this.contactForm.email || !this.contactForm.phone || !this.contactForm.message) {
      alert('يرجى ملء جميع الحقول المطلوبة (*)');
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.contactForm.email)) {
      alert('يرجى إدخال بريد إلكتروني صحيح');
      return;
    }

    console.log('Form submitted:', this.contactForm);
    
    // Here you would typically send the form data to your backend
    alert('تم إرسال رسالتك بنجاح! سنتواصل معك خلال 24 ساعة.');
    
    // Reset form
    this.contactForm = {
      name: '',
      company: '',
      email: '',
      phone: '',
      service: '',
      companySize: '',
      message: ''
    };
  }
}