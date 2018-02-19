import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

  constructor() {}

  getData(key: string): string {
    return localStorage.getItem(key);
  }

  setData(key: string, value: string): void {
    localStorage.setItem(key, value);
  }
}
