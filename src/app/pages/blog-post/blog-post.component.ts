import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="pt-20 pb-12" *ngIf="post">
      <!-- Article Header -->
      <section class="py-16 bg-gray-50">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center">
            <div class="mb-4">
              <span class="px-3 py-1 text-sm font-medium rounded-full"
                    [ngClass]="post.categoryColor">
                {{ post.category }}
              </span>
            </div>
            <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {{ post.title }}
            </h1>
            <div class="flex items-center justify-center space-x-6 text-gray-600">
              <div class="flex items-center">
                <img [src]="post.author.avatar" 
                     [alt]="post.author.name"
                     class="w-10 h-10 rounded-full ml-3">
                <span>{{ post.author.name }}</span>
              </div>
              <div class="flex items-center">
                <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                {{ post.date }}
              </div>
              <div class="flex items-center">
                <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                {{ post.readTime }} دقائق قراءة
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Article Image -->
      <section class="py-8">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <img [src]="post.image" 
               [alt]="post.title"
               class="w-full h-96 object-cover rounded-2xl shadow-lg">
        </div>
      </section>

      <!-- Article Content -->
      <section class="py-8">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="prose prose-lg max-w-none" [innerHTML]="post.content">
          </div>
        </div>
      </section>

      <!-- Related Articles -->
      <section class="py-20 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl font-bold text-gray-900 mb-12 text-center">
            مقالات ذات صلة
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <article *ngFor="let relatedPost of relatedPosts" 
                     class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <img [src]="relatedPost.image" 
                   [alt]="relatedPost.title"
                   class="w-full h-48 object-cover">
              <div class="p-6">
                <h3 class="text-lg font-bold text-gray-900 mb-2">{{ relatedPost.title }}</h3>
                <p class="text-gray-600 text-sm mb-4">{{ relatedPost.excerpt }}</p>
                <a [routerLink]="['/blog', relatedPost.id]" 
                   class="text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors">
                  اقرأ المزيد ←
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>

    <!-- Loading State -->
    <div *ngIf="!post" class="pt-20 pb-12">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p class="text-gray-600">جاري تحميل المقال...</p>
      </div>
    </div>
  `
})
export class BlogPostComponent implements OnInit {
  post: any = null;
  relatedPosts: any[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const postId = this.route.snapshot.paramMap.get('id');
    this.loadPost(postId);
  }

  loadPost(postId: string | null) {
    // Simulate loading post data
    setTimeout(() => {
      this.post = this.getPostById(postId);
      this.relatedPosts = this.getRelatedPosts();
    }, 500);
  }

  getPostById(id: string | null) {
    const posts: any = {
      'featured-hr-systems-2025': {
        id: 'featured-hr-systems-2025',
        title: 'مستقبل أنظمة الموارد البشرية في 2025',
        excerpt: 'كيف تغير التقنيات الحديثة مثل الذكاء الاصطناعي وتحليل البيانات من طريقة إدارة الموارد البشرية في الشركات',
        image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'أنظمة الإدارة',
        categoryColor: 'bg-purple-100 text-purple-800',
        author: {
          name: 'أحمد التقني',
          avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150'
        },
        date: '15 يناير 2025',
        readTime: 12,
        content: `
          <p class="text-lg text-gray-700 mb-6">تشهد أنظمة إدارة الموارد البشرية تطوراً مستمراً مع دخول تقنيات جديدة مثل الذكاء الاصطناعي وتحليل البيانات الضخمة. في هذا المقال، نستكشف كيف ستبدو أنظمة HR في المستقبل القريب.</p>

          <h2 class="text-2xl font-bold text-gray-900 mb-4">التحديات الحالية في أنظمة HR</h2>
          <p class="text-gray-700 mb-6">تواجه الشركات اليوم تحديات عديدة في إدارة الموارد البشرية، منها صعوبة تتبع أداء الموظفين، تعقيد عمليات التوظيف، وضرورة الامتثال للقوانين المتغيرة.</p>

          <h2 class="text-2xl font-bold text-gray-900 mb-4">دور الذكاء الاصطناعي</h2>
          <p class="text-gray-700 mb-4">يلعب الذكاء الاصطناعي دوراً محورياً في تطوير أنظمة HR الحديثة من خلال:</p>
          <ul class="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li>أتمتة عمليات الفرز الأولي للسير الذاتية</li>
            <li>تحليل أداء الموظفين وتقديم توصيات للتحسين</li>
            <li>التنبؤ بمعدلات دوران الموظفين</li>
            <li>تخصيص برامج التدريب حسب احتياجات كل موظف</li>
          </ul>

          <h2 class="text-2xl font-bold text-gray-900 mb-4">تحليل البيانات والتقارير الذكية</h2>
          <p class="text-gray-700 mb-6">تمكن تقنيات تحليل البيانات الشركات من اتخاذ قرارات مبنية على البيانات الفعلية بدلاً من التخمين. هذا يشمل تحليل اتجاهات الأداء، قياس رضا الموظفين، وتحديد المواهب الواعدة.</p>

          <h2 class="text-2xl font-bold text-gray-900 mb-4">التكامل مع التقنيات الحديثة</h2>
          <p class="text-gray-700 mb-6">أنظمة HR المستقبلية ستتكامل مع تقنيات متنوعة مثل إنترنت الأشياء لتتبع الحضور، الواقع المعزز للتدريب، والبلوك تشين لحماية البيانات الحساسة.</p>

          <h2 class="text-2xl font-bold text-gray-900 mb-4">الخلاصة</h2>
          <p class="text-gray-700 mb-6">مستقبل أنظمة الموارد البشرية مشرق ومليء بالإمكانيات. الشركات التي تستثمر في هذه التقنيات الآن ستكون في موقع أفضل لجذب المواهب والاحتفاظ بها في المستقبل.</p>
        `
      },
      'choosing-right-erp-system': {
        id: 'choosing-right-erp-system',
        title: 'كيفية اختيار نظام ERP المناسب لشركتك',
        excerpt: 'دليل شامل لاختيار نظام تخطيط موارد المؤسسة الذي يناسب حجم شركتك واحتياجاتها',
        image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'أنظمة الإدارة',
        categoryColor: 'bg-purple-100 text-purple-800',
        author: {
          name: 'سارة المطور',
          avatar: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150'
        },
        date: '12 يناير 2025',
        readTime: 8,
        content: `
          <p class="text-lg text-gray-700 mb-6">اختيار نظام ERP المناسب قرار استراتيجي مهم يؤثر على مستقبل شركتك. في هذا الدليل، نقدم خطوات عملية لاتخاذ القرار الصحيح.</p>

          <h2 class="text-2xl font-bold text-gray-900 mb-4">ما هو نظام ERP؟</h2>
          <p class="text-gray-700 mb-6">نظام تخطيط موارد المؤسسة (ERP) هو برنامج يدمج جميع العمليات الأساسية للشركة في نظام واحد، بما في ذلك المحاسبة، المبيعات، المشتريات، والموارد البشرية.</p>

          <h2 class="text-2xl font-bold text-gray-900 mb-4">خطوات اختيار النظام المناسب</h2>
          <ol class="list-decimal list-inside text-gray-700 mb-6 space-y-3">
            <li><strong>تحديد احتياجات الشركة:</strong> حدد العمليات التي تحتاج لأتمتة والمشاكل التي تواجهها حالياً</li>
            <li><strong>تحديد الميزانية:</strong> ضع ميزانية واقعية تشمل تكلفة الشراء والتنفيذ والتدريب</li>
            <li><strong>تقييم الخيارات المتاحة:</strong> ادرس الأنظمة المختلفة وقارن بين ميزاتها</li>
            <li><strong>طلب عروض توضيحية:</strong> اطلب عروض من الموردين لرؤية النظام عملياً</li>
            <li><strong>التحقق من المراجع:</strong> تحدث مع عملاء سابقين للمورد</li>
          </ol>

          <h2 class="text-2xl font-bold text-gray-900 mb-4">العوامل المهمة في الاختيار</h2>
          <ul class="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li>سهولة الاستخدام والواجهة البديهية</li>
            <li>قابلية التخصيص والتوسع</li>
            <li>جودة الدعم الفني والتدريب</li>
            <li>التكامل مع الأنظمة الموجودة</li>
            <li>الأمان وحماية البيانات</li>
          </ul>

          <h2 class="text-2xl font-bold text-gray-900 mb-4">أخطاء شائعة يجب تجنبها</h2>
          <p class="text-gray-700 mb-6">تجنب اختيار النظام بناءً على السعر فقط، أو إهمال تدريب الموظفين، أو عدم التخطيط لمرحلة التنفيذ بشكل جيد.</p>
        `
      }
    };

    return posts[id || ''] || null;
  }

  getRelatedPosts() {
    return [
      {
        id: 'modern-web-development-trends',
        title: 'اتجاهات تطوير الويب الحديثة في 2025',
        excerpt: 'استكشف أحدث التقنيات والأطر البرمجية',
        image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'digital-transformation-guide',
        title: 'دليل التحول الرقمي للشركات',
        excerpt: 'خطوات عملية لتحويل شركتك رقمياً',
        image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'cloud-computing-benefits',
        title: 'فوائد الحوسبة السحابية للشركات',
        excerpt: 'كيف تساعد السحابة في تقليل التكاليف',
        image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800'
      }
    ];
  }
}