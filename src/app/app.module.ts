import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {NgxPrintModule} from 'ngx-print';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { PrinterComponent } from './printer/printer.component';
import { FormsModule } from '@angular/forms';
import { ReceiptViewComponent } from './receipt-view/receipt-view.component';
import { InvoiceViewComponent } from './invoice-view/invoice-view.component';

@NgModule({
  declarations: [
    AppComponent,
    PrinterComponent,
    ReceiptViewComponent,
    InvoiceViewComponent
  ],
  imports: [
    BrowserModule,
    NgxPrintModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
