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
            {{ translationService.get('about.title') }}
          </h1>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            {{ translationService.get('about.subtitle') }}
          </p>
        </div>
      </section>

      <!-- About Content -->
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                {{ translationService.get('about.ourStory') }}
              </h2>
              <p class="text-lg text-gray-600 mb-6 leading-relaxed">
                {{ translationService.get('about.description1') }}
              </p>
              <p class="text-lg text-gray-600 mb-6 leading-relaxed">
                {{ translationService.get('about.description2') }}
              </p>
              <p class="text-lg text-gray-600 mb-8 leading-relaxed">
                {{ translationService.get('about.description3') }}
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
              {{ translationService.get('about.achievementsByNumbers') }}
            </h2>
            <p class="text-xl text-gray-600">
              {{ translationService.get('about.numbersSpeak') }}
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
              {{ translationService.get('about.team') }}
            </h2>
            <p class="text-xl text-gray-600">
              {{ translationService.get('about.teamDesc') }}
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
                {{ translationService.get('about.visionText') }}
              </p>
            </div>
            <div class="bg-gradient-to-br from-green-600 to-teal-600 p-8 rounded-2xl text-white">
              <div class="text-4xl mb-4">🚀</div>
              <h3 class="text-2xl font-bold mb-4">{{ translationService.get('about.mission') }}</h3>
              <p class="text-lg leading-relaxed">
                {{ translationService.get('about.missionText') }}
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
              {{ translationService.get('about.coreValues') }}
            </h2>
            <p class="text-xl text-gray-600">
              {{ translationService.get('about.coreValuesDesc') }}
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
              {{ translationService.get('about.technologies') }}
            </h2>
            <p class="text-xl text-gray-600">
              {{ translationService.get('about.technologiesDesc') }}
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
            {{ translationService.get('about.readyToWork') }}
          </h2>
          <p class="text-xl text-blue-100 mb-8">
            {{ translationService.get('about.readyToWorkDesc') }}
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a routerLink="/contact" 
               class="bg-white text-[#1E2E40] hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors text-lg">
              {{ translationService.get('about.contactNow') }}
            </a>
            <a routerLink="/services" 
               class="border-2 border-white text-white hover:bg-white hover:text-[#1E2E40] px-8 py-3 rounded-lg font-medium transition-colors text-lg">
              {{ translationService.get('about.viewServices') }}
            </a>
          </div>
        </div>
      </section>
    </div>
  `
})
export class AboutComponent {
  constructor(public translationService: TranslationService) {}

  values = [
    {
      title: this.translationService.get('about.values.specializedTeam'),
      description: this.translationService.get('about.values.specializedTeamDesc')
    },
    {
      title: this.translationService.get('about.values.highQuality'),
      description: this.translationService.get('about.values.highQualityDesc')
    },
    {
      title: this.translationService.get('about.values.continuousSupport'),
      description: this.translationService.get('about.values.continuousSupportDesc')
    },
    {
      title: this.translationService.get('about.values.continuousInnovation'),
      description: this.translationService.get('about.values.continuousInnovationDesc')
    },
    {
      title: this.translationService.get('about.values.longTermPartnership'),
      description: this.translationService.get('about.values.longTermPartnershipDesc')
    },
    {
      title: this.translationService.get('about.values.competitivePrices'),
      description: this.translationService.get('about.values.competitivePricesDesc')
    }
  ];

  stats = [
    {
      value: '200+',
      label: this.translationService.get('about.stats.completedProjects'),
      description: this.translationService.get('about.stats.completedProjectsDesc'),
      color: 'text-[#1E2E40]'
    },
    {
      value: '150+',
      label: this.translationService.get('about.stats.happyClients'),
      description: this.translationService.get('about.stats.happyClientsDesc'),
      color: 'text-blue-600'
    },
    {
      value: '15+',
      label: this.translationService.get('about.stats.developers'),
      description: this.translationService.get('about.stats.developersDesc'),
      color: 'text-green-600'
    },
    {
      value: '5+',
      label: this.translationService.get('about.stats.yearsExperience'),
      description: this.translationService.get('about.stats.yearsExperienceDesc'),
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
      title: this.translationService.get('about.coreValuesItems.excellence'),
      description: this.translationService.get('about.coreValuesItems.excellenceDesc')
    },
    {
      icon: '🤝',
      title: this.translationService.get('about.coreValuesItems.partnership'),
      description: this.translationService.get('about.coreValuesItems.partnershipDesc')
    },
    {
      icon: '💡',
      title: this.translationService.get('about.coreValuesItems.innovation'),
      description: this.translationService.get('about.coreValuesItems.innovationDesc')
    },
    {
      icon: '⚡',
      title: this.translationService.get('about.coreValuesItems.speed'),
      description: this.translationService.get('about.coreValuesItems.speedDesc')
    },
    {
      icon: '🔒',
      title: this.translationService.get('about.coreValuesItems.security'),
      description: this.translationService.get('about.coreValuesItems.securityDesc')
    },
    {
      icon: '📈',
      title: this.translationService.get('about.coreValuesItems.growth'),
      description: this.translationService.get('about.coreValuesItems.growthDesc')
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