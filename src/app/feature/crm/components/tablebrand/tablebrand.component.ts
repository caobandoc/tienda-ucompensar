import { Component, Input } from '@angular/core';
import { Brand } from '../../../../core/models/Brand';

@Component({
  selector: 'app-tablebrand',
  imports: [],
  templateUrl: './tablebrand.component.html',
  styleUrl: './tablebrand.component.scss'
})
export class TablebrandComponent {
  @Input() displayedColumns: string[] = [];
  @Input() dataSource: Brand[] = [];
}
