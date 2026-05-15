import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [  CommonModule,
    RouterLink,
    RouterLinkActive],
     schemas: [CUSTOM_ELEMENTS_SCHEMA],
    
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

  isScrolled = false;
  mobileMenu = false;

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  toggleMenu() {
    this.mobileMenu = !this.mobileMenu;
  }
}
