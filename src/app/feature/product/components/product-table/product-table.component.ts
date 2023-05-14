import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Observable} from "rxjs";
import {DataStateEnum, IActionEvent, IAppDataState, ProductActionTypeEnum} from "../../../../shared/product-state";
import {IProduct} from "../../../../shared/model";

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.sass']
})
export class ProductTableComponent {

  @Input() public productsDataInput$?: Observable<IAppDataState<IProduct[]>>;
  //@Output() tableEventEmitter: EventEmitter<IActionEvent> = new EventEmitter<IActionEvent>();
  readonly DataStateEnum = DataStateEnum;

  // onActionEvent($event: IActionEvent) {
  //   this.tableEventEmitter.emit($event);
  // }
}
