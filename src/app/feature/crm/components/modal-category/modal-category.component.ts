import {Component, inject} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatError, MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Category} from '../../../../core/models/Category';

@Component({
  selector: 'app-modal-category',
    imports: [
        FormsModule,
        MatError,
        MatFormField,
        MatInput,
        MatLabel,
        ReactiveFormsModule
    ],
  templateUrl: './modal-category.component.html',
  styleUrl: './modal-category.component.scss'
})
export class ModalCategoryComponent {
  readonly category: Category | null = inject(MAT_DIALOG_DATA);
  public categoryForm: FormGroup;

  constructor(
    private readonly fb: FormBuilder
  ) {
    this.categoryForm = this.fb.group({
      id: [this.category?.id],
      name: [this.category?.name, Validators.required],
    });
  }

  onSubmit(){

  }
}
