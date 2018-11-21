import {Answer} from "./Answer";

export class Question {
  private _label:string;
  private _theme:string;
  private _answerList: Answer[];
  private _rightAnswer: Answer;


  set label(value: string) {
    this._label = value;
  }

  set theme(value: string) {
    this._theme = value;
  }

  set answerList(value: Answer[]) {
    this._answerList = value;
  }

  set rightAnswer(value: Answer) {
    this._rightAnswer = value;
  }

  get label(): string {
    return this._label;
  }

  get theme(): string {
    return this._theme;
  }

  get answerList(): Answer[] {
    return this._answerList;
  }

  get rightAnswer(): Answer {
    return this._rightAnswer;
  }
}
