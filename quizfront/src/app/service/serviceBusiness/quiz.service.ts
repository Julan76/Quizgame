import { Injectable } from '@angular/core';
import {Question} from "../../domain/Question";
import {Observable, of} from "rxjs";
import {catchError, tap} from "rxjs/operators";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {MatSnackBar} from "@angular/material";
import {Quiz} from "../../domain/Quiz";
import {Player} from "../../domain/Player";

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  private host = 'http://localhost:8080';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(public snackBar: MatSnackBar,private http: HttpClient) { }

  saveQuiz (quiz : Quiz): Observable<Question> {
    return this.http.post<Question>(this.host+'/quiz',quiz,this.httpOptions).pipe(
      tap((question: Question) => this.successMessage()),
      catchError(this.handleError<Question>('quiz')))
  }
  calculateScore (quiz : Quiz): Observable<string> {
    return this.http.post(this.host+'/quiz/compute',quiz,{responseType: 'text'}).pipe(
      tap((ans: string) => this.successMessage()),
      catchError(this.handleError<string>('quiz')))
  }
  retriveQuizs(): Observable<Quiz[]> {
    return this.http.get<Quiz[]>(this.host+'/quiz',this.httpOptions).pipe(
      catchError(this.handleError<Quiz[]>('quiz'))
    )
  }

  findQuizById(id: string) : Observable<Quiz> {
    return this.http.get<Quiz>(this.host+'/quiz/'+id,this.httpOptions).pipe(
      catchError(this.handleError<Quiz>('quiz'))
    )
  }
  findQuizzPlayers(id:string, date : string): Observable<Player[]>{
    return this.http.get<Player[]>(this.host+'/quiz/players/'+id+'/'+date,this.httpOptions).pipe(
      catchError(this.handleError<Player[]>('quiz'))
    )

  }
  successMessage(){
    this.snackBar.open('Opération effectuée ! ', 'Bien joué !', {
      duration: 4000,
    });
  }
  errorMessage(error) {
    this.snackBar.open('Une erreur est survenue ! ', error.error.status+' '+error.error.message+'!', {
      duration: 5000,
    });
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      this.errorMessage(error);
      // TODO: send the error to remote logging infrastructure
      console.log(error); // log to console instead


      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
