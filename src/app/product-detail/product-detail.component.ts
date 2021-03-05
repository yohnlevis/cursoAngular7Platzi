import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { Product } from '../models/product.model';
import { Productoclass } from '../models/productclass.model';
import { ProductsService } from '../core/services/products/products.service';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
product! : Product; 


  constructor(
    private route: ActivatedRoute,
    private producService: ProductsService
  ) { }



  

  ngOnInit() {
    
    this.getProduct();
  }
getProduct(){
  this.route.params.subscribe((params: Params)=>{
    const id= params.id;
      this.product  = this.producService.getProduc(id)
    console.log("este es el parametro   "+id)
    console.log(this.product);
  })
}

}
