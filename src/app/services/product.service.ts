
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
private apiUrl= "https://dummyjson.com/products";
private cart: Product[] = [];
  private favorites: Product[] = [];
  private cartCountSubject = new BehaviorSubject<number>(0);
  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<any>{
    return this.http.get<any>(this.apiUrl)
  }
  getProductById(productId: number): Observable<Product>{
    return this.http.get<Product>(`${this.apiUrl}/${productId}`)
  }
  addToFavorites(product: Product) {
    this.favorites.push(product);
    this.cartCountSubject.next(this.cart.length);
  }
  addToCart(product: Product) {
    this.cart.push(product);
    this.updateCartCount();
  }
  getCart(): Product[]{
    return this.cart;
  }
  getFavorites(): Product[] {
    return this.favorites;
  }
  getCartCount(): Observable<number> {
    return this.cartCountSubject.asObservable(); // Ritorna l'osservabile del contatore
  }
  private updateCartCount() {
    this.cartCountSubject.next(this.cart.length);
}
}
