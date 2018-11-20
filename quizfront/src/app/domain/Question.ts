import {Answer} from "./Answer";

export class Question {
  private _label:string;
  private _theme:string;
  private _answerList: Answer[];
  private _rightAnswer: Answer;



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
