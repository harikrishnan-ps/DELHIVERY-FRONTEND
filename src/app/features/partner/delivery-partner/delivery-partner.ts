import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-delivery-partner',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './delivery-partner.html',
  styleUrl: './delivery-partner.scss',
})
export class DeliveryPartner {
  content = {
    hero: {
      title: 'Join over <span class="text-delhivery-red">64,600+ riders</span> in delivering orders everyday',
      subtitle: 'We offer payments every week, and you work at your flexibility',
      image: 'assets/images/partner_delivery-partner.png', // Fallback to a placeholder if missing
      ctaText: 'Sign up'
    },
    program: {
      title: 'Delivery Partner',
      description: 'Our program for delivery partner allows agents to sign up to do both pick-up and delivery services across India. It is a great opportunity to earn a sustainable income flexibly and provide our customers the best experience.',
      stats: 'This program has enabled over 64,600+ partners across India till date. To start working with India\'s largest integrated logistics company, download our app and start earning today.',
      requirements: 'Sign up with your Aadhaar, bank account details and an Android phone, and start earning!',
      contact: 'Download the Delhivery Partner app or call on the below numbers for the following cities to start delivering with Delhivery:',
      numbers: [
        { city: 'Bangalore', phone: '+918045128638' },
        { city: 'Chennai', phone: '+918045128639' }
      ]
    },
    benefits: [
      {
        title: 'Consistent earnings',
        description: 'High business value with secure earnings',
        icon: '💰'
      },
      {
        title: 'Competitive pay',
        description: 'Earn extra incentives for completing deliveries on time',
        icon: '🏆'
      },
      {
        title: 'Easy payments',
        description: 'Receive your earnings easily in your bank account',
        icon: '💳'
      },
      {
        title: 'Retiral & medical benefits',
        description: 'Provident fund, gratuity and medical benefits',
        icon: '🏥'
      },
      {
        title: 'Onroll opportunity',
        description: 'Eligible for weekly payout & on-roll employment',
        icon: '📅'
      },
      {
        title: 'Training and support',
        description: 'Training and support to help you grow',
        icon: '👨‍🏫'
      }
    ],
    howToSignUp: [
      {
        title: 'Download the Delhivery Partner App on Google Playstore',
        icon: '📱'
      },
      {
        title: 'Create your profile and select the closest dispatch centre',
        icon: '👤'
      },
      {
        title: 'Upload your AADHAAR and PAN card details',
        icon: '📄'
      },
      {
        title: 'Receive a call from our executive and get yourself on boarded',
        icon: '📞'
      }
    ],
    testimonial: {
      quote: 'Signing-up with Delhivery as a delivery partner has been great. The best part about working with Delhivery is timely payments and new learning. Despite being located in a metro city like Chennai, I can support my family financially. The team at Delhivery is exceptionally supportive, and I look forward to continuing my association here.',
      author: 'Ghose Mohaideen',
      location: 'Chennai'
    },
    faqs: [
      'How and when is payment made?',
      'Where do I need to go to collect the shipments? Which location do I have to travel to?',
      'How can I track my payments?',
      'Does Delhivery work in my locality/city?',
      'When do I get paid?',
      'How do I register as a certified Delhivery partner?',
      'Can I call Delhivery to get join as Delhivery Partner?'
    ],
    otherPrograms: [
      {
        title: 'Courier & Sales Franchise',
        description: 'Send shipments across India for parcels across categories including heavy goods. Get value added services like RTO reduction tools, door-step inspection and tracking',
        image: 'assets/images/courier-sales-franchise.png',
        link: '/partner/franchise-opportunities'
      },
      {
        title: 'Local Delivery Franchise',
        description: 'Join one of the largest Express PTL networks in India. Get door-to-door and hub-to-hub delivery with additions such as multi-modal freight and client dashboard',
        image: 'assets/images/local-delivery-franchise.png',
        link: '/partner/franchise-opportunities'
      },
      {
        title: 'Fleet Owner',
        description: 'We connect shippers with fleet owners, transporters and suppliers of truckload capacity through our in-house bidding platform',
        image: 'assets/images/fleet-owner.png',
        link: '/partner/fleet-owners'
      }
    ]
  };
  
  openFaqIndex: number | null = null;
  
  toggleFaq(index: number) {
    this.openFaqIndex = this.openFaqIndex === index ? null : index;
  }
}
