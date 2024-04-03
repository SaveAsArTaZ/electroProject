import { Component } from '@angular/core';
import { NzTabComponent, NzTabSetComponent } from 'ng-zorro-antd/tabs';
import {
  NzCommentComponent,
  NzCommentContentDirective,
} from 'ng-zorro-antd/comment';
import { NzAvatarComponent } from 'ng-zorro-antd/avatar';
import { formatDistance } from 'date-fns';
import { NgForOf } from '@angular/common';
import { NzRateComponent } from 'ng-zorro-antd/rate';
import { FormsModule } from '@angular/forms';
import {
  NzFormControlComponent,
  NzFormDirective,
  NzFormItemComponent,
  NzFormLabelComponent,
} from 'ng-zorro-antd/form';
import { NzColDirective } from 'ng-zorro-antd/grid';
import { NzInputDirective } from 'ng-zorro-antd/input';
import { NzDividerComponent } from 'ng-zorro-antd/divider';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { NzIconDirective } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [
    NzTabSetComponent,
    NzTabComponent,
    NzCommentComponent,
    NzAvatarComponent,
    NzCommentContentDirective,
    NgForOf,
    NzRateComponent,
    FormsModule,
    NzFormDirective,
    NzFormItemComponent,
    NzFormLabelComponent,
    NzFormControlComponent,
    NzColDirective,
    NzInputDirective,
    NzDividerComponent,
    NzButtonComponent,
    NzIconDirective,
  ],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss',
})
export class TabsComponent {
  time = formatDistance(new Date(), new Date());
  protected items = [
    {
      author: 'Mark Williams',
      imgPath: '../../../assets/svgs/Ellipse 956.svg',
      rate: 5,
      title: 'Excellent Product, I Love It 😍',
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    },
    {
      author: 'Alexa Johnson',
      imgPath: '../../../assets/svgs/Ellipse 957.svg',
      rate: 5,
      title: 'My Brother is very much happy with this iPhone',
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    },
  ];
}
