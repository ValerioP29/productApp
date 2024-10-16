import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
const routes: Routes = [
 { path: "product/:id" , component: ProductComponent },
 { path: "", redirectTo:  '/product/1', pathMatch: 'full' },
 {path: "products", component: ProductListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
