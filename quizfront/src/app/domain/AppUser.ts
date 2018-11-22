import {Role} from "./Role";

export class AppUser {
  private mail: string;
  private firstName: string;
  private lastName: string;
  private roles: Role [];


  public constructor(mail: string, firstName: string, lastName: string, roles: Role[]) {
    this.mail = mail;
    this.firstName = firstName;
    this.lastName = lastName;
    this.roles = roles;
  }

  get getMail(): string {
    return this.mail;
  }

  get getFirstName(): string {
    return this.firstName;
  }

  get getLastName(): string {
    return this.lastName;
  }

  get getRoles(): Role[] {
    return this.roles;
  }
}
