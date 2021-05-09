import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BillService {
  constructor(private http: HttpClient) {}

  loadCurrency(): Observable<any> {
    return this.http.get(`http://data.fixer.io/api/latest?access_key=${environment.fixer.apiKey}&symbols=USD,EUR,RUB,UAH`);
  }
}
