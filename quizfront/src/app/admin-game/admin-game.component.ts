import { Component, OnInit } from '@angular/core';
import {Question} from "../domain/Question";
import {Answer} from "../domain/Answer";

@Component({
  selector: 'app-admin-game',
  templateUrl: './admin-game.component.html',
  styleUrls: ['./admin-game.component.css']
})
export class AdminGameComponent implements OnInit {
  question: Question=new Question();
  rightAnswer: Answer;
  answerList: Answer[];

  constructor() { }

  ngOnInit() {
  }

}
