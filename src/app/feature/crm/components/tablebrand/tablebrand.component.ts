import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import { Brand } from '../../../../core/models/Brand';
import { CommonModule } from '@angular/common';
import {MatDialog} from '@angular/material/dialog';
import {ModalBrandComponent} from '../modal-brand/modal-brand.component';
import {ModalValidateComponent} from '../modal-validate/modal-validate.component';

@Component({
  selector: 'app-tablebrand',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tablebrand.component.html',
  styleUrl: './tablebrand.component.scss'
})
export class TablebrandComponent {
  @Input() displayedColumns: string[] = ['id', 'nombre', 'acciones'];
  @Input() dataSource: Brand[] = [];
  @Output() refresh = new EventEmitter<void>();
  readonly dialog = inject(MatDialog);

  openModal(row: Brand | null): void {
    const dialogRef = this.dialog.open(ModalBrandComponent, {
      data: row
    });

    dialogRef.afterClosed().subscribe(() => {
      this.refresh.emit();
    });
  }

  openModalDelete(row: Brand | null): void {
    const dialogRef = this.dialog.open(ModalValidateComponent, {
      data: {id: row?.id, type: 'brand'}
    });

    dialogRef.afterClosed().subscribe(() => {
      this.refresh.emit();
    });
  }
}
