import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CourseService } from '../../services/course.service';

export interface COURSE_MODEL{
  nombre: string,
  fecha_inicio:string,
  fecha_fin:string
  descripcion:string}
@Component({
  selector: 'app-regions',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  id!:string|null;
  displayedColumns: string[] = ['nombre', 'fecha_inicio', 'fecha_fin', 'descripcion'];
  courses$!:Observable<Object>
  courses!: any
  loader:boolean =false;
  cursoId: number | null = null; 
  constructor(courseService:CourseService){
      this.courses$ = courseService.getCourses()
      this.courses$.subscribe(data=>{
        this.courses = data
      })
  }
  ngOnInit() {
   
}
}
