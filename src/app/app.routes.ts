import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DeliveryPageComponent } from './components/delivery-page/delivery-page.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'delivery', component: DeliveryPageComponent}
];
