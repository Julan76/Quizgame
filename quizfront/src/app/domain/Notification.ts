export class Notification {
  public user: string;
  public quizz : string;
  public date : string;

  constructor(user: string, quizz: string, date: string) {
    this.user = user;
    this.quizz = quizz;
    this.date = date;
  }
  concatUrl() : string {
    return this.user+'¤¤'+this.quizz+'¤¤'+this.date;
  }
}
