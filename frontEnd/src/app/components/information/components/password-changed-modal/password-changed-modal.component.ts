import { Component } from '@angular/core';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { CdkPortal } from '@angular/cdk/portal';

@Component({
  selector: 'app-password-changed-modal',
  standalone: true,
  imports: [NzButtonComponent, CdkPortal],
  templateUrl: './password-changed-modal.component.html',
  styleUrl: './password-changed-modal.component.scss',
})
export class PasswordChangedModalComponent {}
