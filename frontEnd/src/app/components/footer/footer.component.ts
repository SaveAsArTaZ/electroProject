import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { NzInputDirective, NzInputGroupComponent } from 'ng-zorro-antd/input';
import { NzIconDirective } from 'ng-zorro-antd/icon';
import { NzButtonComponent } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    NgForOf,
    NzInputGroupComponent,
    NzInputDirective,
    NzIconDirective,
    NzButtonComponent,
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
}
