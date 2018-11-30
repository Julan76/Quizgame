import {Component, OnInit} from '@angular/core';
import {UserService} from "../../service/user/user.service";
import {AppUser} from "../../domain/AppUser";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../service/authentication/authentication.service";
import {Stomp} from "@stomp/stompjs";
import * as SockJS from 'sockjs-client';
import {WebsocketConnectionService} from "../../service/socket/websocket-connection.service";
import {Notification} from "../../domain/Notification";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  appUser: AppUser ;
  private subscription;
  isAdmin: boolean=false;
  private stompClient;
  notifications: Notification[] = [];

  constructor(private userService: UserService,private router: Router,private authenticationService : AuthenticationService,private websocket: WebsocketConnectionService) {
    this.checkUser();
    this.stompClient=this.websocket.getStompClient();

    this.stompClient.connect({}, (frame) => {
      return this.stompClient.subscribe("/register-play", (message) => {
        this.addNotification(message.body);
      });
    });
  }

  ngOnInit() {
    if(this.authenticationService.isLogged()){
      this.appUser= this.userService.getLoggedUser(this.authenticationService.getToken());
      this.isAdmin=this.userService.isAdmin(this.appUser);
    }
    else {
      this.checkUser();
    }
  }
  addNotification(message) {
   const messageSplited = message.split('¤¤');
    this.notifications.push(new Notification(messageSplited[0],messageSplited[1],messageSplited[2],messageSplited[3]));
  }
  checkUser(){
    this.subscription = this.userService.theUser$.subscribe(
      user => {
        this.appUser= user;
        this.isAdmin=this.userService.isAdmin(user);
      }
    )
  }
  joinQuiz(notif) {
    this.websocket.sendMessageJoin(notif.concatUrl(),this.appUser.firstName+'¤¤'+this.appUser.lastName+'¤¤'+this.appUser.mail);
    //this.websocket.sendMessageRegister(notif.concatUrl());
    this.router.navigate(['/register-play/'+notif.concatUrl()])
  }
  redirectToLogin() {
    this.router.navigate(['/login'])
  }
  redirectToHome() {
    this.router.navigate(['/game-list'])
  }
  logout(){
    this.userService.logout();
    this.appUser=null;
    this.isAdmin=false;
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
