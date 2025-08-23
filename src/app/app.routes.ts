import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { BlogComponent } from './pages/blog/blog.component';
import { BlogPostComponent } from './pages/blog-post/blog-post.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { FaqComponent } from './pages/faq/faq.component';
import { DevelopmentServicesComponent } from './pages/development-services/development-services.component';
import { ManagedSolutionsComponent } from './pages/managed-solutions/managed-solutions.component';
import { CaseStudiesComponent } from './pages/case-studies/case-studies.component';

// Project detail components
import { EcommerceProjectComponent } from './pages/projects/ecommerce-project/ecommerce-project.component';
import { TaskManagementProjectComponent } from './pages/projects/task-management-project/task-management-project.component';
import { HospitalSystemProjectComponent } from './pages/projects/hospital-system-project/hospital-system-project.component';
import { ElearningProjectComponent } from './pages/projects/elearning-project/elearning-project.component';
import { BankingAppProjectComponent } from './pages/projects/banking-app-project/banking-app-project.component';
import { InventorySystemProjectComponent } from './pages/projects/inventory-system-project/inventory-system-project.component';
import { HrSystemProjectComponent } from './pages/projects/hr-system-project/hr-system-project.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'development-services', component: DevelopmentServicesComponent },
  { path: 'managed-solutions', component: ManagedSolutionsComponent },
  { path: 'case-studies', component: CaseStudiesComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blog/:id', component: BlogPostComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'faq', component: FaqComponent },
  
  // Project detail routes
  { path: 'projects/ecommerce', component: EcommerceProjectComponent },
  { path: 'projects/task-management', component: TaskManagementProjectComponent },
  { path: 'projects/hospital-system', component: HospitalSystemProjectComponent },
  { path: 'projects/elearning', component: ElearningProjectComponent },
  { path: 'projects/banking-app', component: BankingAppProjectComponent },
  { path: 'projects/inventory-system', component: InventorySystemProjectComponent },
  { path: 'projects/hr-system', component: HrSystemProjectComponent },
  
  { path: '**', redirectTo: '' }
];