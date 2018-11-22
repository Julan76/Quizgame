import {Answer} from "./Answer";

export class Question {
  private _label:string;
  private _theme:string;
  private _answerList: Answer[];
  private _rightAnswer: Answer;


  get label(): string {
    return this._label;
  }

  set label(value: string) {
    this._label = value;
  }

  get theme(): string {
    return this._theme;
  }

  set theme(value: string) {
    this._theme = value;
  }

  get answerList(): Answer[] {
    return this._answerList;
  }

  set answerList(value: Answer[]) {
    this._answerList = value;
  }

  get rightAnswer(): Answer {
    return this._rightAnswer;
  }

  set rightAnswer(value: Answer) {
    this._rightAnswer = value;
  }
}
