import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ProductPageComponent} from "../product/components/product-page/product-page.component";
import {NewProductFormComponent} from "../product/components/new-product-form/new-product-form.component";
import {EditProductComponent} from "../product/components/edit-product/edit-product.component";

const routes: Routes = [
  {
    path:"", component: ProductPageComponent
  },
  {
    path:"new-product", component: NewProductFormComponent
  },
  {
    path:"edit-product/:id", component: EditProductComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
