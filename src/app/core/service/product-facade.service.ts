import {Injectable} from '@angular/core';
import {
  BehaviorSubject,
  catchError,
  combineLatest,
  distinctUntilChanged,
  filter,
  map,
  Observable, of,
  startWith
} from "rxjs";
import {IProduct} from "../../shared/model";
import {DataStateEnum, IAppDataState} from "../../shared/product-state";
import {ProductService} from "./product.service";
import {Router} from "@angular/router";

let _state: IAppDataState<IProduct[]> = {
  dataState: DataStateEnum.LOADING,
  data: []
};

@Injectable()
export class ProductFacadeService {
  private store: BehaviorSubject<IAppDataState<IProduct[]>> = new BehaviorSubject<IAppDataState<IProduct[]>>(_state);
  public store$: Observable<IAppDataState<IProduct[]>> = this.store.asObservable();

  constructor(private productService: ProductService, private router: Router) {
    this.getAllProducts();
  }

  getAllProducts() {
    console.log("appel façade")
    console.log(this.store)
    this.productService.getAllProducts().pipe(
      map(data => ({dataState: DataStateEnum.LOADED, data: data })),
      startWith({ dataState: DataStateEnum.LOADING }),
      catchError(err => of({ dataState: DataStateEnum.ERROR, errorMessage: err.message }))
    ).subscribe((newState: any) => {
      this.updateState(newState);
    });
    console.log(this.store)
  }

  getSelectedProducts() {
    this.productService.getSelectedProducts().pipe(
      map(data => ({dataState: DataStateEnum.LOADED, data: data })),
      startWith({ dataState: DataStateEnum.LOADING }),
      catchError(err => of({ dataState: DataStateEnum.ERROR, errorMessage: err.message }))
    ).subscribe((newState: any) => {
      this.updateState(newState);
    });
  }

  getAvailableProducts() {
    this.productService.getAvailableProducts().pipe(
      map(data => ({dataState: DataStateEnum.LOADED, data: data })),
      startWith({ dataState: DataStateEnum.LOADING }),
      catchError(err => of({ dataState: DataStateEnum.ERROR, errorMessage: err.message }))
    ).subscribe((newState: any) => {
      this.updateState(newState);
    });
  }

  newProduct() {
    this.router.navigateByUrl("/new-product");
  }

  deleteProduct(id: string) {
    let confirmModal = confirm("Êtes vous certain ?");
    if (confirmModal)
      this.productService.deleteProduct(id).subscribe( () => {
          this.getAllProducts();
        }
      )
  }

  toggleSelected(product: IProduct) {
    this.productService.updateProduct(product).subscribe(data => {
        product.selected = data.selected;
      }
    )
  }

  onSearch(dataForm: any) {
    console.log(dataForm)
    this.productService.getProductByKeyword(dataForm.keyword).pipe(
      map(data=> ({dataState: DataStateEnum.LOADED, data: data})),
      startWith({dataState: DataStateEnum.LOADING}),
      catchError(err => of({dataState: DataStateEnum.ERROR, errorMessage: err.message}))
    ).subscribe((newState: any) => {
      this.updateState(newState);
    });
  }

  // ------- Private Methods ------------------------

  /** Update internal state cache and emit from store... */
  private updateState(state: IAppDataState<IProduct[]>) {
    this.store.next((_state = state));
  }


}
