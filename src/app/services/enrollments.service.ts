import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentsService {

  constructor(private http: HttpClient) { }
  getEnrollments():Observable<Object>{
    return this.http.get(environment.API+"enrollments?_expand=character&_expand=course")
  }
}
