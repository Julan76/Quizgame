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
  initializeWebSocketConnection (): CompatClient {
    let ws = new SockJS(this.serverUrl);
    this.stompClient = Stomp.over(ws);
    let that = this;
    return this.stompClient;
  }

  sendMessageRegister(message){
    this.stompClient.send("/app/send/register" , {}, message);
  }
  sendMessageJoin(roomId,message) {
    this.stompClient.send("/app/send/join/"+roomId , {}, message);
  }
}
