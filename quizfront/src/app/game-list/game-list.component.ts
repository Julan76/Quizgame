import { Component, OnInit } from '@angular/core';
import {QuizService} from "../service/serviceBusiness/quiz.service";
import {Quiz} from "../domain/Quiz";
import {MatSnackBar} from "@angular/material";
import {Router} from "@angular/router";
import {UserService} from "../service/user/user.service";
import {AppUser} from "../domain/AppUser";
import {AuthenticationService} from "../service/authentication/authentication.service";
import {WebsocketConnectionService} from "../service/socket/websocket-connection.service";

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  allQuiz: Quiz[]=[];
  appUser: AppUser ;
  isAdmin: boolean=false;

  constructor(private quizService: QuizService, private snackBar:MatSnackBar,private router : Router, public userService : UserService,private authenticationService : AuthenticationService,
              private websocket : WebsocketConnectionService) {
    this.checkUser();

  }

  ngOnInit() {
    if(this.authenticationService.isLogged()){
      this.appUser= this.userService.getLoggedUser(this.authenticationService.getToken());
      this.isAdmin=this.userService.isAdmin(this.appUser);
    }
    else {
      this.checkUser();
    }
    this.loadQuizs();
  }

  checkUser(){
    this.userService.theUser$.subscribe(
      user => {
        this.appUser= user;
        this.isAdmin=this.userService.isAdmin(user);
      }
    )
  }

  launchQuiz(aQuiz): void {
    let urlQuiz= this.appUser.firstName+'¤¤'+aQuiz.id+'¤¤'+aQuiz.name+'¤¤'+new Date();
    this.websocket.sendMessageRegister(urlQuiz);
     this.router.navigate(['/register-play',urlQuiz])
  }
  loadQuizs(): void {
    this.quizService.retriveQuizs().subscribe(quizs=> {
      this.allQuiz=quizs;
      console.log(this.allQuiz  )
    },
      error1 => {
      this.snackBar.open('Impossible de récupérer les Quiz ',error1.message, {
        duration : 5000
      })
      });
  }
}
