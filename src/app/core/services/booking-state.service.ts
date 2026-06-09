import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingStateService {
  
  // Address Details
  pickupAddressAdded = false;
  deliveryAddressAdded = false;

  pickupDetails = {
    name: '',
    email: '',
    flat: '',
    area: '',
    pincode: '',
    city: '',
    state: '',
    saveAs: 'Home'
  };
  
  deliveryDetails = {
    contactName: '',
    mobileNumber: '',
    email: '',
    flat: '',
    area: '',
    pincode: '',
    city: '',
    state: '',
    saveAs: 'Home'
  };

  // Package Details
  selectedPackaging = '';
  selectedWeight = '';
  selectedContent = '';
  packageValue = '';
  securePackage = false;

  // Pickup Date
  selectedDate = 8;
  
  constructor() { }
}
