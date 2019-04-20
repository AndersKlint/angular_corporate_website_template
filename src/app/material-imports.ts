import {NgModule} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule, MatIconModule} from '@angular/material';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';

//import { WavesModule, ButtonsModule, IconsModule, CarouselModule } from 'angular-bootstrap-md'

@NgModule({
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule,
    MatCardModule,
    MatDividerModule
  ],
  exports:
  [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule,
    MatCardModule,
    MatDividerModule
  ]
})
export class MaterialImports {}
