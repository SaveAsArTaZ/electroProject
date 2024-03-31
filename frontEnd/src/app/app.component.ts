import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Electro';
  webPositionY: number = 0;
  @HostListener('document:mousewheel', ['$event'])
  onDocumentMousewheelEvent(event: WheelEvent): void {
    this.webPositionY = window.scrollY;
    const scrollStep = event.deltaY > 0 ? 20 : -20; // Determine scroll amount based on deltaY

    this.animateScroll(this.webPositionY, scrollStep); // Call animation function
  }

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) {}

  animateScroll(currentY: number, scrollAmount: number): void {
    const targetY = Math.max(0, currentY + scrollAmount); // Ensure scroll stays within bounds
    const animationDuration = 200; // Adjust duration as needed (in milliseconds)

    let startTime: any = null;
    const animate = (timestamp: number) => {
      if (!startTime) {
        startTime = timestamp;
      }

      const elapsed = timestamp - startTime;
      const ease = this.easeOutQuad(
        elapsed,
        animationDuration,
        currentY,
        scrollAmount,
      ); // Use easing function

      this.renderer.setProperty(document.documentElement, 'scrollTop', ease);

      if (elapsed < animationDuration) {
        window.requestAnimationFrame(animate);
      }
    };

    window.requestAnimationFrame(animate);
  }

  // Easing function (example: easeOutQuad)
  easeOutQuad(t: number, b: number, c: number, d: number): number {
    return c * (t /= d) * t + b;
  }
}
