import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-support',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './support.html',
  styleUrls: ['./support.scss']
})
export class Support {
  searchQuery = '';
  
  faqs = [
    { question: 'How can I track my shipment?', answer: 'You can easily track your shipment by entering your AWB or Order ID on our Track Order page.' },
    { question: 'What do I do if my package is delayed?', answer: 'Usually, delayed packages are delivered within the next 24-48 hours. If the delay is longer, please raise a query.' },
    { question: 'How do I schedule a pickup?', answer: 'Click on the "Ship Now" button on our homepage to schedule a pickup from your location.' },
    { question: 'Can I change my delivery address?', answer: 'Address changes are possible only before the package is dispatched from the origin facility.' }
  ];

  activeFaqIndex: number | null = null;

  toggleFaq(index: number): void {
    if (this.activeFaqIndex === index) {
      this.activeFaqIndex = null;
    } else {
      this.activeFaqIndex = index;
    }
  }

  onSearch(event: any): void {
    this.searchQuery = event.target.value;
  }
}
