import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductModule } from './product/product.module';
import {FeatureRoutingModule} from "./feature-routing/feature-routing.module";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProductModule,
    FeatureRoutingModule
  ]
})
export class FeatureModule { }
