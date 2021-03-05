import { Component , Input, Output,EventEmitter, OnChanges, SimpleChanges, OnInit} from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['../product.component.scss']
})
export class ProductComponent implements OnChanges, OnInit {
  today = new Date();
constructor(
  
){
  console.log('1. constructor')
}

@Input() product = {
      id: '',
      image: '',
      title: '',
      price: 23,
      description: ''
}

@Output() productClicked: EventEmitter<any> = new EventEmitter;
  
ngOnChanges(changes: SimpleChanges ){
  console.log('2. ngOnchanges');
  console.log(changes);
}

ngOnInit(){
  console.log('3. ngOnInit');
}


addCart(){
  console.log('Añadir al carrito');
  console.log(this.product.id)
  this.productClicked.emit(this.product.id)
}



}
