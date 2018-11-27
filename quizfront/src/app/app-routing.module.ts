import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {AdminGameComponent} from './admin-game/admin-game.component';
import {GameListComponent} from './game-list/game-list.component';
import {RegisterPlayComponent} from "./register-play/register-play.component";

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'game-list', component: GameListComponent},
  { path: 'admin-game', component: AdminGameComponent},
  { path: 'register-play/:userQuizIdNameAndDate', component: RegisterPlayComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
