import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment} from 'src/environments/environment.development';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AuthActions } from '../store/auth/auth.actions';
import { User } from '../models/users';
import { selecAuthUser } from '../store/auth/auth.selectors';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
public authUser$ = this.store.select(selecAuthUser)

  constructor(private http:HttpClient, private store:Store) { }

handleAuthUser(user:User):void{
  this.store.dispatch(AuthActions.setAuthUser({data:user}))
}

login(username: string, password: string): Observable<boolean> {
  return new Observable<boolean>((observer) => {
    this.getUsers(username, password).subscribe({
      next: (response: any) => {
        console.log(response)
        if (response.length > 0) {
          this.handleAuthUser(response[0])
          sessionStorage.setItem('currentUser', response[0].token);
          observer.next(true);
        } else {
          observer.next(false);
        }
        observer.complete();
      },
      error: (error: any) => {
        console.error('Error en la solicitud:', error);
        observer.error(error);
      },
    });
  });
}

verifyToken(token:string){
  this.getUserByToken(token).subscribe({
    next: (response: any) => {
      console.log(response)
      if (response.length > 0) {
        this.handleAuthUser(response[0])
      } 
    },
    error: (error: any) => {
      console.error('Error en la solicitud:', error);
     
    },
  });

}
  logout(): void {
    this.store.dispatch(AuthActions.clearAuthUser())
    sessionStorage.removeItem('currentUser');
  }

  isAuthenticated(): boolean {

    return sessionStorage.getItem('currentUser') !== null;
  }
  
  getUsers(user: string, password: string){
   
    return this.http.get(environment.API+"users?user="+user+"&password="+password)
  }
  getUserByToken(token:string){
    return this.http.get(environment.API+"users?token="+token)
  }
}
