import {Component, inject, Input} from '@angular/core';
import {Category} from '../../../../core/models/Category';
import {MatDialog} from '@angular/material/dialog';
import {MatIcon} from '@angular/material/icon';
import {ModalCategoryComponent} from '../modal-category/modal-category.component';

@Component({
  selector: 'app-tablecategory',
  imports: [
    MatIcon
  ],
  templateUrl: './table-category.component.html',
  styleUrl: './table-category.component.scss'
})
export class TableCategoryComponent {
  @Input() displayedColumns: string[] = [];
  @Input() dataSource: Category[] = [];
  readonly dialog = inject(MatDialog);

  openModal(row: Category | null): void {
    this.dialog.open(ModalCategoryComponent, {
      data: row
    });
  }
}
