import { Component, Renderer2, ViewChildren } from '@angular/core';
import { NzRateComponent } from 'ng-zorro-antd/rate';
import { FormsModule } from '@angular/forms';
import { NzTooltipDirective } from 'ng-zorro-antd/tooltip';

@Component({
  selector: 'app-top-selling-product',
  standalone: true,
  imports: [NzRateComponent, FormsModule, NzTooltipDirective],
  templateUrl: './top-selling-product.component.html',
  styleUrl: './top-selling-product.component.scss',
})
export class TopSellingProductComponent {
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
