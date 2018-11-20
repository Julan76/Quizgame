import {Role} from "./Role";

export class AppUser {
  private _mail: string;
  private _firstName: string;
  private _lastName: string;
  private _roles: Role [];


  public constructor(mail: string, firstName: string, lastName: string, roles: Role[]) {
    this._mail = mail;
    this._firstName = firstName;
    this._lastName = lastName;
    this._roles = roles;
  }

  get mail(): string {
    return this._mail;
  }

  get firstName(): string {
    return this._firstName;
  }

  get lastName(): string {
    return this._lastName;
  }

  get roles(): Role[] {
    return this._roles;
  }
}
