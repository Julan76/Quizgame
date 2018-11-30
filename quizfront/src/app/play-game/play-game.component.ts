import {Component, Input, OnInit} from '@angular/core';
import {Quiz} from "../domain/Quiz";
import {timer} from "rxjs";
import {Question} from "../domain/Question";

@Component({
  selector: 'app-play-game',
  templateUrl: './play-game.component.html',
  styleUrls: ['./play-game.component.css']
})
export class PlayGameComponent implements OnInit {
  @Input() game : Quiz;
  @Input() dateDone : Date;

  constructor() {
  }

  ngOnInit() {
  }
  updateCheckbox(question: Question,j : number){
    question.answerList.forEach(ans => {
      if(ans.label!==question.answerList[j].label){
        ans.val=false
      } else{
        question.proposition=question.answerList[j].label;
      }
    })

  }

}
