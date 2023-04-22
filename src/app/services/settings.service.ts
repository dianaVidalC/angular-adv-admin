import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  private linkTheme = document.querySelector('#theme');

  constructor() {}

  settingTheme() {
    let url =
      localStorage.getItem('theme') || './assets/css/colors/default-dark.css';
    this.linkTheme?.setAttribute('href', url);
  }

  changeTheme(theme: string, links: any[] | NodeListOf<Element> | undefined) {
    const url = `./assets/css/colors/${theme}.css`;

    this.linkTheme?.setAttribute('href', url);
    localStorage.setItem('theme', url);

    this.checkCurrentTheme(links);
  }

  checkCurrentTheme(links: any[] | NodeListOf<Element> | undefined): void {
    links?.forEach((e) => {
      e.classList.remove('working');
      const btnTheme = e.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`;
      const currentTheme = this.linkTheme?.getAttribute('href');

      if (btnThemeUrl == currentTheme) {
        e.classList.add('working');
      }
    });
  }
}
