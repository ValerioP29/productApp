import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit {
  product: Product | undefined;
  productId: number=0;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.productId= Number(this.route.snapshot.paramMap.get("id"));
    this.productService.getProductById(this.productId).subscribe({
      next: (data) => {
        this.product= data;
      },
      error: (error
      ) => {console.error("errore nel recupero del prodotto:", error);}
    })
}

}
