import {Component, OnInit} from '@angular/core';
import {Quiz} from "../../domain/Quiz";
import {QuestionService} from "../../service/serviceBusiness/question.service";
import {Question} from "../../domain/Question";
import {MatSnackBar} from "@angular/material";
import {QuizService} from "../../service/serviceBusiness/quiz.service";

@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.css']
})
export class CreateQuizComponent implements OnInit {
  quiz: Quiz = new Quiz();
  quizQuestions: Question[]=[];
  allQuestions: Question[];
  searchText='';
  constructor( private question: QuestionService,private snackBar:MatSnackBar,private quizService: QuizService) { }


  ngOnInit() {
  this.loadQuestions();
  }
  loadQuestions() : void {
    this.question.getQuestions().subscribe(questions=> {
        this.allQuestions=questions;
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
  saveQuiz(): void {
    if(this.quizQuestions.length>0){
      this.quiz.questionList=this.quizQuestions;
      this.quizService.saveQuiz(this.quiz).subscribe();
    }
  }
}
