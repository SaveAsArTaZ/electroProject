import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { NzInputDirective, NzInputGroupComponent } from 'ng-zorro-antd/input';
import { NzIconDirective } from 'ng-zorro-antd/icon';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { NzDividerComponent } from 'ng-zorro-antd/divider';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    NgForOf,
    NzInputGroupComponent,
    NzInputDirective,
    NzIconDirective,
    NzButtonComponent,
    NzDividerComponent,
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  protected informationItems = {
    title: 'Information',
    items: [
      {
        name: 'My Account',
      },
      {
        name: 'Login',
      },

      {
        name: 'My Cart',
      },

      {
        name: 'My Wishlist',
      },

      {
        name: 'Checkout',
      },
    ],
  };
  protected serviceItems = {
    title: 'Service',
    items: [
      {
        name: 'About us',
      },
      {
        name: 'Careers',
      },

      {
        name: 'Delivery Information',
      },

      {
        name: 'Privacy Policy',
      },

      {
        name: 'Terms & Conditions',
      },
    ],
  };
  protected paymentMethods = [
    {
      path: '../../../assets/svgs/amex.svg',
    },
    {
      path: '../../../assets/svgs/google.svg',
    },
    {
      path: '../../../assets/svgs/master.svg',
    },
    {
      path: '../../../assets/svgs/paypal.svg',
    },
    {
      path: '../../../assets/svgs/visa.svg',
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
