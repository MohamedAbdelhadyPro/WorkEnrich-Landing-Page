import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="pt-24 pb-12">
      <!-- Hero Section -->
      <section class="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            خدمات البرمجة المتخصصة
          </h1>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            نقدم مجموعة شاملة من الخدمات التقنية المتخصصة لتلبية احتياجات عملك وتحقيق أهدافك الرقمية
          </p>
        </div>
      </section>

      <!-- Services Grid -->
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Web Development -->
            <div class="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300">
              <div class="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"></path>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-4">تطوير المواقع الإلكترونية</h3>
              <p class="text-gray-600 mb-6 leading-relaxed">
                مواقع إلكترونية حديثة ومتجاوبة مع جميع الأجهزة باستخدام أحدث التقنيات
              </p>
              <ul class="space-y-3 mb-8">
                <li class="flex items-center text-gray-700">
                  <div class="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  تطوير مواقع متجاوبة
                </li>
                <li class="flex items-center text-gray-700">
                  <div class="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  تصميم واجهات احترافي
                </li>
                <li class="flex items-center text-gray-700">
                  <div class="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  تحسين محركات البحث
                </li>
                <li class="flex items-center text-gray-700">
                  <div class="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  أداء عالي وأمان
                </li>
              </ul>
              <div class="text-2xl font-bold text-blue-600 mb-4">يبدأ من 5,000 ريال</div>
              <a routerLink="/contact" class="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-3 rounded-xl font-medium transition-colors">
                طلب الخدمة
              </a>
            </div>

            <!-- Mobile Apps -->
            <div class="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-green-200 hover:shadow-xl transition-all duration-300">
              <div class="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-200 transition-colors">
                <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-4">تطبيقات الجوال</h3>
              <p class="text-gray-600 mb-6 leading-relaxed">
                تطبيقات iOS و Android أصلية ومتعددة المنصات بأداء عالي وتجربة مستخدم مميزة
              </p>
              <ul class="space-y-3 mb-8">
                <li class="flex items-center text-gray-700">
                  <div class="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  iOS & Android
                </li>
                <li class="flex items-center text-gray-700">
                  <div class="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  واجهة سهلة الاستخدام
                </li>
                <li class="flex items-center text-gray-700">
                  <div class="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  أداء سريع ومستقر
                </li>
                <li class="flex items-center text-gray-700">
                  <div class="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  تحديثات مستمرة
                </li>
              </ul>
              <div class="text-2xl font-bold text-green-600 mb-4">يبدأ من 8,000 ريال</div>
              <a routerLink="/contact" class="block w-full bg-green-600 hover:bg-green-700 text-white text-center py-3 rounded-xl font-medium transition-colors">
                طلب الخدمة
              </a>
            </div>

            <!-- Management Systems -->
            <div class="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-purple-200 hover:shadow-xl transition-all duration-300">
              <div class="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-colors">
                <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-4">أنظمة إدارة مخصصة</h3>
              <p class="text-gray-600 mb-6 leading-relaxed">
                حلول برمجية مخصصة لإدارة العمليات وتحسين الإنتاجية وأتمتة المهام
              </p>
              <ul class="space-y-3 mb-8">
                <li class="flex items-center text-gray-700">
                  <div class="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  حلول مخصصة
                </li>
                <li class="flex items-center text-gray-700">
                  <div class="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  تكامل سهل
                </li>
                <li class="flex items-center text-gray-700">
                  <div class="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  تقارير تفصيلية
                </li>
                <li class="flex items-center text-gray-700">
                  <div class="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  أمان عالي
                </li>
              </ul>
              <div class="text-2xl font-bold text-purple-600 mb-4">يبدأ من 12,000 ريال</div>
              <a routerLink="/contact" class="block w-full bg-purple-600 hover:bg-purple-700 text-white text-center py-3 rounded-xl font-medium transition-colors">
                طلب الخدمة
              </a>
            </div>

            <!-- UI/UX Design -->
            <div class="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-pink-200 hover:shadow-xl transition-all duration-300">
              <div class="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-pink-200 transition-colors">
                <svg class="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"></path>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-4">تصميم واجهات المستخدم</h3>
              <p class="text-gray-600 mb-6 leading-relaxed">
                تصاميم عصرية وجذابة تركز على تجربة المستخدم المثلى وسهولة الاستخدام
              </p>
              <ul class="space-y-3 mb-8">
                <li class="flex items-center text-gray-700">
                  <div class="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                  تصميم حديث
                </li>
                <li class="flex items-center text-gray-700">
                  <div class="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                  تجربة مستخدم مميزة
                </li>
                <li class="flex items-center text-gray-700">
                  <div class="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                  ألوان متناسقة
                </li>
                <li class="flex items-center text-gray-700">
                  <div class="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                  سهولة الاستخدام
                </li>
              </ul>
              <div class="text-2xl font-bold text-pink-600 mb-4">يبدأ من 3,000 ريال</div>
              <a routerLink="/contact" class="block w-full bg-pink-600 hover:bg-pink-700 text-white text-center py-3 rounded-xl font-medium transition-colors">
                طلب الخدمة
              </a>
            </div>

            <!-- Cloud Solutions -->
            <div class="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-cyan-200 hover:shadow-xl transition-all duration-300">
              <div class="w-16 h-16 bg-cyan-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-cyan-200 transition-colors">
                <svg class="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-4">الحوسبة السحابية</h3>
              <p class="text-gray-600 mb-6 leading-relaxed">
                حلول سحابية آمنة وقابلة للتوسع لاستضافة وإدارة التطبيقات والبيانات
              </p>
              <ul class="space-y-3 mb-8">
                <li class="flex items-center text-gray-700">
                  <div class="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                  استضافة آمنة
                </li>
                <li class="flex items-center text-gray-700">
                  <div class="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                  نسخ احتياطي تلقائي
                </li>
                <li class="flex items-center text-gray-700">
                  <div class="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                  قابلية التوسع
                </li>
                <li class="flex items-center text-gray-700">
                  <div class="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                  مراقبة مستمرة
                </li>
              </ul>
              <div class="text-2xl font-bold text-cyan-600 mb-4">يبدأ من 500 ريال/شهر</div>
              <a routerLink="/contact" class="block w-full bg-cyan-600 hover:bg-cyan-700 text-white text-center py-3 rounded-xl font-medium transition-colors">
                طلب الخدمة
              </a>
            </div>

            <!-- Technical Support -->
            <div class="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-orange-200 hover:shadow-xl transition-all duration-300">
              <div class="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-200 transition-colors">
                <svg class="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-4">الدعم الفني والصيانة</h3>
              <p class="text-gray-600 mb-6 leading-relaxed">
                دعم فني متواصل وصيانة دورية لضمان استمرارية العمل وحل المشاكل فوراً
              </p>
              <ul class="space-y-3 mb-8">
                <li class="flex items-center text-gray-700">
                  <div class="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  دعم 24/7
                </li>
                <li class="flex items-center text-gray-700">
                  <div class="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  صيانة دورية
                </li>
                <li class="flex items-center text-gray-700">
                  <div class="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  تحديثات أمنية
                </li>
                <li class="flex items-center text-gray-700">
                  <div class="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  استجابة سريعة
                </li>
              </ul>
              <div class="text-2xl font-bold text-orange-600 mb-4">يبدأ من 1,000 ريال/شهر</div>
              <a routerLink="/contact" class="block w-full bg-orange-600 hover:bg-orange-700 text-white text-center py-3 rounded-xl font-medium transition-colors">
                طلب الخدمة
              </a>
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
             class="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
            ابدأ مشروعك الآن
          </a>
        </div>
      </section>
    </div>
  `
})
export class ServicesComponent {
  constructor(public translationService: TranslationService) {}
}