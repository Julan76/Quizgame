import {Role} from "./Role";



export class AppUser {
  private _mail: string;

  private _firstName: string;

  private _lastName: string;

  private _roles: Role [];


  get mail(): string {
    return this._mail;
  }

  set mail(value: string) {
    this._mail = value;
  }

  get firstName(): string {
    return this._firstName;
  }

  set firstName(value: string) {
    this._firstName = value;
  }

  get lastName(): string {
    return this._lastName;
  }

  set lastName(value: string) {
    this._lastName = value;
  }

  get roles(): Role[] {
    return this._roles;
  }

  set roles(value: Role[]) {
    this._roles = value;
  }

  constructor(mail: string, firstName: string, lastName: string, roles: Role[]) {
    this._mail = mail;
    this._firstName = firstName;
    this._lastName = lastName;
    this._roles = roles;
  }
}
