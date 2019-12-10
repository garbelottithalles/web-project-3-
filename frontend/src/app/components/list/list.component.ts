import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';

import { Sale } from '../../sale.model';
import { SaleService } from '../../sale.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  sales: Sale[]
  displayedColums = ['gold', 'cash', 'client', 'payment', 'paid', 'saledAt', 'actions']
  

  constructor(private saleService: SaleService, private router: Router) { }

  ngOnInit() {
    this.fetchSales()
  }

  fetchSales() {
    this.saleService
    .getSales()
    .subscribe((data: Sale[]) => {
      this.sales = data
      console.log('Data requested..')
      console.log(this.sales)
    })
  }

  editSale(id) {
    this.router.navigate([`/edit/${id}`])
  }

  

}

/*


ngOnInit() {
    this.saleService.getSales().subscribe((sales) => {
      console.log(sales)
    })
  }


  */ 
