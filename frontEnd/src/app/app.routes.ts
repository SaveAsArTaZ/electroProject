import { Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ItemPageComponent } from './components/item-page/item-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'shop/item',
    component: ItemPageComponent,
  },
];
