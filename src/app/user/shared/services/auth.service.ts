import { Injectable } from "@angular/core";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import { FbAuthResponse, User } from "../user.interface";
import { Observable, Subject, throwError } from "rxjs";
import {catchError, tap} from 'rxjs/operators';
import { environment } from "src/environments/environment";

@Injectable({providedIn: 'root'})
export class AuthService {
  public error$: Subject<string> = new Subject<string>();
  constructor(private http: HttpClient) {}

  get token(): any {
    let expDate = new Date(localStorage.getItem('fb-token-exp') as string);
    if (new Date() > expDate) {
      this.logOut();
      return null;
    }
    return localStorage.getItem('fb-token');
  }

  login(user: User): Observable<any> {
    user.returnSecureToken = true;
    return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`, user)
    .pipe(
      tap(this.setToken),
    catchError(this.handleError.bind(this))
    );
  }

  private handleError(error: HttpErrorResponse) {
    const {message} = error.error.error;
    switch (message) {
      case 'INVALID_EMAIL':
        this.error$.next('Неверный email');
        break;
      case 'INVALID_PASSWORD':
        this.error$.next('Неверный пароль');
        break;
      case 'EMAIL_NOT_FOUND':
        this.error$.next('Email не найден');
        break;
    }
    console.log(message);
    return throwError(error);
  }

  logOut() {
    this.setToken(null);
  }

  isAuthenticated(): boolean {
    return !!this.token
  }

  private setToken(FbAuthResponse: any) {
    if (FbAuthResponse) {
      let expDate = new Date( new Date().getTime() + FbAuthResponse.expiresIn * 1000);
      localStorage.setItem('fb-token', FbAuthResponse.idToken);
      localStorage.setItem('fb-token-exp', expDate.toString());
    } else {
      localStorage.clear();
    }
  }
}