import { Component } from '@angular/core';
import { DescriptionComponent } from './components/description/description.component';
import { ShopItemsComponent } from './components/shop-items/shop-items.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [DescriptionComponent, ShopItemsComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {}
