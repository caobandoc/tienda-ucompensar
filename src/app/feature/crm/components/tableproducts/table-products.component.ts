import {Component, Input} from '@angular/core';
import {Product} from '../../../../core/models/Product';
import {CurrencyPipe, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-tableproducts',
  imports: [
    CurrencyPipe,
    NgOptimizedImage
  ],
  templateUrl: './table-products.component.html',
  styleUrl: './table-products.component.scss'
})
export class TableProductsComponent {
  @Input() displayedColumns: string[] = [];
  @Input() dataSource: Product[] = [];
}
