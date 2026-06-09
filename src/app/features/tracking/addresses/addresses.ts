import { Component, OnInit, inject } from '@angular/core';
import { ApiService } from '../../../core/services/api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-addresses',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './addresses.html',
  styleUrls: ['./addresses.scss']
})
export class AddressesComponent implements OnInit {
  addresses: any[] = [];
  private apiService = inject(ApiService);

  showAddForm = false;
  newAddress = {
    contactName: '',
    mobileNumber: '',
    flat: '',
    area: '',
    city: '',
    state: '',
    pincode: '',
    tag: 'Home'
  };

  ngOnInit() {
    this.loadAddresses();
  }

  loadAddresses() {
    this.apiService.get<any[]>('Addresses').subscribe(data => {
      this.addresses = data.map(a => ({
        name: a.contactName,
        address: `${a.flat || ''}, ${a.area || ''}, ${a.city || ''}, ${a.state || ''} - ${a.pincode || ''}`,
        tag: a.tag,
        phone: a.mobileNumber
      }));
    });
  }

  toggleAddForm() {
    this.showAddForm = !this.showAddForm;
  }

  saveAddress() {
    this.apiService.post('Addresses', this.newAddress).subscribe({
      next: () => {
        this.toggleAddForm();
        this.loadAddresses();
        this.newAddress = { contactName: '', mobileNumber: '', flat: '', area: '', city: '', state: '', pincode: '', tag: 'Home' };
      },
      error: err => console.error('Error saving address:', err)
    });
  }
}
