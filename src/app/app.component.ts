import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '@app/store';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {

  constructor(
    private store: Store<fromRoot.State>,
  ) {}

  ngOnInit(): void {
    this.store.dispatch(fromRoot.checkAuth());
  }
}
