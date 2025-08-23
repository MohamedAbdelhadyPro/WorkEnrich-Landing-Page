import { Injectable } from '@angular/core';
import { LanguageService } from './language.service';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private translations: { [key: string]: any } = {};
  private translationsLoaded = new BehaviorSubject<boolean>(false);

  constructor(
    private languageService: LanguageService,
    private http: HttpClient
  ) {
    this.loadTranslations();
    this.languageService.currentLanguage$.subscribe(lang => {
      this.loadTranslations();
    });
  }

  private async loadTranslations() {
    const currentLang = this.languageService.getCurrentLanguage();
    
    try {
      // Load translations from JSON files
      const response = await fetch(`/assets/i18n/${currentLang}.json`);
      this.translations = await response.json();
      this.translationsLoaded.next(true);
    } catch (error) {
      console.error('Error loading translations:', error);
      // Fallback to Arabic if loading fails
      if (currentLang !== 'ar') {
        try {
          const fallbackResponse = await fetch('/assets/i18n/ar.json');
          this.translations = await fallbackResponse.json();
          this.translationsLoaded.next(true);
        } catch (fallbackError) {
          console.error('Error loading fallback translations:', fallbackError);
        }
      }
    }
  }

  translate(key: string): string {
    const keys = key.split('.');
    let value = this.translations;
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key; // Return key if translation not found
      }
    }
    
    return value !== undefined ? value : key;
  }

  get(key: string): string {
    return this.translate(key);
  }

  getTranslationsLoaded(): Observable<boolean> {
    return this.translationsLoaded.asObservable();
  }
}