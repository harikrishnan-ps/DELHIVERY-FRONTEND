import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface AppDownloadLinks {
  googlePlay: string;
  appStore: string;
}

export interface ShippingFormData {
  pickupPincode: string;
  deliveryPincode: string;
  shippingType: 'domestic' | 'international';
}

@Injectable({
  providedIn: 'root'
})
export class ShippingService {
  private appDownloadLinks: AppDownloadLinks = {
    googlePlay: 'https://play.google.com/store/apps/details?id=com.delhivery',
    appStore: 'https://apps.apple.com/in/app/delhivery/id1234567890'
  };

  constructor() {}

  /**
   * Get app download links
   */
  getAppDownloadLinks(): Observable<AppDownloadLinks> {
    return of(this.appDownloadLinks);
  }

  /**
   * Validate pin code format
   * Indian pin codes are typically 6 digits
   */
  validatePincode(pincode: string): boolean {
    const pincodeRegex = /^\d{6}$/;
    return pincodeRegex.test(pincode);
  }

  /**
   * Submit shipping form
   * In a real application, this would make an HTTP request
   */
  submitShippingForm(formData: ShippingFormData): Observable<any> {
    return of({
      success: true,
      message: 'Form submitted successfully',
      data: formData
    });
  }

  /**
   * Get OTP for shipping
   */
  getOTP(pincode: string): Observable<any> {
    return of({
      success: true,
      message: 'OTP sent to registered mobile',
      expiresIn: 300 // 5 minutes
    });
  }
}
