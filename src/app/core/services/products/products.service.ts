import { Injectable } from '@angular/core';
import { Product } from '../../../models/product.model';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { environment } from "../../../../environments/environment";

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(
    private http: HttpClient,
  ) {}

  

  getAllProducts() {
    //con el Product[] se le esta diciendo que la respuesta que se espera es de tipo Product
    return this.http.get<Product[]>( `${environment.url_api}`);
  }

  getProduc (id: string) : Observable<any> {
    
        return this.http.get(`${environment.url_api}/${id}`);
  
  }
  createProduct(produc : Product){
    return this.http.post(environment.url_api, produc);
  }

  //con esto no envio todo el producto sino una parte de el... 
  updateProduct(id: string, changes: Partial<Product>){
  return this.http.put( `${environment.url_api}/${id}`, changes )
  }

  deleteProduct(id: String){
      return this.http.delete(`${environment.url_api}/${id}`);
  }
}
