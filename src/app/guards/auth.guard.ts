import { inject } from '@angular/core';
import { CanActivateFn, Router, UrlTree } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  
  const currentUser = sessionStorage.getItem('currentUser');
  if (currentUser) {
   
    return true;}
    else {
    
      inject(Router).navigateByUrl('/login');
      return false;
    }

};
