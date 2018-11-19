export class AppUser {
  private mail: string;
  private firstName: string;
  private lastName: string;
  private roles: string [];


  public constructor(mail: string, firstName: string, lastName: string, roles: string[]) {
    this.mail = mail;
    this.firstName = firstName;
    this.lastName = lastName;
    this.roles = roles;
  }
}
