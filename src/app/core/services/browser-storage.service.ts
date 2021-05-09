import { Inject, Injectable, InjectionToken } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

export const BROWSER_STORAGE = new InjectionToken<Storage>('Browser Storage', {
  providedIn: 'root',
  factory: () => localStorage,
});

@Injectable({
  providedIn: 'root',
})
export class BrowserStorageService {
  constructor(@Inject(BROWSER_STORAGE) public storage: Storage) {}

  supported(): Observable<boolean> {
    return this.storage ? of(true) : throwError('Local Storage Not Supported');
  }

  get(key: string): string {
    return this.storage.getItem(key) || '';
  }

  set(key: string, value: string): void {
    this.storage.setItem(key, value);
  }

  remove(key: string): void {
    this.storage.removeItem(key);
  }

  clear(): void {
    this.storage.clear();
  }
}
