import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IProduct} from "../../../../shared/model";
import {IActionEvent, ProductActionTypeEnum} from "../../../../shared/product-state";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.sass']
})
export class ProductItemComponent {
  @Input() product?: IProduct;
  @Output() itemEventEmitter: EventEmitter<IActionEvent> = new EventEmitter<IActionEvent>();

  toggleSelected(product: IProduct) {
    this.itemEventEmitter.emit({
      type: ProductActionTypeEnum.SELECT_PRODUCT,
      payload: product
    })
  }

  deleteProduct(id: string) {
    this.itemEventEmitter.emit({
      type: ProductActionTypeEnum.DELETE_PRODUCT,
      payload: id
    })
  }

  editProduct(id: string) {
    this.itemEventEmitter.emit({
      type: ProductActionTypeEnum.EDIT_PRODUCT,
      payload: id
    })
  }
}
