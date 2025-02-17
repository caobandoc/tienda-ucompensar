import {Component, inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Product} from '../../../../core/models/Product';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatFormField} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-modal-product',
  imports: [
    ReactiveFormsModule,
    MatFormField,
    MatInputModule
  ],
  templateUrl: './modal-product.component.html',
  styleUrl: './modal-product.component.scss'
})
export class ModalProductComponent {
  readonly product: Product | null = inject(MAT_DIALOG_DATA);
  public productForm: FormGroup;

  constructor(
    private readonly fb: FormBuilder
  ) {
    this.productForm = this.fb.group({
      id: [this.product?.id],
      name: [this.product?.name, Validators.required],
      price: [this.product?.price, [Validators.required, Validators.min(1000)]],
      description: [this.product?.description, Validators.required],
      imageUrl: [this.product?.imageUrl, Validators.required],
      quantity: [this.product?.quantity, [Validators.required, Validators.min(0)]],
      category: [this.product?.category, Validators.required],
      brand: [this.product?.brand, Validators.required]
    });
  }

  onSubmit(){

  }
}
