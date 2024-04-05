import { Component, ViewChild } from '@angular/core';
import { NzInputDirective } from 'ng-zorro-antd/input';
import { NzCheckboxComponent } from 'ng-zorro-antd/checkbox';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { NzDividerComponent } from 'ng-zorro-antd/divider';
import { OverlayService } from '../../services/overlay.service';
import { CdkPortal } from '@angular/cdk/portal';
import { RegisterComponent } from '../register/register.component';

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
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  @ViewChild(CdkPortal) portal!: CdkPortal;

  constructor(private readonly overlayService: OverlayService) {}

  onRegisterButtonClicked(): void {
    this.overlayService.overlayRef.dispose();
    this.overlayService.create(this.portal);
  }
}
