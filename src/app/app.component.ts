import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { selectAuthState } from './store/auth/auth.selectors';
import { User } from './models/users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = '1PFHerreraTirado';

  constructor(private authService: AuthService, ) {}
  ngOnInit(): void {
    const storedUser = sessionStorage.getItem('currentUser');
    if (storedUser) {
      
          this.authService.verifyToken(storedUser);}
    
     
    }
  }

