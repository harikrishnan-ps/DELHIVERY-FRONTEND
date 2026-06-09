import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { forkJoin } from 'rxjs';
import { ApiService } from '../../../core/services/api.service';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './orders.html',
  styleUrls: ['./orders.scss']
})
export class OrdersComponent implements OnInit {
  activeTab = 'All';
  tabs = ['All', 'Courier', 'Parcel'];

  orders: any[] = [];
  private apiService = inject(ApiService);

  ngOnInit() {
    forkJoin({
      orders: this.apiService.get<any[]>('Orders'),
      addresses: this.apiService.get<any[]>('Addresses')
    }).subscribe(({ orders, addresses }) => {
      this.orders = orders.map(o => {
        const pickup = addresses.find(a => a.id === o.pickupAddressId) || {};
        const delivery = addresses.find(a => a.id === o.deliveryAddressId) || {};
        
        return {
          status: o.status === 'Pending' ? 'To be updated' : 'Confirmed',
          statusDetail: o.paymentStatus === 'Pending' ? 'Payment Pending' : 'Payment Success',
          type: o.packagingType || 'Courier',
          pickup: {
            name: pickup.contactName || '',
            city: pickup.city || '',
            pincode: pickup.pincode || ''
          },
          delivery: {
            name: delivery.contactName || '',
            city: delivery.city || '',
            pincode: delivery.pincode || ''
          },
          warningTitle: o.paymentStatus === 'Pending' ? 'Incomplete Payment' : null,
          warningMessage: o.paymentStatus === 'Pending' ? 'Your payment was unsuccessful. Please try again to complete your booking confirmation.' : null
        };
      });
    });
  }

  setTab(tab: string) {
    this.activeTab = tab;
  }

  get filteredOrders() {
    if (this.activeTab === 'All') return this.orders;
    return this.orders.filter(o => o.type === this.activeTab);
  }
}
