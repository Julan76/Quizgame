import {Role} from "./Role";



export class AppUser {
  public mail: string;

  public firstName: string;

  public lastName: string;

  public roles: Role [];


  constructor(mail: string, firstName: string, lastName: string, roles: Role[]) {
    this.mail = mail;
    this.firstName = firstName;
    this.lastName = lastName;
    this.roles = roles;
  }
}
