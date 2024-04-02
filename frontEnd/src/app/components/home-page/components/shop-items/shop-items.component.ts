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
      description:
        'mobile telephone, portable device for connecting to a telecommunications network in order to transmit and receive voice, video, or other data',
    },
    {
      path: '../../../assets/svgs/tv.svg',
      title: 'Smart TV',
      description:
        'In short, a smart TV is an internet enabled TV which connects to your favourite streaming platforms for endless enjoyment of your favourite content.',
    },
    {
      path: '../../../assets/svgs/watch.svg',
      title: 'Smart Watch',
      description:
        'A smartwatch is a portable device worn on the wrist that supports apps and acts as an extension of your mobile phone in some cases.',
    },
    {
      path: '../../../assets/svgs/laptop.svg',
      title: 'Laptops',
      description:
        'A laptop is a personal computer that can be easily moved and used in a variety of locations. ',
    },
    {
      path: '../../../assets/svgs/drone.svg',
      title: 'Drones',
      description:
        "Drones are small or medium-sized unmanned aerial vehicles (UAVs). They're unique in that they can drive remotely and autonomously, and they're capable of maintaining a controlled, sustained level of flight",
    },
  ];
}
