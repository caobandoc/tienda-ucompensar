import { Component } from '@angular/core';
import {TopbarComponent} from '../../components/topbar/topbar.component';
import {CurrencyPipe, NgOptimizedImage} from '@angular/common';
import {ProductsService} from '../../../../core/services/products.service';
import {Product} from '../../../../core/models/Product';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product',
  imports: [
    TopbarComponent,
    CurrencyPipe,
    NgOptimizedImage
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  itemId: string | null;
  product: Product | undefined;

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute
  ) {
    this.itemId = this.route.snapshot.paramMap.get('id');
    if (this.itemId) {
      this.productsService.getProduct(this.itemId).subscribe((product: Product) => {
        this.product = product;
      });
    }
  }

}
