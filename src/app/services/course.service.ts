import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,  } from 'rxjs';
import { environment } from 'src/environments/environment.development';
export interface regionsFic{
  nombre: string,
  clima:string,
  plano:string
  ubicacion:string}
@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) { }

  getCourses():Observable<Object>{
    return this.http.get(environment.API+"courses")
  }

}
