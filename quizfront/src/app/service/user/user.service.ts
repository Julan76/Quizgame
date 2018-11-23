import {Injectable} from '@angular/core';
import {AppUser} from "../../domain/AppUser";
import {BehaviorSubject, Observable} from "rxjs";
import {Router} from "@angular/router";
import {AuthenticationService} from "../authentication/authentication.service";
import {JwtHelper} from "angular2-jwt";

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
  getLoggedUser(tokenEncoded){
    const jwtHelper = new JwtHelper();
    const decodeToken= jwtHelper.decodeToken(tokenEncoded);
    return new AppUser(decodeToken.sub,decodeToken.firstname,decodeToken.lastname,decodeToken.roles);
  }
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login'])
  }
  isAdmin(user : AppUser){
    if(user){
      for (const r of user.getroles) {
        if (r.getauthority === 'ADMIN') { return true; }
      }
      return false;
    }
  }


}
