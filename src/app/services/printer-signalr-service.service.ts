import { Injectable } from '@angular/core';
import * as signalR from "@aspnet/signalr"; 

@Injectable({
  providedIn: 'root'
})
export class PrinterSignalrServiceService {
 // socket : WebSocket;
 private hubConnection: signalR.HubConnection;
 private dataResult: any;
   constructor() {
     this.hubConnection = new signalR.HubConnectionBuilder()
     .withUrl('https://localhost:44393')
     .build();
   }
   
   startConnection () {

   this.hubConnection
     .start()
     .then(() => console.log('Connection started'))
     .catch(err => console.log('Error while starting connection: ' + err));
 }

 public addTransferChartDataListener = () => {
   if(this.hubConnection != null){
     this.hubConnection.on('clock', (data) => {
       this.dataResult = data;
       console.log(data);
     }); 
   }
 }
}
