import { Component } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import {
  NzDropDownDirective,
  NzDropdownMenuComponent,
} from 'ng-zorro-antd/dropdown';
import { NzIconDirective } from 'ng-zorro-antd/icon';
import { NavigationComponent } from './components/navigation/navigation.component';
import { InformationComponent } from './components/information/information.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NzButtonModule,
    SearchBoxComponent,
    InformationComponent,
    NzDropDownDirective,
    NzDropdownMenuComponent,
    NzIconDirective,
    NavigationComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
