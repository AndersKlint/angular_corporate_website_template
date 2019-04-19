import {NgModule} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule, MatIconModule} from '@angular/material';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';

import { WavesModule, ButtonsModule, IconsModule } from 'angular-bootstrap-md'

@NgModule({
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCarouselModule,
    MatExpansionModule,
    WavesModule,
    ButtonsModule,
    IconsModule,
    MatCardModule,
    MatDividerModule
  ],
  exports:
  [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCarouselModule,
    MatExpansionModule,
    WavesModule,
    ButtonsModule,
    IconsModule,
    MatCardModule,
    MatDividerModule
  ]
})
export class MaterialImports {}
