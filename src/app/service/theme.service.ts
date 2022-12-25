import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private theme = "dark-theme";

  constructor() { }

  get currentTheme() {
    return this.theme;
  }

  setTheme(theme: string) {
    this.theme = theme;
    document.body.classList.value = theme;
  }
}
