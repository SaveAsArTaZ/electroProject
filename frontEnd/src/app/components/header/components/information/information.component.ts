import { Component, OnInit, ViewChild } from '@angular/core';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { NzBadgeComponent } from 'ng-zorro-antd/badge';
import {
  NzDrawerComponent,
  NzDrawerContentDirective,
} from 'ng-zorro-antd/drawer';
import { NgForOf, NgIf } from '@angular/common';
import { NzIconDirective } from 'ng-zorro-antd/icon';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { OverlayModule } from '@angular/cdk/overlay';
import { LoginComponent } from './components/login/login.component';
import { CdkPortal, PortalModule } from '@angular/cdk/portal';
import { OverlayService } from './services/overlay.service';
import { CartItemsService } from './services/cart-items.service';

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
    NzModalModule,
    NgIf,
    OverlayModule,
    PortalModule,
    LoginComponent,
  ],
  templateUrl: './information.component.html',
  styleUrl: './information.component.scss',
})
export class InformationComponent implements OnInit {
  @ViewChild(CdkPortal) portal!: CdkPortal;

  protected cardItems: {
    quantity: number;
    price: string;
    imgPath: string;
    name: string;
    id: string;
  }[] = [];
  protected isDrawerVisible: boolean = false;

  public constructor(
    private readonly overlayService: OverlayService,
    protected readonly cartItemsService: CartItemsService,
  ) {}

  protected onCardClicked(): void {
    this.isDrawerVisible = true;
  }

  protected onDrawerClosed(): void {
    this.isDrawerVisible = false;
  }

  protected onLoginClicked(): void {
    this.overlayService.create(this.portal);
  }

  ngOnInit(): void {
    this.cardItems = this.cartItemsService.cardItems;
  }

  onDeleteItemClicked(id: string) {
    this.cartItemsService.remove(id);
    this.cardItems = this.cartItemsService.cardItems;
  }
}
