import { Component, OnInit } from '@angular/core';
import { SaleService } from '../../sale.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private saleService: SaleService) { }

  ngOnInit() {
    this.saleService.getSales().subscribe((sale) => {
      console.log(sale)
    })
  }

}
