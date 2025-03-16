import { Component } from '@angular/core';
import {Product} from '../../../../core/models/Product';
import {ProductsService} from '../../../../core/services/products.service';
import {TopbarComponent} from '../../components/topbar/topbar.component';
import { ActivatedRoute } from '@angular/router';
import {CurrencyPipe, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-detailproduct',
    imports: [TopbarComponent, NgOptimizedImage, CurrencyPipe],
  templateUrl: './detailproduct.component.html',
  styleUrl: './detailproduct.component.scss'
})
export class DetailproductComponent {
product: Product|undefined;
  itemid: number|null;
  constructor(
    private readonly productsService: ProductsService,
    private readonly route: ActivatedRoute
  ) {
    this.itemid=Number(this.route.snapshot.paramMap.get('id'));
    if(this.itemid){
      this.productsService.getProduct(this.itemid).subscribe((product:Product)=>{
        this.product=product;
      })
    }
  }

}
