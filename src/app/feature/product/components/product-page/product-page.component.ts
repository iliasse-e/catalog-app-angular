import {Component, OnInit} from '@angular/core';
import {catchError, map, Observable, of, startWith} from "rxjs";
import {IProduct} from "../../../../shared/model";
import {ProductService} from "../../../../core/service/product.service";
import {DataStateEnum, IActionEvent, IAppDataState, ProductActionTypeEnum} from "../../../../shared/product-state";
import {Router} from "@angular/router";
import {EventDriverService} from "../../../../core/service/event-driver.service";
import {ProductFacadeService} from "../../../../core/service/product-facade.service";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.sass']
})
export class ProductPageComponent implements OnInit {

  public productsData$?: Observable<IAppDataState<IProduct[]>> = this.productFacadeService.store$;
  // readonly DataStateEnum = DataStateEnum;

  constructor(
    // private productService: ProductService,
    // private router: Router,
    // private eventDriverService: EventDriverService,
    private productFacadeService: ProductFacadeService) {
  }

  ngOnInit() {
    // this.eventDriverService.sourceEventSubject$.subscribe((event: IActionEvent) => {
    //   this.onActionEvent(event)
    // })
  }

  // getAllProducts() {
  //   this.productsData$ = this.productService.getAllProducts().pipe(
  //     map(data=> ({dataState: DataStateEnum.LOADED, data: data})),
  //     startWith({dataState: DataStateEnum.LOADING}),
  //     catchError(err => of({dataState: DataStateEnum.ERROR, errorMessage: err.message}))
  //   );
  // }
  //
  // getSelectedProducts() {
  //   this.productsData$ = this.productService.getSelectedProducts().pipe(
  //     map(data=> ({dataState: DataStateEnum.LOADED, data: data})),
  //     startWith({dataState: DataStateEnum.LOADING}),
  //     catchError(err => of({dataState: DataStateEnum.ERROR, errorMessage: err.message}))
  //   );
  //
  // }
  //
  // getAvailableProducts() {
  //   this.productsData$ = this.productService.getAvailableProducts().pipe(
  //     map(data=> ({dataState: DataStateEnum.LOADED, data: data})),
  //     startWith({dataState: DataStateEnum.LOADING}),
  //     catchError(err => of({dataState: DataStateEnum.ERROR, errorMessage: err.message}))
  //   );
  //
  // }
  //
  // onSearch(dataForm: any) {
  //   console.log(dataForm)
  //   this.productsData$ = this.productService.getProductByKeyword(dataForm.keyword).pipe(
  //     map(data=> ({dataState: DataStateEnum.LOADED, data: data})),
  //     startWith({dataState: DataStateEnum.LOADING}),
  //     catchError(err => of({dataState: DataStateEnum.ERROR, errorMessage: err.message}))
  //   );
  // }
  //
  // toggleSelected(product: IProduct) {
  //   this.productService.updateProduct(product).subscribe(data => {
  //     product.selected = data.selected;
  //     }
  //   )
  // }
  //
  // deleteProduct(id: string) {
  //   let confirmModal = confirm("Êtes vous certain ?");
  //   if (confirmModal)
  //   this.productService.deleteProduct(id).subscribe( () => {
  //     this.getAllProducts();
  //     }
  //   )
  // }
  //
  // newProduct() {
  //   this.router.navigateByUrl("/new-product");
  // }
  //
  // editProduct(id: string) {
  //   this.router.navigateByUrl("/edit-product/" + id);
  // }
  //
  // onActionEvent($event: IActionEvent) {
  //   console.log($event)
  //   switch ($event.type) {
  //     case ProductActionTypeEnum.GET_ALL_PRODUCTS: this.getAllProducts();
  //     break
  //     case ProductActionTypeEnum.GET_SELECTED_PRODUCTS: this.getSelectedProducts();
  //     break
  //     case ProductActionTypeEnum.GET_AVAILABLE_PRODUCTS: this.getAvailableProducts();
  //     break
  //     case ProductActionTypeEnum.NEW_PRODUCT: this.newProduct();
  //     break
  //     case ProductActionTypeEnum.SEARCH_PRODUCTS: this.onSearch($event.payload);
  //     break
  //     case ProductActionTypeEnum.SELECT_PRODUCT: this.toggleSelected($event.payload);
  //     break
  //     case ProductActionTypeEnum.DELETE_PRODUCT: this.deleteProduct($event.payload);
  //     break
  //     case ProductActionTypeEnum.EDIT_PRODUCT: this.editProduct($event.payload);
  //     break
  //   }
  // }
}
