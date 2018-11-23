import {Question} from "./Question";


export class Quiz   {
  private duration: number;
  private name: string;
  private description: string;
  private questionList: Question[];


  get getduration(): number {
    return this.duration;
  }

  set getduration(value: number) {
    this.duration = value;
  }

  get getname(): string {
    return this.name;
  }

  set getname(value: string) {
    this.name = value;
  }

  get getdescription(): string {
    return this.description;
  }

  set getdescription(value: string) {
    this.description = value;
  }

  get getquestionList(): Question[] {
    return this.questionList;
  }

  set getquestionList(value: Question[]) {
    this.questionList = value;
  }
}
