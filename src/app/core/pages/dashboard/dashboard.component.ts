import { Component, OnInit } from '@angular/core';
import * as fromRoot from '@app/store';
// import { DialogService } from '@ngneat/dialog';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '@app/shared/models/user.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public currentUser$!: Observable<User | null>;
  public isSidenavActive$!: Observable<boolean>;

  constructor(
    private store: Store<fromRoot.State>,
  ) {}

  ngOnInit(): void {
    this.currentUser$ = this.store.pipe(select(fromRoot.selectCurrentUser));
    // this.isSidenavActive$ = this.store.pipe(select(fromRoot.selectIsSidenavActive));
  }

  openSidenav(): void {
    this.store.dispatch(fromRoot.openSidenav());
  }

  closeSidenav(): void {
    this.store.dispatch(fromRoot.closeSidenav());
  }

  logout(): void {
    this.store.dispatch(fromRoot.logout());
  }
}
