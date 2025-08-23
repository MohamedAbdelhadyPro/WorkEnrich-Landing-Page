import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  template: `
    <div class="pt-20 pb-12">
      <!-- Hero Section -->
      <section class="bg-gradient-to-br from-purple-50 via-white to-blue-50 py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            المدونة التقنية
          </h1>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            مقالات ونصائح حول البرمجة، التكنولوجيا الحديثة، وكيفية تحسين الأعمال باستخدام الحلول البرمجية
          </p>
        </div>
      </section>

      <!-- Featured Article -->
      <section class="py-12 bg-white" *ngIf="featuredPost">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl overflow-hidden">
            <div class="grid grid-cols-1 lg:grid-cols-2">
              <div class="p-8 lg:p-12 text-white">
                <div class="mb-4">
                  <span class="px-3 py-1 bg-white/20 text-white text-sm font-medium rounded-full">
                    مقال مميز
                  </span>
                </div>
                <h2 class="text-3xl lg:text-4xl font-bold mb-4">{{ featuredPost.title }}</h2>
                <p class="text-blue-100 mb-6 leading-relaxed">{{ featuredPost.excerpt }}</p>
                <div class="flex items-center mb-6">
                  <img [src]="featuredPost.author.avatar" 
                       [alt]="featuredPost.author.name"
                       class="w-10 h-10 rounded-full ml-3">
                  <div>
                    <div class="font-medium">{{ featuredPost.author.name }}</div>
                    <div class="text-blue-200 text-sm">{{ featuredPost.date }}</div>
                  </div>
                </div>
                <a [routerLink]="['/blog', featuredPost.id]" 
                   class="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-colors">
                  اقرأ المقال كاملاً
                </a>
              </div>
              <div class="hidden lg:block">
                <img [src]="featuredPost.image" 
                     [alt]="featuredPost.title"
                     class="w-full h-full object-cover">
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Blog Categories -->
      <section class="py-8 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex flex-wrap justify-center gap-4">
            <button *ngFor="let category of categories; let i = index"
                    (click)="activeCategory = i"
                    class="px-6 py-3 rounded-lg font-medium transition-colors"
                    [class]="activeCategory === i ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'">
              {{ category.name }}
            </button>
          </div>
        </div>
      </section>

      <!-- Blog Posts Grid -->
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <article *ngFor="let post of getFilteredPosts()" 
                     class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div class="relative overflow-hidden">
                <img [src]="post.image" 
                     [alt]="post.title"
                     class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300">
                <div class="absolute top-4 right-4">
                  <span class="px-3 py-1 text-xs font-medium rounded-full"
                        [ngClass]="post.categoryColor">
                    {{ post.category }}
                  </span>
                </div>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {{ post.title }}
                </h3>
                <p class="text-gray-600 mb-4 leading-relaxed">{{ post.excerpt }}</p>
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <img [src]="post.author.avatar" 
                         [alt]="post.author.name"
                         class="w-8 h-8 rounded-full ml-2">
                    <div>
                      <div class="text-sm font-medium text-gray-900">{{ post.author.name }}</div>
                      <div class="text-xs text-gray-500">{{ post.date }}</div>
                    </div>
                  </div>
                  <div class="flex items-center text-gray-500 text-sm">
                    <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    {{ post.readTime }} دقائق
                  </div>
                </div>
                <a [routerLink]="['/blog', post.id]" 
                   class="block mt-4 text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors">
                  اقرأ المزيد ←
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      <!-- Newsletter Signup -->
      <section class="py-20 bg-gray-50">
        <div class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">
            اشترك في النشرة التقنية
          </h2>
          <p class="text-xl text-gray-600 mb-8">
            احصل على أحدث المقالات والنصائح التقنية مباشرة في بريدك الإلكتروني
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input type="email" 
                   [(ngModel)]="newsletterEmail"
                   placeholder="أدخل بريدك الإلكتروني"
                   class="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            <button (click)="subscribeNewsletter()"
                    class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              اشترك
            </button>
          </div>
        </div>
      </section>
    </div>
  `
})
export class BlogComponent {
  activeCategory = 0;
  newsletterEmail = '';

  categories = [
    { name: 'جميع المقالات', filter: 'all' },
    { name: 'البرمجة', filter: 'programming' },
    { name: 'أنظمة الإدارة', filter: 'management' },
    { name: 'التكنولوجيا', filter: 'technology' },
    { name: 'نصائح الأعمال', filter: 'business' }
  ];

  featuredPost = {
    id: 'featured-hr-systems-2025',
    title: 'مستقبل أنظمة الموارد البشرية في 2025',
    excerpt: 'كيف تغير التقنيات الحديثة مثل الذكاء الاصطناعي وتحليل البيانات من طريقة إدارة الموارد البشرية في الشركات',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: {
      name: 'أحمد التقني',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    date: '15 يناير 2025'
  };

  blogPosts = [
    {
      id: 'choosing-right-erp-system',
      title: 'كيفية اختيار نظام ERP المناسب لشركتك',
      excerpt: 'دليل شامل لاختيار نظام تخطيط موارد المؤسسة الذي يناسب حجم شركتك واحتياجاتها',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'أنظمة الإدارة',
      categoryColor: 'bg-purple-100 text-purple-800',
      categoryFilter: 'management',
      author: {
        name: 'سارة المطور',
        avatar: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150'
      },
      date: '12 يناير 2025',
      readTime: 8
    },
    {
      id: 'modern-web-development-trends',
      title: 'اتجاهات تطوير الويب الحديثة في 2025',
      excerpt: 'استكشف أحدث التقنيات والأطر البرمجية التي تشكل مستقبل تطوير تطبيقات الويب',
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'البرمجة',
      categoryColor: 'bg-blue-100 text-blue-800',
      categoryFilter: 'programming',
      author: {
        name: 'محمد الكودر',
        avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150'
      },
      date: '10 يناير 2025',
      readTime: 6
    },
    {
      id: 'digital-transformation-guide',
      title: 'دليل التحول الرقمي للشركات الصغيرة والمتوسطة',
      excerpt: 'خطوات عملية لتحويل شركتك رقمياً وتحسين كفاءة العمليات باستخدام التكنولوجيا',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'نصائح الأعمال',
      categoryColor: 'bg-green-100 text-green-800',
      categoryFilter: 'business',
      author: {
        name: 'فاطمة الاستشارية',
        avatar: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150'
      },
      date: '8 يناير 2025',
      readTime: 10
    },
    {
      id: 'cloud-computing-benefits',
      title: 'فوائد الحوسبة السحابية للشركات',
      excerpt: 'كيف تساعد الحوسبة السحابية في تقليل التكاليف وزيادة المرونة والأمان',
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'التكنولوجيا',
      categoryColor: 'bg-cyan-100 text-cyan-800',
      categoryFilter: 'technology',
      author: {
        name: 'علي السحابي',
        avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150'
      },
      date: '5 يناير 2025',
      readTime: 7
    },
    {
      id: 'database-optimization-tips',
      title: 'نصائح لتحسين أداء قواعد البيانات',
      excerpt: 'تقنيات متقدمة لتحسين سرعة الاستعلامات وأداء قواعد البيانات في التطبيقات الكبيرة',
      image: 'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'البرمجة',
      categoryColor: 'bg-blue-100 text-blue-800',
      categoryFilter: 'programming',
      author: {
        name: 'خالد قواعد البيانات',
        avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150'
      },
      date: '3 يناير 2025',
      readTime: 9
    },
    {
      id: 'cybersecurity-best-practices',
      title: 'أفضل ممارسات الأمان السيبراني للشركات',
      excerpt: 'كيفية حماية شركتك من التهديدات السيبرانية وضمان أمان البيانات والأنظمة',
      image: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'التكنولوجيا',
      categoryColor: 'bg-cyan-100 text-cyan-800',
      categoryFilter: 'technology',
      author: {
        name: 'نورا الأمان',
        avatar: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150'
      },
      date: '1 يناير 2025',
      readTime: 12
    }
  ];

  getFilteredPosts() {
    if (this.activeCategory === 0) {
      return this.blogPosts;
    }
    const filter = this.categories[this.activeCategory].filter;
    return this.blogPosts.filter(post => post.categoryFilter === filter);
  }

  subscribeNewsletter() {
    if (!this.newsletterEmail) {
      alert('يرجى إدخال بريدك الإلكتروني');
      return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.newsletterEmail)) {
      alert('يرجى إدخال بريد إلكتروني صحيح');
      return;
    }

    alert('تم الاشتراك بنجاح! ستصلك أحدث المقالات التقنية.');
    this.newsletterEmail = '';
  }
}