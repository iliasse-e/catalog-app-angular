import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {OnInit} from "@angular/core";
import {ProductService} from "../../../../core/service/product.service";
import {Observable} from "rxjs";
import {IProduct} from "../../../../shared/model";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.sass']
})
export class EditProductComponent implements OnInit {
  productId: string;
  product$: Observable<IProduct> = new Observable<IProduct>();

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService) {
    this.productId = activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.product$ = this.productService.getProductById(this.productId);
  }
}
