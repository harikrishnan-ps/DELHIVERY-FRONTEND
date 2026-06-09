import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-franchise-opportunities',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './franchise-opportunities.html',
  styleUrl: './franchise-opportunities.scss',
})
export class FranchiseOpportunities {
  content = {
    hero: {
      title: 'Associate with <span class="text-delhivery-red">India\'s fastest</span> growing franchisee business partnership program',
      subtitle: 'Become part of the Delhivery network and grow your business with us',
      image: 'assets/images/franchise-hero.jpg',
      disclaimer: 'Disclaimer: Delhivery does not offer franchises or distributorships through phone calls and does not ask for any payments in this regard. All official communication from Delhivery is sent only through verified company email addresses originating from @delhivery.com. Customers are strongly advised to verify the authenticity of any communication claiming to be from Delhivery and to not make any payments or share personal information in response to unsolicited or unverified messages.'
    },
    franchiseTypes: [
      {
        title: 'Run a Delhivery courier booking counter',
        description: 'Collect parcels from customers at your Delhivery store and provide a convenient courier experience',
        image: 'assets/images/courier-booking.jpg',
        benefits: [
          'Affordable setup cost',
          'Make profit on every parcel booked',
          'Additional income on packaging & insurance services'
        ],
        eligibility: [
          '60-80 sqft space on a main road',
          'Good communication skills'
        ],
        ctaText: 'Sign up to set up a courier booking counter'
      },
      {
        title: 'Run parcel delivery center for Delhivery',
        description: 'Sort and Deliver parcels to customers doorstep with your staff, from your location, on select routes',
        image: 'assets/images/parcel-delivery.jpg',
        benefits: [
          'Low Setup Cost',
          'High Volume Business',
          'Earn Per Delivery'
        ],
        eligibility: [
          'Minimum 200 Sqft. of floor space to keep shipments',
          'Delivery Rider Staff for doorstep delivery'
        ],
        ctaText: 'Sign up to deliver parcels for Delhivery'
      }
    ],
    faqs: {
      leftCol: {
        title: 'Parcel Exchange Center',
        questions: [
          { q: 'What is Local Delivery Franchise?', a: 'The program is an extension of the Delhivery pick-up and delivery network. We seek entrepreneurs willing to run their own parcel and freight pick-up and delivery business.' },
          { q: 'Who can become a Local Delivery Franchise partner?', a: '' },
          { q: 'How long does the application process take?', a: '' },
          { q: 'Does it cost anything to become a partner for delhivery?', a: '' },
          { q: 'Will training be provided?', a: '' },
          { q: 'What are the daily operations like?', a: '' },
          { q: 'Is this an exclusive program? Can I sub-franchise it?', a: '' },
          { q: 'How does a partner get paid?', a: '' },
          { q: 'How many areas/city/state can a partner cover?', a: '' },
          { q: 'What is the tenure of the agreement?', a: '' }
        ]
      },
      rightCol: {
        title: 'Delhivery Courier Store',
        questions: [
          { 
            q: 'Local Delivery Franchise vs Courier & Sales Franchise', 
            a: 'In the Local Delivery Franchise program, a partner sets up a last mile delivery center and delivers all the shipments to customers in his/her location. Delhivery drops the parcels at the partner\'s last mile center. Partner gets paid for the delivery services.<br><br>In the Courier & Sales Franchise program, a partner sets up a company branded retail counter and books the parcels and documents of walkin customers and businesses. Delhivery picks up shipments from partners\' retail counters and delivers them. Partner gets commission on all shipping charges and other value added services.' 
          },
          { q: 'What infrastructure is needed to set up a delhivery courier store?', a: '' },
          { q: 'Is there an investment involved?', a: '' },
          { q: 'How can I earn by joining Delhivery courier franchise program?', a: '' },
          { q: 'What happens if a customer\'s parcel is lost?', a: '' },
          { q: 'How do I book the shipments?', a: '' }
        ]
      }
    },
    otherWays: [
      {
        title: 'Delivery Partner',
        description: 'Send shipments across India for parcels across categories including heavy goods. Get value added services like RTO reduction tools, door-step inspection and tracking',
        image: 'assets/images/delivery-partner.png',
        link: '/partner/delivery-partner'
      },
      {
        title: 'Fleet Owner',
        description: 'We connect shippers with fleet owners, transporters and suppliers of truckload capacity through our in-house bidding platform',
        image: 'assets/images/fleet-owner.png',
        link: '/partner/fleet-owners'
      }
    ]
  };

  openFaqLeft: number | null = 0;
  openFaqRight: number | null = 0;

  toggleFaqLeft(index: number) {
    this.openFaqLeft = this.openFaqLeft === index ? null : index;
  }

  toggleFaqRight(index: number) {
    this.openFaqRight = this.openFaqRight === index ? null : index;
  }
}
