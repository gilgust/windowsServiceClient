import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import {Observable} from 'rxjs';
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
    this.setSubsribe();   
    this.checkConnection(); 
  }

  handleMessage(message: any){
    console.log('message received:'); 
    console.log(message);
  }

  handleError(error: any){
    console.log(error); 
    this.reconnecting();
  }
  
  send(data: any){
    this.subject.next(data);
  }

  checkConnection(){
    let connectionPromise =  new Promise((resolve, reject) => {
      let data  = new QueryModel("checkConnection");
      this.subject.next(data);
      resolve(null);
    });
    connectionPromise
    .then(()  => {
      if(this.retry > 0 ){     
        setTimeout(() => this.checkConnection(), 2000);
      }
    })
    .catch(err => {
      this.retry--;
      if(this.subject.closed && this.retry > 0 ){
        console.log(`retry: ${this.retry}`, err);
        this.connecting();
      }
    });
  }

  connecting(){
    this.subject = webSocket("ws://localhost:8998");
    this.setSubsribe();
    this.checkConnection();
  }

  private setSubsribe(){
    this.subject.subscribe(
      msg => this.handleMessage(msg),
      err => this.handleError(err), 
      () => {
        if(this.subject.closed && this.retry > 0){
          this.retry--;
          this.reconnecting();
        }
      }
    );
  }

  reconnecting(){
    if(this.retry == 0){
      return;
    }

    this.retry--;
    this.connecting()
  }

  forceReconnecting(){
    this.retry = 5;
    this.connecting();
  }
 
}