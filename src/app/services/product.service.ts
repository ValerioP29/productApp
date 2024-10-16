
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
private apiUrl= "https://dummyjson.com/products";

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<any>{
    return this.http.get<any>(this.apiUrl)
  }
  getProductById(productId: number): Observable<Product>{
    return this.http.get<Product>(`${this.apiUrl}/${productId}`)
  }
}
