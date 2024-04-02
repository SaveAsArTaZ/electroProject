import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-information',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './information.component.html',
  styleUrl: './information.component.scss',
})
export class InformationComponent {
  protected items = [
    {
      path: '../../../assets/svgs/fast delivery.svg',
      title: 'Free Shipping',
      description: 'Free shipping for order above $150',
    },
    {
      path: '../../../assets/svgs/package box 8.svg',
      title: 'Money Guarantee',
      description: 'Within 30 days for an exchange',
    },
    {
      path: '../../../assets/svgs/package box 9.svg',
      title: 'Online Support',
      description: '24 hours a day, 7 days a week',
    },
    {
      path: '../../../assets/svgs/package box 10.svg',
      title: 'Flexible Payment',
      description: 'Pay with multiple credit cards',
    },
  ];
}
