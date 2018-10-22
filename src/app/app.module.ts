import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoutingModule } from './routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Binding1Component } from './binding1/binding1.component';
import { Binding2Component } from './binding2/binding2.component';
import { Binding3Component } from './binding3/binding3.component';
import { Binding4Component } from './binding4/binding4.component';

@NgModule({
  declarations: [
    AppComponent,
    Binding1Component,
    Binding2Component,
    Binding3Component,
    Binding4Component
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
