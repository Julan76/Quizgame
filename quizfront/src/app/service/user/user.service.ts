import {Injectable} from '@angular/core';
import {AppUser} from "../../domain/AppUser";
import {BehaviorSubject, Observable} from "rxjs";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  appUser: BehaviorSubject<AppUser> ;
  theUser$: Observable<AppUser>;

  constructor(private router: Router) {
    this.appUser=new BehaviorSubject<AppUser>(null);
    this.theUser$=this.appUser.asObservable();
  }

  saveUser(tokenDecoded){
    this.appUser.next(new AppUser(tokenDecoded.sub,tokenDecoded.firstname,tokenDecoded.lastname,tokenDecoded.roles));
  }
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login'])
  }


}
