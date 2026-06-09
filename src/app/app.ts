import { Component, signal, inject } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AnnouncementBar } from './shared/components/announcement-bar/announcement-bar';
import { Footer } from './shared/components/footer/footer';
import { Navbar } from './shared/components/navbar/navbar';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [CommonModule, AnnouncementBar, Footer, Navbar, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('delhivery-clone');
  router = inject(Router);
  isAdminRoute = false;

  constructor() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.isAdminRoute = event.urlAfterRedirects.startsWith('/admin');
    });
  }
}
