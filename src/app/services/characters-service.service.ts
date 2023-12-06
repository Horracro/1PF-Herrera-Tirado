import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { interval, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment.development';

export interface Character{
  id:number,
  clase: string, 
  raza: string, 
  region: string,
  principalStat: string
}
@Injectable({
  providedIn: 'root'
})
export class CharactersService{

  constructor(private http: HttpClient) { }
getSeconds():Observable<number>{
  return interval(1000)

}
  getCharacters():Observable<Character []>{
   return this.http.get<Character []>(environment.API+"characters")
  }
  deleteCharacter(id: number): Observable<Object> {
    return this.http.delete(environment.API+"characters/"+id)
  }
  addCharacter(character:Character){
    return this.http.post(environment.API+"characters/",character)
  }
  updateCharacter(character:Character, id:number){
    return this.http.patch(environment.API+"characters/"+id,character)
  }

  getNotifications():Observable<any>{
    return interval(1000)
  }
}
