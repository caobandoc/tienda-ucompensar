import {Component, inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Brand} from '../../../../core/models/Brand';
import {MatError, MatFormField, MatLabel} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {BrandsService} from '../../../../core/services/brands.service';

@Component({
  selector: 'app-modal-brand',
  imports: [
    MatError,
    MatFormField,
    MatInput,
    MatLabel,
    ReactiveFormsModule
  ],
  templateUrl: './modal-brand.component.html',
  styleUrl: './modal-brand.component.scss'
})
export class ModalBrandComponent {
  readonly brand: Brand | null = inject(MAT_DIALOG_DATA);
  public brandForm: FormGroup;
  readonly dialogRef = inject(MatDialogRef<ModalBrandComponent>);

  constructor(
    private readonly fb: FormBuilder,
    private readonly brandService: BrandsService
  ) {
    this.brandForm = this.fb.group({
      id: [this.brand?.id],
      name: [this.brand?.name, Validators.required],
    });
  }

  onSubmit(){
    if (this.brandForm.valid){
      if (this.brandForm.value.id){
        this.updateBrand();
      } else {
        this.createBrand();
      }
    }
  }

  createBrand(){
    this.brandService.createBrand(this.brandForm.value)
    .subscribe({
      next: () => {
        console.log('Brand created');
        this.dialogRef.close();
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  updateBrand(){
    this.brandService.updateBrand(this.brandForm.value, this.brandForm.value.id)
    .subscribe({
      next: () => {
        console.log('Brand updated');
        this.dialogRef.close();
      },
      error: (error) => {
        console.error(error);
      }
    });
  }
}
