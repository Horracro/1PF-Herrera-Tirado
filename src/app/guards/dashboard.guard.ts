import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { selectAuthState } from 'src/app/store/auth/auth.selectors';

@Injectable({
  providedIn: 'root',
})
export class DashboardGuard implements CanActivate {
  constructor(private store: Store, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.store.pipe(
      select(selectAuthState),
      map((authState) => {
        const authUser = authState.authUser;
        
        if (authUser && authUser.rol === 'master') {
          return true;
        } else {
         
          this.router.navigate(['/dashboard/home']);
          return false;
        }
      })
    );
  }
}