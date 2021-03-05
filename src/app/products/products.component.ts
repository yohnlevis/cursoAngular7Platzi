import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../core/services/products/products.service';
import { Product } from "../models/product.model";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['../product.component.scss']
})
export class ProductsComponent implements OnInit {
  today = new Date();
products : Product[]=[];

  constructor(
  
     private producService: ProductsService
  ) { 

    
  }

  ngOnInit(): void {
    this.getProducts();
  }

  clickProduct(id: number) {
    console.log('product');
    console.log(id);
  }

  getProducts(){
    this.products  = this.producService.getAllProducts();
    
  }
addCart(id:string){
   console.log(id);
}

}
