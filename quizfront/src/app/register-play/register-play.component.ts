import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {WebsocketConnectionService} from "../service/socket/websocket-connection.service";


@Component({
  selector: 'app-register-play',
  templateUrl: './register-play.component.html',
  styleUrls: ['./register-play.component.css']
})
export class RegisterPlayComponent implements OnInit {
  params : string;
  private stompClient;


  constructor(private activatedRoute: ActivatedRoute, private websocket: WebsocketConnectionService) {
    let that = this;
    this.stompClient=this.websocket.getStompClient();
  }

  ngOnInit() {
    this.params= this.activatedRoute.snapshot.params['userQuizIdNameAndDate'];
    console.log(this.params);
    this.websocket.sendMessage(this.params);
  }

  sendMessage(message){
    this.stompClient.send("/app/send/register" , {}, message);
  }




}
