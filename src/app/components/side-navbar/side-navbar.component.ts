
import { Component, OnDestroy, ViewChild } from '@angular/core';
import { TableCharactersComponent } from '../table-characters/table-characters.component';
import { CharactersService } from '../../services/characters-service.service';
import { Subscription,  } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.scss']
})
export class SideNavbarComponent implements OnDestroy {
  showFiller = false;
  newCharacter: any
  counter: number = 0
  counterSubscription!: Subscription
  notificationSubscription!: Subscription
  @ViewChild(TableCharactersComponent) tableCharactersComponent!: TableCharactersComponent;
  numberOfCharacters: number = this.tableCharactersComponent?.dataSource.length
  totalRegistrosHijo = 0;
  constructor(private router: Router, private charactersService: CharactersService) {
    this.counterSubscription = this.charactersService.getSeconds().subscribe({
      next: (v) => { this.counter = v },
    })
  }
  ngOnDestroy(): void {
    if (this.counterSubscription) {
      this.counterSubscription.unsubscribe();
    }
    if (this.notificationSubscription)
      this.notificationSubscription.unsubscribe();
  }
  logout(){
    sessionStorage.removeItem("currentUser")
    this.router.navigate(['/login']);
  }



}
