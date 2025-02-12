import {Component, inject, Input} from '@angular/core';
import { MatTableModule} from '@angular/material/table';
import {Product} from '../../../../core/models/product';
import {MatButtonModule} from '@angular/material/button';
import {CurrencyPipe, NgOptimizedImage} from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatDialog} from '@angular/material/dialog';
import {ModProductComponent} from '../mod-product/mod-product.component';

@Component({
  selector: 'app-table',
  imports: [MatButtonModule, MatIconModule, MatTableModule, NgOptimizedImage, CurrencyPipe],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  displayedColumns: string[] = ['id', 'name', 'price', 'description', 'image', 'quantity','actions'];
  @Input() dataSource:Product[] = [];
  readonly dialog = inject(MatDialog);
  readonly enterAnimationDuration = '500ms';
  readonly exitAnimationDuration = '500ms';

  onModal(element: Product | null) {
    this.dialog.open(ModProductComponent,{
      data: element,
      enterAnimationDuration: this.enterAnimationDuration,
      exitAnimationDuration: this.exitAnimationDuration
    })
  }
}
