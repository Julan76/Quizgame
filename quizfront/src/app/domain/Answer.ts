export class Answer {
  private label:string;

  get getLabel(): string {
    return this.label;
  }

  set getLabel(value: string) {
    this.label = value;
  }
}
