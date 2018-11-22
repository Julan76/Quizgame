import { Component, OnInit } from '@angular/core';
import {Question} from "../domain/Question";
import {Answer} from "../domain/Answer";
import {MatSnackBar} from "@angular/material";
import {QuestionService} from "../service/serviceBusiness/question.service";


@Component({
  selector: 'app-admin-game',
  templateUrl: './admin-game.component.html',
  styleUrls: ['./admin-game.component.css']
})
export class AdminGameComponent implements OnInit {
  question: Question=new Question();
  rightAnswer: Answer;
  answerList: Answer[]= [];
  possibleAnswer: Answer=new Answer();
  panelOpenState = false;


  constructor(private snackBar: MatSnackBar, private questionService: QuestionService) { }

  ngOnInit() {
  }
  addAnswer(){
    if(!this.possibleAnswer.getLabel || this.possibleAnswer.getLabel.length==0){
      this.snackBar.open('', 'Vous devez écrire une réponse possible pour en ajouter', {
        duration: 5000,
      });
    }
    else {
      this.answerList.push(this.possibleAnswer);
      this.possibleAnswer=new Answer();
    }
  }

  onSelectCorrectAnswer(answer: Answer): void {
    this.rightAnswer=answer;
  }
  submitQuestionForm(){
    if(this.answerList.length<2){
      this.snackBar.open('2 réponses au moins sont également indispensables pour valider le formulaire !', '', {
        duration: 5000,
      });
    }
    else {
      if(!this.rightAnswer){
        this.snackBar.open('', 'Vous devez sélectionner une bonne réponse!', {
          duration: 5000,
        });
      }
      else{
        this.question.getRightAnswer=this.rightAnswer;
        this.question.getAnswerList=this.answerList;
        this.questionService.saveQuestion(this.question).subscribe();
      }
    }
  }

}
