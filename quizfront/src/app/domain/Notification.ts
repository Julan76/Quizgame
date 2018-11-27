export class Notification {
  public user: string;
  public quizzId : string;
  public quizzName : string;
  public date : string;

  constructor(user: string, quizzId: string, quizzName: string, date: string) {
    this.user = user;
    this.quizzId = quizzId;
    this.quizzName = quizzName;
    this.date = date;
  }

  concatUrl() : string {
    return this.user+'¤¤'+this.quizzId+'¤¤'+this.quizzName+'¤¤'+this.date;
  }
}
