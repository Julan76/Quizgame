import {Component, Input, OnInit} from '@angular/core';
import {Quiz} from "../domain/Quiz";
import {timer} from "rxjs";

@Component({
  selector: 'app-play-game',
  templateUrl: './play-game.component.html',
  styleUrls: ['./play-game.component.css']
})
export class PlayGameComponent implements OnInit {
  @Input() game : Quiz;
  @Input() dateDone : Date;
  selectedAnswer: string;

  constructor() {


  }

  ngOnInit() {
  }

}
