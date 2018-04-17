import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import {NzDemoCarouselBasicComponent} from './basic-carousel/nz-demo-carousel-basic.component';

@NgModule({
  imports:      [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    NgZorroAntdModule.forRoot()
  ],
  declarations: [ AppComponent,NzDemoCarouselBasicComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
