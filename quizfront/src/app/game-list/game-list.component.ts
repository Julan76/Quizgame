import { Component, OnInit } from '@angular/core';
import {QuizService} from "../service/serviceBusiness/quiz.service";
import {Quiz} from "../domain/Quiz";
import {MatSnackBar} from "@angular/material";

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  allQuiz: Quiz[]=[];
  constructor(private quizService: QuizService, private snackBar:MatSnackBar) { }

  ngOnInit() {
    this.loadQuizs();
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
