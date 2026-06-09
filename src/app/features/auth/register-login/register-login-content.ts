import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterLoginContentService {
  readonly hero = {
    title: 'Join 44,000+\nsmall businesses\nthat trust us\nto deliver',
    subtitle: 'B2C Express Parcel\nB2B Part Truck Load',
    backgroundImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAWbieP2mLtezHHkPd73dqg-PPJRAZYYysJfC0VJCmVDG9gyFk_MMIy6uOAkby-qG3eJ0_NpVq7QRG-EsN9eQ6LBug0n2gP-7ogzaMvtN7xFZoXAbxP4sfP-mQOS5QKJttDcRKJP_cxglya-aqsNayumwt5k_4MCBaR47Aracd6E1ZI0vYGo6PYA0BJH20PPc8YLi-ADtB2S2TVMOcY-LfUYk2-ZVb0fES-byz9-9K-yYCJGfejdtZWlP2jdTocaEBSeUjc3QorWTU',
    personImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAA0N4wCiDtEQdZCgP4NY-Pi252YqY1ODpqftsI-DUbCxmRsBImipP7Qrx0qLHxBw2CgStzoBx18RzHUcavpxnaM8aoQQIB9xf7kIY-oqvao0rIMHsa-ghmU3914y3aT2SPuaS9NCEIvePtq39wDEiBSV4NMH6Sn-ba8dZHmB2tOyaah5Pv-CYk_yU2HmitKzme6nIU24ar9KKjwsrr47GO-MGhkiYZWE81UG2uqyJQ-YNSgiemZYY5rRiK3fTJA5JrypnKNgCcsBw'
  };

  readonly form = {
    title: 'Reliable Shipping Starts Here',
    emailLabel: 'Enter email address',
    emailPlaceholder: 'Jonathan@gmail.com',
    passwordLabel: 'Create a password',
    passwordPlaceholder: 'Minimum 8 characters',
    termsText: 'I agree to Delhivery\'s Terms & Conditions & Privacy Policy.',
    submitText: 'Create Account',
    loginText: 'Already have an account?',
    loginLink: 'Login'
  };

  readonly altLinks = {
    title: 'Not looking for business shipping? Sign up for:',
    links: [
      { text: 'Personal Shipments', icon: '👤', link: '/solutions/personal-courier' },
      { text: 'Franchise', icon: '🏪', link: '/partner/franchise-opportunities' },
      { text: 'Careers', icon: '💼', link: '/company/careers' }
    ]
  };

  readonly logos = [
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCMxf1KEnZY9baFmpc0DFpKFzCmFkBp-plbWhzfflk8LJ3N0TT-D4IsKb4P8cOHdd0VkycncpZ57zU2GZkJv1Rai7PJGEMIL6QfaMDbSRH4ybOZ21LRGCcXS8Hi3Bq69lctlCdUVrfuQQeYGsRua4GtjSr3mGYEovkGzIFNqUo8h2mT-HW1zankJp_f8hOPKiSGPG4vqwFqKM7BzYYW4cytfW2sOzJH8UQnBd090sORgHt_83Trh46rfz0LOItn36FtOX8wqlzOokc',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAz43E8hSx7biKsvlqUU2vCSmbzG3p2hmMuNRO4Wobc0Ijk9krwA6hi_c_c8Ydon2E21R5vVvZ2FHuzFwQh74I_OzuQLI9SNnNg6npFAAO7KXUr6pVa3V-Lr0FLceBT_vTS530cyRhdtttpd4TbFXc7LyhJ7i2u4og7NRYPvgboy-8H6LQt0clnEfzw3ReRU5pGuq37L__7Cw-59JS26qZwu7octJ_niDlTWpP7ATck4yfYB5NjwiBT-8en49i2FeHz_Ppp8nj7fng',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAONws_MNFghUNTU7i7vbSxC9-y0urQ-TOhmSspbCZcNk9zXF2PrjVyCpoQ51djQmNqwbPCgVoV-f7OLLLYV5mZCsMHIZfSKHpuwWNRmkt_RlWQ6ZEwF3rkf3KSOkMEeOfglOmamaq0Z3KF3j8YcrOkSaixugF9nqyHNXA2EiGpaWkRFbMN5l-paZcflBPACwj8UacKEwGSFLw_omPLWsYMSG3mhZVo3-aZPTZOwOVV2ViK5iNxWCy3Fa38mk03Uyupp512tycGZhs',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuB8GfmQNdrkNk9uRbAxwU1iAAsNWCdlqL_Y4xCdfMM_yMo5SE3Egecene06rfD3QV7_6BBZiwKmy8tNvRKKildZtBcN6WKSCda_8qyg7Mufko--GXvS9uCqsrzniiQvoLh_BpNIZ7eMB1kRc03OYrGn7u_Fpj6hHE-e8k3yVObPNsZZIgeMYLDX41Y7pcu_dWOtH9StLLLIEtJsvciB5AxaZs92nRA4RszEAClFUuD1TJAc1M2-158f_OZ5qgoiegKdmaShMneLovw',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAYj4-uUdWpa-RSeZxI4LkHidpdW_dKNNSmTjOCg4WY8NARSqim9BXqnMflVU2JvY2O3VB-9e8apBy3wSuidNNHpcQzSuWnxw9Y3qiDJBQgUE0-T7mBTv6RTYymbfs_A9YdEbn502-4ajbsn74ebGYktwdwTBD2lTkwnPT3PyV1wLOmZI8lELUcSYnrgrUqrtyoEcxuyoIr6boHUAyGc6h1NEY0Mt1ObHXGJyXD60y5yHQQJUY5Yycku4ECI8YbQXKBoDWIzszf35U'
  ];

  readonly expressParcel = {
    title: 'Express Parcel',
    features: [
      {
        icon: '🔗',
        description: 'Connect your Shopify, Amazon and WooCommerce stores in just one click'
      },
      {
        icon: '🛡️',
        description: 'Secure full value of orders against loss & damage, claims processed in 5 days'
      },
      {
        icon: '💬',
        description: 'WhatsApp communication for every shipping milestone & live tracking'
      },
      {
        icon: '🎯',
        description: 'RTO predictor to help maximize delivery rate & minimize shipping cost'
      },
      {
        icon: '✈️',
        description: 'Send shipments globally to 220+ countries'
      }
    ]
  };

  readonly partTruckLoad = {
    title: 'Part Truck Load Cargo',
    features: [
      {
        icon: '📍',
        description: 'Deliver nationwide with lowest ODA'
      },
      {
        icon: '⏰',
        description: 'On-time Appointment-based delivery to warehouses'
      },
      {
        icon: '📦',
        description: 'Most reliable service in terms of speed and quality for heavy goods movement'
      },
      {
        icon: '📝',
        description: 'Contactless delivery with instant ePOD generation'
      },
      {
        icon: '👨‍💼',
        description: 'Dedicated support for every delivery'
      }
    ]
  };

  readonly delhiveryOne = {
    logoText: 'DELHIVERY',
    logoBadge: 'ONE',
    title: '<span class="text-delhivery-red font-bold">ONE</span> unified platform for all your shipping needs',
    laptopImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDZS40UmjSjaiMqYVbOMAJvaVSaKYw7_60SsiwEWoDmr2UJs4La4XjSHcc5oOpceKc5_oMepELKTKuocmy7iobE2Y974b3dkc_XFtaU_kTju3A_YrZaUANgJ2ZmWGnso1Pgy_cB2Jkb0rQ-Ce5X8cMCBmYPRRehoHoZLv2cFIf3M8jlGQs5EX-Ac00eegdAA2chTUuz6HFfo1ktZEQ7a0xzrjrxcW-fi7QRS_QuNz56CrGh6Codn8QJh7UdWFpokHW_ySZDfUkDQ3w',
    features: [
      'Connect online sales channels',
      'Create and process orders in bulk',
      'NDR Management',
      'Simple and fast claims process',
      '<span class="text-green-600 font-medium">Dedicated support</span>'
    ]
  };

  readonly rateCalculator = {
    subtitle: 'Confused about costs?',
    title: 'Rate Calculator',
    description: 'Tell us about your standard package and get estimates on how much it\'ll cost you to ship with us.',
    ctaText: 'Get Estimate'
  };

  readonly startShipping = {
    title: 'Start shipping in minutes',
    description: 'Whether it\'s eCommerce orders to consumers or B2B shipments to your business partners, sign up and get started.',
    ctaText: 'Ship Now',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAWbieP2mLtezHHkPd73dqg-PPJRAZYYysJfC0VJCmVDG9gyFk_MMIy6uOAkby-qG3eJ0_NpVq7QRG-EsN9eQ6LBug0n2gP-7ogzaMvtN7xFZoXAbxP4sfP-mQOS5QKJttDcRKJP_cxglya-aqsNayumwt5k_4MCBaR47Aracd6E1ZI0vYGo6PYA0BJH20PPc8YLi-ADtB2S2TVMOcY-LfUYk2-ZVb0fES-byz9-9K-yYCJGfejdtZWlP2jdTocaEBSeUjc3QorWTU'
  };
}
