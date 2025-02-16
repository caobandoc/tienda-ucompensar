import { Component, Input } from '@angular/core';
import { Brand } from '../../../../core/models/Brand';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tablebrand',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tablebrand.component.html',
  styleUrl: './tablebrand.component.scss'
})
export class TablebrandComponent {
  @Input() displayedColumns: string[] = ['id', 'nombre', 'acciones'];
  @Input() dataSource: Brand[] = [  
  ];
}
