import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {WebsocketConnectionService} from "../service/socket/websocket-connection.service";
import {QuizService} from "../service/serviceBusiness/quiz.service";
import {Quiz} from "../domain/Quiz";
import {MatSnackBar} from "@angular/material";
import {CompatClient, Stomp} from "@stomp/stompjs";
import * as SockJS from 'sockjs-client'
import {Player} from "../domain/Player";
import {timer} from "rxjs";


@Component({
  selector: 'app-register-play',
  templateUrl: './register-play.component.html',
  styleUrls: ['./register-play.component.css']
})
export class RegisterPlayComponent implements OnInit {
  params : string;
  private stompClient;
  public aQuiz : Quiz;
  players : Player[]=[];
  userList : string []= [];
  private timer : Date ;
  distance : number;
  private my_timer;

  private serverUrl = 'http://localhost:8080/socket';

  constructor(private activatedRoute: ActivatedRoute, private websocket: WebsocketConnectionService,private quizService : QuizService,private snackBar: MatSnackBar ) {
    this.params= this.activatedRoute.snapshot.params['userQuizIdNameAndDate'];
    this.initializeWebSocketConnection(this.params);
    this.findQuizPlayers();

    this.my_timer = timer(1000,1000);
    this.my_timer.subscribe(t=> {
      this.timer= new Date( this.params.split('¤¤')[3]);
      this.timer.setMinutes(this.timer.getMinutes()+1);
      this.distance = Math.floor((this.timer.getTime() - new Date().getTime())/1000);
    })
  }
  initializeWebSocketConnection (paramsUrl):  void {
    let ws = new SockJS(this.serverUrl);
    this.stompClient = Stomp.over(ws);
    this.stompClient.connect({}, (frame) => {
      this.stompClient.subscribe("/join/"+paramsUrl, (message) => {
          this.findQuizPlayers();
      });
    });
  }
  findQuizPlayers(){
    this.quizService.findQuizzPlayers(this.params.split('¤¤')[1],this.params.split('¤¤')[3]).subscribe(players=> {
        this.players=players;
      },
      error1 => {
        this.snackBar.open('Impossible de récupérer les joueurs du Quiz ',error1.message, {
          duration : 5000
        })
      });
  }

  ngOnInit() {
    this.quizService.findQuizById(this.params.split('¤¤')[1]).subscribe(quiz=> {
        this.aQuiz=quiz;
      },
      error1 => {
        this.snackBar.open('Impossible de récupérer les Quiz ',error1.message, {
          duration : 5000
        })
      });
    this.findQuizPlayers();
  }
  addJoinedUser (message) {
    this.userList.push(message)
  }
  ngOnDestroy() {
    this.my_timer.unsubscribe();
  }
}
