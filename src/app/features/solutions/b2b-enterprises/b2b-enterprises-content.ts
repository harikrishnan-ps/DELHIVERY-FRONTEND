import { Injectable } from '@angular/core';

export interface StatItem {
  iconUrl: string;
  value: string;
  description: string;
}

export interface BuildingBlock {
  imageUrl: string;
  title: string;
  points: string[];
}

export interface E2eFeature {
  iconUrl: string;
  title: string;
  items: string[];
}

@Injectable({
  providedIn: 'root'
})
export class B2bEnterprisesContentService {
  hero = {
    title: 'End-to-End <span class="text-delhivery-red">Supply Chain Solutions</span> from suppliers to customers',
    subtitle: 'Bringing efficiency, speed, precision and reliability to enterprises using an integrated warehousing and transportation network',
    ctaText: 'Contact Us',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAWbieP2mLtezHHkPd73dqg-PPJRAZYYysJfC0VJCmVDG9gyFk_MMIy6uOAkby-qG3eJ0_NpVq7QRG-EsN9eQ6LBug0n2gP-7ogzaMvtN7xFZoXAbxP4sfP-mQOS5QKJttDcRKJP_cxglya-aqsNayumwt5k_4MCBaR47Aracd6E1ZI0vYGo6PYA0BJH20PPc8YLi-ADtB2S2TVMOcY-LfUYk2-ZVb0fES-byz9-9K-yYCJGfejdtZWlP2jdTocaEBSeUjc3QorWTU' // Placeholder
  };

  advantage = {
    paragraphs: [
      'We operate a shared warehousing network of 7 Mn+ square feet across the country which is deeply integrated with our Parcel and Freight Services. This integrated network is powered by our E2E Technology Platform which enables system driven operations and end-to-end visibility.',
      'Our clients from across industries are seeing reduction in logistics and inventory carrying costs and are also able to deliver a better order to delivery experience to their customers.'
    ]
  };

  stats: StatItem[] = [
    { iconUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCMxf1KEnZY9baFmpc0DFpKFzCmFkBp-plbWhzfflk8LJ3N0TT-D4IsKb4P8cOHdd0VkycncpZ57zU2GZkJv1Rai7PJGEMIL6QfaMDbSRH4ybOZ21LRGCcXS8Hi3Bq69lctlCdUVrfuQQeYGsRua4GtjSr3mGYEovkGzIFNqUo8h2mT-HW1zankJp_f8hOPKiSGPG4vqwFqKM7BzYYW4cytfW2sOzJH8UQnBd090sORgHt_83Trh46rfz0LOItn36FtOX8wqlzOokc', value: '48K+', description: 'businesses served' },
    { iconUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAz43E8hSx7biKsvlqUU2vCSmbzG3p2hmMuNRO4Wobc0Ijk9krwA6hi_c_c8Ydon2E21R5vVvZ2FHuzFwQh74I_OzuQLI9SNnNg6npFAAO7KXUr6pVa3V-Lr0FLceBT_vTS530cyRhdtttpd4TbFXc7LyhJ7i2u4og7NRYPvgboy-8H6LQt0clnEfzw3ReRU5pGuq37L__7Cw-59JS26qZwu7octJ_niDlTWpP7ATck4yfYB5NjwiBT-8en49i2FeHz_Ppp8nj7fng', value: '18,600+', description: 'Fleet size Operating Daily' },
    { iconUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAONws_MNFghUNTU7i7vbSxC9-y0urQ-TOhmSspbCZcNk9zXF2PrjVyCpoQ51djQmNqwbPCgVoV-f7OLLLYV5mZCsMHIZfSKHpuwWNRmkt_RlWQ6ZEwF3rkf3KSOkMEeOfglOmamaq0Z3KF3j8YcrOkSaixugF9nqyHNXA2EiGpaWkRFbMN5l-paZcflBPACwj8UacKEwGSFLw_omPLWsYMSG3mhZVo3-aZPTZOwOVV2ViK5iNxWCy3Fa38mk03Uyupp512tycGZhs', value: '18.8K+', description: 'Indian pin codes and 220+ countries covered' },
    { iconUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB8GfmQNdrkNk9uRbAxwU1iAAsNWCdlqL_Y4xCdfMM_yMo5SE3Egecene06rfD3QV7_6BBZiwKmy8tNvRKKildZtBcN6WKSCda_8qyg7Mufko--GXvS9uCqsrzniiQvoLh_BpNIZ7eMB1kRc03OYrGn7u_Fpj6hHE-e8k3yVObPNsZZIgeMYLDX41Y7pcu_dWOtH9StLLLIEtJsvciB5AxaZs92nRA4RszEAClFUuD1TJAc1M2-158f_OZ5qgoiegKdmaShMneLovw', value: '22 Mn+', description: 'square feet logistics infrastructure' }
  ];

  buildingBlocks: BuildingBlock[] = [
    {
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAA0N4wCiDtEQdZCgP4NY-Pi252YqY1ODpqftsI-DUbCxmRsBImipP7Qrx0qLHxBw2CgStzoBx18RzHUcavpxnaM8aoQQIB9xf7kIY-oqvao0rIMHsa-ghmU3914y3aT2SPuaS9NCEIvePtq39wDEiBSV4NMH6Sn-ba8dZHmB2tOyaah5Pv-CYk_yU2HmitKzme6nIU24ar9KKjwsrr47GO-MGhkiYZWE81UG2uqyJQ-YNSgiemZYY5rRiK3fTJA5JrypnKNgCcsBw',
      title: 'Capabilities',
      points: [
        'All logistics capabilities in-house',
        'Warehousing tightly integrated with transportation network for best TATs',
        'Multi-piece handling',
        'Payment on delivery options'
      ]
    },
    {
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDZS40UmjSjaiMqYVbOMAJvaVSaKYw7_60SsiwEWoDmr2UJs4La4XjSHcc5oOpceKc5_oMepELKTKuocmy7iobE2Y974b3dkc_XFtaU_kTju3A_YrZaUANgJ2ZmWGnso1Pgy_cB2Jkb0rQ-Ce5X8cMCBmYPRRehoHoZLv2cFIf3M8jlGQs5EX-Ac00eegdAA2chTUuz6HFfo1ktZEQ7a0xzrjrxcW-fi7QRS_QuNz56CrGh6Codn8QJh7UdWFpokHW_ySZDfUkDQ3w',
      title: 'Technology',
      points: [
        'In-house systems: WMS, TMS, Client Panel',
        'Single data warehouse for customer visibility',
        'API based integration with client ERP systems for data push/pull/sync'
      ]
    },
    {
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAYj4-uUdWpa-RSeZxI4LkHidpdW_dKNNSmTjOCg4WY8NARSqim9BXqnMflVU2JvY2O3VB-9e8apBy3wSuidNNHpcQzSuWnxw9Y3qiDJBQgUE0-T7mBTv6RTYymbfs_A9YdEbn502-4ajbsn74ebGYktwdwTBD2lTkwnPT3PyV1wLOmZI8lELUcSYnrgrUqrtyoEcxuyoIr6boHUAyGc6h1NEY0Mt1ObHXGJyXD60y5yHQQJUY5Yycku4ECI8YbQXKBoDWIzszf35U',
      title: 'Systems Direction',
      points: [
        'Daily operations guided by systems that can be configured as per client\'s business requirements',
        'Daily support systems - route planning, transport selection, warehouse allocation'
      ]
    }
  ];

  e2eFeatures: E2eFeature[] = [
    {
      iconUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCMxf1KEnZY9baFmpc0DFpKFzCmFkBp-plbWhzfflk8LJ3N0TT-D4IsKb4P8cOHdd0VkycncpZ57zU2GZkJv1Rai7PJGEMIL6QfaMDbSRH4ybOZ21LRGCcXS8Hi3Bq69lctlCdUVrfuQQeYGsRua4GtjSr3mGYEovkGzIFNqUo8h2mT-HW1zankJp_f8hOPKiSGPG4vqwFqKM7BzYYW4cytfW2sOzJH8UQnBd090sORgHt_83Trh46rfz0LOItn36FtOX8wqlzOokc',
      title: 'Top line improvement',
      items: ['Fill Rate', 'Faster Fulfilment', 'Better Reach', 'Flex Improvement']
    },
    {
      iconUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAz43E8hSx7biKsvlqUU2vCSmbzG3p2hmMuNRO4Wobc0Ijk9krwA6hi_c_c8Ydon2E21R5vVvZ2FHuzFwQh74I_OzuQLI9SNnNg6npFAAO7KXUr6pVa3V-Lr0FLceBT_vTS530cyRhdtttpd4TbFXc7LyhJ7i2u4og7NRYPvgboy-8H6LQt0clnEfzw3ReRU5pGuq37L__7Cw-59JS26qZwu7octJ_niDlTWpP7ATck4yfYB5NjwiBT-8en49i2FeHz_Ppp8nj7fng',
      title: 'Cost optimisation',
      items: ['Network Optimisation', 'Inventory Optimisation', 'Warehouse Utilisation', 'Vehicle Utilisation']
    },
    {
      iconUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAONws_MNFghUNTU7i7vbSxC9-y0urQ-TOhmSspbCZcNk9zXF2PrjVyCpoQ51djQmNqwbPCgVoV-f7OLLLYV5mZCsMHIZfSKHpuwWNRmkt_RlWQ6ZEwF3rkf3KSOkMEeOfglOmamaq0Z3KF3j8YcrOkSaixugF9nqyHNXA2EiGpaWkRFbMN5l-paZcflBPACwj8UacKEwGSFLw_omPLWsYMSG3mhZVo3-aZPTZOwOVV2ViK5iNxWCy3Fa38mk03Uyupp512tycGZhs',
      title: 'Better efficiency and experience',
      items: ['Decision Support', 'On Time In Full', 'Visibility', 'Value Added Services (VAS)']
    }
  ];

  trustedByLogos: string[] = [
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCMxf1KEnZY9baFmpc0DFpKFzCmFkBp-plbWhzfflk8LJ3N0TT-D4IsKb4P8cOHdd0VkycncpZ57zU2GZkJv1Rai7PJGEMIL6QfaMDbSRH4ybOZ21LRGCcXS8Hi3Bq69lctlCdUVrfuQQeYGsRua4GtjSr3mGYEovkGzIFNqUo8h2mT-HW1zankJp_f8hOPKiSGPG4vqwFqKM7BzYYW4cytfW2sOzJH8UQnBd090sORgHt_83Trh46rfz0LOItn36FtOX8wqlzOokc',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAz43E8hSx7biKsvlqUU2vCSmbzG3p2hmMuNRO4Wobc0Ijk9krwA6hi_c_c8Ydon2E21R5vVvZ2FHuzFwQh74I_OzuQLI9SNnNg6npFAAO7KXUr6pVa3V-Lr0FLceBT_vTS530cyRhdtttpd4TbFXc7LyhJ7i2u4og7NRYPvgboy-8H6LQt0clnEfzw3ReRU5pGuq37L__7Cw-59JS26qZwu7octJ_niDlTWpP7ATck4yfYB5NjwiBT-8en49i2FeHz_Ppp8nj7fng',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAONws_MNFghUNTU7i7vbSxC9-y0urQ-TOhmSspbCZcNk9zXF2PrjVyCpoQ51djQmNqwbPCgVoV-f7OLLLYV5mZCsMHIZfSKHpuwWNRmkt_RlWQ6ZEwF3rkf3KSOkMEeOfglOmamaq0Z3KF3j8YcrOkSaixugF9nqyHNXA2EiGpaWkRFbMN5l-paZcflBPACwj8UacKEwGSFLw_omPLWsYMSG3mhZVo3-aZPTZOwOVV2ViK5iNxWCy3Fa38mk03Uyupp512tycGZhs',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuB8GfmQNdrkNk9uRbAxwU1iAAsNWCdlqL_Y4xCdfMM_yMo5SE3Egecene06rfD3QV7_6BBZiwKmy8tNvRKKildZtBcN6WKSCda_8qyg7Mufko--GXvS9uCqsrzniiQvoLh_BpNIZ7eMB1kRc03OYrGn7u_Fpj6hHE-e8k3yVObPNsZZIgeMYLDX41Y7pcu_dWOtH9StLLLIEtJsvciB5AxaZs92nRA4RszEAClFUuD1TJAc1M2-158f_OZ5qgoiegKdmaShMneLovw',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAWbieP2mLtezHHkPd73dqg-PPJRAZYYysJfC0VJCmVDG9gyFk_MMIy6uOAkby-qG3eJ0_NpVq7QRG-EsN9eQ6LBug0n2gP-7ogzaMvtN7xFZoXAbxP4sfP-mQOS5QKJttDcRKJP_cxglya-aqsNayumwt5k_4MCBaR47Aracd6E1ZI0vYGo6PYA0BJH20PPc8YLi-ADtB2S2TVMOcY-LfUYk2-ZVb0fES-byz9-9K-yYCJGfejdtZWlP2jdTocaEBSeUjc3QorWTU',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDZS40UmjSjaiMqYVbOMAJvaVSaKYw7_60SsiwEWoDmr2UJs4La4XjSHcc5oOpceKc5_oMepELKTKuocmy7iobE2Y974b3dkc_XFtaU_kTju3A_YrZaUANgJ2ZmWGnso1Pgy_cB2Jkb0rQ-Ce5X8cMCBmYPRRehoHoZLv2cFIf3M8jlGQs5EX-Ac00eegdAA2chTUuz6HFfo1ktZEQ7a0xzrjrxcW-fi7QRS_QuNz56CrGh6Codn8QJh7UdWFpokHW_ySZDfUkDQ3w',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAYj4-uUdWpa-RSeZxI4LkHidpdW_dKNNSmTjOCg4WY8NARSqim9BXqnMflVU2JvY2O3VB-9e8apBy3wSuidNNHpcQzSuWnxw9Y3qiDJBQgUE0-T7mBTv6RTYymbfs_A9YdEbn502-4ajbsn74ebGYktwdwTBD2lTkwnPT3PyV1wLOmZI8lELUcSYnrgrUqrtyoEcxuyoIr6boHUAyGc6h1NEY0Mt1ObHXGJyXD60y5yHQQJUY5Yycku4ECI8YbQXKBoDWIzszf35U',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCMxf1KEnZY9baFmpc0DFpKFzCmFkBp-plbWhzfflk8LJ3N0TT-D4IsKb4P8cOHdd0VkycncpZ57zU2GZkJv1Rai7PJGEMIL6QfaMDbSRH4ybOZ21LRGCcXS8Hi3Bq69lctlCdUVrfuQQeYGsRua4GtjSr3mGYEovkGzIFNqUo8h2mT-HW1zankJp_f8hOPKiSGPG4vqwFqKM7BzYYW4cytfW2sOzJH8UQnBd090sORgHt_83Trh46rfz0LOItn36FtOX8wqlzOokc',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAz43E8hSx7biKsvlqUU2vCSmbzG3p2hmMuNRO4Wobc0Ijk9krwA6hi_c_c8Ydon2E21R5vVvZ2FHuzFwQh74I_OzuQLI9SNnNg6npFAAO7KXUr6pVa3V-Lr0FLceBT_vTS530cyRhdtttpd4TbFXc7LyhJ7i2u4og7NRYPvgboy-8H6LQt0clnEfzw3ReRU5pGuq37L__7Cw-59JS26qZwu7octJ_niDlTWpP7ATck4yfYB5NjwiBT-8en49i2FeHz_Ppp8nj7fng',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAONws_MNFghUNTU7i7vbSxC9-y0urQ-TOhmSspbCZcNk9zXF2PrjVyCpoQ51djQmNqwbPCgVoV-f7OLLLYV5mZCsMHIZfSKHpuwWNRmkt_RlWQ6ZEwF3rkf3KSOkMEeOfglOmamaq0Z3KF3j8YcrOkSaixugF9nqyHNXA2EiGpaWkRFbMN5l-paZcflBPACwj8UacKEwGSFLw_omPLWsYMSG3mhZVo3-aZPTZOwOVV2ViK5iNxWCy3Fa38mk03Uyupp512tycGZhs',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuB8GfmQNdrkNk9uRbAxwU1iAAsNWCdlqL_Y4xCdfMM_yMo5SE3Egecene06rfD3QV7_6BBZiwKmy8tNvRKKildZtBcN6WKSCda_8qyg7Mufko--GXvS9uCqsrzniiQvoLh_BpNIZ7eMB1kRc03OYrGn7u_Fpj6hHE-e8k3yVObPNsZZIgeMYLDX41Y7pcu_dWOtH9StLLLIEtJsvciB5AxaZs92nRA4RszEAClFUuD1TJAc1M2-158f_OZ5qgoiegKdmaShMneLovw',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAWbieP2mLtezHHkPd73dqg-PPJRAZYYysJfC0VJCmVDG9gyFk_MMIy6uOAkby-qG3eJ0_NpVq7QRG-EsN9eQ6LBug0n2gP-7ogzaMvtN7xFZoXAbxP4sfP-mQOS5QKJttDcRKJP_cxglya-aqsNayumwt5k_4MCBaR47Aracd6E1ZI0vYGo6PYA0BJH20PPc8YLi-ADtB2S2TVMOcY-LfUYk2-ZVb0fES-byz9-9K-yYCJGfejdtZWlP2jdTocaEBSeUjc3QorWTU'
  ];
}
