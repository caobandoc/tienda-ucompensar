import {Component, inject} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatError, MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Category} from '../../../../core/models/Category';
import {CategoryService} from '../../../../core/services/category.service';

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
  readonly dialogRef = inject(MatDialogRef<ModalCategoryComponent>);

  constructor(
    private readonly fb: FormBuilder,
    private readonly categoryService: CategoryService
  ) {
    this.categoryForm = this.fb.group({
      id: [this.category?.id],
      name: [this.category?.name, Validators.required],
    });
  }

  onSubmit(){
    if (this.categoryForm.valid) {
      if (this.categoryForm.value.id){
        this.updateCategory();
      } else {
        this.createCategory();
      }
    }
  }

  createCategory() {
    this.categoryService.createCategory(this.categoryForm.value)
      .subscribe({
        next: () => {
          console.log('Category created');
          this.dialogRef.close();
        },
        error: (error) => {
          console.error(error);
        }
      });
  }

  updateCategory() {
    this.categoryService.updateCategory(this.categoryForm.value, this.categoryForm.value.id)
      .subscribe({
        next: () => {
          console.log('Category updated');
          this.dialogRef.close();
        },
        error: (error) => {
          console.error(error);
        }
      });
  }


}
