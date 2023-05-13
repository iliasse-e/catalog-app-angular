import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../../../../core/service/product.service";

@Component({
  selector: 'app-new-product-form',
  templateUrl: './new-product-form.component.html',
  styleUrls: ['./new-product-form.component.sass']
})
export class NewProductFormComponent implements OnInit {
  public formGroup!: FormGroup;
  submitted: boolean = false;

  constructor(private fb: FormBuilder, private productService: ProductService) {
  }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      name: ['', [Validators.required, Validators.min(1)]],
      price: [0, Validators.required],
      quantity: [0, [Validators.required, Validators.min(1)]],
      selected: [false, Validators.required],
      available: [true, Validators.required]
    })
  }


  saveProduct() {
    if (this.formGroup.invalid) return;
    this.productService.saveProduct(this.formGroup.value).subscribe(data => {
      alert("Produit sauvegardé");
      this.submitted = true;
    })
  }
}
