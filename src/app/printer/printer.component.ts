import { Component, OnInit } from '@angular/core';
import {WebsocketService} from './../services/websocket.service';
import PrintQueryModel from './../models/PrintQueryModel';
import QueryModel from '../models/QueryModel';

@Component({
  selector: 'app-printer',
  templateUrl: './printer.component.html',
  styleUrls: ['./printer.component.scss']
})
export class PrinterComponent implements OnInit {

  receiptId = 'receipt';
  invoiceId = 'invoice';
  receiptIsShowing = true;
  constructor(private webService: WebsocketService) {
  }

  ngOnInit(): void {
  }
  get invoiceIsShowing(){
    return !this.receiptIsShowing;
  }
  displayInvoice(){ this.receiptIsShowing = false; }

  displayReceipt(){ this.receiptIsShowing = true; }

  printReceipt(){
    this.printHtml(this.receiptId, "receipt");
  }
  printInvoice(){
    this.printHtml(this.invoiceId, "invoice");
  }

  printHtml(id: string, printDataType: string){

    let souce = document.getElementById(id);
    let model = new PrintQueryModel('printHtml', printDataType);
    model.data  = souce !== null ? this.getPageStyles() + souce.innerHTML : '';
    this.webService.send(model);
  }
  getPageStyles(){
    let styles = document.querySelectorAll('head style');
    let styleHtml = "<style>";

    styles?.forEach(element =>  {
      styleHtml += element.textContent;
    });
    styleHtml += "</style>";

    return styleHtml;
  }

  startScanning(){
    let model = new QueryModel('startScanning');
    this.webService.send(model);
  }

  reconnecting(){
    this.webService.forceReconnecting();
  }
}

