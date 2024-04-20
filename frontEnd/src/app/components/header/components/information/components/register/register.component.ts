import { Component, ViewChild } from '@angular/core';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { NzCheckboxComponent } from 'ng-zorro-antd/checkbox';
import { NzDividerComponent } from 'ng-zorro-antd/divider';
import { NzInputDirective } from 'ng-zorro-antd/input';
import { CdkPortal } from '@angular/cdk/portal';
import { OtpSectionComponent } from '../otp-section/otp-section.component';
import { OverlayService } from '../../services/overlay.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    NzButtonComponent,
    NzCheckboxComponent,
    NzDividerComponent,
    NzInputDirective,
    CdkPortal,
    OtpSectionComponent,
    FormsModule,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  @ViewChild(CdkPortal) portal!: CdkPortal;

  constructor(private readonly overlayService: OverlayService) {}

  protected onRegisterButtonClicked(): void {
    this.overlayService.overlayRef.dispose();
    this.overlayService.create(this.portal);
  }
}
