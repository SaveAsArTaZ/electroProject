import { Component } from '@angular/core';
import { DescriptionComponent } from './components/description/description.component';
import { ShopItemsComponent } from './components/shop-items/shop-items.component';
import { OffersComponent } from './components/offers/offers.component';
import { BestSellerProductsComponent } from './components/best-seller-products/best-seller-products.component';
import { NewProductComponent } from './components/new-product/new-product.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    DescriptionComponent,
    ShopItemsComponent,
    OffersComponent,
    BestSellerProductsComponent,
    NewProductComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {}
