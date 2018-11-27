import {Injectable} from '@angular/core';
import {Question} from "../../domain/Question";
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {MatSnackBar} from "@angular/material";
import {catchError, tap} from "rxjs/operators";
import {of} from 'rxjs/observable/of';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private host = 'http://localhost:8080';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient,public snackBar: MatSnackBar) { }

  saveQuestion (question : Question): Observable<Question> {
    return this.http.post<Question>(this.host+'/questions',question,this.httpOptions).pipe(
      tap((question: Question) => this.successMessage()),
      catchError(this.handleError<Question>('question')))
  }
  getQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(this.host+'/questions',this.httpOptions).pipe(
      catchError(this.handleError<Question[]>('question'))
    )
  }
  successMessage(){
    this.snackBar.open('Sauvegarde effectuée ! ', 'Bien joué !', {
      duration: 4000,
    });
  }
  errorMessage(error) {
    this.snackBar.open('Une erreur est survenue ', error.error.status+' '+error.error.message+'!', {
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
