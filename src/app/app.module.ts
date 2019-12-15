import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LazyLoadDirective } from './lazy-load.directive';

@NgModule({
   declarations: [
      AppComponent,
      LazyLoadDirective
   ],
   imports: [
      BrowserModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
