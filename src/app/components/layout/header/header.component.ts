import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TutorialStreamlabsComponent } from '../../tutorial/tutorial-streamlabs/tutorial-streamlabs.component';
import { TutorialSetupComponent } from '../../tutorial/tutorial-setup/tutorial-setup.component';
import { ThemeService } from 'src/app/service/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog, public themeService: ThemeService) { }

  ngOnInit(): void {
  }

  switchTheme(theme: string) {
    this.themeService.setTheme(theme);
  }

  openTutorialSetup() {
    this.dialog.open(TutorialSetupComponent);
  }

  openTutorialStreamlabs() {
    this.dialog.open(TutorialStreamlabsComponent);
  }
}