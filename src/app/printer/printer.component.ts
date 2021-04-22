import { Component, OnInit } from '@angular/core';
import {WebsocketService} from './../services/websocket.service';
import QueryModel from './../models/QueryModel';

@Component({
  selector: 'app-printer',
  templateUrl: './printer.component.html',
  styleUrls: ['./printer.component.scss']
})
export class PrinterComponent implements OnInit {
  
  elementId = 'invoice';
  constructor(private webService: WebsocketService) { 
  }

  ngOnInit(): void {
  }

  async printWindow(){
    console.log('PrinterComponent.printWindow()');

    let check = document.getElementById('invoice');
    let model = new QueryModel('printHtml');
    model.data  = check !== null ? check.innerHTML : '';
    console.log(JSON.stringify(model));

    this.webService.send(model);
  }
}

