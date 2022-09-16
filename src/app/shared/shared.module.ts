import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArrowdComponent } from './svg/arrowd/arrowd.component';



@NgModule({
  declarations: [
    ArrowdComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ArrowdComponent
  ]
})
export class SharedModule { }
