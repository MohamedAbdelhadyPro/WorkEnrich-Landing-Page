import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HrSystemComponent } from './pages/hr-system/hr-system.component';
import { AccountingSystemComponent } from './pages/accounting-system/accounting-system.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ServicesComponent } from './pages/services/services.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'hr-system', component: HrSystemComponent },
  { path: 'accounting-system', component: AccountingSystemComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }
];