import {Component, inject, Input} from '@angular/core';
import { Brand } from '../../../../core/models/Brand';
import { CommonModule } from '@angular/common';
import {MatDialog} from '@angular/material/dialog';
import {ModalBrandComponent} from '../modal-brand/modal-brand.component';

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
  readonly dialog = inject(MatDialog);

  openModal(row: Brand | null): void {
    this.dialog.open(ModalBrandComponent, {
      data: row
    });
  }
}
