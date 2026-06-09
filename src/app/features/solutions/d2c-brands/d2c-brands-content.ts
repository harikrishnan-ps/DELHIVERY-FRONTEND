import { Injectable } from '@angular/core';

export interface JourneyStep {
  title: string;
  iconClass: string;
}

export interface ScaleItem {
  iconUrl: string;
  title: string;
  description: string;
}

export interface EfficiencyFeature {
  title: string;
  items: string[];
}

export interface CaseStudy {
  imageUrl: string;
  title: string;
  brand: string;
}

export interface TechFeature {
  title: string;
  description: string;
  icon: string;
}

@Injectable({
  providedIn: 'root'
})
export class D2cBrandsContentService {
  hero = {
    title: 'Grow your Direct To Consumer brand with Delhivery\'s end-to-end logistics solutions',
    ctaText: 'Contact Us',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAWbieP2mLtezHHkPd73dqg-PPJRAZYYysJfC0VJCmVDG9gyFk_MMIy6uOAkby-qG3eJ0_NpVq7QRG-EsN9eQ6LBug0n2gP-7ogzaMvtN7xFZoXAbxP4sfP-mQOS5QKJttDcRKJP_cxglya-aqsNayumwt5k_4MCBaR47Aracd6E1ZI0vYGo6PYA0BJH20PPc8YLi-ADtB2S2TVMOcY-LfUYk2-ZVb0fES-byz9-9K-yYCJGfejdtZWlP2jdTocaEBSeUjc3QorWTU' // Placeholder
  };

  journeySteps: JourneyStep[] = [
    { title: 'Inbound', iconClass: 'icon-inbound' },
    { title: 'Warehousing', iconClass: 'icon-warehouse' },
    { title: 'B2C / D2C Fulfilment', iconClass: 'icon-fulfilment' },
    { title: 'RTO Predictor', iconClass: 'icon-rto' },
    { title: 'Customer returns', iconClass: 'icon-returns' }
  ];

  scaleItems: ScaleItem[] = [
    { iconUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCMxf1KEnZY9baFmpc0DFpKFzCmFkBp-plbWhzfflk8LJ3N0TT-D4IsKb4P8cOHdd0VkycncpZ57zU2GZkJv1Rai7PJGEMIL6QfaMDbSRH4ybOZ21LRGCcXS8Hi3Bq69lctlCdUVrfuQQeYGsRua4GtjSr3mGYEovkGzIFNqUo8h2mT-HW1zankJp_f8hOPKiSGPG4vqwFqKM7BzYYW4cytfW2sOzJH8UQnBd090sORgHt_83Trh46rfz0LOItn36FtOX8wqlzOokc', title: 'Setup', description: 'Get your website integrated in few clicks' },
    { iconUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAz43E8hSx7biKsvlqUU2vCSmbzG3p2hmMuNRO4Wobc0Ijk9krwA6hi_c_c8Ydon2E21R5vVvZ2FHuzFwQh74I_OzuQLI9SNnNg6npFAAO7KXUr6pVa3V-Lr0FLceBT_vTS530cyRhdtttpd4TbFXc7LyhJ7i2u4og7NRYPvgboy-8H6LQt0clnEfzw3ReRU5pGuq37L__7Cw-59JS26qZwu7octJ_niDlTWpP7ATck4yfYB5NjwiBT-8en49i2FeHz_Ppp8nj7fng', title: 'Reach', description: '18,600+ pin codes served' },
    { iconUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAONws_MNFghUNTU7i7vbSxC9-y0urQ-TOhmSspbCZcNk9zXF2PrjVyCpoQ51djQmNqwbPCgVoV-f7OLLLYV5mZCsMHIZfSKHpuwWNRmkt_RlWQ6ZEwF3rkf3KSOkMEeOfglOmamaq0Z3KF3j8YcrOkSaixugF9nqyHNXA2EiGpaWkRFbMN5l-paZcflBPACwj8UacKEwGSFLw_omPLWsYMSG3mhZVo3-aZPTZOwOVV2ViK5iNxWCy3Fa38mk03Uyupp512tycGZhs', title: 'Service', description: 'Weight-based shipping, no min order volume' }
  ];

  delhiveryOne = {
    title: 'Delhivery One powers a digital experience for your teams',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAA0N4wCiDtEQdZCgP4NY-Pi252YqY1ODpqftsI-DUbCxmRsBImipP7Qrx0qLHxBw2CgStzoBx18RzHUcavpxnaM8aoQQIB9xf7kIY-oqvao0rIMHsa-ghmU3914y3aT2SPuaS9NCEIvePtq39wDEiBSV4NMH6Sn-ba8dZHmB2tOyaah5Pv-CYk_yU2HmitKzme6nIU24ar9KKjwsrr47GO-MGhkiYZWE81UG2uqyJQ-YNSgiemZYY5rRiK3fTJA5JrypnKNgCcsBw', // Placeholder
    features: [
      'Automate label generation and dispatch',
      'Manage COD, Returns and NDR',
      'Unified Tracking Experience for you and your customers'
    ]
  };

  efficiencyFeatures: EfficiencyFeature[] = [
    {
      title: 'Scale',
      items: [
        'Same-day & Next day delivery across India',
        'Scalable warehousing across 80+ locations',
        'End-to-end visibility and control'
      ]
    },
    {
      title: 'Efficiency',
      items: [
        'Increase D2C revenue and conversions',
        'Reduce RTO and return logistics costs',
        'Improve customer NPS'
      ]
    }
  ];

  caseStudies: CaseStudy[] = [
    {
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDZS40UmjSjaiMqYVbOMAJvaVSaKYw7_60SsiwEWoDmr2UJs4La4XjSHcc5oOpceKc5_oMepELKTKuocmy7iobE2Y974b3dkc_XFtaU_kTju3A_YrZaUANgJ2ZmWGnso1Pgy_cB2Jkb0rQ-Ce5X8cMCBmYPRRehoHoZLv2cFIf3M8jlGQs5EX-Ac00eegdAA2chTUuz6HFfo1ktZEQ7a0xzrjrxcW-fi7QRS_QuNz56CrGh6Codn8QJh7UdWFpokHW_ySZDfUkDQ3w', // Placeholder
      title: 'How Nestasia scaled its D2C operations',
      brand: 'Nestasia'
    }
  ];

  techFeatures: TechFeature[] = [
    { title: 'RTO Predictor', description: 'Predict and reduce RTO by 15-20% with AI-driven insights', icon: '🤖' },
    { title: 'Checkout', description: 'Increase conversion with fast delivery promises on your product pages', icon: '🛒' },
    { title: 'Post Purchase', description: 'Keep customers engaged with WhatsApp and SMS order updates', icon: '📱' }
  ];

  trustedByLogos: string[] = [
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCMxf1KEnZY9baFmpc0DFpKFzCmFkBp-plbWhzfflk8LJ3N0TT-D4IsKb4P8cOHdd0VkycncpZ57zU2GZkJv1Rai7PJGEMIL6QfaMDbSRH4ybOZ21LRGCcXS8Hi3Bq69lctlCdUVrfuQQeYGsRua4GtjSr3mGYEovkGzIFNqUo8h2mT-HW1zankJp_f8hOPKiSGPG4vqwFqKM7BzYYW4cytfW2sOzJH8UQnBd090sORgHt_83Trh46rfz0LOItn36FtOX8wqlzOokc',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAz43E8hSx7biKsvlqUU2vCSmbzG3p2hmMuNRO4Wobc0Ijk9krwA6hi_c_c8Ydon2E21R5vVvZ2FHuzFwQh74I_OzuQLI9SNnNg6npFAAO7KXUr6pVa3V-Lr0FLceBT_vTS530cyRhdtttpd4TbFXc7LyhJ7i2u4og7NRYPvgboy-8H6LQt0clnEfzw3ReRU5pGuq37L__7Cw-59JS26qZwu7octJ_niDlTWpP7ATck4yfYB5NjwiBT-8en49i2FeHz_Ppp8nj7fng',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAONws_MNFghUNTU7i7vbSxC9-y0urQ-TOhmSspbCZcNk9zXF2PrjVyCpoQ51djQmNqwbPCgVoV-f7OLLLYV5mZCsMHIZfSKHpuwWNRmkt_RlWQ6ZEwF3rkf3KSOkMEeOfglOmamaq0Z3KF3j8YcrOkSaixugF9nqyHNXA2EiGpaWkRFbMN5l-paZcflBPACwj8UacKEwGSFLw_omPLWsYMSG3mhZVo3-aZPTZOwOVV2ViK5iNxWCy3Fa38mk03Uyupp512tycGZhs',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuB8GfmQNdrkNk9uRbAxwU1iAAsNWCdlqL_Y4xCdfMM_yMo5SE3Egecene06rfD3QV7_6BBZiwKmy8tNvRKKildZtBcN6WKSCda_8qyg7Mufko--GXvS9uCqsrzniiQvoLh_BpNIZ7eMB1kRc03OYrGn7u_Fpj6hHE-e8k3yVObPNsZZIgeMYLDX41Y7pcu_dWOtH9StLLLIEtJsvciB5AxaZs92nRA4RszEAClFUuD1TJAc1M2-158f_OZ5qgoiegKdmaShMneLovw',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAWbieP2mLtezHHkPd73dqg-PPJRAZYYysJfC0VJCmVDG9gyFk_MMIy6uOAkby-qG3eJ0_NpVq7QRG-EsN9eQ6LBug0n2gP-7ogzaMvtN7xFZoXAbxP4sfP-mQOS5QKJttDcRKJP_cxglya-aqsNayumwt5k_4MCBaR47Aracd6E1ZI0vYGo6PYA0BJH20PPc8YLi-ADtB2S2TVMOcY-LfUYk2-ZVb0fES-byz9-9K-yYCJGfejdtZWlP2jdTocaEBSeUjc3QorWTU',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDZS40UmjSjaiMqYVbOMAJvaVSaKYw7_60SsiwEWoDmr2UJs4La4XjSHcc5oOpceKc5_oMepELKTKuocmy7iobE2Y974b3dkc_XFtaU_kTju3A_YrZaUANgJ2ZmWGnso1Pgy_cB2Jkb0rQ-Ce5X8cMCBmYPRRehoHoZLv2cFIf3M8jlGQs5EX-Ac00eegdAA2chTUuz6HFfo1ktZEQ7a0xzrjrxcW-fi7QRS_QuNz56CrGh6Codn8QJh7UdWFpokHW_ySZDfUkDQ3w'
  ];

  bottomCta = {
    title: 'Let Delhivery power your eCommerce growth',
    ctaText: 'Sign up'
  };
}
