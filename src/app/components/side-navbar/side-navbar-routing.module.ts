import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableCharactersComponent } from '../table-characters/table-characters.component';
import { CoursesComponent } from '../courses/courses.component';
import { ClassesComponent } from '../classes/classes.component';
import { SideNavbarComponent } from './side-navbar.component';
import { HomeComponent } from '../home/home.component';

const routes: Routes = [
  {
    path: '',
    component: SideNavbarComponent, 
    children: [
      { path: 'table', component: TableCharactersComponent },
      { path: 'courses', component: CoursesComponent },
      { path: 'classes/:id', component: ClassesComponent },
      { path: 'classes', component: ClassesComponent },
      { path: 'home', component: HomeComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' } 
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SideNavbarRoutingModule { }
