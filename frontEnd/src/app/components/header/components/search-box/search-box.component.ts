import {Component} from '@angular/core';
import {NzDropDownModule} from "ng-zorro-antd/dropdown";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzInputDirective, NzInputGroupComponent} from "ng-zorro-antd/input";

@Component({
  selector: 'app-search-box',
  standalone: true,
  imports: [NzDropDownModule, NzIconModule, NzButtonModule, NzInputDirective, NzInputGroupComponent],
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.scss'
})
export class SearchBoxComponent {

}
