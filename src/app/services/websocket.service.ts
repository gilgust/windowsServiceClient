import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import QueryModel from './../models/QueryModel';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  subject : WebSocketSubject<any>;
  retry : number;
  constructor() { 
    this.retry = 5;
    this.subject = webSocket("ws://localhost:8998");

    this.subject.subscribe(
      msg => this.handleMessage(msg),
      err => this.handleError(err), 
      () => console.log('complete')
    );
  }

  handleMessage(message: any){
    console.log('message received:'); 
    console.log(message);
  }

  handleError(error: any){
    console.log(error); 
  }
  
  send(data: any){
    this.subject.next(data);
  }

  checkConnection(){
    let connectionPromise =  new Promise((resolve, reject) => {
      let data  = new QueryModel("checkConnection")
      let result =  this.subject.next(data);
      if (result !== null) {
        resolve(result);
      }
      else{
        reject();
      }
    });
    
  }

  connecting(){
    
  }
}