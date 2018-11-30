import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {MyOwnCustomMaterialModuleModule} from './my-own-custom-material.module';
import {LoginComponent} from './login/login.component';
import {GameListComponent} from './game-list/game-list.component';
import {AdminGameComponent} from './admin-game/admin-game.component';
import {ToolbarComponent} from './common/toolbar/toolbar.component';
import {TokenInterceptorService} from "./service/interceptor/token-interceptor.service";
import {JwtValidityInterceptorService} from "./service/interceptor/jwt-validity-interceptor.service";
import {CreateQuestionsComponent} from './admin-game/create-questions/create-questions.component';
import {CreateQuizComponent} from './admin-game/create-quiz/create-quiz.component';
import {FilterPipe} from "./common/filter/filterPipe";
import { RegisterPlayComponent } from './register-play/register-play.component';
import { PlayGameComponent } from './play-game/play-game.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GameListComponent,
    AdminGameComponent,
    ToolbarComponent,
    CreateQuestionsComponent,
    CreateQuizComponent,
    FilterPipe,
    RegisterPlayComponent,
    PlayGameComponent
  ],
  imports: [
    BrowserModule, MyOwnCustomMaterialModuleModule, HttpClientModule, FormsModule, AppRoutingModule, ReactiveFormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtValidityInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
