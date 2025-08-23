import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DevelopmentServicesComponent } from './pages/development-services/development-services.component';
import { ManagedSolutionsComponent } from './pages/managed-solutions/managed-solutions.component';
import { CaseStudiesComponent } from './pages/case-studies/case-studies.component';
import { FaqComponent } from './pages/faq/faq.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BlogComponent } from './pages/blog/blog.component';
import { BlogPostComponent } from './pages/blog-post/blog-post.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'development-services', component: DevelopmentServicesComponent },
  { path: 'managed-solutions', component: ManagedSolutionsComponent },
  { path: 'case-studies', component: CaseStudiesComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blog/:id', component: BlogPostComponent },
  { path: '**', redirectTo: '' }
];