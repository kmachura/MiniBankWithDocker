import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-konto',
  templateUrl: './konto.component.html',
  styleUrls: ['./konto.component.css']
})
export class KontoComponent implements OnInit {

  constructor(private http: HttpClient) { }
  jobForm = new FormGroup({
    pesel: new FormControl(''),
    firstName:new FormControl(''),
    surname: new FormControl(''),
    phoneNumber: new FormControl(''),
    email: new FormControl(''),
  });
 
  preview: string = '';
 
  ngOnInit(): void {}
 
  save() {
    const body={
      ...this.jobForm.value,
      primaryAccount: {
        accountType: "PRIMARY",
        accountBalance: 0,
        currencyShortcutEnum: "PLN"
      },
      subAccounts: [
        {
          accountType: "SUBACCOUNT",
          accountBalance: 0,
          currencyShortcutEnum: "USD"
        }
      ]
    }
    this.http.post("http://localhost:8082/api/clients/add",body)
    .subscribe((data) => this.preview = JSON.stringify(data));
  }

}
