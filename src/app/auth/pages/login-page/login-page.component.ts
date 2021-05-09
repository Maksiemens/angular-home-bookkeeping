import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromRoot from '@app/store';
import { User } from '@app/shared/models/user.model';

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

  onSubmit(userCredentials: User): void {
    this.store.dispatch(fromRoot.login({ userCredentials }));
  }
}
