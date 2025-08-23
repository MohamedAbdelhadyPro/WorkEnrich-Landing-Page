import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLanguageSubject = new BehaviorSubject<string>('ar');
  public currentLanguage$ = this.currentLanguageSubject.asObservable();

  constructor() {}

  getCurrentLanguage(): string {
    return 'ar';
  }
}