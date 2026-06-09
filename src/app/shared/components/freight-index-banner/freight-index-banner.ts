import { Component } from '@angular/core';

@Component({
  selector: 'app-freight-index-banner',
  standalone: true,
  imports: [],
  templateUrl: './freight-index-banner.html',
  styleUrl: './freight-index-banner.scss'
})
export class FreightIndexBanner {
  routes = [
    { from: 'Daman', to: 'Ahmedabad' },
    { from: 'Sirmaur', to: 'Bangalore' },
    { from: 'Sivaganga', to: 'Bangalore' },
    { from: 'Sabar Kantha', to: 'Bangalore' }
  ];

  navigateToFreightIndex() {
    window.location.href = 'https://one.freightindex.in/';
  }
}
