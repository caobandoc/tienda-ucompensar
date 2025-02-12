import { Component } from '@angular/core';
import {ToolbarComponent} from '../../components/toolbar/toolbar.component';
import {TableComponent} from '../../components/table/table.component';
import {ProductService} from '../../../../core/services/product.service';
import {Product} from '../../../../core/models/product';

@Component({
  selector: 'app-crm',
  imports: [
    ToolbarComponent,
    TableComponent
  ],
  templateUrl: './crm.component.html',
  styleUrl: './crm.component.scss'
})
export class CrmComponent {
  products : Product[] = [];

  constructor(
    private readonly productService: ProductService
  ) {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }

}
