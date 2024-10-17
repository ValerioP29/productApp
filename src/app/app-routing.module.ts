import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { PreferitiComponent } from './components/preferiti/preferiti.component';
import { CarrelloComponent } from './components/carrello/carrello.component';
const routes: Routes = [
 { path: "product/:id" , component: ProductComponent },
 { path: "", redirectTo:  '/product/1', pathMatch: 'full' },
 {path: "products", component: ProductListComponent},
 {path: "favorites", component: PreferitiComponent},
 {path: "cart", component: CarrelloComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
