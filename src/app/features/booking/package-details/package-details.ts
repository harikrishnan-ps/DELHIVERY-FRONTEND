import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BookingStateService } from '../../../core/services/booking-state.service';

@Component({
  selector: 'app-package-details',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './package-details.html',
  styleUrls: ['./package-details.scss']
})
export class PackageDetails implements OnInit {
  selectedPackaging = '';
  selectedWeight = '';
  selectedContent = '';
  
  packageValue = '';
  securePackage = false;

  packagingOptions = [
    { id: 'envelope', name: 'Envelope / Pouch', icon: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm16 3.38V6H4v1.38l8 4 8-4zm0 2.24l-8 4-8-4V18h16V9.62z' },
    { id: 'box', name: 'Box / Carton', icon: 'M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z' },
    { id: 'suitcase', name: 'Suitcase / Luggage', icon: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z' },
    { id: 'backpack', name: 'Backpack / Hand Bag', icon: 'M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2' },
    { id: 'other', name: 'Other', icon: 'M12 5v14M5 12h14' }
  ];

  weightOptions = [
    { id: 'xs', size: 'XS', range: 'UPTO 0.5 KG' },
    { id: 's', size: 'S', range: '0.5 KG - 2 KG' },
    { id: 'm', size: 'M', range: '2 KG - 5 KG' },
    { id: 'l', size: 'L', range: '5 KG - 10 KG' }
  ];

  contentOptions = [
    { id: 'books', name: 'Books & Documents', icon: 'book' },
    { id: 'electronics', name: 'Electronics', icon: 'smartphone' },
    { id: 'others', name: 'Others, please specify', icon: 'more-horizontal' }
  ];

  constructor(private router: Router, private bookingState: BookingStateService) {}

  ngOnInit() {
    this.selectedPackaging = this.bookingState.selectedPackaging;
    this.selectedWeight = this.bookingState.selectedWeight;
    this.selectedContent = this.bookingState.selectedContent;
    this.packageValue = this.bookingState.packageValue;
    this.securePackage = this.bookingState.securePackage;
  }

  selectPackaging(id: string) {
    this.selectedPackaging = id;
    if (this.selectedPackaging === 'envelope') {
        this.selectedWeight = 'xs';
        this.selectedContent = 'books';
    }
  }

  selectWeight(id: string) {
    this.selectedWeight = id;
  }

  selectContent(id: string) {
    this.selectedContent = id;
  }

  get canProceed() {
    return this.selectedPackaging && this.selectedWeight && this.selectedContent;
  }

  goToNextStep() {
    if (this.canProceed) {
      this.bookingState.selectedPackaging = this.selectedPackaging;
      this.bookingState.selectedWeight = this.selectedWeight;
      this.bookingState.selectedContent = this.selectedContent;
      this.bookingState.packageValue = this.packageValue;
      this.bookingState.securePackage = this.securePackage;
      this.router.navigate(['/direct/app/schedule-pickup']);
    }
  }
  
  goBack() {
    this.router.navigate(['/direct/app/address-details']);
  }
}
