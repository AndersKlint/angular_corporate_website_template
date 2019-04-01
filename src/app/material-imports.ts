import {NgModule} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule, MatIconModule} from '@angular/material';

@NgModule({
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  exports:
  [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class MaterialImports {}
