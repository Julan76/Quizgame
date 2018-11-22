import {Question} from "./Question";


export class Quiz   {
  private _duration: number;
  private _name: string;
  private _description: string;
  private _questionList: Question[];


  get duration(): number {
    return this._duration;
  }

  set duration(value: number) {
    this._duration = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get questionList(): Question[] {
    return this._questionList;
  }

  set questionList(value: Question[]) {
    this._questionList = value;
  }
}
