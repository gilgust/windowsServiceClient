import { Component, OnInit } from '@angular/core';
import {WebsocketService} from './../services/websocket.service';
import PrintQueryModel from './../models/PrintQueryModel';

@Component({
  selector: 'app-printer',
  templateUrl: './printer.component.html',
  styleUrls: ['./printer.component.scss']
})
export class PrinterComponent implements OnInit {

  receiptId = 'receipt';
  invoiceId = 'invoice';
  constructor(private webService: WebsocketService) {
  }

  ngOnInit(): void {
  }

  printReceipt(){
    this.printHtml(this.receiptId, "receipt");
  }
  printInvoice(){
    this.printHtml(this.invoiceId, "invoice");
  }

  printHtml(id: string, printDataType: string){
    let souce = document.getElementById(id);
    let model = new PrintQueryModel('printHtml', printDataType);
    model.data  = souce !== null ? souce.innerHTML : '';
    console.log(JSON.stringify(model));

    this.webService.send(model);
  }

  reconnecting(){
    this.webService.forceReconnecting();
  }
}

