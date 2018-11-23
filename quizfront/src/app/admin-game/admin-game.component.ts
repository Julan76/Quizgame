import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTabChangeEvent} from "@angular/material";
import {CreateQuizComponent} from "./create-quiz/create-quiz.component";


@Component({
  selector: 'app-admin-game',
  templateUrl: './admin-game.component.html',
  styleUrls: ['./admin-game.component.css']
})
export class AdminGameComponent implements OnInit {
  @ViewChild('createQuizChildComponent') createQuizChildComponent;

  constructor() { }

  ngOnInit() {
  }
  updateViewCreateQuiz(event : MatTabChangeEvent): void {
    if(event.tab.textLabel == "Créer un quiz"){
      this.createQuizChildComponent.loadQuestions();
    }
  }

}
