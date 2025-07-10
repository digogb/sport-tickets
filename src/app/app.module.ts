import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

// Router Module
import { AppRoutingModule } from './app-routing.module';

// Material Module
import { MaterialModule } from './shared/material.module';

// Components
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AthleteRegistrationComponent } from './components/athlete-registration/athlete-registration.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

// Services
import { AthleteService } from './services/athlete.service';
import { ImageService } from './services/image.service';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AthleteRegistrationComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [
    AthleteService,
    ImageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }