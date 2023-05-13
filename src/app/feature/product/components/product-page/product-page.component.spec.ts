import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPageComponent } from './product-page.component';
import {ProductService} from "../../../../core/service/product.service";
import {IProduct} from "../../../../shared/model";
import {of} from "rxjs";
import {DataStateEnum} from "../../../../shared/product-state";

describe('ProductPageComponent', () => {
  let component: ProductPageComponent;
  let fixture: ComponentFixture<ProductPageComponent>;
  let productService: jasmine.SpyObj<ProductService>;

  beforeEach(async () => {
    productService = jasmine.createSpyObj('ProductService', ['getAllProducts']);
    await TestBed.configureTestingModule({
      declarations: [ ProductPageComponent ],
      providers: [
        { provide: ProductService, useValue: productService }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPageComponent);
    component = fixture.componentInstance;
  });

  it('should call getAllProducts and update productsData$ with the returned data', () => {
    const products: IProduct[] = [
      { id: 1, name: 'Product 1', price: 10, quantity:15, selected: false, available: true },
      { id: 2, name: 'Product 2', price: 20, quantity:15, selected: false, available: false },
      { id: 3, name: 'Product 3', price: 30, quantity:15, selected: false, available: true },
    ];
    productService.getAllProducts.and.returnValue(of(products));

    component.onGetAllProducts();
    fixture.detectChanges();

    expect(productService.getAllProducts).toHaveBeenCalled();
    expect(component.productsData$).toBeDefined();
    component.productsData$?.subscribe(data => {
      expect(data.dataState).toEqual(DataStateEnum.LOADED);
      expect(data.data).toEqual(products);
    });
  });
});
