import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BookingStateService } from '../../../core/services/booking-state.service';

@Component({
  selector: 'app-address-details',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './address-details.html',
  styleUrls: ['./address-details.scss']
})
export class AddressDetails implements OnInit {
  pickupAddressAdded = false;
  deliveryAddressAdded = false;
  
  showPickupModal = false;
  showDeliveryModal = false;
  showProfileModal = false;
  
  pickupDetails: any;
  deliveryDetails: any;

  constructor(
    private router: Router, 
    private route: ActivatedRoute,
    private bookingState: BookingStateService
  ) {}

  ngOnInit() {
    this.pickupAddressAdded = this.bookingState.pickupAddressAdded;
    this.deliveryAddressAdded = this.bookingState.deliveryAddressAdded;
    this.pickupDetails = this.bookingState.pickupDetails;
    this.deliveryDetails = this.bookingState.deliveryDetails;

    this.route.queryParams.subscribe(params => {
      if (params['email']) {
        this.pickupDetails.email = params['email'];
        this.deliveryDetails.email = params['email'];
      }
    });
  }

  openPickupModal() {
    this.showProfileModal = true;
  }
  
  closeProfileModal() {
    this.showProfileModal = false;
  }
  
  saveProfileAndContinue() {
    this.showProfileModal = false;
    this.showPickupModal = true;
  }

  closePickupModal() {
    this.showPickupModal = false;
  }
  
  savePickupAddress() {
    this.pickupAddressAdded = true;
    this.bookingState.pickupAddressAdded = true;
    this.showPickupModal = false;
  }

  editPickupAddress() {
    this.showPickupModal = true;
  }
  
  deletePickupAddress() {
    this.pickupAddressAdded = false;
    this.bookingState.pickupAddressAdded = false;
  }

  openDeliveryModal() {
    this.showDeliveryModal = true;
  }
  
  closeDeliveryModal() {
    this.showDeliveryModal = false;
  }
  
  saveDeliveryAddress() {
    this.deliveryAddressAdded = true;
    this.bookingState.deliveryAddressAdded = true;
    this.showDeliveryModal = false;
  }
  
  editDeliveryAddress() {
    this.showDeliveryModal = true;
  }
  
  deleteDeliveryAddress() {
    this.deliveryAddressAdded = false;
    this.bookingState.deliveryAddressAdded = false;
  }

  setSaveAs(type: string, value: string) {
    if (type === 'pickup') {
      this.pickupDetails.saveAs = value;
    } else {
      this.deliveryDetails.saveAs = value;
    }
  }

  goToNextStep() {
    if (this.pickupAddressAdded && this.deliveryAddressAdded) {
      this.router.navigate(['/direct/app/package-details']);
    }
  }
  
  goBack() {
    this.router.navigate(['/home']);
  }
}
