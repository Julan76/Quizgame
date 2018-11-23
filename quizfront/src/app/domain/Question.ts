import {Answer} from "./Answer";

export class Question {
  private label:string;
  private theme:string;
  private answerList: Answer[];
  private rightAnswer: Answer;


  get getlabel(): string {
    return this.label;
  }

  set setlabel(value: string) {
    this.label = value;
  }

  get gettheme(): string {
    return this.theme;
  }

  set gettheme(value: string) {
    this.theme = value;
  }

  get getanswerList(): Answer[] {
    return this.answerList;
  }

  set getanswerList(value: Answer[]) {
    this.answerList = value;
  }

  get getrightAnswer(): Answer {
    return this.rightAnswer;
  }

  set getrightAnswer(value: Answer) {
    this.rightAnswer = value;
  }
}
