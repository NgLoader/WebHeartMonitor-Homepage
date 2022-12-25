import { Component, HostListener, OnInit } from '@angular/core';
import { ThemeService } from './service/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'WebHeartMonitor';

  constructor(private themeServie: ThemeService) { }

  @HostListener('window:unload', ['$event'])
  unloadHandler(event) {
    window.localStorage.setItem('selectedTheme', this.themeServie.currentTheme);
  }

  ngOnInit() {
    const theme = window.localStorage.getItem('selectedTheme');
    if (theme) {
      this.themeServie.setTheme(theme);
    }
  }
}
