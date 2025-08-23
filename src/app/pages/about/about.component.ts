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
      <section class="bg-gradient-to-br from-purple-50 via-white to-blue-50 py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            من نحن
          </h1>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
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
              <div class="space-y-4">
                <div *ngFor="let value of values" class="flex items-start">
                  <div class="w-6 h-6 bg-[#1E2E40]/10 rounded-full flex items-center justify-center mt-1 mr-3">
                    <span class="text-[#1E2E40] text-sm">✓</span>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900">فريق متخصص</h4>
                    <p class="text-gray-600 text-sm">مطورون ومصممون ذوو خبرة عالية في أحدث التقنيات</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <div class="w-6 h-6 bg-[#1E2E40]/10 rounded-full flex items-center justify-center mt-1 mr-3">
                    <span class="text-[#1E2E40] text-sm">✓</span>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900">جودة عالية</h4>
                    <p class="text-gray-600 text-sm">نلتزم بأعلى معايير الجودة في جميع مشاريعنا</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <div class="w-6 h-6 bg-[#1E2E40]/10 rounded-full flex items-center justify-center mt-1 mr-3">
                    <span class="text-[#1E2E40] text-sm">✓</span>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900">دعم مستمر</h4>
                    <p class="text-gray-600 text-sm">نقدم الدعم الفني والصيانة المستمرة لجميع مشاريعنا</p>
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
              <div class="text-4xl font-bold mb-2 text-green-600">15+</div>
              <div class="text-gray-600 font-medium">مطور محترف</div>
              <div class="text-gray-500 text-sm mt-2">فريق متخصص وذو خبرة</div>
            </div>
            <div class="text-center bg-white p-8 rounded-xl shadow-lg">
              <div class="text-4xl font-bold mb-2 text-purple-600">5+</div>
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
            <div class="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300" 
                   alt="أحمد محمد السعيد" 
                   class="w-24 h-24 rounded-full mx-auto mb-4 object-cover">
              <h3 class="text-xl font-bold text-gray-900 mb-2">أحمد محمد السعيد</h3>
              <p class="text-[#1E2E40] font-medium mb-3">مدير التطوير التقني</p>
              <p class="text-gray-600 text-sm mb-4">خبرة 10 سنوات في تطوير التطبيقات والأنظمة المعقدة</p>
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
              <img src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=300" 
                   alt="فاطمة أحمد علي" 
                   class="w-24 h-24 rounded-full mx-auto mb-4 object-cover">
              <h3 class="text-xl font-bold text-gray-900 mb-2">فاطمة أحمد علي</h3>
              <p class="text-[#1E2E40] font-medium mb-3">مصممة واجهات المستخدم</p>
              <p class="text-gray-600 text-sm mb-4">متخصصة في تصميم تجربة المستخدم والواجهات التفاعلية</p>
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
              <img src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300" 
                   alt="محمد علي حسن" 
                   class="w-24 h-24 rounded-full mx-auto mb-4 object-cover">
              <h3 class="text-xl font-bold text-gray-900 mb-2">محمد علي حسن</h3>
              <p class="text-[#1E2E40] font-medium mb-3">مطور تطبيقات الجوال</p>
              <p class="text-gray-600 text-sm mb-4">خبير في تطوير تطبيقات iOS و Android</p>
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
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="py-20 bg-[#1E2E40]">
        <div class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl lg:text-4xl font-bold text-white mb-6">
            جاهز للعمل معنا؟
          </h2>
          <p class="text-xl text-blue-100 mb-8">
            تواصل معنا اليوم ولنبدأ في تحويل أفكارك إلى واقع رقمي
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a routerLink="/contact" 
               class="bg-white text-[#1E2E40] hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors text-lg">
              تواصل معنا الآن
            </a>
            <a routerLink="/services" 
               class="border-2 border-white text-white hover:bg-white hover:text-[#1E2E40] px-8 py-3 rounded-lg font-medium transition-colors text-lg">
              اعرض خدماتنا
            </a>
          </div>
        </div>
      </section>
    </div>
  `
})
export class AboutComponent {
  constructor(public translationService: TranslationService) {}
}