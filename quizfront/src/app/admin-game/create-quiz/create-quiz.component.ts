import {Component, OnInit} from '@angular/core';
import {Quiz} from "../../domain/Quiz";
import {QuestionService} from "../../service/serviceBusiness/question.service";
import {Question} from "../../domain/Question";
import {MatSnackBar} from "@angular/material";

@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.css']
})
export class CreateQuizComponent implements OnInit {
  quiz: Quiz = new Quiz();
  quizQuestions: Question[]=[];
  allQuestions: Question[];
  constructor( private question: QuestionService,private snackBar:MatSnackBar) { }

  ngOnInit() {
  this.loadQuestions();
  }
  loadQuestions() : void {
    this.question.getQuestions().subscribe(questions=> {
        this.allQuestions=questions;
        console.log(this.allQuestions)
      },
      error => {
        this.snackBar.open('Impossible de récupérer les questions', error.message, {
          duration: 5000,
        });
      });
  }
  addQuestionToQuiz(aQuestion : Question) : void {
    if(!this.quizQuestions.find(x => x.label===aQuestion.label)){
      this.quizQuestions.push(aQuestion);
    }
  }
  removeQuestion (aQuestion : Question) : void {
    this.quizQuestions.splice(this.quizQuestions.indexOf(aQuestion,0),1)
  }
}
