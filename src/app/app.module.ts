import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialImports} from './material-imports';
import { ServicesPageComponent } from './services-page/services-page.component';
import { WhyPageComponent } from './why-page/why-page.component';
import { StatsPageComponent } from './stats-page/stats-page.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ContactComponent,
    ServicesPageComponent,
    WhyPageComponent,
    StatsPageComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialImports
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
