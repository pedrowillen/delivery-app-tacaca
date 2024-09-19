import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-delivery-page',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './delivery-page.component.html',
  styleUrl: './delivery-page.component.css'
})
export class DeliveryPageComponent {
  tacacaMenu = [
    {name: 'Tacacá Médio', stock: '999', price: '25.99'},
    {name: 'Tacacá Grande', stock: '999', price: '30.99'},
    {name: 'Combo Dois (2) Tacacá Grande', stock: '999', price: '55.99'},
    {name: 'Combo Tacacá Médio + Tacacá Grande', stock: '999', price: '50.99'},
    {name: 'Combo Dois (2) Tacacá Médio', stock: '999', price: '45.99'},
  ];
  
}
