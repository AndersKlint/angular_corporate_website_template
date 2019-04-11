import {NgModule} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule, MatIconModule} from '@angular/material';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCarouselModule,
    MatExpansionModule,
  ],
  exports:
  [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCarouselModule,
    MatExpansionModule,
  ]
})
export class MaterialImports {}
