import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondaryComponent } from './secondary.component';
import { SecondaryRoutes } from './secondary-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SecondaryRoutes
  ],
  declarations: [SecondaryComponent]
})
export class SecondaryModule { }
