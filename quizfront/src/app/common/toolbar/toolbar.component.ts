import {Component, OnInit} from '@angular/core';
import {UserService} from "../../service/user/user.service";
import {AppUser} from "../../domain/AppUser";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  appUser: AppUser ;

  constructor(private userService: UserService) { }

  ngOnInit() {
    console.log("ggg");
    console.log(this.appUser);
    this.appUser= this.userService.getUser().subscribe(
      user => {
        this.appUser= user
      }
    );
    console.log(this.appUser);

  }

}
