import {Component, EventEmitter, Output} from '@angular/core';
import {IActionEvent, ProductActionTypeEnum} from "../../../../shared/product-state";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent {

  @Output() productEventEmitter: EventEmitter<IActionEvent> = new EventEmitter<IActionEvent>();

  getAllProducts() {
    this.productEventEmitter.emit({type: ProductActionTypeEnum.GET_ALL_PRODUCTS});
  }

  getSelectedProducts() {
    this.productEventEmitter.emit({type: ProductActionTypeEnum.GET_SELECTED_PRODUCTS});
  }

  getAvailableProducts() {
    this.productEventEmitter.emit({type: ProductActionTypeEnum.GET_AVAILABLE_PRODUCTS});
  }

  onSearch(value: any) {
    this.productEventEmitter.emit({type: ProductActionTypeEnum.SEARCH_PRODUCTS, payload: value});
  }

  newProduct() {
    this.productEventEmitter.emit({type: ProductActionTypeEnum.NEW_PRODUCT});
  }
}
