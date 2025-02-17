import {Component, inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Brand} from '../../../../core/models/Brand';
import {MatError, MatFormField, MatLabel} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';

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

  constructor(
    private readonly fb: FormBuilder
  ) {
    this.brandForm = this.fb.group({
      id: [this.brand?.id],
      name: [this.brand?.name, Validators.required],
    });
  }

  onSubmit(){

  }
}
