import { Product } from '../../models/product';
import { ProductService } from './../../services/product.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrl: './carrello.component.scss'
})
export class CarrelloComponent {
  cartProducts: Product[] = [];
  constructor( private productService: ProductService) {}

  ngOnInit(): void{
    this.cartProducts= this.productService.getCart();
  }
}
