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
            WorkEnrich - شركة رائدة في مجال تطوير البرمجيات والحلول الرقمية المبتكرة
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
                تأسست الشركة برؤية واضحة لتقديم حلول تقنية مبتكرة تساعد الشركات على النمو والازدهار في العصر الرقمي.
              </p>
              <p class="text-lg text-gray-600 mb-6 leading-relaxed">
                نجمع بين الخبرة التقنية العميقة والفهم الدقيق لاحتياجات السوق لنقدم حلولاً مبتكرة تتجاوز توقعات عملائنا. 
                فريقنا المتخصص يضم نخبة من المطورين والمصممين ذوي الخبرة العالية.
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

      <!-- Stats Section -->
      <section class="py-20 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              إنجازاتنا بالأرقام
            </h2>
            <p class="text-xl text-gray-600">
              أرقام تتحدث عن خبرتنا ونجاحنا
            </p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div *ngFor="let stat of stats" class="text-center bg-white p-8 rounded-xl shadow-lg">
              <div class="text-4xl font-bold mb-2" [ngClass]="stat.color">{{ stat.value }}</div>
              <div class="text-gray-600 font-medium">{{ stat.label }}</div>
              <div class="text-gray-500 text-sm mt-2">{{ stat.description }}</div>
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
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div *ngFor="let member of team" class="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <img [src]="member.image" 
                   [alt]="member.name" 
                   class="w-24 h-24 rounded-full mx-auto mb-4 object-cover">
              <h3 class="text-xl font-bold text-gray-900 mb-2">{{ member.name }}</h3>
              <p class="text-[#1E2E40] font-medium mb-3">{{ member.position }}</p>
              <p class="text-gray-600 text-sm mb-4">{{ member.description }}</p>
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
                أن نكون الشركة الرائدة في المنطقة في تقديم الحلول التقنية المبتكرة التي تساعد الشركات على النمو والازدهار في العصر الرقمي، 
                وأن نكون الخيار الأول للشركات التي تسعى للتحول الرقمي.
              </p>
            </div>
            <div class="bg-gradient-to-br from-green-600 to-teal-600 p-8 rounded-2xl text-white">
              <div class="text-4xl mb-4">🚀</div>
              <h3 class="text-2xl font-bold mb-4">رسالتنا</h3>
              <p class="text-lg leading-relaxed">
                نسعى لتطوير حلول برمجية عالية الجودة تلبي احتياجات عملائنا وتتجاوز توقعاتهم، مع التركيز على الابتكار والتميز في الأداء 
                وتقديم خدمة عملاء استثنائية.
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
            <div *ngFor="let coreValue of coreValues" class="text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <div class="text-4xl mb-4">{{ coreValue.icon }}</div>
              <h3 class="text-xl font-bold text-gray-900 mb-3">{{ coreValue.title }}</h3>
              <p class="text-gray-600">{{ coreValue.description }}</p>
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
              نواكب أحدث التطورات التقنية لنقدم أفضل الحلول
            </p>
          </div>
          <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            <div *ngFor="let tech of technologies" class="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div class="text-2xl mb-2">{{ tech.icon }}</div>
              <div class="text-sm font-medium text-gray-700">{{ tech.name }}</div>
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
            تواصل معنا اليوم ودعنا نساعدك في تحويل أفكارك إلى واقع رقمي
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a routerLink="/contact" 
               class="bg-white text-[#1E2E40] hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors text-lg">
              تواصل معنا الآن
            </a>
            <a routerLink="/services" 
               class="border-2 border-white text-white hover:bg-white hover:text-[#1E2E40] px-8 py-3 rounded-lg font-medium transition-colors text-lg">
              شاهد خدماتنا
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
      description: 'مطورون ومصممون ذوو خبرة عالية في أحدث التقنيات والأدوات'
    },
    {
      title: 'جودة عالية',
      description: 'نلتزم بأعلى معايير الجودة في جميع مراحل التطوير والتسليم'
    },
    {
      title: 'دعم مستمر',
      description: 'نقدم الدعم الفني والصيانة المستمرة لجميع مشاريعنا'
    },
    {
      title: 'ابتكار مستمر',
      description: 'نواكب أحدث التطورات التقنية ونطبقها في حلولنا'
    },
    {
      title: 'شراكة طويلة الأمد',
      description: 'نبني علاقات قوية مع عملائنا تستمر لسنوات'
    },
    {
      title: 'أسعار تنافسية',
      description: 'نقدم أفضل قيمة مقابل المال مع جودة استثنائية'
    }
  ];

  stats = [
    {
      value: '200+',
      label: 'مشروع مكتمل',
      description: 'مشاريع ناجحة ومتنوعة',
      color: 'text-[#1E2E40]'
    },
    {
      value: '150+',
      label: 'عميل راضي',
      description: 'عملاء يثقون بخدماتنا',
      color: 'text-blue-600'
    },
    {
      value: '15+',
      label: 'مطور متخصص',
      description: 'فريق من الخبراء',
      color: 'text-green-600'
    },
    {
      value: '5+',
      label: 'سنوات خبرة',
      description: 'خبرة متراكمة في السوق',
      color: 'text-purple-600'
    }
  ];

  team = [
    {
      name: 'أحمد محمد السعيد',
      position: 'مدير التطوير التقني',
      description: 'خبرة 10 سنوات في تطوير التطبيقات والأنظمة المعقدة، متخصص في Angular و Node.js',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'فاطمة أحمد علي',
      position: 'مصممة واجهات المستخدم',
      description: 'متخصصة في تصميم تجربة المستخدم والواجهات التفاعلية، خبرة 7 سنوات في UI/UX',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'محمد علي حسن',
      position: 'مطور تطبيقات الجوال',
      description: 'خبير في تطوير تطبيقات iOS و Android، متخصص في Flutter و React Native',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'سارة محمد أحمد',
      position: 'مطورة Full Stack',
      description: 'متخصصة في تطوير التطبيقات الشاملة، خبرة في Python و Django و React',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'خالد عبدالله',
      position: 'مهندس DevOps',
      description: 'متخصص في البنية التحتية السحابية والنشر المستمر، خبرة في AWS و Docker',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'نورا حسام',
      position: 'مديرة المشاريع',
      description: 'خبيرة في إدارة المشاريع التقنية وضمان الجودة، حاصلة على شهادة PMP',
      image: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
  ];

  coreValues = [
    {
      icon: '🎯',
      title: 'التميز',
      description: 'نسعى للتميز في كل ما نقوم به ونتجاوز توقعات عملائنا'
    },
    {
      icon: '🤝',
      title: 'الشراكة',
      description: 'نؤمن بأهمية الشراكة الحقيقية مع عملائنا لتحقيق النجاح المشترك'
    },
    {
      icon: '💡',
      title: 'الابتكار',
      description: 'نبحث دائماً عن طرق جديدة ومبتكرة لحل التحديات التقنية'
    },
    {
      icon: '⚡',
      title: 'السرعة',
      description: 'نلتزم بالمواعيد المحددة ونسلم المشاريع في الوقت المناسب'
    },
    {
      icon: '🔒',
      title: 'الأمان',
      description: 'نضع الأمان والخصوصية في المقدمة في جميع حلولنا'
    },
    {
      icon: '📈',
      title: 'النمو',
      description: 'نساعد عملاءنا على النمو والتطور من خلال حلولنا التقنية'
    }
  ];

  technologies = [
    { name: 'Angular', icon: '🅰️' },
    { name: 'React', icon: '⚛️' },
    { name: 'Vue.js', icon: '💚' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Python', icon: '🐍' },
    { name: 'Flutter', icon: '💙' },
    { name: 'React Native', icon: '📱' },
    { name: 'Laravel', icon: '🔴' },
    { name: 'Django', icon: '🎸' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'AWS', icon: '☁️' }
  ];
}