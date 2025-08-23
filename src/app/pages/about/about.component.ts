import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="pt-24 pb-12">
      <!-- Hero Section -->
      <section class="py-16" style="background: linear-gradient(135deg, #1A3477, #2563eb);">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 class="text-4xl lg:text-5xl font-bold text-white mb-6">
            من نحن
          </h1>
          <p class="text-xl text-blue-100 max-w-3xl mx-auto">
            تعرف على قصتنا ورؤيتنا في تطوير الحلول التقنية المبتكرة
          </p>
        </div>
      </section>

      <!-- About Content -->
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                قصتنا
              </h2>
              <p class="text-lg text-gray-600 mb-6 leading-relaxed">
                تأسست شركة WorkEnrich بهدف تقديم حلول تقنية مبتكرة تساعد الشركات على النمو والتطور في العصر الرقمي. نحن فريق من المطورين والمصممين المتخصصين الذين يؤمنون بقوة التكنولوجيا في تحسين الأعمال.
              </p>
              <p class="text-lg text-gray-600 mb-6 leading-relaxed">
                منذ تأسيسنا، نجحنا في تطوير أكثر من 200 مشروع متنوع، من المواقع الإلكترونية وتطبيقات الجوال إلى الأنظمة المعقدة لإدارة الأعمال. نحن نفخر بثقة عملائنا ونسعى دائماً لتجاوز توقعاتهم.
              </p>
              <p class="text-lg text-gray-600 mb-8 leading-relaxed">
                رؤيتنا هي أن نكون الشريك التقني الأول للشركات في المنطقة، ونساعدهم على تحقيق أهدافهم من خلال حلول تقنية متطورة وخدمة عملاء متميزة.
              </p>
              <div class="space-y-4 text-right">
                <div *ngFor="let value of values" class="flex items-start text-right">
                  <div class="w-6 h-6 bg-[#1E2E40]/10 rounded-full flex items-center justify-center mt-1 ml-3">
                    <span class="text-[#1E2E40] text-sm">✓</span>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900">{{value.title}}</h4>
                    <p class="text-gray-600 text-sm">{{value.description}}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="relative">
              <img src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800" 
                   alt="Our Team" 
                   class="w-full h-96 object-cover rounded-2xl shadow-lg">
              <div class="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent rounded-2xl"></div>
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
            <div class="text-center bg-white p-8 rounded-xl shadow-lg">
              <div class="text-4xl font-bold mb-2 text-[#1E2E40]">200+</div>
              <div class="text-gray-600 font-medium">مشروع مكتمل</div>
              <div class="text-gray-500 text-sm mt-2">مشاريع متنوعة ومبتكرة</div>
            </div>
            <div class="text-center bg-white p-8 rounded-xl shadow-lg">
              <div class="text-4xl font-bold mb-2 text-blue-600">150+</div>
              <div class="text-gray-600 font-medium">عميل سعيد</div>
              <div class="text-gray-500 text-sm mt-2">عملاء راضون عن خدماتنا</div>
            </div>
            <div class="text-center bg-white p-8 rounded-xl shadow-lg">
              <div class="text-4xl font-bold mb-2 text-green-600">40+</div>
              <div class="text-gray-600 font-medium">مطور محترف</div>
              <div class="text-gray-500 text-sm mt-2">فريق متخصص وذو خبرة</div>
            </div>
            <div class="text-center bg-white p-8 rounded-xl shadow-lg">
              <div class="text-4xl font-bold mb-2 text-purple-600">15+</div>
              <div class="text-gray-600 font-medium">سنوات خبرة</div>
              <div class="text-gray-500 text-sm mt-2">خبرة متراكمة في السوق</div>
            </div>
          </div>
        </div>
      </section>

      <!-- Team Section -->
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              فريق العمل
            </h2>
            <p class="text-xl text-gray-600">
              تعرف على الفريق المتخصص وراء نجاحنا
            </p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Row 1 -->
            <div class="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <img src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=150" 
                   alt="محمد عبدالهادي" 
                   class="w-24 h-24 rounded-full mx-auto mb-4 object-cover">
              <h3 class="text-xl font-bold text-gray-900 mb-2">محمد عبدالهادي</h3>
              <p class="text-[#1E2E40] font-medium mb-3">CTO</p>
              <p class="text-gray-600 text-sm mb-4">مدير التقنية الرئيسي ومسؤول الاستراتيجية التقنية</p>
              <div class="flex justify-center space-x-3">
                <div class="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#1E2E40] hover:text-white transition-colors cursor-pointer">
                  <span class="text-sm">💼</span>
                </div>
                <div class="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors cursor-pointer">
                  <span class="text-sm">📧</span>
                </div>
              </div>
            </div>
            
            <div class="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <img src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=150" 
                   alt="احمد ابراهيم" 
                   class="w-24 h-24 rounded-full mx-auto mb-4 object-cover">
              <h3 class="text-xl font-bold text-gray-900 mb-2">احمد ابراهيم</h3>
              <p class="text-[#1E2E40] font-medium mb-3">Backend Lead</p>
              <p class="text-gray-600 text-sm mb-4">قائد فريق تطوير الخادم والأنظمة الخلفية</p>
              <div class="flex justify-center space-x-3">
                <div class="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#1E2E40] hover:text-white transition-colors cursor-pointer">
                  <span class="text-sm">💼</span>
                </div>
                <div class="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors cursor-pointer">
                  <span class="text-sm">📧</span>
                </div>
              </div>
            </div>
            
            <div class="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <img src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=150" 
                   alt="كيرلس سعد" 
                   class="w-24 h-24 rounded-full mx-auto mb-4 object-cover">
              <h3 class="text-xl font-bold text-gray-900 mb-2">كيرلس سعد</h3>
              <p class="text-[#1E2E40] font-medium mb-3">UI-UX Lead</p>
              <p class="text-gray-600 text-sm mb-4">قائد فريق تصميم واجهات وتجربة المستخدم</p>
              <div class="flex justify-center space-x-3">
                <div class="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#1E2E40] hover:text-white transition-colors cursor-pointer">
                  <span class="text-sm">💼</span>
                </div>
                <div class="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors cursor-pointer">
                  <span class="text-sm">📧</span>
                </div>
              </div>
            </div>
            
            <!-- Row 2 -->
            <div class="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <img src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=150" 
                   alt="مصطفي مجدي" 
                   class="w-24 h-24 rounded-full mx-auto mb-4 object-cover">
              <h3 class="text-xl font-bold text-gray-900 mb-2">مصطفي مجدي</h3>
              <p class="text-[#1E2E40] font-medium mb-3">Operational Manager</p>
              <p class="text-gray-600 text-sm mb-4">مدير العمليات ومسؤول تنسيق المشاريع</p>
              <div class="flex justify-center space-x-3">
                <div class="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#1E2E40] hover:text-white transition-colors cursor-pointer">
                  <span class="text-sm">💼</span>
                </div>
                <div class="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors cursor-pointer">
                  <span class="text-sm">📧</span>
                </div>
              </div>
            </div>
            
            <div class="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <img src="https://images.pexels.com/photos/3184293/pexels-photo-3184293.jpeg?auto=compress&cs=tinysrgb&w=150" 
                   alt="محمد حسام" 
                   class="w-24 h-24 rounded-full mx-auto mb-4 object-cover">
              <h3 class="text-xl font-bold text-gray-900 mb-2">محمد حسام</h3>
              <p class="text-[#1E2E40] font-medium mb-3">Project Manager</p>
              <p class="text-gray-600 text-sm mb-4">مدير مشاريع ومسؤول متابعة التنفيذ</p>
              <div class="flex justify-center space-x-3">
                <div class="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#1E2E40] hover:text-white transition-colors cursor-pointer">
                  <span class="text-sm">💼</span>
                </div>
                <div class="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors cursor-pointer">
                  <span class="text-sm">📧</span>
                </div>
              </div>
            </div>
            
            <div class="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <img src="https://images.pexels.com/photos/3184294/pexels-photo-3184294.jpeg?auto=compress&cs=tinysrgb&w=150" 
                   alt="دينا عماد" 
                   class="w-24 h-24 rounded-full mx-auto mb-4 object-cover">
              <h3 class="text-xl font-bold text-gray-900 mb-2">دينا عماد</h3>
              <p class="text-[#1E2E40] font-medium mb-3">Project Manager</p>
              <p class="text-gray-600 text-sm mb-4">مديرة مشاريع ومتخصصة في إدارة الفرق</p>
              <div class="flex justify-center space-x-3">
                <div class="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#1E2E40] hover:text-white transition-colors cursor-pointer">
                  <span class="text-sm">💼</span>
                </div>
                <div class="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors cursor-pointer">
                  <span class="text-sm">📧</span>
                </div>
              </div>
            </div>
            
            <!-- Row 3 -->
            <div class="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <img src="https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg?auto=compress&cs=tinysrgb&w=150" 
                   alt="جهاد علي" 
                   class="w-24 h-24 rounded-full mx-auto mb-4 object-cover">
              <h3 class="text-xl font-bold text-gray-900 mb-2">جهاد علي</h3>
              <p class="text-[#1E2E40] font-medium mb-3">Project Manager</p>
              <p class="text-gray-600 text-sm mb-4">مدير مشاريع ومتخصص في التخطيط الاستراتيجي</p>
              <div class="flex justify-center space-x-3">
                <div class="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#1E2E40] hover:text-white transition-colors cursor-pointer">
                  <span class="text-sm">💼</span>
                </div>
                <div class="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors cursor-pointer">
                  <span class="text-sm">📧</span>
                </div>
              </div>
            </div>
            
            <div class="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <img src="https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=150" 
                   alt="ادهم محمد" 
                   class="w-24 h-24 rounded-full mx-auto mb-4 object-cover">
              <h3 class="text-xl font-bold text-gray-900 mb-2">ادهم محمد</h3>
              <p class="text-[#1E2E40] font-medium mb-3">Backend Developer</p>
              <p class="text-gray-600 text-sm mb-4">مطور خادم ومتخصص في قواعد البيانات</p>
              <div class="flex justify-center space-x-3">
                <div class="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#1E2E40] hover:text-white transition-colors cursor-pointer">
                  <span class="text-sm">💼</span>
                </div>
                <div class="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors cursor-pointer">
                  <span class="text-sm">📧</span>
                </div>
              </div>
            </div>
            
            <div class="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <img src="https://images.pexels.com/photos/3184297/pexels-photo-3184297.jpeg?auto=compress&cs=tinysrgb&w=150" 
                   alt="ندا اشرف" 
                   class="w-24 h-24 rounded-full mx-auto mb-4 object-cover">
              <h3 class="text-xl font-bold text-gray-900 mb-2">ندا اشرف</h3>
              <p class="text-[#1E2E40] font-medium mb-3">UI-UX Designer</p>
              <p class="text-gray-600 text-sm mb-4">مصممة واجهات وتجربة مستخدم</p>
              <div class="flex justify-center space-x-3">
                <div class="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#1E2E40] hover:text-white transition-colors cursor-pointer">
                  <span class="text-sm">💼</span>
                </div>
                <div class="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors cursor-pointer">
                  <span class="text-sm">📧</span>
                </div>
              </div>
            </div>
            
            <!-- Row 4 -->
            <div class="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <img src="https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=150" 
                   alt="ندا صالح" 
                   class="w-24 h-24 rounded-full mx-auto mb-4 object-cover">
              <h3 class="text-xl font-bold text-gray-900 mb-2">ندا صالح</h3>
              <p class="text-[#1E2E40] font-medium mb-3">UI-UX Designer</p>
              <p class="text-gray-600 text-sm mb-4">مصممة واجهات ومتخصصة في تجربة المستخدم</p>
              <div class="flex justify-center space-x-3">
                <div class="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#1E2E40] hover:text-white transition-colors cursor-pointer">
                  <span class="text-sm">💼</span>
                </div>
                <div class="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors cursor-pointer">
                  <span class="text-sm">📧</span>
                </div>
              </div>
            </div>
            
            <div class="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <img src="https://images.pexels.com/photos/3184299/pexels-photo-3184299.jpeg?auto=compress&cs=tinysrgb&w=150" 
                   alt="عاصم احمد" 
                   class="w-24 h-24 rounded-full mx-auto mb-4 object-cover">
              <h3 class="text-xl font-bold text-gray-900 mb-2">عاصم احمد</h3>
              <p class="text-[#1E2E40] font-medium mb-3">Front-End Developer</p>
              <p class="text-gray-600 text-sm mb-4">مطور واجهات أمامية ومتخصص في React</p>
              <div class="flex justify-center space-x-3">
                <div class="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#1E2E40] hover:text-white transition-colors cursor-pointer">
                  <span class="text-sm">💼</span>
                </div>
                <div class="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors cursor-pointer">
                  <span class="text-sm">📧</span>
                </div>
              </div>
            </div>
            
            <div class="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <img src="https://images.pexels.com/photos/3184300/pexels-photo-3184300.jpeg?auto=compress&cs=tinysrgb&w=150" 
                   alt="عمر الساحب" 
                   class="w-24 h-24 rounded-full mx-auto mb-4 object-cover">
              <h3 class="text-xl font-bold text-gray-900 mb-2">عمر الساحب</h3>
              <p class="text-[#1E2E40] font-medium mb-3">Front-End Developer</p>
              <p class="text-gray-600 text-sm mb-4">مطور واجهات أمامية ومتخصص في Angular</p>
              <div class="flex justify-center space-x-3">
                <div class="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#1E2E40] hover:text-white transition-colors cursor-pointer">
                  <span class="text-sm">💼</span>
                </div>
                <div class="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors cursor-pointer">
                  <span class="text-sm">📧</span>
                </div>
              </div>
            </div>
            
            <!-- Row 5 -->
            <div class="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <img src="https://images.pexels.com/photos/3184301/pexels-photo-3184301.jpeg?auto=compress&cs=tinysrgb&w=150" 
                   alt="محمود عيدروس" 
                   class="w-24 h-24 rounded-full mx-auto mb-4 object-cover">
              <h3 class="text-xl font-bold text-gray-900 mb-2">محمود عيدروس</h3>
              <p class="text-[#1E2E40] font-medium mb-3">Mobile Engineer</p>
              <p class="text-gray-600 text-sm mb-4">مهندس تطبيقات الجوال ومتخصص في Flutter</p>
              <div class="flex justify-center space-x-3">
                <div class="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#1E2E40] hover:text-white transition-colors cursor-pointer">
                  <span class="text-sm">💼</span>
                </div>
                <div class="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors cursor-pointer">
                  <span class="text-sm">📧</span>
                </div>
              </div>
            </div>
            
            <div class="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <img src="https://images.pexels.com/photos/3184302/pexels-photo-3184302.jpeg?auto=compress&cs=tinysrgb&w=150" 
                   alt="مصطفي الغندور" 
                   class="w-24 h-24 rounded-full mx-auto mb-4 object-cover">
              <h3 class="text-xl font-bold text-gray-900 mb-2">مصطفي الغندور</h3>
              <p class="text-[#1E2E40] font-medium mb-3">QC Engineer</p>
              <p class="text-gray-600 text-sm mb-4">مهندس ضمان الجودة ومتخصص في الاختبارات</p>
              <div class="flex justify-center space-x-3">
                <div class="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#1E2E40] hover:text-white transition-colors cursor-pointer">
                  <span class="text-sm">💼</span>
                </div>
                <div class="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors cursor-pointer">
                  <span class="text-sm">📧</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Mission & Vision -->
      <section class="py-20 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div class="bg-gradient-to-br from-[#1E2E40] to-blue-600 p-8 rounded-2xl text-white">
              <div class="text-4xl mb-4">🎯</div>
              <h3 class="text-2xl font-bold mb-4">رؤيتنا</h3>
              <p class="text-lg leading-relaxed">
                أن نكون الشريك التقني الأول للشركات في المنطقة، ونساعدهم على تحقيق التحول الرقمي بنجاح من خلال حلول تقنية مبتكرة ومتطورة.
              </p>
            </div>
            <div class="bg-gradient-to-br from-green-600 to-teal-600 p-8 rounded-2xl text-white">
              <div class="text-4xl mb-4">🚀</div>
              <h3 class="text-2xl font-bold mb-4">مهمتنا</h3>
              <p class="text-lg leading-relaxed">
                تقديم حلول تقنية عالية الجودة تساعد عملاءنا على تحسين أعمالهم وزيادة كفاءتهم، مع الالتزام بأعلى معايير الخدمة والدعم المستمر.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Values Section -->
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              قيمنا الأساسية
            </h2>
            <p class="text-xl text-gray-600">
              المبادئ التي نؤمن بها ونعمل وفقاً لها
            </p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <div class="text-4xl mb-4">🎯</div>
              <h3 class="text-xl font-bold text-gray-900 mb-3">التميز</h3>
              <p class="text-gray-600">نسعى للتميز في كل ما نقوم به</p>
            </div>
            <div class="text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <div class="text-4xl mb-4">🤝</div>
              <h3 class="text-xl font-bold text-gray-900 mb-3">الشراكة</h3>
              <p class="text-gray-600">نبني علاقات طويلة الأمد مع عملائنا</p>
            </div>
            <div class="text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <div class="text-4xl mb-4">💡</div>
              <h3 class="text-xl font-bold text-gray-900 mb-3">الابتكار</h3>
              <p class="text-gray-600">نواكب أحدث التقنيات والاتجاهات</p>
            </div>
            <div class="text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <div class="text-4xl mb-4">⚡</div>
              <h3 class="text-xl font-bold text-gray-900 mb-3">السرعة</h3>
              <p class="text-gray-600">نلتزم بالمواعيد ونسلم في الوقت المحدد</p>
            </div>
            <div class="text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <div class="text-4xl mb-4">🔒</div>
              <h3 class="text-xl font-bold text-gray-900 mb-3">الأمان</h3>
              <p class="text-gray-600">نضمن أعلى مستويات الأمان والحماية</p>
            </div>
            <div class="text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <div class="text-4xl mb-4">📈</div>
              <h3 class="text-xl font-bold text-gray-900 mb-3">النمو</h3>
              <p class="text-gray-600">نساعد عملاءنا على تحقيق النمو المستدام</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Technologies Section -->
      <section class="py-20 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              التقنيات التي نستخدمها
            </h2>
            <p class="text-xl text-gray-600">
              نعمل بأحدث التقنيات والأدوات المتطورة
            </p>
          </div>
          <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            <div class="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div class="text-2xl mb-2">🅰️</div>
              <div class="text-sm font-medium text-gray-700">Angular</div>
            </div>
            <div class="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div class="text-2xl mb-2">⚛️</div>
              <div class="text-sm font-medium text-gray-700">React</div>
            </div>
            <div class="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div class="text-2xl mb-2">💚</div>
              <div class="text-sm font-medium text-gray-700">Vue.js</div>
            </div>
            <div class="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div class="text-2xl mb-2">🟢</div>
              <div class="text-sm font-medium text-gray-700">Node.js</div>
            </div>
            <div class="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div class="text-2xl mb-2">🐍</div>
              <div class="text-sm font-medium text-gray-700">Python</div>
            </div>
            <div class="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div class="text-2xl mb-2">💙</div>
              <div class="text-sm font-medium text-gray-700">Flutter</div>
            </div>
            <div class="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div class="text-2xl mb-2">🔷</div>
              <div class="text-sm font-medium text-gray-700">TypeScript</div>
            </div>
            <div class="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div class="text-2xl mb-2">🟨</div>
              <div class="text-sm font-medium text-gray-700">JavaScript</div>
            </div>
            <div class="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div class="text-2xl mb-2">🐘</div>
              <div class="text-sm font-medium text-gray-700">PHP</div>
            </div>
            <div class="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div class="text-2xl mb-2">🍃</div>
              <div class="text-sm font-medium text-gray-700">MongoDB</div>
            </div>
            <div class="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div class="text-2xl mb-2">🐬</div>
              <div class="text-sm font-medium text-gray-700">MySQL</div>
            </div>
            <div class="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div class="text-2xl mb-2">🐘</div>
              <div class="text-sm font-medium text-gray-700">PostgreSQL</div>
            </div>
            <div class="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div class="text-2xl mb-2">☁️</div>
              <div class="text-sm font-medium text-gray-700">AWS</div>
            </div>
            <div class="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div class="text-2xl mb-2">🔥</div>
              <div class="text-sm font-medium text-gray-700">Firebase</div>
            </div>
            <div class="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div class="text-2xl mb-2">🐳</div>
              <div class="text-sm font-medium text-gray-700">Docker</div>
            </div>
            <div class="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div class="text-2xl mb-2">🔧</div>
              <div class="text-sm font-medium text-gray-700">Redis</div>
            </div>
            <div class="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div class="text-2xl mb-2">🎨</div>
              <div class="text-sm font-medium text-gray-700">Tailwind CSS</div>
            </div>
            <div class="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div class="text-2xl mb-2">📱</div>
              <div class="text-sm font-medium text-gray-700">React Native</div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            جاهز للعمل معنا؟
          </h2>
          <p class="text-xl text-gray-600 mb-8">
            تواصل معنا اليوم ولنبدأ في تحويل أفكارك إلى واقع رقمي
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a routerLink="/contact" 
               class="text-white hover:opacity-90 px-8 py-3 rounded-lg font-medium transition-all text-lg shadow-lg" style="background: linear-gradient(135deg, #1A3477, #2563eb);">
              تواصل معنا الآن
            </a>
            <a routerLink="/services"
               class="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-medium transition-all text-lg">
              اعرض خدماتنا
            </a>
          </div>
        </div>
      </section>
    </div>
  `
})
export class AboutComponent {
  values = [
    {
      title: 'فريق متخصص',
      description: 'مطورون ومصممون ذوو خبرة عالية في أحدث التقنيات'
    },
    {
      title: 'جودة عالية',
      description: 'نلتزم بأعلى معايير الجودة في جميع مشاريعنا'
    },
    {
      title: 'دعم مستمر',
      description: 'نقدم الدعم الفني والصيانة المستمرة لجميع مشاريعنا'
    }
  ];

  constructor(public translationService: TranslationService) {}
}