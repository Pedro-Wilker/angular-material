import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule,
    MatSidenavModule, MatListModule, FormsModule,
    RouterModule, CommonModule

  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  opened=false;

  items = [
    {
      icon: 'pi pi-home',
      label: 'Home',
      routeLink: 'dashboard'
    },
    {
      icon: 'pi pi-check',
      label: 'Contact',
      routeLink: 'contact',
    },
    {
      icon: 'pi pi-check',
      label: 'New Contact',
      routeLink: 'new-contact'
    },
  ];
}
