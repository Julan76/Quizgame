import { Injectable } from '@angular/core';
import {CompatClient, Stomp} from "@stomp/stompjs";
import * as SockJS from 'sockjs-client'


@Injectable({
  providedIn: 'root'
})
export class WebsocketConnectionService {

  private serverUrl = 'http://localhost:8080/socket';
  private stompClient;

  constructor() {
    this.initializeWebSocketConnection();
  }

  public getStompClient() : CompatClient {
    return this.stompClient;
  }
  initializeWebSocketConnection (): CompatClient{
    let ws = new SockJS(this.serverUrl);
    this.stompClient = Stomp.over(ws);
    let that = this;
    return this.stompClient;


  //  this.stompClient.connect({}, (frame) => {
    //  return this.stompClient.subscribe("/register-play", (message) => {
     //   console.log(message);
      //});
    //});
  }

  sendMessage(message){
    this.stompClient.send("/app/send/register" , {}, message);
  }

}
