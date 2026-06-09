import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { BookingStateService } from '../../../core/services/booking-state.service';
import { ApiService } from '../../../core/services/api.service';
import { firstValueFrom } from 'rxjs';

declare var Razorpay: any;

@Component({
  selector: 'app-summary-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './summary-details.html',
  styleUrls: ['./summary-details.scss']
})
export class SummaryDetails implements OnInit {

  pickupDetails: any;
  deliveryDetails: any;
  
  selectedPackaging: string = '';
  selectedWeight: string = '';
  selectedContent: string = '';
  
  selectedDate: number = 8;

  constructor(private router: Router, private bookingState: BookingStateService, private apiService: ApiService) {}

  ngOnInit() {
    this.pickupDetails = this.bookingState.pickupDetails;
    this.deliveryDetails = this.bookingState.deliveryDetails;
    this.selectedPackaging = this.bookingState.selectedPackaging;
    this.selectedWeight = this.bookingState.selectedWeight;
    this.selectedContent = this.bookingState.selectedContent;
    this.selectedDate = this.bookingState.selectedDate;
  }
  
  getPackagingName(): string {
    const map: any = {
      'envelope': 'Envelope / Pouch',
      'box': 'Box / Carton',
      'suitcase': 'Suitcase / Luggage',
      'backpack': 'Backpack / Hand Bag',
      'other': 'Other'
    };
    return map[this.selectedPackaging] || 'Envelope / Pouch';
  }
  
  getContentName(): string {
    const map: any = {
      'books': 'Books & Documents',
      'electronics': 'Electronics',
      'others': 'Others, please specify'
    };
    return map[this.selectedContent] || 'Books & Documents';
  }
  
  getWeightRange(): string {
    const map: any = {
      'xs': 'UPTO 0.5 KG',
      's': '0.5 KG - 2 KG',
      'm': '2 KG - 5 KG',
      'l': '5 KG - 10 KG'
    };
    return map[this.selectedWeight] || 'UPTO 0.5 KG';
  }

  changeStep(step: string) {
    this.router.navigate([`/direct/app/${step}`]);
  }

  async proceedToPay() {
    try {
      // 1. Save Pickup Address
      const pickupResponse = await firstValueFrom(this.apiService.post<any>('addresses', {
        contactName: this.pickupDetails?.name || 'Unknown',
        mobileNumber: this.pickupDetails?.mobileNumber || '0000000000',
        email: this.pickupDetails?.email || '',
        flat: this.pickupDetails?.flat || '',
        area: this.pickupDetails?.area || '',
        city: this.pickupDetails?.city || '',
        state: this.pickupDetails?.state || '',
        pincode: this.pickupDetails?.pincode || '',
        tag: this.pickupDetails?.saveAs || 'Pickup'
      }));
      const pickupAddressId = pickupResponse.id;

      // 2. Save Delivery Address
      const deliveryResponse = await firstValueFrom(this.apiService.post<any>('addresses', {
        contactName: this.deliveryDetails?.contactName || 'Unknown',
        mobileNumber: this.deliveryDetails?.mobileNumber || '0000000000',
        email: this.deliveryDetails?.email || '',
        flat: this.deliveryDetails?.flat || '',
        area: this.deliveryDetails?.area || '',
        city: this.deliveryDetails?.city || '',
        state: this.deliveryDetails?.state || '',
        pincode: this.deliveryDetails?.pincode || '',
        tag: this.deliveryDetails?.saveAs || 'Delivery'
      }));
      const deliveryAddressId = deliveryResponse.id;

      // 3. Initiate Order
      const date = new Date();
      date.setDate(this.selectedDate || date.getDate());

      const orderResponse = await firstValueFrom(this.apiService.post<any>('orders/initiate', {
        pickupAddressId: pickupAddressId,
        deliveryAddressId: deliveryAddressId,
        packagingType: this.selectedPackaging || 'envelope',
        weightCategory: this.selectedWeight || 'xs',
        contentType: this.selectedContent || 'books',
        scheduledPickupDate: date.toISOString()
      }));

      // 4. Open Razorpay
      const options = {
        key: orderResponse.key,
        amount: orderResponse.amount * 100, 
        currency: 'INR',
        name: "Delhivery Clone",
        description: "Courier Service Payment",
        image: "https://www.delhivery.com/wp-content/uploads/2020/09/delhivery-logo.png",
        order_id: orderResponse.razorpayOrderId,
        handler: async (resp: any) => {
          try {
            await firstValueFrom(this.apiService.post<any>('orders/verify-payment', {
              orderId: resp.razorpay_order_id,
              paymentId: resp.razorpay_payment_id,
              signature: resp.razorpay_signature
            }));
            alert('Payment successful! Payment ID: ' + resp.razorpay_payment_id);
            this.router.navigate(['/home']);
          } catch (err) {
            console.error('Payment verification failed', err);
            alert('Payment verification failed on the server.');
          }
        },
        prefill: {
          name: this.pickupDetails?.name || '',
          email: this.pickupDetails?.email || '',
          contact: this.pickupDetails?.mobileNumber || ''
        },
        theme: {
          color: "#e21b22"
        }
      };
      
      const rzp = new Razorpay(options);
      rzp.on('payment.failed', (resp: any) => {
        alert('Payment failed: ' + resp.error.description);
      });
      rzp.open();
      
    } catch (error) {
      console.error('Failed to process payment flow', error);
      alert('Could not initialize payment gateway or save order.');
    }
  }
}
