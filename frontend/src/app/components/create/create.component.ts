import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SaleService } from '../../sale.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  createForm: FormGroup;

  constructor(private saleService: SaleService, private fb: FormBuilder, private router: Router) { 
    this.createForm = this.fb.group({
      gold: '',
      cash: ['', Validators.required],
      client: ['', Validators.required],
      payment: '',
      saleAt:''
    });
  }
  
  addSale(gold, cash, client, payment, saleAt) {
    this.saleService.addSale(gold, cash, client, payment, saleAt).subscribe(() => {
      this.router.navigate(['/list']);
    });
  }

  ngOnInit() {
    this.saleService.getSales().subscribe((sale) => {
      console.log(sale)
    })
  }

}
