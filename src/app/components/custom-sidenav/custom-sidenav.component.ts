import { CommonModule } from '@angular/common';
import { Component, computed, input, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-custom-sidenav',
  imports: [MatListModule, RouterModule, CommonModule, MatIconModule],
  templateUrl: './custom-sidenav.component.html',
  styleUrl: './custom-sidenav.component.css'
})
export class CustomSidenavComponent {
  items = [
    {
      icon: 'fal fa-home',
      label: 'Home',
      routeLink: 'dashboard'
    },
    {
      icon: 'fal fa-file',
      label: 'Pages',
      routeLink: 'contact',
    },
    {
      icon: 'fal fa-tags',
      label: 'Coupons',
      routeLink: 'new-contact'
    },
    {
      icon: 'fa fa-book',
      label: 'Media',
      routeLink: 'media'
    },
    {
      icon: 'fa fa-pencil',
      label: 'Products',
      routeLink: 'products'
    },
    {
      icon: 'fa fa-cog',
      label: 'Settings',
      routeLink: 'settings'
    },
    {
      icon: 'fa fa-terminal',
      label: 'Statistics',
      routeLink: 'statistics'
    },
  ];

  collapsed = input<boolean>(false);

  classList = computed(() => this.collapsed() ? 'sidenav sidenav-collapsed' : 'sidenav');
}