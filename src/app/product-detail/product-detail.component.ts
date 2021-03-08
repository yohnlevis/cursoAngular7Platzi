import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { Product } from '../models/product.model';
import { Productoclass } from '../models/productclass.model';
import { ProductsService } from '../core/services/products/products.service';
import { HttpParams } from '@angular/common/http';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
  providers: [ProductsService]
})
export class ProductDetailComponent implements OnInit {
product : Product = {
  "id": "",
  "image": "",
  "title": "este es el titulo",
  "price": 0,
  "description": "xblablablablabla"  
}; 

  constructor(
    private route: ActivatedRoute,
    private producService: ProductsService
  ) { }



  

  ngOnInit() {
    
    this.getProduct();
  }
getProduct(){
  this.route.params.subscribe((params: Params) =>{
   const id = params.id; 
    this.producService.getProduc(id).subscribe(
      (response) =>{
         this.product = response;
      }
    )
  })
}
addProduct(){
  this.producService.createProduct(this.product)
  .subscribe(product => {
    console.log("Este es el produ"+product)
  
  })
}

updateProduct(){
  this.producService.updateProduct( this.product.id, this.product)
  .subscribe(producto => {
    console.log(producto);
  }) 
}
deleteProduct(){
  this.producService.deleteProduct(this.product.id)
  .subscribe( respuesta =>{
    console.log(respuesta)
  })
}

}
