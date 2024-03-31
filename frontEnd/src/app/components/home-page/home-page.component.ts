import { Component } from '@angular/core';
import { DescriptionComponent } from './components/description/description.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [DescriptionComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {}
