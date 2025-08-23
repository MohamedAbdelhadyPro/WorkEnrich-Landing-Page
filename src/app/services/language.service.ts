import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Language {
  code: string;
  name: string;
  flag: string;
  dir: 'rtl' | 'ltr';
}

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLanguageSubject = new BehaviorSubject<string>('ar');
  public currentLanguage$ = this.currentLanguageSubject.asObservable();

  languages: Language[] = [
    { code: 'ar', name: 'العربية', flag: '🇸🇦', dir: 'rtl' },
    { code: 'en', name: 'English', flag: '🇺🇸', dir: 'ltr' }
  ];

  constructor() {
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'ar';
    this.setLanguage(savedLanguage);
  }

  setLanguage(languageCode: string) {
    const language = this.languages.find(lang => lang.code === languageCode);
    if (language) {
      this.currentLanguageSubject.next(languageCode);
      localStorage.setItem('selectedLanguage', languageCode);
      
      // Update document direction and language
      document.documentElement.setAttribute('lang', languageCode);
      document.documentElement.setAttribute('dir', language.dir);
      document.body.style.direction = language.dir;
    }
  }

  getCurrentLanguage(): string {
    return this.currentLanguageSubject.value;
  }

  getLanguageInfo(code: string): Language | undefined {
    return this.languages.find(lang => lang.code === code);
  }
}