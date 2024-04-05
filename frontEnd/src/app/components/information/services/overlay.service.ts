import { Injectable } from '@angular/core';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { CdkPortal } from '@angular/cdk/portal';

@Injectable({
  providedIn: 'root',
})
export class OverlayService {
  private _overlayRef: any;
  public constructor(private overlay: Overlay) {}

  public create(portal: CdkPortal): void {
    const config = new OverlayConfig();
    config.hasBackdrop = true;

    config.positionStrategy = this.overlay
      .position()
      .global()
      .centerHorizontally()
      .centerVertically();
    this._overlayRef = this.overlay.create(config);
    this._overlayRef.attach(portal);

    this._overlayRef
      .backdropClick()
      .subscribe(() => this._overlayRef.dispose());
  }

  get overlayRef(): any {
    return this._overlayRef;
  }

  set overlayRef(value: any) {
    this._overlayRef = value;
  }
}
