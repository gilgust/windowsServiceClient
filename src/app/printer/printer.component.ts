import { Component, OnInit } from '@angular/core';
import { PrinterService } from '../printer.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-printer',
  templateUrl: './printer.component.html',
  styleUrls: ['./printer.component.scss']
})
export class PrinterComponent implements OnInit {
  
  elementId = 'invoice';
  constructor(private printerService: PrinterService, private http: HttpClient) { 
    
  }

  ngOnInit(): void {
    this.printerService.startConnection();
    this.printerService.addTransferChartDataListener();   
    this.startHttpRequest();
  }
  private startHttpRequest = () => {
    this.http.get('https://localhost:44393/hubs/clock')
      .subscribe(res => {
        console.log(res);
      })
  }

  printWindow(){
    this.startHttpRequest();
  }
}

