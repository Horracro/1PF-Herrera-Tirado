import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment} from 'src/environments/environment.development';

import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http:HttpClient) { }


login(username: string, password: string): Observable<boolean> {
  return new Observable<boolean>((observer) => {
    this.getUsers(username, password).subscribe({
      next: (response: any) => {
        console.log(response)
        if (response.length > 0) {
          sessionStorage.setItem('currentUser', username);
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


  logout(): void {

    sessionStorage.removeItem('currentUser');
  }

  isAuthenticated(): boolean {

    return sessionStorage.getItem('currentUser') !== null;
  }
  
  getUsers(user: string, password: string){
   
    return this.http.get(environment.API+"users?user="+user+"&password="+password)
  }
}
