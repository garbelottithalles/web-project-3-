import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { Sale } from '../../sale.model';
import { SaleService } from '../../sale.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {
  sales: Sale[];
  displayedColumns = ['gold', 'cash', 'client', 'payment', 'paid', 'saleAt', 'actions'];

  options: string[] = ['gold', 'cash', 'client', 'payment', 'status', 'date'];
  objectOptions = [
    { name: 'gold' },
    { name: 'cash' },
    { name: 'client' },
    { name: 'payment' },
    { name: 'status' },
    { name: 'date'}
  ];
  suggestionControl = new FormControl();

  filteredOptions: Observable<string[]>;

  getSuggestion(subject) {
    return subject ? subject.name : undefined;
  };
  
  constructor(private saleService: SaleService, private router: Router) { }

  ngOnInit() {
    this.fetchSales();

    this.filteredOptions = this.suggestionControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value).sort())
    ); 
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLocaleLowerCase().includes(filterValue));
  }
  
  fetchSales() {
    this.saleService
    .getSales()
    .subscribe((data: Sale[]) => {
      this.sales = data;
      console.log('Data requested..');
      console.log(this.sales);
    })
  }

  editSale(id) {
    this.router.navigate([`/edit/${id}`]);
  }

  deleteSale(id) {
    this.saleService.deleteSale(id).subscribe(() => {
      this.fetchSales()
    })
  }

}