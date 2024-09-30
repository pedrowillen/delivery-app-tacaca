import { Component } from '@angular/core';
import { MenuItem } from '../../services/menu-item';
import { TACACA_MENU } from '../../menus/tacaca-menu';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-menu-form',
  standalone: true,
  imports: [FormGroup, FormControl],
  templateUrl: './menu-form.component.html',
  styleUrl: './menu-form.component.css'
})
export class MenuFormComponent {
  tacacaMenu: MenuItem[] = TACACA_MENU;

  formMenu: FormGroup | undefined;

  constructor() {}

  createForm(menuItem: MenuItem) {
    this.formMenu = new FormGroup({
      tacacaMedio: new FormControl(this.tacacaMenu[0]),
      tacacaGrande: new FormControl(this.tacacaMenu[1]),
      comboTacacaG: new FormControl(this.tacacaMenu[2]),
      comboTacacaMedioGrande: new FormControl(this.tacacaMenu[3]),
      comboTacacaM: new FormControl(this.tacacaMenu[4]),
    });
  }
}
