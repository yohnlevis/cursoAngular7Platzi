import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  //se debe exportar porque otros modulos lo van a utilizar 
  exports: [
    MatButtonModule
  ]
})
export class MaterialModule { }
