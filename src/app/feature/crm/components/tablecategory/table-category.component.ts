import {Component, Input} from '@angular/core';
import {Category} from '../../../../core/models/Category';

@Component({
  selector: 'app-tablecategory',
    imports: [
    ],
  templateUrl: './table-category.component.html',
  styleUrl: './table-category.component.scss'
})
export class TableCategoryComponent {
  @Input() displayedColumns: string[] = [];
  @Input() dataSource: Category[] = [];
}
