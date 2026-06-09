import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-booking-layout',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './booking-layout.html',
  styleUrls: ['./booking-layout.scss']
})
export class BookingLayout {
  currentStepIndex: number = 0;

  steps = [
    { label: 'ADDRESS', path: '/direct/app/address-details' },
    { label: 'PACKAGE', path: '/direct/app/package-details' },
    { label: 'SCHEDULE', path: '/direct/app/schedule-pickup' },
    { label: 'SUMMARY', path: '/direct/app/summary-details' }
  ];

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.updateCurrentStep(event.urlAfterRedirects);
    });
    
    // Initial check
    this.updateCurrentStep(this.router.url);
  }

  updateCurrentStep(url: string) {
    const index = this.steps.findIndex(step => url.includes(step.path));
    if (index !== -1) {
      this.currentStepIndex = index;
    }
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }
}
