import { Component } from '@angular/core';
import { NzCardComponent } from 'ng-zorro-antd/card';
import { NgForOf } from '@angular/common';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { NzIconDirective } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-offers',
  standalone: true,
  imports: [NzCardComponent, NgForOf, NzButtonComponent, NzIconDirective],
  templateUrl: './offers.component.html',
  styleUrl: './offers.component.scss',
})
export class OffersComponent {
  protected items = [
    {
      imgPath: '../../../../../assets/svgs/laptop-2.svg',
      name: 'Mackbook Air M2',
    },
    {
      imgPath: '../../../../../assets/svgs/iphone-2.svg',
      name: 'Iphone 14 Pro',
    },
  ];
}
