import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromRoot from '@app/store';
import { User } from '@app/shared/models/user.model';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss'],
})
export class RegistrationPageComponent implements OnInit {
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
    this.store.dispatch(fromRoot.registration({ userCredentials }));
  }
}
