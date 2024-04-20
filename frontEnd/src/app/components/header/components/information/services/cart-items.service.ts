import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartItemsService {
  private _cardItems: {
    quantity: number;
    price: string;
    imgPath: string;
    name: string;
    id: string;
  }[] = [];

  get cardItems(): {
    quantity: number;
    price: string;
    imgPath: string;
    name: string;
    id: string;
  }[] {
    return this._cardItems;
  }

  set cardItems(
    value: {
      quantity: number;
      price: string;
      imgPath: string;
      name: string;
      id: string;
    }[],
  ) {
    this._cardItems = value;
  }

  add(item: any) {
    this.cardItems.push(item);
  }

  remove(id: string) {
    let items: {
      quantity: number;
      price: string;
      imgPath: string;
      name: string;
      id: string;
    }[] = [];
    this.cardItems.forEach((cardItem) => {
      if (cardItem.id !== id) {
        items.push(cardItem);
      }
    });
    this.cardItems = items;
  }
}
