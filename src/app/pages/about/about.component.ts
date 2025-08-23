import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

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
            من نحن؟
          </h1>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            WorkEnrich - شركة رائدة في مجال تطوير الحلول البرمجية المتخصصة للشركات
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
                WorkEnrich هي شركة متخصصة في تطوير الحلول البرمجية للشركات، تأسست برؤية واضحة 
                لتقديم أنظمة إدارة الموارد البشرية وأنظمة المحاسبة المالية المتطورة.
              </p>
              <p class="text-lg text-gray-600 mb-8 leading-relaxed">
                نحن نؤمن بأن التكنولوجيا يجب أن تكون في خدمة الأعمال، لذلك نركز على تطوير حلول 
                عملية وسهلة الاستخدام تحسن من كفاءة العمليات وتزيد الإنتاجية.
              </p>
              <div class="space-y-4">
                <div *ngFor="let value of companyValues" class="flex items-start">
                  <div class="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mt-1 ml-3">
                    <span class="text-purple-600 text-sm">✓</span>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900">{{ value.title }}</h4>
                    <p class="text-gray-600 text-sm">{{ value.description }}</p>
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

      <!-- Statistics -->
      <section class="py-20 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              إنجازاتنا بالأرقام
            </h2>
            <p class="text-xl text-gray-600">
              أرقام تعكس ثقة عملائنا ونجاح حلولنا
            </p>
          </div>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div *ngFor="let stat of statistics" class="text-center">
              <div class="text-4xl lg:text-5xl font-bold mb-2"
                   [ngClass]="stat.color">
                {{ stat.value }}
              </div>
              <div class="text-gray-600">{{ stat.label }}</div>
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
              خبراء متخصصون في مختلف المجالات التقنية
            </p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div *ngFor="let member of teamMembers" class="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300">
              <img [src]="member.image" 
                   [alt]="member.name" 
                   class="w-24 h-24 rounded-full mx-auto mb-4 object-cover">
              <h3 class="text-xl font-bold text-gray-900 mb-2">{{ member.name }}</h3>
              <p class="text-purple-600 font-medium mb-3">{{ member.position }}</p>
              <p class="text-gray-600 text-sm">{{ member.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Mission & Vision -->
      <section class="py-20 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div class="bg-gradient-to-br from-purple-600 to-blue-600 p-8 rounded-2xl text-white">
              <h3 class="text-2xl font-bold mb-4">رؤيتنا</h3>
              <p class="text-lg leading-relaxed">
                أن نكون الشركة الرائدة في المنطقة في تقديم الحلول البرمجية المتخصصة للموارد البشرية 
                والمحاسبة، ونساهم في تحسين كفاءة الأعمال وزيادة الإنتاجية.
              </p>
            </div>
            <div class="bg-gradient-to-br from-green-600 to-teal-600 p-8 rounded-2xl text-white">
              <h3 class="text-2xl font-bold mb-4">رسالتنا</h3>
              <p class="text-lg leading-relaxed">
                نسعى لتطوير حلول برمجية عالية الجودة ومتخصصة تلبي احتياجات الشركات، مع التركيز على 
                سهولة الاستخدام والدعم المتميز لعملائنا.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl lg:text-4xl font-bold text-white mb-6">
            مهتم بالعمل معنا؟
          </h2>
          <p class="text-xl text-purple-100 mb-8">
            تواصل معنا اليوم واكتشف كيف يمكن لحلولنا المتخصصة تحسين أداء شركتك
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a routerLink="/contact" 
               class="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-medium transition-colors">
              تواصل معنا
            </a>
            <a routerLink="/services" 
               class="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-lg font-medium transition-colors">
              تصفح خدماتنا
            </a>
          </div>
        </div>
      </section>
    </div>
  `
})
export class AboutComponent {
  companyValues = [
    {
      title: 'التخصص والخبرة',
      description: 'فريق متخصص في أنظمة HR والمحاسبة مع خبرة عملية واسعة'
    },
    {
      title: 'الجودة والموثوقية',
      description: 'نلتزم بأعلى معايير الجودة في التطوير والدعم الفني'
    },
    {
      title: 'الابتكار المستمر',
      description: 'نواكب أحدث التطورات التقنية ونطبقها في حلولنا'
    },
    {
      title: 'الدعم المتميز',
      description: 'نقدم دعماً فنياً متواصلاً وتدريباً شاملاً لعملائنا'
    }
  ];

  statistics = [
    {
      value: '200+',
      label: 'شركة تثق بنا',
      color: 'text-blue-600'
    },
    {
      value: '50K+',
      label: 'مستخدم نشط',
      color: 'text-green-600'
    },
    {
      value: '8+',
      label: 'سنوات خبرة',
      color: 'text-purple-600'
    },
    {
      value: '99.9%',
      label: 'وقت التشغيل',
      color: 'text-orange-600'
    }
  ];

  teamMembers = [
    {
      name: 'أحمد محمد',
      position: 'مدير التطوير',
      description: 'خبرة 10 سنوات في تطوير أنظمة الموارد البشرية',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'فاطمة أحمد',
      position: 'مطورة أنظمة محاسبية',
      description: 'متخصصة في تطوير الأنظمة المالية والمحاسبية',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'محمد علي',
      position: 'مدير الدعم الفني',
      description: 'خبير في دعم العملاء وحل المشاكل التقنية',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
  ];
}