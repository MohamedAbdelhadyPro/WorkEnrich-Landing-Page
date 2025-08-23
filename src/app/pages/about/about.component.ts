import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="pt-24 pb-12">
      <!-- Hero Section -->
      <section class="bg-gradient-to-br from-purple-50 via-white to-blue-50 py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            من نحن؟
          </h1>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            WorkEnrich - شركة رائدة في مجال تطوير البرمجيات والحلول الرقمية
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
                WorkEnrich هي شركة رائدة في مجال تطوير البرمجيات والحلول الرقمية. 
                نجمع بين الخبرة التقنية العميقة والفهم الدقيق لاحتياجات السوق لنقدم حلولاً مبتكرة تساعد عملاءنا على تحقيق أهدافهم.
              </p>
              <p class="text-lg text-gray-600 mb-8 leading-relaxed">
                منذ تأسيسنا، نسعى لتقديم أفضل الخدمات التقنية وأكثرها ابتكاراً، مع التركيز على الجودة والأداء المتميز في كل مشروع نعمل عليه.
              </p>
              <div class="space-y-4">
                <div *ngFor="let value of values" class="flex items-start">
                  <div class="w-6 h-6 bg-[#1E2E40]/10 rounded-full flex items-center justify-center mt-1 mr-3">
                    <span class="text-[#1E2E40] text-sm">✓</span>
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

      <!-- Team Section -->
      <section class="py-20 bg-gray-50">
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
            <div *ngFor="let member of team" class="bg-white p-6 rounded-xl shadow-lg text-center">
              <img [src]="member.image" 
                   [alt]="member.name" 
                   class="w-24 h-24 rounded-full mx-auto mb-4 object-cover">
              <h3 class="text-xl font-bold text-gray-900 mb-2">{{ member.name }}</h3>
              <p class="text-[#1E2E40] font-medium mb-3">{{ member.position }}</p>
              <p class="text-gray-600 text-sm">{{ member.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Mission & Vision -->
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div class="bg-gradient-to-br from-[#1E2E40] to-blue-600 p-8 rounded-2xl text-white">
              <h3 class="text-2xl font-bold mb-4">رؤيتنا</h3>
              <p class="text-lg leading-relaxed">
                أن نكون الشركة الرائدة في المنطقة في تقديم الحلول التقنية المبتكرة التي تساعد الشركات على النمو والازدهار في العصر الرقمي.
              </p>
            </div>
            <div class="bg-gradient-to-br from-green-600 to-teal-600 p-8 rounded-2xl text-white">
              <h3 class="text-2xl font-bold mb-4">رسالتنا</h3>
              <p class="text-lg leading-relaxed">
                نسعى لتطوير حلول برمجية عالية الجودة تلبي احتياجات عملائنا وتتجاوز توقعاتهم، مع التركيز على الابتكار والتميز في الأداء.
              </p>
            </div>
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
      description: 'نلتزم بأعلى معايير الجودة في جميع مراحل التطوير'
    },
    {
      title: 'دعم مستمر',
      description: 'نقدم الدعم الفني والصيانة المستمرة لجميع مشاريعنا'
    },
    {
      title: 'ابتكار مستمر',
      description: 'نواكب أحدث التطورات التقنية ونطبقها في حلولنا'
    }
  ];

  team = [
    {
      name: 'أحمد محمد',
      position: 'مدير التطوير',
      description: 'خبرة 8 سنوات في تطوير التطبيقات والأنظمة',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'فاطمة أحمد',
      position: 'مصممة واجهات المستخدم',
      description: 'متخصصة في تصميم تجربة المستخدم والواجهات',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'محمد علي',
      position: 'مطور تطبيقات الجوال',
      description: 'خبير في تطوير تطبيقات iOS و Android',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
  ];
}