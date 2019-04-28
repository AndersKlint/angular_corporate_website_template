import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import {ChartsModule, WavesModule, ButtonsModule, CarouselModule } from 'angular-bootstrap-md'
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MaterialImports} from './material-imports';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServicesPageComponent } from './services-page/services-page.component';
import { WhyPageComponent } from './why-page/why-page.component';
import { StatsPageComponent } from './stats-page/stats-page.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { BarChartComponent } from './stats-page/bar-chart/bar-chart.component';
import { PieChartComponent } from './stats-page/pie-chart/pie-chart.component';
import { LicenseComponent } from './license/license.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ContactComponent,
    ServicesPageComponent,
    WhyPageComponent,
    StatsPageComponent,
    AboutComponent,
    FooterComponent,
    BarChartComponent,
    PieChartComponent,
    LicenseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialImports,
    MDBBootstrapModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
