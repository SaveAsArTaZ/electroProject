import { Component } from '@angular/core';
import { NzInputNumberComponent } from 'ng-zorro-antd/input-number';
import { NzButtonComponent } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-otp-section',
  standalone: true,
  imports: [NzInputNumberComponent, NzButtonComponent],
  templateUrl: './otp-section.component.html',
  styleUrl: './otp-section.component.scss',
})
export class OtpSectionComponent {}
