import {Answer} from "./Answer";

export class Question {
  private label:string;
  private theme:string;
  private answerList: Answer[];
  private rightAnswer: Answer;


  set getLabel(value: string) {
    this.label = value;
  }

  set getTheme(value: string) {
    this.theme = value;
  }

  set getAnswerList(value: Answer[]) {
    this.answerList = value;
  }

  set getRightAnswer(value: Answer) {
    this.rightAnswer = value;
  }

  get getLabel(): string {
    return this.label;
  }

  get getTheme(): string {
    return this.theme;
  }

  get getAnswerList(): Answer[] {
    return this.answerList;
  }

  get getRightAnswer(): Answer {
    return this.rightAnswer;
  }
}
