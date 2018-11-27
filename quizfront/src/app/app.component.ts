import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  /*

  message: string ='';
  private serverUrl = 'http://localhost:8080/socket';
  title = 'WebSockets chat';
  private stompClient;

  showConversation: boolean = false;
  greetings: string[] = [];


  constructor(){
    this.initializeWebSocketConnection();
  }

  initializeWebSocketConnection(){
    let ws = new SockJS(this.serverUrl);
    this.stompClient = Stomp.over(ws);
    let that = this;
    this.stompClient.connect({}, function(frame) {
      that.stompClient.subscribe("/chat", (message) => {
        console.log(message);
        that.showGreeting(message.body);
      });
    });
  }

  sendMessageRegister(essage){
    this.stompClient.send("/app/send/message" , {}, this.message);
  }


  showGreeting(message) {
    this.showConversation = true;
    this.greetings.push(message)
  }
 */
}
