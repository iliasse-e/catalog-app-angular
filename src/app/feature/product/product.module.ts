import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductTableComponent } from './components/product-table/product-table.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NewProductFormComponent } from './components/new-product-form/new-product-form.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { ProductItemComponent } from './components/product-item/product-item.component';



@NgModule({
  declarations: [
    NavbarComponent,
    ProductTableComponent,
    ProductPageComponent,
    NewProductFormComponent,
    EditProductComponent,
    ProductItemComponent
  ],
  exports: [
    ProductPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProductModule { }
