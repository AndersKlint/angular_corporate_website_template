import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './home/home.component'
import {ContactComponent} from './contact/contact.component'
import {StatsPageComponent} from './stats-page/stats-page.component'
import {ServicesPageComponent} from './services-page/services-page.component'
import {WhyPageComponent} from './why-page/why-page.component'
import {AboutComponent} from './about/about.component'

const routes: Routes = [
   { path: '', redirectTo: '/home', pathMatch: 'full' },
   { path: 'home', component: HomeComponent },
   { path: 'contact', component: ContactComponent },
   { path: 'statistics', component: StatsPageComponent },
   { path: 'serviecs', component: ServicesPageComponent },
   { path: 'why', component: WhyPageComponent },
   { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
