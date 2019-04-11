import {NgModule} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule, MatIconModule} from '@angular/material';
import { MatCarouselModule } from '@ngmodule/material-carousel';

@NgModule({
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCarouselModule
  ],
  exports:
  [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCarouselModule
  ]
})
export class MaterialImports {}
