export class Answer {
  private _label:string;

  get label(): string {
    return this._label;
  }

  set label(value: string) {
    this._label = value;
  }
}
