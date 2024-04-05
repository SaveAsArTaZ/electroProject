import { Component } from '@angular/core';
import {
  NzBreadCrumbComponent,
  NzBreadCrumbItemComponent,
} from 'ng-zorro-antd/breadcrumb';
import { NgForOf } from '@angular/common';
import {
  NzCarouselComponent,
  NzCarouselContentDirective,
} from 'ng-zorro-antd/carousel';
import { FormsModule } from '@angular/forms';
import { NzRateComponent } from 'ng-zorro-antd/rate';
import { NzInputNumberComponent } from 'ng-zorro-antd/input-number';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { NzIconDirective } from 'ng-zorro-antd/icon';
import { HttpClientModule } from '@angular/common/http';
import { TabsComponent } from './components/tabs/tabs.component';

@Component({
  selector: 'app-item-page',
  standalone: true,
  imports: [
    NzBreadCrumbComponent,
    NzBreadCrumbItemComponent,
    NgForOf,
    NzCarouselComponent,
    NzCarouselContentDirective,
    FormsModule,
    NzRateComponent,
    NzInputNumberComponent,
    NzButtonComponent,
    NzIconDirective,
    HttpClientModule,
    TabsComponent,
  ],
  templateUrl: './item-page.component.html',
  styleUrl: './item-page.component.scss',
})
export class ItemPageComponent {
  protected items = [
    {
      path: '../../../assets/svgs/image 27.svg',
    },
    {
      path: '../../../assets/svgs/image 32.svg',
    },
    {
      path: '../../../assets/svgs/image 19.svg',
    },
    {
      path: '../../../assets/svgs/iphone.svg',
    },
  ];

  protected socialMedias = [
    {
      path: '../../../assets/svgs/fb.svg',
    },
    {
      path: '../../../assets/svgs/instagram.svg',
    },
    {
      path: '../../../assets/svgs/twitter.svg',
    },
  ];
  protected relatedItems = [
    {
      imgPath: '../../../assets/svgs/iphone.svg',
      name: 'Apple iPhone 14 Plus',
      rate: 3,
      price: '$850.00',
    },
    {
      imgPath: '../../../assets/svgs/image 26.svg',
      name: 'Xiaomi Fimi X8 Mini',
      rate: 4.5,
      price: '$650.00',
    },
    {
      imgPath: '../../../assets/svgs/image 29.svg',
      name: 'Apple iPad Mini 6 Wi-Fi',
      rate: 5,
      price: '$500.00',
    },
    {
      imgPath: '../../../assets/svgs/image 17.svg',
      name: 'Asus ROG Delta S',
      rate: 2,
      price: '$250.00',
    },
  ];
}