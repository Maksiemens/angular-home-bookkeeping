import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromRoot from '@app/store';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  public isLoading$!: Observable<boolean>;
  public error$!: Observable<any>;

  constructor(
    private store: Store<fromRoot.State>
  ) {}

  ngOnInit(): void {
    this.isLoading$ = this.store.pipe(select(fromRoot.selectIsLoading));
    this.error$ = this.store.pipe(select(fromRoot.selectError));
  }

  onSubmit(userCredentials: any): void {
    this.store.dispatch(fromRoot.login({ userCredentials }));
  }
}
