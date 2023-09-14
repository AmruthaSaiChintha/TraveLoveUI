import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BankService {
  private apiUrl = 'https://localhost:44331/api/bankcreds';

  constructor(private httpClient: HttpClient) { }

  submitBankDetails(data: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.httpClient.post(this.apiUrl, data, { headers });
  }
}
