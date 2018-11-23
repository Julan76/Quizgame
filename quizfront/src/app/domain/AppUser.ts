import {Role} from "./Role";



export class AppUser {
  private mail: string;

  private firstName: string;

  private lastName: string;

  private roles: Role [];


  get getmail(): string {
    return this.mail;
  }

  set getmail(value: string) {
    this.mail = value;
  }

  get getfirstName(): string {
    return this.firstName;
  }

  set getfirstName(value: string) {
    this.firstName = value;
  }

  get getlastName(): string {
    return this.lastName;
  }

  set getlastName(value: string) {
    this.lastName = value;
  }

  get getroles(): Role[] {
    return this.roles;
  }

  set getroles(value: Role[]) {
    this.roles = value;
  }

  constructor(mail: string, firstName: string, lastName: string, roles: Role[]) {
    this.mail = mail;
    this.firstName = firstName;
    this.lastName = lastName;
    this.roles = roles;
  }
}
