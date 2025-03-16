import {Component} from '@angular/core';
import {CategoryService} from '../../../../core/services/category.service';
import {Category} from '../../../../core/models/Category';
import {TableCategoryComponent} from '../../components/tablecategory/table-category.component';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  imports: [
    TableCategoryComponent
  ],
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  categories: Category[] = [];
  displayedColumns: string[] = ['id', 'nombre', 'acciones'];

  constructor(private readonly categoryService: CategoryService) {
    this.loadCategories();
  }

  loadCategories(){
    this.categoryService.getCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }

  onRefresh(){
    this.loadCategories();
  }

}



