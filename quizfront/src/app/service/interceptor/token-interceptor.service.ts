import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {AuthenticationService} from "../authentication/authentication.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private authenticationService : AuthenticationService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(this.authenticationService.getToken());
    if(this.authenticationService.getToken()){
      req = req.clone({
        setHeaders: {
          Authorization: this.authenticationService.getToken()
        }
      });
    }
    return next.handle(req);
  }
}
