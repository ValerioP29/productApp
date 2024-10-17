import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-preferiti',
  templateUrl: './preferiti.component.html',
  styleUrl: './preferiti.component.scss'
})
export class PreferitiComponent {
  favoriteProducts: Product[]=[];
  constructor(private productService: ProductService){}
  ngOnInit(): void {
    this.favoriteProducts= this.productService.getFavorites();
  }

}
