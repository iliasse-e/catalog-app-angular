import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ProductPageComponent} from "./feature/product/components/product-page/product-page.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'catalog-app';
  result = 20;
  @ViewChild('child', {static: true}) public child!: ProductPageComponent;

  ngOnInit(): void {
   // console.log(()=> {this.child.square(2)})
  }
}
