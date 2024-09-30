import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TACACA_MENU } from '../../menus/tacaca-menu';
import { MenuItem } from '../../services/menu-item';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-delivery-page',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './delivery-page.component.html',
  styleUrl: './delivery-page.component.css'
})
export class DeliveryPageComponent {

}
