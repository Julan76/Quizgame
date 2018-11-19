import {EventEmitter, Injectable} from '@angular/core';
import {AppUser} from "../../domain/AppUser";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  appUser: EventEmitter<AppUser> = new EventEmitter() ;
  constructor() { }

  saveUser(tokenDecoded){
    this.appUser.emit(new AppUser(tokenDecoded.sub,tokenDecoded.firstname,tokenDecoded.lastname,tokenDecoded.roles));
  }
  getUser(){
    return this.appUser;
  }
}
