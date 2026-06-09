import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-fleet-owners',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './fleet-owners.html',
  styleUrl: './fleet-owners.scss',
})
export class FleetOwners {
  content = {
    hero: {
      title: 'Maximum Utilisation,<br><span class="text-delhivery-red">Maximum Earning</span>',
      subtitle: 'Transporters, Brokers, Fleet Owners earn more on routes with us. Get real-time load visibility and on-time payments',
      image: 'assets/images/fleet-owner-hero.jpg', 
      ctaText: 'Download Axle App'
    },
    introducing: {
      title: 'Introducing AXLE by Delhivery',
      description: 'An app for Fleet Owners, Transporters and Brokers, where you can search or get recommendation on hundreds of spot & contract loads on your favourite lanes, everyday. We maintain transparency, reliability & availability, and strive to provide the best experience.',
      points: [
        'Sign up with 3 easy steps',
        'Find loads in your operating cities',
        'Add trucks, get matched with loads',
        'Bid on spot orders and long term contracts',
        'Enjoy hassle-free on-time payments'
      ]
    },
    stats: {
      title: 'Join India\'s <span class="font-bold">largest integrated logistics</span> provider',
      items: [
        { value: '600,000+', label: 'Trips', icon: '🚚' },
        { value: '16,000+', label: 'Partners', icon: '🤝' },
        { value: '1700+', label: 'Clients', icon: '👤' }
      ]
    },
    howItWorks: [
      {
        title: 'Download Axle app & sign up with basic details & KYC',
        icon: '📱'
      },
      {
        title: 'View spot orders and long term contracts',
        icon: '📋'
      },
      {
        title: 'Bid to win orders & contracts for maximum utilization',
        icon: '⚖️'
      },
      {
        title: 'On time payments, access to ledger & assistance',
        icon: '💰'
      }
    ],
    benefits: [
      {
        title: 'Regular demand on preferred lanes',
        description: 'Cover new routes and get additional business on usual to-and-fro routes',
        icon: '🛣️'
      },
      {
        title: 'Instant payments',
        description: 'We offer advances instantly on truck loading, and balances within 2 days of proof of delivery',
        icon: '⚡'
      },
      {
        title: 'Real time support by our calling team',
        description: 'Reach us on +911246719699 or vendorhelpdesk@delhivery.com',
        icon: '🎧'
      },
      {
        title: 'More opportunities',
        description: 'Grow your business with India\'s fastest growing FLT exchange',
        icon: '📈'
      }
    ],
    testimonial: {
      quote: 'The app is very easy to use, and we have been hauling with Delhivery for a year now. The interface is seamless and has easy bookings.',
      author: 'Gagan Rajesh Behl',
      location: 'Mumbai'
    },
    faqs: [
      'What kind of orders & contracts can fleet partners get access to?',
      'How can fleet partners start bidding?',
      'How can fleet partners track payments?',
      'Is there call support for fleet partners?'
    ],
    otherPrograms: [
      {
        title: 'Delivery Partner',
        description: 'Send shipments across India for parcels across categories including heavy goods. Get value added services like RTO reduction tools, door-step inspection and tracking',
        image: 'assets/images/delivery-partner.png',
        link: '/partner/delivery-partner'
      },
      {
        title: 'Local Delivery Franchise',
        description: 'Join one of the largest Express PTL networks in India. Get door-to-door and hub-to-hub delivery with additions such as multi-modal freight and client dashboard',
        image: 'assets/images/local-delivery-franchise.png',
        link: '/partner/franchise-opportunities'
      },
      {
        title: 'Courier & Sales Franchise',
        description: 'Unlock your earning potential by joining India\'s largest fully integrated logistics service provider. Sign up as a franchisee to open our company branded outlet in your city',
        image: 'assets/images/courier-sales-franchise.png',
        link: '/partner/franchise-opportunities'
      }
    ]
  };

  openFaqIndex: number | null = null;
  
  toggleFaq(index: number) {
    this.openFaqIndex = this.openFaqIndex === index ? null : index;
  }
}
