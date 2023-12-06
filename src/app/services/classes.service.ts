import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment.development';
export interface Classes{
  nombre:string,
  tipo:string,
  descripcion:string
}
@Injectable({
  providedIn: 'root'
})
export class ClassesService {

  constructor(private http: HttpClient) { }
  getClasses():Observable<Object>{
    return this.http.get(environment.API+"clases")
  }
  getClassesById(id:number):Observable<Object>{
    return this.http.get(environment.API+"clases?curso_id="+id)
  } 
}
