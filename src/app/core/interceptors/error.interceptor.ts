import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import * as fromRoot from '@app/store';
import { HTTPStatusCode } from '@app/shared/enums/http-status-code';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private store: Store<fromRoot.State>) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === HTTPStatusCode.UNAUTHORIZED) {
          this.store.dispatch(fromRoot.logoutSuccess());
        }
        return throwError({...error.error.error });
      }),
    );
  }
}
