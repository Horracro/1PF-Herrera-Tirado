import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavbarComponent } from './components/side-navbar/side-navbar.component';
import { NgIf } from '@angular/common';
import { ModalFormComponent } from './components/modal-form/modal-form.component';
import { TableCharactersModule } from './components/table-characters/table-characters.module';
import { LoaderComponent } from './components/loader/loader.component';
import { CoursesComponent } from './components/courses/courses.component';
import { ClassesComponent } from './components/classes/classes.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    SideNavbarComponent,
    ModalFormComponent,
    LoaderComponent,
    CoursesComponent,
    ClassesComponent,
    LoginComponent,
    HomeComponent,

  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    NgIf,
    TableCharactersModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
