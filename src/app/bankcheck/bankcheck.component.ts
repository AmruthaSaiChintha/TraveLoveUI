import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-bankcheck',
  templateUrl: './bankcheck.component.html',
  styleUrls: ['./bankcheck.component.css']
})
export class BankcheckComponent {
  bankName: any;
  cardNumber: any;
  ExpiryDate: string = '';
  ybl: any;
  showSuccessMessage: boolean = false;

  constructor(private httpClient: HttpClient) {}

  submitBankDetails() {
    const bankCredData = {
      userId: 123, // Replace with the actual user ID
      bankName: this.bankName,
      cardNumber: this.cardNumber,
      ExpiryDate: this.ExpiryDate, // Use ExpiryDate directly
      isActive: true, // Set the status as needed
      ybl: this.ybl
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    this.httpClient
      .post('https://localhost:44331/api/bankcreds', bankCredData, { headers })
      .subscribe(
        (response) => {
          console.log('Bank card data sent:', response);
          this.showSuccessMessage = true; // Show success message after submitting
        },
        (error) => {
          console.error('Error sending bank card data:', error);
        }
      );
  }
}


