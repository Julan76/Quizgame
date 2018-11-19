import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {MyOwnCustomMaterialModuleModule} from './my-own-custom-material.module';
import {LoginComponent} from './login/login.component';
import {AuthenticationService} from './service/authentication.service';
import { GameListComponent } from './game-list/game-list.component';
import { AdminGameComponent } from './admin-game/admin-game.component';
import { ToolbarComponent } from './common/toolbar/toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GameListComponent,
    AdminGameComponent,
    ToolbarComponent,

  ],
  imports: [
    BrowserModule, MyOwnCustomMaterialModuleModule, HttpClientModule, FormsModule, AppRoutingModule, ReactiveFormsModule
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
