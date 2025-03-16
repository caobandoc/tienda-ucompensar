import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {Category} from '../../../../core/models/Category';
import {MatDialog} from '@angular/material/dialog';
import {MatIcon} from '@angular/material/icon';
import {ModalCategoryComponent} from '../modal-category/modal-category.component';
import {ModalValidateComponent} from '../modal-validate/modal-validate.component';

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
  @Output() refresh = new EventEmitter<void>();
  readonly dialog = inject(MatDialog);

  openModal(row: Category | null): void {
    const dialogRef = this.dialog.open(ModalCategoryComponent, {
      data: row
    });

    dialogRef.afterClosed().subscribe(() => {
      this.refresh.emit();
    });
  }

  openModalDelete(row: Category | null): void {
    const dialogRef = this.dialog.open(ModalValidateComponent, {
      data: {id: row?.id, type: 'category'}
    });

    dialogRef.afterClosed().subscribe(() => {
      this.refresh.emit();
    });
  }
}
