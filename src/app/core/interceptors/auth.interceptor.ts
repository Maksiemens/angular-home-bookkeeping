import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '@app/core/services/auth.service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // return next.handle(request).pipe(
    //   filter((event: any) => event instanceof HttpResponse),
    //   map((event: HttpResponse<any>) => {
    //     return (event = event.clone({
    //       body: {
    //         ...event.body,
    //         status: event.status,
    //         statusText: event.statusText,
    //       },
    //     }));
    //   }),
    // );


    if (this.auth.isAuthenticated()) {
      request = request.clone({
        setParams: {
          auth: this.auth.token
        }
      });
    }
    return next.handle(request);
  }
}
