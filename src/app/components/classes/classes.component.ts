import { Component, OnInit } from '@angular/core';
import { ClassesService } from '../../services/classes.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
export interface Classes{
  nombre:string,
  tipo:string,
  descripcion:string
}
@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements OnInit {
  displayedColumns: string[] = ['nombre', 'curso', 'descripcion'];
  classe$!:Observable<Object>
  classes!:any
  loader =false
  courseName!:string|undefined
  cursoId: number | null = null; 
  constructor(private ClassesService:ClassesService, private route: ActivatedRoute){
   
  } 
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log(params)
      this.cursoId = params['id'];
      if (this.cursoId) {
        this.courseName = this.getCourseName(this.cursoId)
        this.classe$ = this.ClassesService.getClassesById(this.cursoId)
      } else {
        this.classe$ = this.ClassesService.getClasses()
  
      }
 })
    
    this.classe$.subscribe(data=>{
      console.log(data)
      this.classes = data
    })
  }
  getCourseName(id: number): string | undefined {
    const coursesName: Record<number, string> = {
      1: "Curso de Mago",
      2: "Curso de Guerrero",
      3: "Curso de Pícaro"
    };
  
    return coursesName[id];
  }
  
}
