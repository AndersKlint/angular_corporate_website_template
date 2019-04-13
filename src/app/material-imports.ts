import {NgModule} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule, MatIconModule} from '@angular/material';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import {MatExpansionModule} from '@angular/material/expansion';

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
    IconsModule
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
    IconsModule
  ]
})
export class MaterialImports {}
