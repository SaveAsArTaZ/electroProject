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
}
