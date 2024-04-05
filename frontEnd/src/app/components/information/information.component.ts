import { Component } from '@angular/core';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { NzBadgeComponent } from 'ng-zorro-antd/badge';
import {
  NzDrawerComponent,
  NzDrawerContentDirective,
} from 'ng-zorro-antd/drawer';
import { NgForOf } from '@angular/common';
import { NzIconDirective } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-information',
  standalone: true,
  imports: [
    NzButtonComponent,
    NzBadgeComponent,
    NzDrawerComponent,
    NzDrawerContentDirective,
    NgForOf,
    NzIconDirective,
  ],
  templateUrl: './information.component.html',
  styleUrl: './information.component.scss',
})
export class InformationComponent {
  protected cardItems = [
    {
      imgPath: '../../assets/svgs/iphone.svg',
      name: 'Apple iPhone 14 Pro',
      price: '$1999.00',
      quantity: 1,
    },
    {
      imgPath: '../../assets/svgs/image 25.svg',
      name: 'Asus ROG Delta S',
      price: '$250.00',
      quantity: 1,
    },
    {
      imgPath: '../../assets/svgs/image 25.svg',
      name: 'Asus ROG Delta S',
      price: '$250.00',
      quantity: 1,
    },
    {
      imgPath: '../../assets/svgs/image 25.svg',
      name: 'Asus ROG Delta S',
      price: '$250.00',
      quantity: 1,
    },
    {
      imgPath: '../../assets/svgs/image 25.svg',
      name: 'Asus ROG Delta S',
      price: '$250.00',
      quantity: 1,
    },
    {
      imgPath: '../../assets/svgs/image 25.svg',
      name: 'Asus ROG Delta S',
      price: '$250.00',
      quantity: 1,
    },
    {
      imgPath: '../../assets/svgs/image 25.svg',
      name: 'Asus ROG Delta S',
      price: '$250.00',
      quantity: 1,
    },
  ];
  protected visible: boolean = false;

  protected onCardClicked(): void {
    this.visible = true;
  }

  protected onDrawerClosed(): void {
    this.visible = false;
  }
}
