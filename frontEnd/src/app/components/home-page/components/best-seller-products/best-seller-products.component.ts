import { Component, Renderer2, ViewChildren } from '@angular/core';
import {
  NzMenuDirective,
  NzMenuGroupComponent,
  NzMenuItemComponent,
  NzSubMenuComponent,
} from 'ng-zorro-antd/menu';
import { NzRateComponent } from 'ng-zorro-antd/rate';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-best-seller-products',
  standalone: true,
  imports: [
    NzMenuDirective,
    NzMenuGroupComponent,
    NzMenuItemComponent,
    NzSubMenuComponent,
    NzRateComponent,
    FormsModule,
  ],
  templateUrl: './best-seller-products.component.html',
  styleUrl: './best-seller-products.component.scss',
})
export class BestSellerProductsComponent {
  @ViewChildren('item')
  public items = [];

  constructor(private readonly renderer: Renderer2) {}
  onListItemClicked(event: MouseEvent): void {
    this.items.forEach((item) => {
      if ((item as any).nativeElement == event.currentTarget) {
        this.renderer.addClass(event.currentTarget, 'selected');
      } else {
        this.renderer.removeClass((item as any).nativeElement, 'selected');
      }
    });
  }
}
