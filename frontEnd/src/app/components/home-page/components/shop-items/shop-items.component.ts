import { Component } from '@angular/core';
import {
  NzCarouselComponent,
  NzCarouselContentDirective,
} from 'ng-zorro-antd/carousel';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-shop-items',
  standalone: true,
  imports: [NzCarouselComponent, NzCarouselContentDirective, NgForOf],
  templateUrl: './shop-items.component.html',
  styleUrl: './shop-items.component.scss',
})
export class ShopItemsComponent {
  protected items = [
    {
      path: '../../../assets/svgs/iphone.svg',
      title: 'Mobile Phones',
    },
    {
      path: '../../../assets/svgs/tv.svg',
      title: 'Smart TV',
    },
    {
      path: '../../../assets/svgs/watch.svg',
      title: 'Smart Watch',
    },
    {
      path: '../../../assets/svgs/laptop.svg',
      title: 'Laptops',
    },
    {
      path: '../../../assets/svgs/laptop.svg',
      title: 'Laptops',
    },
    {
      path: '../../../assets/svgs/drone.svg',
      title: 'Drones',
    },
  ];
}
