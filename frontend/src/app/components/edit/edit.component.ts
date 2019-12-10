import { Component, OnInit } from '@angular/core';
import { SaleService } from '../../sale.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private saleService: SaleService) { }

  ngOnInit() {
  }

}
