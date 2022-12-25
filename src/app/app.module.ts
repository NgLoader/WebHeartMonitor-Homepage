import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderModule } from './components/layout/header/header.module';
import { FooterModule } from './components/layout/footer/footer.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { TutorialStreamlabsComponent } from './components/tutorial/tutorial-streamlabs/tutorial-streamlabs.component';
import { TutorialSetupComponent } from './components/tutorial/tutorial-setup/tutorial-setup.component';

@NgModule({
  declarations: [AppComponent, TutorialStreamlabsComponent, TutorialSetupComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HeaderModule,
    FooterModule,
    MatDialogModule,
    MatButtonModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
