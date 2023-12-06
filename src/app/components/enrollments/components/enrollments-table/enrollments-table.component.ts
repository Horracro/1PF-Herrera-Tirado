import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { EnrollmentsService } from 'src/app/services/enrollments.service';
import {
  selectEnrollments,
  selectEnrollmentsisLoading,
} from '../../store/enrollment.selectors';
import { MatDialog } from '@angular/material/dialog';
import { LoaderComponent } from 'src/app/components/loader/loader.component';

@Component({
  selector: 'app-enrollments-table',
  templateUrl: './enrollments-table.component.html',
  styleUrl: './enrollments-table.component.scss',
})
export class EnrollmentsTableComponent implements OnInit {
  displayedColumns = ['nombre', 'curso', 'acciones'];
  enrollments!: any;
  enrollments$!: Observable<any>;
  loader!: Observable<boolean>;
  constructor(private store: Store, private dialog: MatDialog) {
    this.enrollments$ = this.store.select(selectEnrollments);
    this.loader = this.store.select(selectEnrollmentsisLoading);
    console.log(this.loader);
    this.loader.subscribe((data) => {
      if (data) {
        this.showLoader();
      } else this.closeLoader();
    });
  }
  ngOnInit(): void {}
  showLoader() {
    this.dialog.open(LoaderComponent, {
      disableClose: true,
      panelClass: 'custom-loader-dialog',
    });
  }

  closeLoader() {
    this.dialog.closeAll();
  }
}
