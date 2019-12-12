import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SaleService {

  uri = 'http://localhost:3000'

  constructor(private http: HttpClient)  { }

  getSales() {
    return this.http.get(`${this.uri}/sales`);
  }
  getSalesById(id) {
    return this.http.get(`${this.uri}/sales/${id}`)
  }
  addSale(gold, cash, client, payment, saleAt) {
    const sale = {
      gold: gold,
      cash: cash, 
      client: client, 
      payment: payment,  
      saleAt: saleAt
    }

    return this.http.post(`${this.uri}/sales/add`, sale)

  }
  updateSale(id, gold, cash, client, payment, paid) {
    const sale = {
      gold: gold,
      cash: cash, 
      client: client, 
      payment: payment,  
      paid: paid
    }

    return this.http.post(`${this.uri}/sales/update/${id}`, sale)

  }
  deleteSale(id) {
    return this.http.get(`${this.uri}/sales/delete/${id}`)
  }
  
}
