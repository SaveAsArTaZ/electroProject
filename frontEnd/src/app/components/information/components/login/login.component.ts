import { Component, ViewChildren } from '@angular/core';
import { NzInputDirective } from 'ng-zorro-antd/input';
import { NzCheckboxComponent } from 'ng-zorro-antd/checkbox';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { NzDividerComponent } from 'ng-zorro-antd/divider';
import { OverlayService } from '../../services/overlay.service';
import { CdkPortal } from '@angular/cdk/portal';
import { RegisterComponent } from '../register/register.component';
import { PasswordChangedModalComponent } from '../password-changed-modal/password-changed-modal.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    NzButtonComponent,
    NzCheckboxComponent,
    NzDividerComponent,
    NzInputDirective,
    RegisterComponent,
    CdkPortal,
    PasswordChangedModalComponent,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  @ViewChildren(CdkPortal) portal!: CdkPortal[];

  constructor(private readonly overlayService: OverlayService) {}

  onRegisterButtonClicked(): void {
    this.overlayService.overlayRef.dispose();
    this.overlayService.create((this.portal as any).first);
  }

  onForgetPasswordClicked(): void {
    this.overlayService.overlayRef.dispose();
    this.overlayService.create((this.portal as any).last);
  }
}
