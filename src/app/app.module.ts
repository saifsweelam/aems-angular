import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SectionHeaderComponent } from './parts/section-header/section-header.component';
import { FooterComponent } from './parts/footer/footer.component';
import { NavComponent } from './parts/nav/nav.component';
import { HomeComponent } from './pages/home/home.component';
import { AdmissionComponent } from './pages/admission/admission.component';
import { LearningComponent } from './pages/learning/learning.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { LandingHeaderComponent } from './parts/landing-header/landing-header.component';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { HttpClientModule } from '@angular/common/http';
import { StagesComponent } from './parts/stages/stages.component';
import { AboutComponent } from './parts/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    SectionHeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    AdmissionComponent,
    LearningComponent,
    GalleryComponent,
    LandingHeaderComponent,
    StagesComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InlineSVGModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
