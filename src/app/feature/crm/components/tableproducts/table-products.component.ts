import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {Product} from '../../../../core/models/Product';
import {CurrencyPipe, NgOptimizedImage} from '@angular/common';
import {MatIcon} from '@angular/material/icon';
import {MatDialog} from '@angular/material/dialog';
import {ModalProductComponent} from '../modal-product/modal-product.component';
import {ModalValidateComponent} from '../modal-validate/modal-validate.component';

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
  @Output() refresh = new EventEmitter<void>();
  readonly dialog = inject(MatDialog);

  openModal(row: Product | null): void {
    const dialogRef = this.dialog.open(ModalProductComponent, {
      data: row
    });

    dialogRef.afterClosed().subscribe(() => {
      this.refresh.emit();
    });
  }

  openModalDelete(row: Product | null): void {
    const dialogRef = this.dialog.open(ModalValidateComponent, {
      data: {id: row?.id, type: 'product'}
    });

    dialogRef.afterClosed().subscribe(() => {
      this.refresh.emit();
    });
  }
}
