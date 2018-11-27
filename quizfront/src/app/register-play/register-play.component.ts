import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {WebsocketConnectionService} from "../service/socket/websocket-connection.service";
import {QuizService} from "../service/serviceBusiness/quiz.service";
import {Quiz} from "../domain/Quiz";
import {MatSnackBar} from "@angular/material";


@Component({
  selector: 'app-register-play',
  templateUrl: './register-play.component.html',
  styleUrls: ['./register-play.component.css']
})
export class RegisterPlayComponent implements OnInit {
  params : string;
  private stompClient;
  public aQuiz : Quiz;
  userList : string []= [];


  constructor(private activatedRoute: ActivatedRoute, private websocket: WebsocketConnectionService,private quizService : QuizService,private snackBar: MatSnackBar ) {
    this.params= this.activatedRoute.snapshot.params['userQuizIdNameAndDate'];
    this.stompClient=this.websocket.getStompClient();

    this.stompClient.connect({}, (frame) => {
      return this.stompClient.subscribe("/join/"+this.params, (message) => {
        this.addJoinedUser(message.body);
      });
    });
  }

  ngOnInit() {
    this.websocket.sendMessageRegister(this.params);  //fixme avoid sending this message at each loading of the view MOVE IT MAYBE ??
    this.quizService.findQuizById(this.params.split('¤¤')[1]).subscribe(quiz=> {
        this.aQuiz=quiz;
      },
      error1 => {
        this.snackBar.open('Impossible de récupérer les Quiz ',error1.message, {
          duration : 5000
        })
      });
  }
  addJoinedUser (message) {
    console.log("lelee ");
    console.log(message);
    this.userList.push(message)
  }
  get debug(){
    return JSON.stringify(this.userList);
  }
}
