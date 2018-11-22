import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {JwtHelper} from 'angular2-jwt';
import {UserService} from "../user/user.service";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private host = 'http://localhost:8080';
  private jwtToken = null;
  private roles: Array<any>;
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };
  constructor(private  http: HttpClient,private userService: UserService) {}

  login(user) {
    return this.http.post(this.host + '/login', user, {observe: 'response'});

  }
  register(userForm) {
    return this.http.post(this.host + '/register', userForm, this.httpOptions);
  }

  saveToken(jwt: string) {
    this.jwtToken = jwt;
    localStorage.setItem('token', jwt);
    const jwtHelper = new JwtHelper();
    const decodeToken= jwtHelper.decodeToken(this.jwtToken);
    this.userService.saveUser(decodeToken);
    this.roles = decodeToken.roles;
  }
   getToken() {
   return  localStorage.getItem('token');
  }
  logout() {
    this.jwtToken = null;
    this.userService.logout()
  }
  isAdmin() {
    for (const r of this.roles) {
      if (r.authority === 'ADMIN') { return true; }
    }
    return false;
  }

  isLogged() {
    if(this.getToken()) {
      return true;
    }
    else return false;
  }
}
