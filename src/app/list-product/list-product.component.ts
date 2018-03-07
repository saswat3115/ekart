import { Component, OnInit } from '@angular/core';
import { ApiclientService } from '../apiclient.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  products = [];

  constructor(private apiclient: ApiclientService) { }

  ngOnInit() {
    this.apiclient.getAllProducts(result => {
      this.products = result;
    });
  }

}
