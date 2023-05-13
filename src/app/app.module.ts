import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { FeatureModule } from './feature/feature.module';
import { SharedModule } from './shared/shared.module';
import {ProductModule} from "./feature/product/product.module";
import {ProductService} from "./core/service/product.service";

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CoreModule,
        FeatureModule,
        SharedModule,
        ProductModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
