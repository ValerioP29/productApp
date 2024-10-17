import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  cartCount: number = 0;
  constructor(private productService: ProductService){

  }

  ngOnInit(): void {
    this.productService.getCartCount().subscribe(count => {
      this.cartCount = count; // Aggiorna il conteggio del carrello
    });
  }
}
