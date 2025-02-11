import {Component, inject} from '@angular/core';
import { MatTableModule} from '@angular/material/table';
import {Product} from '../../../../core/models/product';
import {MatButtonModule} from '@angular/material/button';
import {CurrencyPipe, NgOptimizedImage} from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatDialog} from '@angular/material/dialog';
import {ModProductComponent} from '../mod-product/mod-product.component';

const ELEMENT_DATA: Product[] = [
  {id: 1, name: 'S25 Ultra 12+512GB', price: 5399900, description: 'S25 Ultra 12+512GB', imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/samsung-galaxy-s25-ultra-67915672d72aa.jpg?crop=0.6666666666666666xw:1xh;center,top&resize=640:*', quantity: 1},
  {id: 2, name: 'S25 Plus 12+256GB', price: 4299900, description: 'S25 Plus 12+256GB', imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/samsung-galaxy-s25-ultra-67915672d72aa.jpg?crop=0.6666666666666666xw:1xh;center,top&resize=640:*', quantity: 1},
  {id: 3, name: 'S24 Ultra 12+512GB', price: 4299900, description: 'S24 Ultra 12+512GB', imageUrl: 'https://images.samsung.com/is/image/samsung/p6pim/co/2401/gallery/co-galaxy-s24-s928-sm-s928bztultc-539325480?$684_547_PNG$', quantity: 1},
  {id: 4, name: 'S24 Ultra 12+256GB', price: 3799900, description: 'S24 Ultra 12+256GB', imageUrl: 'https://images.samsung.com/is/image/samsung/p6pim/co/2401/gallery/co-galaxy-s24-s928-sm-s928bztultc-539325480?$684_547_PNG$', quantity: 1},
  {id: 5, name: 'Xiaomi 14T Pro 12+512GB', price: 2699900, description: 'Xiaomi 14T Pro 12+512GB', imageUrl: 'https://placehold.co/50x50', quantity: 1},
  {id: 6, name: 'Xiaomi 14T 12+512GB', price: 2099900, description: 'Xiaomi 14T 12+512GB', imageUrl: 'https://placehold.co/50x50', quantity: 1},
  {id: 7, name: 'Redmi Note 14 Pro Plus 5G 12+512GB', price: 1699900, description: 'Redmi Note 14 Pro Plus 5G 12+512GB', imageUrl: 'https://placehold.co/50x50', quantity: 1},
  {id: 8, name: 'Redmi Note 14 Pro Plus 5G 8+256GB', price: 1399900, description: 'Redmi Note 14 Pro Plus 5G 8+256GB', imageUrl: 'https://placehold.co/50x50', quantity: 1},
  {id: 9, name: 'iPhone 16 Pro Max 256GB', price: 4699900, description: 'iPhone 16 Pro Max 256GB', imageUrl: 'https://placehold.co/50x50', quantity: 1},
  {id: 10, name: 'iPhone 16 Pro 256GB', price: 4499900, description: 'iPhone 16 Pro 256GB', imageUrl: 'https://placehold.co/50x50', quantity: 1},
  {id: 11, name: 'iPhone 15 128GB', price: 2899900, description: 'iPhone 15 128GB', imageUrl: 'https://placehold.co/50x50', quantity: 1},
];

@Component({
  selector: 'app-table',
  imports: [MatButtonModule, MatIconModule, MatTableModule, NgOptimizedImage, CurrencyPipe],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  displayedColumns: string[] = ['id', 'name', 'price', 'description', 'image', 'quantity','actions'];
  dataSource = ELEMENT_DATA;
  readonly dialog = inject(MatDialog);
  readonly enterAnimationDuration = '500ms';
  readonly exitAnimationDuration = '500ms';

  addData() {
    console.log('Add data');
  }

  onModal(element: Product | null) {
    this.dialog.open(ModProductComponent,{
      data: element,
      enterAnimationDuration: this.enterAnimationDuration,
      exitAnimationDuration: this.exitAnimationDuration
    })
  }
}
