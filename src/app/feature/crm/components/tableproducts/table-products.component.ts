import {Component, inject, Input} from '@angular/core';
import {Product} from '../../../../core/models/Product';
import {CurrencyPipe, NgOptimizedImage} from '@angular/common';
import {MatIcon} from '@angular/material/icon';
import {MatDialog} from '@angular/material/dialog';
import {ModalProductComponent} from '../modal-product/modal-product.component';

@Component({
  selector: 'app-tableproducts',
  imports: [
    CurrencyPipe,
    NgOptimizedImage,
    MatIcon
  ],
  templateUrl: './table-products.component.html',
  styleUrl: './table-products.component.scss'
})
export class TableProductsComponent {
  @Input() displayedColumns: string[] = [];
  @Input() dataSource: Product[] = [];
  readonly dialog = inject(MatDialog);

  openModal(row: Product | null): void {
    this.dialog.open(ModalProductComponent, {
      data: row
    });
  }
}
