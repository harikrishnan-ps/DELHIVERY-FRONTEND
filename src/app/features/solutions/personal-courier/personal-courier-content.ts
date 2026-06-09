import { Injectable } from '@angular/core';

export interface WorkStep {
  iconUrl: string;
  title: string;
  description: string;
}

export interface ConvenienceFeature {
  iconUrl: string;
  title: string;
  description: string;
}

export interface Testimonial {
  text: string;
  name: string;
  location: string;
}

export interface Faq {
  question: string;
  answer: string;
}

@Injectable({
  providedIn: 'root'
})
export class PersonalCourierContentService {
  hero = {
    title: 'Send Anything, Anywhere from your Doorstep',
    promoText: 'Get 25% Off with ',
    promoCode: 'DLV25',
    subText: 'Download the Delhivery App',
    googlePlayImg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCMxf1KEnZY9baFmpc0DFpKFzCmFkBp-plbWhzfflk8LJ3N0TT-D4IsKb4P8cOHdd0VkycncpZ57zU2GZkJv1Rai7PJGEMIL6QfaMDbSRH4ybOZ21LRGCcXS8Hi3Bq69lctlCdUVrfuQQeYGsRua4GtjSr3mGYEovkGzIFNqUo8h2mT-HW1zankJp_f8hOPKiSGPG4vqwFqKM7BzYYW4cytfW2sOzJH8UQnBd090sORgHt_83Trh46rfz0LOItn36FtOX8wqlzOokc', // Placeholder
    appStoreImg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAz43E8hSx7biKsvlqUU2vCSmbzG3p2hmMuNRO4Wobc0Ijk9krwA6hi_c_c8Ydon2E21R5vVvZ2FHuzFwQh74I_OzuQLI9SNnNg6npFAAO7KXUr6pVa3V-Lr0FLceBT_vTS530cyRhdtttpd4TbFXc7LyhJ7i2u4og7NRYPvgboy-8H6LQt0clnEfzw3ReRU5pGuq37L__7Cw-59JS26qZwu7octJ_niDlTWpP7ATck4yfYB5NjwiBT-8en49i2FeHz_Ppp8nj7fng',     // Placeholder
    packageImg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAWbieP2mLtezHHkPd73dqg-PPJRAZYYysJfC0VJCmVDG9gyFk_MMIy6uOAkby-qG3eJ0_NpVq7QRG-EsN9eQ6LBug0n2gP-7ogzaMvtN7xFZoXAbxP4sfP-mQOS5QKJttDcRKJP_cxglya-aqsNayumwt5k_4MCBaR47Aracd6E1ZI0vYGo6PYA0BJH20PPc8YLi-ADtB2S2TVMOcY-LfUYk2-ZVb0fES-byz9-9K-yYCJGfejdtZWlP2jdTocaEBSeUjc3QorWTU' // Placeholder
  };

  faqImage = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAYj4-uUdWpa-RSeZxI4LkHidpdW_dKNNSmTjOCg4WY8NARSqim9BXqnMflVU2JvY2O3VB-9e8apBy3wSuidNNHpcQzSuWnxw9Y3qiDJBQgUE0-T7mBTv6RTYymbfs_A9YdEbn502-4ajbsn74ebGYktwdwTBD2lTkwnPT3PyV1wLOmZI8lELUcSYnrgrUqrtyoEcxuyoIr6boHUAyGc6h1NEY0Mt1ObHXGJyXD60y5yHQQJUY5Yycku4ECI8YbQXKBoDWIzszf35U';

  howItWorks: WorkStep[] = [
    {
      iconUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCMxf1KEnZY9baFmpc0DFpKFzCmFkBp-plbWhzfflk8LJ3N0TT-D4IsKb4P8cOHdd0VkycncpZ57zU2GZkJv1Rai7PJGEMIL6QfaMDbSRH4ybOZ21LRGCcXS8Hi3Bq69lctlCdUVrfuQQeYGsRua4GtjSr3mGYEovkGzIFNqUo8h2mT-HW1zankJp_f8hOPKiSGPG4vqwFqKM7BzYYW4cytfW2sOzJH8UQnBd090sORgHt_83Trh46rfz0LOItn36FtOX8wqlzOokc',
      title: 'Schedule a free pickup',
      description: 'Get doorstep pickup for parcels from your location. Book couriers for yourself or your loved ones online from our website or app'
    },
    {
      iconUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAz43E8hSx7biKsvlqUU2vCSmbzG3p2hmMuNRO4Wobc0Ijk9krwA6hi_c_c8Ydon2E21R5vVvZ2FHuzFwQh74I_OzuQLI9SNnNg6npFAAO7KXUr6pVa3V-Lr0FLceBT_vTS530cyRhdtttpd4TbFXc7LyhJ7i2u4og7NRYPvgboy-8H6LQt0clnEfzw3ReRU5pGuq37L__7Cw-59JS26qZwu7octJ_niDlTWpP7ATck4yfYB5NjwiBT-8en49i2FeHz_Ppp8nj7fng',
      title: 'We arrive at your doorstep',
      description: 'Our partners reach your location within 24 hours of placing the order.'
    },
    {
      iconUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAONws_MNFghUNTU7i7vbSxC9-y0urQ-TOhmSspbCZcNk9zXF2PrjVyCpoQ51djQmNqwbPCgVoV-f7OLLLYV5mZCsMHIZfSKHpuwWNRmkt_RlWQ6ZEwF3rkf3KSOkMEeOfglOmamaq0Z3KF3j8YcrOkSaixugF9nqyHNXA2EiGpaWkRFbMN5l-paZcflBPACwj8UacKEwGSFLw_omPLWsYMSG3mhZVo3-aZPTZOwOVV2ViK5iNxWCy3Fa38mk03Uyupp512tycGZhs',
      title: 'Sit back and relax',
      description: 'Your order will be delivered to the chosen destination. Track it from our website or app'
    }
  ];

  conveniences: ConvenienceFeature[] = [
    {
      iconUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCMxf1KEnZY9baFmpc0DFpKFzCmFkBp-plbWhzfflk8LJ3N0TT-D4IsKb4P8cOHdd0VkycncpZ57zU2GZkJv1Rai7PJGEMIL6QfaMDbSRH4ybOZ21LRGCcXS8Hi3Bq69lctlCdUVrfuQQeYGsRua4GtjSr3mGYEovkGzIFNqUo8h2mT-HW1zankJp_f8hOPKiSGPG4vqwFqKM7BzYYW4cytfW2sOzJH8UQnBd090sORgHt_83Trh46rfz0LOItn36FtOX8wqlzOokc',
      title: 'Same-day pick up',
      description: 'Get your order picked up from your doorstep. Order before 2 PM for same day pick up'
    },
    {
      iconUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAz43E8hSx7biKsvlqUU2vCSmbzG3p2hmMuNRO4Wobc0Ijk9krwA6hi_c_c8Ydon2E21R5vVvZ2FHuzFwQh74I_OzuQLI9SNnNg6npFAAO7KXUr6pVa3V-Lr0FLceBT_vTS530cyRhdtttpd4TbFXc7LyhJ7i2u4og7NRYPvgboy-8H6LQt0clnEfzw3ReRU5pGuq37L__7Cw-59JS26qZwu7octJ_niDlTWpP7ATck4yfYB5NjwiBT-8en49i2FeHz_Ppp8nj7fng',
      title: 'No shipping label needed',
      description: 'Avoid the hassle of shipping labels. Book instantly save time!'
    },
    {
      iconUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAONws_MNFghUNTU7i7vbSxC9-y0urQ-TOhmSspbCZcNk9zXF2PrjVyCpoQ51djQmNqwbPCgVoV-f7OLLLYV5mZCsMHIZfSKHpuwWNRmkt_RlWQ6ZEwF3rkf3KSOkMEeOfglOmamaq0Z3KF3j8YcrOkSaixugF9nqyHNXA2EiGpaWkRFbMN5l-paZcflBPACwj8UacKEwGSFLw_omPLWsYMSG3mhZVo3-aZPTZOwOVV2ViK5iNxWCy3Fa38mk03Uyupp512tycGZhs',
      title: 'Secure your parcel',
      description: 'Delivery Protect saves you from loss in case of damage'
    },
    {
      iconUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB8GfmQNdrkNk9uRbAxwU1iAAsNWCdlqL_Y4xCdfMM_yMo5SE3Egecene06rfD3QV7_6BBZiwKmy8tNvRKKildZtBcN6WKSCda_8qyg7Mufko--GXvS9uCqsrzniiQvoLh_BpNIZ7eMB1kRc03OYrGn7u_Fpj6hHE-e8k3yVObPNsZZIgeMYLDX41Y7pcu_dWOtH9StLLLIEtJsvciB5AxaZs92nRA4RszEAClFUuD1TJAc1M2-158f_OZ5qgoiegKdmaShMneLovw',
      title: 'Reliable, Pan-India shipping',
      description: 'Quick pick-up and fast delivery across 18,850+ pin codes'
    }
  ];

  testimonial: Testimonial = {
    text: 'My overall experience with Delhivery has been good. I had to send a package to my mother in Punjab, and the order was delivered within the allotted time. Particularly for long-distance and important packages, I need not look further than Delhivery.',
    name: 'Priyanka Dhot',
    location: 'Mumbai, Maharashtra'
  };

  faqs: Faq[] = [
    { question: 'Do I have to keep my shipment packed or will the pickup executive pack it for me?', answer: 'You should pack your shipment securely before the executive arrives.' },
    { question: 'Should I print the shipment label?', answer: 'No, shipping labels are not required.' },
    { question: 'How can I change my phone number or the address of my existing order?', answer: 'You can update details from the tracking page or app.' },
    { question: 'Can I change the weight of my existing order?', answer: 'Weight cannot be changed once picked up.' },
    { question: 'What is the weight limit for shipments booked on Delhivery?', answer: 'The maximum weight limit is 50 kg per box.' },
    { question: 'Why can\'t I see the express option for shipping speed?', answer: 'Express shipping depends on the route serviceability.' },
    { question: 'How can I book a parcel for my business (commercial nature)?', answer: 'Please use our B2B or Delhivery One services for business shipments.' },
    { question: 'My shipment has not been picked. Will I get a refund?', answer: 'Yes, if the pickup fails, you will be refunded.' },
    { question: 'Why am I not able to choose "Today" as my pickup day preference?', answer: 'Same-day pickup is only available if booked before 2 PM.' }
  ];
}
