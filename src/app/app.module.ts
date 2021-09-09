import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HOMEPAGEComponent } from './COMPONENTS/HOMEPAGE/homepage.component';
import { FRONTPAGEComponent } from './COMPONENTS/HOMEPAGE/frontpage/frontpage.component';
import { ContentComponent } from './COMPONENTS/HOMEPAGE/content/content.component';
import { NetflixAboutComponent } from './COMPONENTS/HOMEPAGE/netflix-about/netflix-about.component';
import { CONTACTUSComponent } from './COMPONENTS/HOMEPAGE/contactus/contactus.component';
import { SIGNINPARTComponent } from './COMPONENTS/SIGNIN/signin-part/signin-part.component';
import { CONTACTUS2Component } from './COMPONENTS/SIGNIN/contactus2/contactus2.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import{MatInputModule} from '@angular/material/input';
import { MPAGESComponent } from './MOVIESPAGES/m-pages/m-pages.component';
import { SliderComponent } from './MOVIESPAGES/slider/slider.component';
import { MOVIESPAGESComponent } from './MOVIESPAGES/moviespages.component';
import { VIDEOComponent } from './MOVIESPAGES/video/video.component';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [
    AppComponent,
    HOMEPAGEComponent,
    FRONTPAGEComponent,
    ContentComponent,
    NetflixAboutComponent,
    CONTACTUSComponent,
    SIGNINPARTComponent,
    CONTACTUS2Component,
    MPAGESComponent,
    SliderComponent,
    MOVIESPAGESComponent,
    VIDEOComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    MatInputModule,
   CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
