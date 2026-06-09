import { Injectable } from '@angular/core';

export interface RtoTool {
  title: string;
  description: string;
  icon: string;
}

export interface RtoBenefit {
  title: string;
  image: string;
}

export interface ActivationStep {
  title: string;
  description: string;
}

export interface RtoTestimonial {
  quote: string;
  name: string;
  designation: string;
  logo: string;
}

@Injectable({
  providedIn: 'root'
})
export class RtoPredictorContentService {
  hero = {
    title: 'Slash your order returns by 40% with our RTO Solution Suite',
    subtitle: 'Actionable Insights for Lower RTOs',
    ctaText: 'Try on Delhivery One',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAWbieP2mLtezHHkPd73dqg-PPJRAZYYysJfC0VJCmVDG9gyFk_MMIy6uOAkby-qG3eJ0_NpVq7QRG-EsN9eQ6LBug0n2gP-7ogzaMvtN7xFZoXAbxP4sfP-mQOS5QKJttDcRKJP_cxglya-aqsNayumwt5k_4MCBaR47Aracd6E1ZI0vYGo6PYA0BJH20PPc8YLi-ADtB2S2TVMOcY-LfUYk2-ZVb0fES-byz9-9K-yYCJGfejdtZWlP2jdTocaEBSeUjc3QorWTU' // Placeholder
  };

  conveyorImage = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDZS40UmjSjaiMqYVbOMAJvaVSaKYw7_60SsiwEWoDmr2UJs4La4XjSHcc5oOpceKc5_oMepELKTKuocmy7iobE2Y974b3dkc_XFtaU_kTju3A_YrZaUANgJ2ZmWGnso1Pgy_cB2Jkb0rQ-Ce5X8cMCBmYPRRehoHoZLv2cFIf3M8jlGQs5EX-Ac00eegdAA2chTUuz6HFfo1ktZEQ7a0xzrjrxcW-fi7QRS_QuNz56CrGh6Codn8QJh7UdWFpokHW_ySZDfUkDQ3w';
  activationImage = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAA0N4wCiDtEQdZCgP4NY-Pi252YqY1ODpqftsI-DUbCxmRsBImipP7Qrx0qLHxBw2CgStzoBx18RzHUcavpxnaM8aoQQIB9xf7kIY-oqvao0rIMHsa-ghmU3914y3aT2SPuaS9NCEIvePtq39wDEiBSV4NMH6Sn-ba8dZHmB2tOyaah5Pv-CYk_yU2HmitKzme6nIU24ar9KKjwsrr47GO-MGhkiYZWE81UG2uqyJQ-YNSgiemZYY5rRiK3fTJA5JrypnKNgCcsBw';

  tools: RtoTool[] = [
    { title: '1. RTO Predictor', description: 'Predict shipments that can get returned using our AI-enabled technology', icon: '✨' },
    { title: '2. WhatsApp Verifier', description: 'Verify shipment with WhatsApp/ IVR. Send post purchase alerts to improve customer experience', icon: '💬' },
    { title: '3. Prepaid Converter', description: 'Convert Cash on Delivery orders to Prepaid in a click. Reduce your chances of RTO orders', icon: '💳' },
    { title: '4. Unverified order detector', description: 'Cancel unverified orders from your customers. Save on forward and return shipping cost', icon: '🚫' }
  ];

  benefits: RtoBenefit[] = [
    { title: 'Cut shipping costs on High Risk Orders', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAA0N4wCiDtEQdZCgP4NY-Pi252YqY1ODpqftsI-DUbCxmRsBImipP7Qrx0qLHxBw2CgStzoBx18RzHUcavpxnaM8aoQQIB9xf7kIY-oqvao0rIMHsa-ghmU3914y3aT2SPuaS9NCEIvePtq39wDEiBSV4NMH6Sn-ba8dZHmB2tOyaah5Pv-CYk_yU2HmitKzme6nIU24ar9KKjwsrr47GO-MGhkiYZWE81UG2uqyJQ-YNSgiemZYY5rRiK3fTJA5JrypnKNgCcsBw' },
    { title: 'Identify Low Risk orders & optimise logistics costs', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDZS40UmjSjaiMqYVbOMAJvaVSaKYw7_60SsiwEWoDmr2UJs4La4XjSHcc5oOpceKc5_oMepELKTKuocmy7iobE2Y974b3dkc_XFtaU_kTju3A_YrZaUANgJ2ZmWGnso1Pgy_cB2Jkb0rQ-Ce5X8cMCBmYPRRehoHoZLv2cFIf3M8jlGQs5EX-Ac00eegdAA2chTUuz6HFfo1ktZEQ7a0xzrjrxcW-fi7QRS_QuNz56CrGh6Codn8QJh7UdWFpokHW_ySZDfUkDQ3w' },
    { title: 'Directly see return risk on your Shopify dashboard', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAYj4-uUdWpa-RSeZxI4LkHidpdW_dKNNSmTjOCg4WY8NARSqim9BXqnMflVU2JvY2O3VB-9e8apBy3wSuidNNHpcQzSuWnxw9Y3qiDJBQgUE0-T7mBTv6RTYymbfs_A9YdEbn502-4ajbsn74ebGYktwdwTBD2lTkwnPT3PyV1wLOmZI8lELUcSYnrgrUqrtyoEcxuyoIr6boHUAyGc6h1NEY0Mt1ObHXGJyXD60y5yHQQJUY5Yycku4ECI8YbQXKBoDWIzszf35U' }
  ];

  activationSteps: ActivationStep[] = [
    { title: '1. Activate', description: 'Activate RTO Prediction for all your Orders. Connect your channel to sync RTO Risk on Shopify' },
    { title: '2. Track RTO', description: 'Track your Risk of Return before shipping and take actions on potentially High RTO Risk Orders' },
    { title: '3. Ship with confidence', description: 'Ship low risk orders with confidence' }
  ];

  testimonials: RtoTestimonial[] = [
    {
      quote: '"The one thing that hurts a D2C brand the most is RTO. Delhivery\'s RTO predictor helped us navigate this journey of RTO reduction with better conversions"',
      name: 'Arnab',
      designation: 'Supply Chain Head at Minimalist',
      logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCMxf1KEnZY9baFmpc0DFpKFzCmFkBp-plbWhzfflk8LJ3N0TT-D4IsKb4P8cOHdd0VkycncpZ57zU2GZkJv1Rai7PJGEMIL6QfaMDbSRH4ybOZ21LRGCcXS8Hi3Bq69lctlCdUVrfuQQeYGsRua4GtjSr3mGYEovkGzIFNqUo8h2mT-HW1zankJp_f8hOPKiSGPG4vqwFqKM7BzYYW4cytfW2sOzJH8UQnBd090sORgHt_83Trh46rfz0LOItn36FtOX8wqlzOokc'
    },
    {
      quote: '"This is the best app in India as on date of sending couriers - be it envelope or a large size parcel. Best Prices. Doorstep PICKUP - no other courier company does this"',
      name: 'Alisha Dutt',
      designation: 'Head of Logistics and Customer Experience at W for Women',
      logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAz43E8hSx7biKsvlqUU2vCSmbzG3p2hmMuNRO4Wobc0Ijk9krwA6hi_c_c8Ydon2E21R5vVvZ2FHuzFwQh74I_OzuQLI9SNnNg6npFAAO7KXUr6pVa3V-Lr0FLceBT_vTS530cyRhdtttpd4TbFXc7LyhJ7i2u4og7NRYPvgboy-8H6LQt0clnEfzw3ReRU5pGuq37L__7Cw-59JS26qZwu7octJ_niDlTWpP7ATck4yfYB5NjwiBT-8en49i2FeHz_Ppp8nj7fng'
    }
  ];

  pricing = {
    title: 'Reduce your RTOs',
    priceText: 'Get this for just ',
    priceValue: '₹2.49',
    priceSuffix: ' + GST',
    note: 'Billed only for Low and High Risk predicted orders',
    ctaText: 'Activate RTO Predictor'
  };
}
