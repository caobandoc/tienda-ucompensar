import {Component, inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Product} from '../../../../core/models/Product';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatFormField} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {BrandsService} from '../../../../core/services/brands.service';
import {CategoryService} from '../../../../core/services/category.service';
import {MatOption, MatSelect} from '@angular/material/select';
import {Brand} from '../../../../core/models/Brand';
import {Category} from '../../../../core/models/Category';
import {ProductsService} from '../../../../core/services/products.service';

@Component({
  selector: 'app-modal-product',
  imports: [
    ReactiveFormsModule,
    MatFormField,
    MatInputModule,
    MatSelect,
    MatOption
  ],
  templateUrl: './modal-product.component.html',
  styleUrl: './modal-product.component.scss'
})
export class ModalProductComponent {
  readonly product: Product | null = inject(MAT_DIALOG_DATA);
  brands: Brand[] = [];
  categories: Category[] = [];
  public productForm: FormGroup;
  readonly dialogRef = inject(MatDialogRef<ModalProductComponent>);

  constructor(
    private readonly fb: FormBuilder,
    private readonly brandService: BrandsService,
    private readonly categoryService: CategoryService,
    private readonly productService: ProductsService
  ) {
    this.loadLists();
    this.productForm = this.fb.group({
      id: [this.product?.id],
      name: [this.product?.name, Validators.required],
      price: [this.product?.price, [Validators.required, Validators.min(1000)]],
      description: [this.product?.description, Validators.required],
      imageUrl: [this.product?.imageUrl, Validators.required],
      quantity: [this.product?.quantity, [Validators.required, Validators.min(0)]],
      category: [String(this.product?.category?.id), Validators.required],
      brand: [String(this.product?.brand?.id), Validators.required]
    });
  }

  loadLists(){
    this.brandService.getBrands().subscribe((brands) => {
      this.brands = brands;
    });
    this.categoryService.getCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }

  onSubmit(){
    if (this.productForm.valid) {
      let product: Product = {
        id: this.productForm.value.id,
        name: this.productForm.value.name,
        price: this.productForm.value.price,
        description: this.productForm.value.description,
        imageUrl: this.productForm.value.imageUrl,
        quantity: this.productForm.value.quantity,
        category: this.categories.find(category => category.id == this.productForm.value.category),
        brand: this.brands.find(brand => brand.id == this.productForm.value.brand)
      }

      if (this.productForm.value.id){
        this.updateProduct(product);
      } else {
        this.createProduct(product);
      }
    }
  }

  createProduct(product: Product) {
    this.productService.createProduct(product)
      .subscribe({
        next: () => {
          console.log('Product created');
          this.dialogRef.close();
        },
        error: (error) => {
          console.error(error);
        }
      });
  }

  private updateProduct(product: Product) {
    this.productService.updateProduct(product, product.id)
      .subscribe({
        next: () => {
          console.log('Product created');
          this.dialogRef.close();
        },
        error: (error) => {
          console.error(error);
        }
      });
  }
}
