import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  product: Product | undefined; // Per il singolo prodotto
  products: Product[] = [];     // Per l'elenco di tutti i prodotti
  productId: number = 0;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    // Ottieni l'ID del prodotto dai parametri della route
    this.productId = Number(this.route.snapshot.paramMap.get('id'));

    // Chiamata per ottenere il prodotto singolo
    this.productService.getProductById(this.productId).subscribe({
      next: (data) => {
        this.product = data; // Assegna il singolo prodotto
      },
      error: (error) => {
        console.error('Errore nel recupero del prodotto:', error);
      }
    });

    // Chiamata per ottenere tutti i prodotti
    this.productService.getAllProducts().subscribe({
      next: (data) => {
        this.products = data.products; // Assegna l'elenco di prodotti
      },
      error: (error) => {
        console.error('Errore nel recupero dei prodotti:', error);
      }
    });
  } addToFavorites(product: Product) {

      this.productService.addToFavorites(product);
      console.log('Prodotto aggiunto ai preferiti');
    }


  // Aggiungi al carrello
  addToCart(product: Product ) {

      this.productService.addToCart(product);
      console.log('Prodotto aggiunto al carrello');
    }
  }


