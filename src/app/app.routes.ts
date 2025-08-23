import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { EcommerceProjectComponent } from './pages/projects/ecommerce-project/ecommerce-project.component';
import { TaskManagementProjectComponent } from './pages/projects/task-management-project/task-management-project.component';
import { HospitalSystemProjectComponent } from './pages/projects/hospital-system-project/hospital-system-project.component';
import { ElearningProjectComponent } from './pages/projects/elearning-project/elearning-project.component';
import { BankingAppProjectComponent } from './pages/projects/banking-app-project/banking-app-project.component';
import { InventorySystemProjectComponent } from './pages/projects/inventory-system-project/inventory-system-project.component';
import { HrSystemProjectComponent } from './pages/projects/hr-system-project/hr-system-project.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'projects/ecommerce', component: EcommerceProjectComponent },
  { path: 'projects/task-management', component: TaskManagementProjectComponent },
  { path: 'projects/hospital-system', component: HospitalSystemProjectComponent },
  { path: 'projects/elearning', component: ElearningProjectComponent },
  { path: 'projects/banking-app', component: BankingAppProjectComponent },
  { path: 'projects/inventory-system', component: InventorySystemProjectComponent },
  { path: 'projects/hr-system', component: HrSystemProjectComponent },
  { path: '**', redirectTo: '' }
];