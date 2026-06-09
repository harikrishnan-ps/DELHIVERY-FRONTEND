import { Injectable } from '@angular/core';

export interface SiteLink {
  label: string;
  href: string;
}

export interface NavGroup {
  label: string;
  links?: SiteLink[];
  href?: string;
}

export interface FooterGroup {
  title: string;
  links: SiteLink[];
}

@Injectable({
  providedIn: 'root',
})
export class SiteContentService {
  readonly serviceLinks: SiteLink[] = [
    { label: 'Data Intelligence', href: '/services/data-intelligence' },
    { label: 'Express Parcel', href: '/services/express-parcel' },
    { label: 'Full Truckload', href: '/services/full-truckload' },
    { label: 'International', href: '/services/international' },
    { label: 'Part Truckload', href: '/services/part-truckload' },
    { label: 'TransportOne', href: '/services/transport-one' },
    { label: 'Warehousing', href: '/services/warehousing' },
  ];

  readonly solutionLinks: SiteLink[] = [
    { label: 'D2C Brands', href: '/solutions/d2c-brands' },
    { label: 'Personal Courier', href: '/solutions/personal-courier' },
    { label: 'B2B Enterprises', href: '/solutions/b2b-enterprises' },
    { label: 'RTO Predictor', href: '/solutions/rto-predictor' },
  ];

  readonly partnerLinks: SiteLink[] = [
    { label: 'Franchise Opportunities', href: '/partner/franchise-opportunities' },
    { label: 'Delivery Partner', href: '/partner/delivery-partner' },
    { label: 'Fleet Owner', href: '/partner/fleet-owners' },
  ];


  readonly trackLinks: SiteLink[] = [
    { label: 'Track Order', href: '/track' },
  ];

  readonly supportLinks: SiteLink[] = [
    { label: 'Support Center', href: '/support' },
    { label: 'Raise a Query', href: '/support' },
    { label: 'Rate Calculator', href: '/support' },
    { label: 'Developer Documentation', href: '/support' },
  ];

  readonly shipNowLinks: SiteLink[] = [
    { label: 'Ship Now', href: '/ship-now' },
    { label: 'Personal Courier', href: '/solutions/personal-courier' },
    { label: 'Business Shipments', href: '/ship-now' },
  ];

  readonly navigationGroups: NavGroup[] = [
    { label: 'Services', links: this.serviceLinks },
    { label: 'Solutions', links: this.solutionLinks },
    { label: 'Partner', links: this.partnerLinks },
    { label: 'Track', links: this.trackLinks },
    { label: 'Support', href: '/support' },
  ];

  readonly announcementMessages = [
    'Be alert of fake websites and SMS. Login with your phone number and raise your support request with us.',
    'Be alert of fake websites and SMS. Login with your phone number and raise your support request with us.',
    'Be alert of fake websites and SMS. Login with your phone number and raise your support request with us.',
  ];

  readonly footerLogo =
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBm0-VjHlrq6ec__K85DSqnIYl2TpRCfCoHu62JkIuyVXA_dRA-CAKUN35nL5b-HS0yTof8rNK8XGrJXrF-RKwbHB6St2bAq0H07vnjkkh3h39P9gavDkEK5a-A3AsGZoSWBRgQyWBKS2SCdOH38YRMc0ltZj0MAs5Ggcr3WabhAAGX_8Rn-bgIUVO-XxX532eQRZn5QKgAS3Q1wzCp-2qcS1pQITql3rOYaI--BhiFbFhINbhIE2D8uzHkgp3MwduA9IEExL5W2JE';

  readonly certifications = [
    'ISO 9001: 2015, ISO 27001: 2022 Certified Company',
    'CIN: L63090DL2011PLC221234',
  ];

  readonly footerGroups: FooterGroup[] = [
    {
      title: 'SERVICES',
      links: this.serviceLinks,
    },
    {
      title: 'SOLUTIONS',
      links: this.solutionLinks,
    },
    {
      title: 'PARTNERS',
      links: this.partnerLinks,
    },

    {
      title: 'GET IN TOUCH',
      links: this.supportLinks,
    },
    {
      title: 'POLICIES',
      links: [
        { label: 'Terms & Conditions', href: '#' },
        { label: 'Privacy Policy', href: '#' },
        { label: 'Cookie Policy', href: '#' },
        { label: 'Fraud Disclaimer', href: '#' },
        { label: 'ONDC Disclaimer', href: '#' },
      ],
    },
  ];

  readonly socialLinks: SiteLink[] = [
    { label: 'fb', href: '#' },
    { label: 'tw', href: '#' },
    { label: 'in', href: '#' },
    { label: 'yt', href: '#' },
    { label: 'ig', href: '#' },
  ];
}
