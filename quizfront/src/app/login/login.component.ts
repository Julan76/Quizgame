import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthenticationService} from '../service/authentication/authentication.service';
import {MatSnackBar, MatStepper} from '@angular/material';
import {UserService} from "../service/user/user.service";
import {AppUser} from "../domain/AppUser";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userLoginControl: FormGroup;
  userRegisterControl: FormGroup;
  appUser: AppUser ;


  constructor(private authService: AuthenticationService, private router: Router, public snackBar: MatSnackBar,private userService: UserService) {}
  ngOnInit() {
   this.buildFormLogin();
   this.buildFormRegister();
  }
  buildFormRegister() {
    this.userRegisterControl = new FormGroup({
      'firstname':  new FormControl('', Validators.required),
      'lastname':  new FormControl('', Validators.required),
      'password':  new FormControl('', Validators.required),
      'repassword':  new FormControl('', Validators.required),
      'mail': new FormControl('', Validators.required)
    });
  }
  buildFormLogin() {
    this.userLoginControl = new FormGroup({
      'mail': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.required)
    });
  }
  onLogin() {
    this.authService.login(this.userLoginControl.value).subscribe(resp => {
        const jwtToken = resp.headers.get('Authorization');
        this.authService.saveToken(jwtToken);
        this.userService.theUser$.subscribe(user => {
          if(this.userService.isAdmin(user)){
            this.router.navigateByUrl('/admin-game');
          }
          else {
            this.router.navigateByUrl('/game-list')
          }
        });
      },
      error => {
        this.snackBar.open('Identifiants incorrects ', error.message, {
          duration: 5000,
        });
    });

  }
  onRegister(stepper: MatStepper) {
    if ( this.userRegisterControl.value.password.localeCompare(this.userRegisterControl.value.repassword) === 0) {
      this.authService.register(this.userRegisterControl.value).subscribe(resp => {
        this.snackBar.open('Votre compte a bien été créé ', 'welcome !' , {
          duration: 5000,
        });
        stepper.previous();
        this.buildFormRegister();
      }, error1 =>  {
        this.snackBar.open('Votre compte n\'a pas été créé !', error1.error.message, {
          duration: 5000,
        });
      });
    } else {
      this.snackBar.open('Vous devez confirmer votre mot de passe !', 'mot de passe', {
        duration: 5000,
      });

    }
  }
}
