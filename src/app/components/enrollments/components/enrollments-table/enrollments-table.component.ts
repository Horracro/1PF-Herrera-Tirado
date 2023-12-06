import { Component, OnInit } from '@angular/core';
import { EnrollmentsService } from 'src/app/services/enrollments.service';

@Component({
  selector: 'app-enrollments-table',

  templateUrl: './enrollments-table.component.html',
  styleUrl: './enrollments-table.component.scss'
})
export class EnrollmentsTableComponent implements OnInit {
  displayedColumns = ["nombre",'curso','acciones']
  enrollments!:any
  constructor(private enrollmentService:EnrollmentsService){}
  ngOnInit(): void {
    
 this.enrollmentService.getEnrollments().subscribe(data=>{
  this.enrollments = data
  console.log(data)
}) 
 
  }}

