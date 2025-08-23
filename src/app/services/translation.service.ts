import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  constructor() {}

  get(key: string): string {
    // Return the key as is since we're using Arabic text directly
    return key;
  }

  translate(key: string): string {
    return key;
  }
}