import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  constructor(private productService: ProductService ){}

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe({
      next: (data) =>{this.products=data.products; },
      error: (error) => {console.error("errore nel recupero prodotti", error)}
    });
  }
}
