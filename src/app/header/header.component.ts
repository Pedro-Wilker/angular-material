import { Component, computed, signal } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CustomSidenavComponent } from "../components/custom-sidenav/custom-sidenav.component";

@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule,
    MatSidenavModule, MatListModule, FormsModule,
    RouterModule, CommonModule, CustomSidenavComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  collapsed = signal(false);

  sidenavWidth = computed(()=> this.collapsed() ? '0px':'12.5rem');
}
