import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {NgxPrintModule} from 'ngx-print';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { PrinterComponent } from './printer/printer.component';

@NgModule({
  declarations: [
    AppComponent,
    PrinterComponent
  ],
  imports: [
    BrowserModule,
    NgxPrintModule,
    HttpClientModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
