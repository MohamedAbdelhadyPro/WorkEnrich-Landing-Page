import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="pt-20 pb-12">
      <!-- Hero Section -->
      <section class="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16">
        <div class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            الأسئلة الشائعة
          </h1>
          <p class="text-xl text-gray-600">
            إجابات على الأسئلة الأكثر شيوعاً حول خدماتنا وحلولنا البرمجية
          </p>
        </div>
      </section>

      <!-- FAQ Categories -->
      <section class="py-20 bg-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <!-- Category Tabs -->
          <div class="flex flex-wrap justify-center gap-4 mb-12">
            <button *ngFor="let category of categories; let i = index"
                    (click)="activeCategory = i"
                    class="px-6 py-3 rounded-lg font-medium transition-colors"
                    [class]="activeCategory === i ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'">
              {{ category.name }}
            </button>
          </div>

          <!-- FAQ Items -->
          <div class="space-y-4">
            <div *ngFor="let faq of categories[activeCategory].faqs; let i = index"
                 class="bg-white border border-gray-200 rounded-lg shadow-sm">
              <button (click)="toggleFaq(i)"
                      class="w-full px-6 py-4 text-right flex items-center justify-between hover:bg-gray-50 transition-colors">
                <span class="font-medium text-gray-900">{{ faq.question }}</span>
                <svg class="w-5 h-5 text-gray-500 transition-transform"
                     [class.rotate-180]="faq.isOpen"
                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div class="px-6 pb-4" [class.hidden]="!faq.isOpen">
                <p class="text-gray-600 leading-relaxed">{{ faq.answer }}</p>
                <div *ngIf="faq.additionalInfo" class="mt-4 p-4 bg-blue-50 rounded-lg">
                  <p class="text-blue-800 text-sm">{{ faq.additionalInfo }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact CTA -->
      <section class="py-20 bg-gray-50">
        <div class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">
            لم تجد إجابة لسؤالك؟
          </h2>
          <p class="text-xl text-gray-600 mb-8">
            فريقنا جاهز للإجابة على جميع استفساراتك وتقديم المساعدة
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a routerLink="/contact" 
               class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
              تواصل معنا
            </a>
            <a href="tel:+966501234567" 
               class="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-medium transition-colors">
              اتصل بنا مباشرة
            </a>
          </div>
        </div>
      </section>
    </div>
  `
})
export class FaqComponent {
  activeCategory = 0;

  categories = [
    {
      name: 'عام',
      faqs: [
        {
          question: 'ما هي TechCraft Solutions؟',
          answer: 'نحن شركة متخصصة في تطوير الحلول البرمجية المخصصة للشركات، بما في ذلك أنظمة HR، CRM، ERP، وأنظمة المبيعات والمخزون. نقدم أيضاً خدمات الحلول المدارة لإدارة الأنظمة نيابة عن عملائنا.',
          isOpen: false
        },
        {
          question: 'كم من الوقت يستغرق تطوير النظام؟',
          answer: 'يعتمد الوقت على تعقيد المشروع وحجمه. عادة ما تستغرق المشاريع البسيطة 2-3 أشهر، بينما المشاريع المعقدة قد تستغرق 6-12 شهر. نقدم جدولاً زمنياً مفصلاً بعد تحليل المتطلبات.',
          isOpen: false,
          additionalInfo: 'نلتزم بالمواعيد المحددة ونقدم تحديثات دورية عن تقدم المشروع.'
        },
        {
          question: 'هل تقدمون الدعم الفني بعد التسليم؟',
          answer: 'نعم، نقدم دعماً فنياً شاملاً يشمل الصيانة، التحديثات، إصلاح الأعطال، والتدريب. لدينا عدة خطط دعم تناسب احتياجات مختلفة.',
          isOpen: false
        },
        {
          question: 'هل يمكنكم تطوير حلول مخصصة حسب احتياجاتنا؟',
          answer: 'بالطبع! نحن متخصصون في تطوير الحلول المخصصة. نحلل احتياجاتك بدقة ونطور النظام وفقاً لمتطلباتك الخاصة وليس قوالب جاهزة.',
          isOpen: false
        }
      ]
    },
    {
      name: 'الحلول المدارة',
      faqs: [
        {
          question: 'ما هي مدة الدعم الفني؟',
          answer: 'نقدم دعماً فنياً على مدار الساعة طوال أيام الأسبوع (24/7) للخطط المتقدمة والمؤسسية. الخطة الأساسية تشمل الدعم خلال ساعات العمل الرسمية.',
          isOpen: false,
          additionalInfo: 'جميع خططنا تشمل ضمان الاستجابة السريعة للمشاكل الحرجة.'
        },
        {
          question: 'هل يمكن تخصيص الأنظمة؟',
          answer: 'نعم، جميع أنظمتنا قابلة للتخصيص والتطوير. يمكننا إضافة ميزات جديدة، تعديل الواجهات، وتكييف النظام ليناسب تطور احتياجات شركتك.',
          isOpen: false
        },
        {
          question: 'كيف تضمنون أمان البيانات؟',
          answer: 'نطبق أعلى معايير الأمان بما في ذلك التشفير المتقدم، النسخ الاحتياطية المنتظمة، مراقبة الأمان المستمرة، وضوابط الوصول الصارمة. نلتزم بمعايير GDPR وISO 27001.',
          isOpen: false
        },
        {
          question: 'ما هي تكلفة الحلول المدارة؟',
          answer: 'لدينا ثلاث خطط: الأساسية (3,500 ريال/شهر)، المتقدمة (6,500 ريال/شهر)، والمؤسسية (12,000 ريال/شهر). كل خطة تشمل خدمات مختلفة حسب حجم واحتياجات شركتك.',
          isOpen: false
        }
      ]
    },
    {
      name: 'أنظمة HR',
      faqs: [
        {
          question: 'كيف تعمل أنظمة HR التي تقدمها شركتكم؟',
          answer: 'أنظمة HR لدينا تشمل إدارة الموظفين، الحضور والانصراف، الرواتب، الإجازات، تقييم الأداء، والتدريب. النظام يوفر واجهات مختلفة للموظفين والمدراء والإدارة العليا مع تطبيق جوال سهل الاستخدام.',
          isOpen: false,
          additionalInfo: 'النظام يدعم التكامل مع أجهزة البصمة وأنظمة الحضور المختلفة.'
        },
        {
          question: 'هل يمكن ربط النظام بأجهزة البصمة؟',
          answer: 'نعم، أنظمة HR لدينا تدعم التكامل مع جميع أنواع أجهزة البصمة والحضور الشائعة. نوفر واجهات برمجية للربط مع الأجهزة الموجودة أو نساعد في اختيار أجهزة جديدة.',
          isOpen: false
        },
        {
          question: 'هل يمكن للموظفين الوصول للنظام من هواتفهم؟',
          answer: 'بالطبع! نوفر تطبيق جوال سهل الاستخدام يتيح للموظفين عرض بياناتهم، طلب الإجازات، تسجيل الحضور، ومتابعة الرواتب والمكافآت.',
          isOpen: false
        },
        {
          question: 'كيف يتم حساب الرواتب في النظام؟',
          answer: 'النظام يحسب الرواتب تلقائياً بناءً على ساعات العمل، البدلات، الخصومات، الإجازات، والمكافآت. يدعم جميع أنواع الرواتب والبدلات المعقدة ويولد كشوف الرواتب تلقائياً.',
          isOpen: false
        }
      ]
    },
    {
      name: 'التقنية والأمان',
      faqs: [
        {
          question: 'ما هي التقنيات التي تستخدمونها؟',
          answer: 'نستخدم أحدث التقنيات مثل Angular، React، Vue.js للواجهات الأمامية، وNode.js، Laravel، Django للخلفية. قواعد البيانات تشمل PostgreSQL، MySQL، وMongoDB. نستخدم أيضاً تقنيات السحابة مثل AWS وAzure.',
          isOpen: false
        },
        {
          question: 'كيف تحمون البيانات الحساسة؟',
          answer: 'نطبق تشفير AES-256 لجميع البيانات، نستخدم بروتوكولات HTTPS/SSL، ونطبق مصادقة ثنائية العوامل. جميع الخوادم محمية بجدران حماية متقدمة ونراقب الأنشطة المشبوهة على مدار الساعة.',
          isOpen: false
        },
        {
          question: 'هل الأنظمة متوافقة مع الأجهزة المختلفة؟',
          answer: 'نعم، جميع أنظمتنا مصممة لتعمل بسلاسة على أجهزة الكمبيوتر، الأجهزة اللوحية، والهواتف الذكية. نضمن التوافق مع جميع المتصفحات الحديثة وأنظمة التشغيل.',
          isOpen: false
        },
        {
          question: 'هل يمكن تكامل الأنظمة مع البرامج الموجودة؟',
          answer: 'بالطبع! نطور واجهات برمجية (APIs) للتكامل مع الأنظمة الموجودة لديكم مثل أنظمة المحاسبة، البريد الإلكتروني، وأنظمة إدارة المحتوى.',
          isOpen: false
        }
      ]
    }
  ];

  toggleFaq(index: number) {
    this.categories[this.activeCategory].faqs[index].isOpen = 
      !this.categories[this.activeCategory].faqs[index].isOpen;
  }
}