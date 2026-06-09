import { Injectable } from '@angular/core';

export interface IconTextItem {
  icon: string;
  iconAlt: string;
  title: string;
  description?: string;
}

export interface RelatedService {
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  accent?: 'left' | 'right';
}

@Injectable({
  providedIn: 'root',
})
export class PartTruckloadContentService {
  readonly hero = {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAWbieP2mLtezHHkPd73dqg-PPJRAZYYysJfC0VJCmVDG9gyFk_MMIy6uOAkby-qG3eJ0_NpVq7QRG-EsN9eQ6LBug0n2gP-7ogzaMvtN7xFZoXAbxP4sfP-mQOS5QKJttDcRKJP_cxglya-aqsNayumwt5k_4MCBaR47Aracd6E1ZI0vYGo6PYA0BJH20PPc8YLi-ADtB2S2TVMOcY-LfUYk2-ZVb0fES-byz9-9K-yYCJGfejdtZWlP2jdTocaEBSeUjc3QorWTU',
  };

  readonly overview = {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAA0N4wCiDtEQdZCgP4NY-Pi252YqY1ODpqftsI-DUbCxmRsBImipP7Qrx0qLHxBw2CgStzoBx18RzHUcavpxnaM8aoQQIB9xf7kIY-oqvao0rIMHsa-ghmU3914y3aT2SPuaS9NCEIvePtq39wDEiBSV4NMH6Sn-ba8dZHmB2tOyaah5Pv-CYk_yU2HmitKzme6nIU24ar9KKjwsrr47GO-MGhkiYZWE81UG2uqyJQ-YNSgiemZYY5rRiK3fTJA5JrypnKNgCcsBw',
  };

  readonly advantages: IconTextItem[] = [
    {
      iconAlt: 'Speed',
      icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCMxf1KEnZY9baFmpc0DFpKFzCmFkBp-plbWhzfflk8LJ3N0TT-D4IsKb4P8cOHdd0VkycncpZ57zU2GZkJv1Rai7PJGEMIL6QfaMDbSRH4ybOZ21LRGCcXS8Hi3Bq69lctlCdUVrfuQQeYGsRua4GtjSr3mGYEovkGzIFNqUo8h2mT-HW1zankJp_f8hOPKiSGPG4vqwFqKM7BzYYW4cytfW2sOzJH8UQnBd090sORgHt_83Trh46rfz0LOItn36FtOX8wqlzOokc',
      title: 'Industry Leading Speed',
    },
    {
      iconAlt: 'Reach',
      icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAz43E8hSx7biKsvlqUU2vCSmbzG3p2hmMuNRO4Wobc0Ijk9krwA6hi_c_c8Ydon2E21R5vVvZ2FHuzFwQh74I_OzuQLI9SNnNg6npFAAO7KXUr6pVa3V-Lr0FLceBT_vTS530cyRhdtttpd4TbFXc7LyhJ7i2u4og7NRYPvgboy-8H6LQt0clnEfzw3ReRU5pGuq37L__7Cw-59JS26qZwu7octJ_niDlTWpP7ATck4yfYB5NjwiBT-8en49i2FeHz_Ppp8nj7fng',
      title: 'Pan-India Reach',
    },
    {
      iconAlt: 'Technology',
      icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAONws_MNFghUNTU7i7vbSxC9-y0urQ-TOhmSspbCZcNk9zXF2PrjVyCpoQ51djQmNqwbPCgVoV-f7OLLLYV5mZCsMHIZfSKHpuwWNRmkt_RlWQ6ZEwF3rkf3KSOkMEeOfglOmamaq0Z3KF3j8YcrOkSaixugF9nqyHNXA2EiGpaWkRFbMN5l-paZcflBPACwj8UacKEwGSFLw_omPLWsYMSG3mhZVo3-aZPTZOwOVV2ViK5iNxWCy3Fa38mk03Uyupp512tycGZhs',
      title: 'Proprietary Technology',
    },
    {
      iconAlt: 'Support',
      icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB8GfmQNdrkNk9uRbAxwU1iAAsNWCdlqL_Y4xCdfMM_yMo5SE3Egecene06rfD3QV7_6BBZiwKmy8tNvRKKildZtBcN6WKSCda_8qyg7Mufko--GXvS9uCqsrzniiQvoLh_BpNIZ7eMB1kRc03OYrGn7u_Fpj6hHE-e8k3yVObPNsZZIgeMYLDX41Y7pcu_dWOtH9StLLLIEtJsvciB5AxaZs92nRA4RszEAClFUuD1TJAc1M2-158f_OZ5qgoiegKdmaShMneLovw',
      title: '24/7 Support',
    }
  ];

  readonly features: IconTextItem[] = [
    {
      iconAlt: 'Feature 1',
      icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAzsRDJ1ckOenTP_XBnPKfkAjqFZVa2FinZ4La8wC9xI2tWhcri2fJ0UqEWSK-JUirIrxY9KGlmVZ-x602tR9mnie5hgflCyfBFaqWiHN7TC8WjehkbToPx4Tb_nQg5X57RGlt3iYgDWB32hM2PVJxLCg8WG561GVVu1tFgH9ANbr3X8aOXUDcbT_chSiJMu5hSV5qsD0S8ZZhZJburerk9soQlViPhvj3dWG4_m6Vn5MH2b6Slg0jUNcWoHoPb4lHdjDZH0d1FPD0',
      title: 'Real-time Tracking',
      description: 'End-to-end visibility of your shipments',
    },
    {
      iconAlt: 'Feature 2',
      icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBt5hba4xOx6ld0yEmjh1SAfuLRAxkV99TTqwApIUinkXmpeFVFVD4pK9jyneCAJ10YTM0R4goOAwEO7ZPTRE7PnsAq4tyQjX4hgUnJUhVoMdbayYF8ISjbNObLr0nUqzaantKsuU4fRSUVSoVA6Epef-9LLrCP7-7frihWS-s2GbOOvccgEubTDjbAyiPRPSa3zQloJsyc6qZfM1epUwoCDsmBm1RyusVBdHyA6FN2zL-Y1a8IGgX4I2mqQlQeww_1Og62WFpZOko',
      title: 'Cost Optimization',
      description: 'Reduce logistics spend with optimized routing',
    },
    {
      iconAlt: 'Feature 3',
      icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC014nm0kXdJvOM0J33g2L6V7uSMAcHZIpXe3wGPzXTCyhR47zpyqGbYbOTqwIwhGuCwjwLZUmm44DZejIaEc-mPwdIgxZgiZOFoJdAKhrV9-fJYDVq8qLVzg1gjPNDSyUJfr-ganUX_Ug32VufuoFuS7yS07a5_UrF8gK-zssqsinvM8uN0LzH77rcHwWYOTll-AmYBa6YIkqWxHqtDlfb-JFcqqf281OUqSw9UVHsgRGw8k-zOK-6PRjvWl--0Ttb92ADQD35HmY',
      title: 'Seamless Integration',
      description: 'Easy API integration with your systems',
    },
    {
      iconAlt: 'Feature 4',
      icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAQdAZLHkOGlZnPKYkkbg9C-z48e0rmb8OU3zv4MgqdkpnXpq92OZflwdGX-vAxyDaRZEYLBuhS-m1bB52Q1YpzlFhx4jgc4d-_nhQMcPr6KLeMRS6EfyPo7fpkcRqX9Qpu9N9_AgttIai1kRo7HRvB-iCVC0PKicVjZYYLRlYLxP6gh_8t1vGtm-5xrFpRNVLFvCUwlnqwoivqF-nUnTccdOTWPaWJaiw4NVoPq5KZ4R5sgNhovSgjDvQ3SIppw81-ujgCfDu4e40',
      title: 'Dedicated Management',
      description: 'Assigned account managers for your business',
    }
  ];

  readonly caseStudy = {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDZS40UmjSjaiMqYVbOMAJvaVSaKYw7_60SsiwEWoDmr2UJs4La4XjSHcc5oOpceKc5_oMepELKTKuocmy7iobE2Y974b3dkc_XFtaU_kTju3A_YrZaUANgJ2ZmWGnso1Pgy_cB2Jkb0rQ-Ce5X8cMCBmYPRRehoHoZLv2cFIf3M8jlGQs5EX-Ac00eegdAA2chTUuz6HFfo1ktZEQ7a0xzrjrxcW-fi7QRS_QuNz56CrGh6Codn8QJh7UdWFpokHW_ySZDfUkDQ3w',
  };

  readonly relatedServices: RelatedService[] = [
    {
      imageAlt: 'Warehousing',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDZS40UmjSjaiMqYVbOMAJvaVSaKYw7_60SsiwEWoDmr2UJs4La4XjSHcc5oOpceKc5_oMepELKTKuocmy7iobE2Y974b3dkc_XFtaU_kTju3A_YrZaUANgJ2ZmWGnso1Pgy_cB2Jkb0rQ-Ce5X8cMCBmYPRRehoHoZLv2cFIf3M8jlGQs5EX-Ac00eegdAA2chTUuz6HFfo1ktZEQ7a0xzrjrxcW-fi7QRS_QuNz56CrGh6Codn8QJh7UdWFpokHW_ySZDfUkDQ3w',
      title: 'Warehousing',
      description: 'We store inventory across highly optimised locations across the country.',
      accent: 'left',
    },
    {
      imageAlt: 'Express Parcel',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAYj4-uUdWpa-RSeZxI4LkHidpdW_dKNNSmTjOCg4WY8NARSqim9BXqnMflVU2JvY2O3VB-9e8apBy3wSuidNNHpcQzSuWnxw9Y3qiDJBQgUE0-T7mBTv6RTYymbfs_A9YdEbn502-4ajbsn74ebGYktwdwTBD2lTkwnPT3PyV1wLOmZI8lELUcSYnrgrUqrtyoEcxuyoIr6boHUAyGc6h1NEY0Mt1ObHXGJyXD60y5yHQQJUY5Yycku4ECI8YbQXKBoDWIzszf35U',
      title: 'Express Parcel',
      description: 'India\'s largest Express Parcel player.',
      accent: 'right',
    },
  ];
}
