import {Component, inject} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Product} from '../../../../core/models/product';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-mod-product',
  imports: [
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './mod-product.component.html',
  styleUrl: './mod-product.component.scss'
})
export class ModProductComponent {
  readonly data : Product | null;
  public productForm: FormGroup;

  constructor(
    private readonly fb: FormBuilder
  ) {
    this.data = inject<Product>(MAT_DIALOG_DATA);
    this.productForm = this.createForm(this.data);
  }

  private createForm(data: Product | null): FormGroup {
    return this.fb.group({
      name: [data?.name ?? '', Validators.required],
      price: [data?.price ?? 0, [Validators.required, Validators.min(1000)]],
      description: [data?.description ?? '', Validators.required],
      imageUrl: [data?.imageUrl ?? '', Validators.required],
      quantity: [data?.quantity ?? 0, [Validators.required, Validators.min(0)]]
    });
  }

  onSubmit() {
    console.log('Product modified');
  }

}
