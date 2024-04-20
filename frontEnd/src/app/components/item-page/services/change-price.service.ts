import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ChangePriceService {
  private _price: string = '$1999.00';

  get price(): string {
    return this._price;
  }

  set price(value: string) {
    this._price = value;
  }

  public change(color: string): void {
    switch (color) {
      case 'gray':
        this.price = '$1999.00';
        return;
      case 'blue':
        this.price = '$2300.00';
        return;
      case 'black':
        this.price = '$1900.00';
        return;
      case 'violence':
        this.price = '$2500.00';
        return;
      default:
        return;
    }
  }
}
