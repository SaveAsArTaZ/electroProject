import { Component } from '@angular/core';
import {NzMenuDirective, NzMenuGroupComponent, NzMenuItemComponent, NzSubMenuComponent} from "ng-zorro-antd/menu";
import {NzIconDirective} from "ng-zorro-antd/icon";

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    NzMenuDirective,
    NzMenuItemComponent,
    NzIconDirective,
    NzSubMenuComponent,
    NzMenuGroupComponent
  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {

}
