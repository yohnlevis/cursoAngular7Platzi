import { Component, OnInit } from '@angular/core';


import { Product } from "../models/product.model";
import { ProductsService } from '../core/services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['../product.component.scss'],
  providers:[ProductsService]
})
export class ProductsComponent implements OnInit {
  today = new Date();
products : Product[]=[];

  constructor(
  
     private producService: ProductsService
  ) { 

    
  }

  ngOnInit(): void {
    this.fetchProducts();
  }

  clickProduct(id: number) {
    console.log('product');
    console.log(id);
  }

  fetchProducts(){
    this.producService.getAllProducts()
    .subscribe(productos => {
      
      this.products= productos;
    
    } )
    
  }
addCart(id:string){
   console.log(id);
}

}
