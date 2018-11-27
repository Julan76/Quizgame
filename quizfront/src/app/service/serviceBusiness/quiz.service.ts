import { Injectable } from '@angular/core';
import {Question} from "../../domain/Question";
import {Observable, of} from "rxjs";
import {catchError, tap} from "rxjs/operators";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {MatSnackBar} from "@angular/material";
import {Quiz} from "../../domain/Quiz";

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
  successMessage(){
    this.snackBar.open('Sauvegarde effectuée ! ', 'Bien joué !', {
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
