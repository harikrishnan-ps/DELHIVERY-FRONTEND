import { Injectable } from '@angular/core';

export interface StatCard {
  icon: string;
  iconAlt: string;
  value: string;
  description: string;
  highlighted?: boolean;
}

export interface SolutionCard {
  icon: string;
  iconAlt: string;
  title: string;
  description: string;
}

export interface ServiceCard {
  image: string;
  imageAlt: string;
  label: string;
  description: string;
}

export interface AppBadge {
  image: string;
  alt: string;
}

@Injectable({
  providedIn: 'root',
})
export class HomeContentService {
  readonly hero = {
    backgroundImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCyjkcGS98U4oyqKPo0rOPg01hy3UpXpZRVtUiziOid5BpzKjUB6q8LlcGtrX40jgv0o0PHBLXY_mXjLMY4k6oMCSt2Dd1bnL9mcvcPOSDjBQlo4o5MF9fjlTCaBcPmTbqsDz8n8MdZj52iuTCMV9BkJgRcu1ElxCMb800fN_hq9XJEnuBQcYryuORSB5bagdYqCpw6sQup4urUJS_o_j5zTsSgCWJx1SMMaJbXazOFwGdSmstt6PF2a-Tlo5DOYIyca48MHa3YHqI',
    services: ['Express Parcel', 'PTL', 'FTL', 'International', 'Supply Chain'],
  };

  readonly trackingModes = ['Mobile', 'AWB', 'Order Id', 'LRN'];

  readonly trackingPlaceholders = new Map([
    ['Mobile', 'Enter your mobile number'],
    ['AWB', 'Enter your AWB number'],
    ['Order Id', 'Enter your order id'],
    ['LRN', 'Enter your LRN'],
  ]);

  readonly appBadges: AppBadge[] = [
    {
      alt: 'Google Play',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCRBnLku4HtE7g_jf7fTNm-NJ9iskPSv9C1hi-pOmqZ7DuWw0jnFwZirDpASgFq1KOC6-v07S2LQV4ojD4DEtp0mZO2T6jv6148xSy12BpO9FUZB_bur1yF0yBNLbURV-MlHk9b_1uXGLH-Q02YEBJIxbWqDbueV-2m0TZPiiArCjSCt-N6PQCTkcUgktLRG61GrmeYQDGzQoBjcZoqR3OwxnBCLqRkC_cBlkAUnnxHOGu5H42WRdViHVPwSgIJFbpYAWWEmpHxG3k',
    },
    {
      alt: 'App Store',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDpGUWQYi47yGsejFS-CQ3x-jjRJAEzkaYjkrALbawgfhxnNnoO1yKBFZmvXcjSpox8g_EeX28OvKPCjT8oz9YGa1yF6n79aETk0ZQ1e-DZBt9BvYso5FGMA_Mxt39sW1aaQI8gOifzb6lJwMBA7Yi0z9ynpKEq29Evp5tvE9CtjlDaNtmLobFSUnkhwAh9-xXnLLab3Z-AIPE_DnKZQhX8N21-PmW7vWDuLL-HwdCued7bF4Y8UKiKkYFi-cI0wLERHt9oh-lEj54',
    },
  ];

  readonly stats: StatCard[] = [
    {
      iconAlt: 'Parcel Icon',
      icon:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAbsL6CRoYbpeGOp7wP4QTff3QdOA4TX8yF0UCZPeD756POuZHnSF9Ei9vY6dk5QxfNLUfl-hhqNRv9s8p1XseNgdEQgDq3UC4fBnJXVRIDDjV7iOsFTsDeiCYM7adOUemK7q_HocUghG_35ju4X41pztSgbV2inuY9A7IlHIzNzjkz_HofM_rcWNSenXzn_jgLC7zSejP5lwmIL6tZXHBIEPz6Xkx2nxC-C5Kh8rVrtG9Q4wtWZUI9RJFjiulG8XmnDL9ls8uAy00',
      value: '4 Bn+',
      description: 'Parcels shipped since inception',
    },
    {
      iconAlt: 'Map Icon',
      icon:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuD3K9euRs5B2d_bOZR__YB8BlJwK1MLrIpqlCe1mtxhavqmc5YXPfpkvTTkJ2SApuSqTgpIWI4sorMzKkfGySpUFDHHGmBZWDItkh-hcV5YKlszU6HYSwqMcYzYiPBMxgr33ZH0PhBrvQPbCBRuDMs4OL8SgsGF_Qj0chlzWRuTOyKxpdE15jTW_itma7Si6AAKvtugcMRVW9I9QeAhW3apongjsF_MHWgbisYlX-4tpVVUEWvJkGDYjSgrDGpL87GVvjJo1tBTLVI',
      value: '99.5%',
      description: 'Indian population covered',
      highlighted: true,
    },
    {
      iconAlt: 'Business Icon',
      icon:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDtTeSPYnBIeQesNmECZ_mAbLqMjEVQWeuEhM61zgAiWlwBcczY3dTRU7I9lUohXxc7sZIHMgAdCIRGUIAARPyvlt3TPLrmRbQ-vX95g6y5KiUWnRrEHtDd-xIdCdE1pkVlnOJVBPOYOFxVRaau-pyM-NWZDeBtyd_xrfOUalR22nQTff90wSPR167tR8s5J9ocAHvBqzhwjbswitQZkyAp0qsh4DJIykdm0qheBLkPnEetIO_5vV7AzYrVzrfCmeS0qqa05HRGp7Y',
      value: '48K+',
      description: 'Businesses served',
    },
    {
      iconAlt: 'Freight Icon',
      icon:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDi9Es_y7gCKw_-yZNlJ8rXvUp-QyXIuanrtSThtfO7x6oNQJyPji6vmoJVv-PJI0D1e0ONZpAoA2BHLpEQs8Ih5WEEC-2uV4WlhIUFaJzkg7UmvJpKl_7SBrUugimkarbwbdanDiAS3acZj8qaXt29oF-cCvxjDBACKPGowIJlmLrNe5SrjIvcccL994uJPmevbsrJcWYy8blqoeoiBiXBgmfX1GYocL55QtOWE8mdlvxfpg8rblPAasRC9xOkowKAVSsh9VvDKeM',
      value: '7.4 Mn+',
      description: 'Tonnes Freight shipped',
      highlighted: true,
    },
    {
      iconAlt: 'Infrastructure Icon',
      icon:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBD1yJ7cI3NaK0m1ZcxTj6-XJk7HyBRVHpK3-rWmDDMyvOBk5tdm11QHlpqnwEiiX6XG1BinfS5Z7VFapZ1CjWAljX1G2eNgD-yb-dd0PVK3bMNd0D4_ClD30PABp-JcfI_CEJCPeIYEL8QVQDkylg9LMenj_fSKVY02kq52eB_KK6iatURF7ZEcN3r4ANJglDCNEhOiAXTiQ_XCuDV5rCorSjAb6SGev0QMc6dfWVpuQhHlb_Q4ozB2HhssQ7QrByQ2WrRD0Gq6wY',
      value: '22 M+',
      description: 'Square feet logistics infrastructure covered',
    },
  ];

  readonly solutions: SolutionCard[] = [
    {
      iconAlt: 'D2C Brands',
      icon:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDp6GAAg8CcKnm6V1rV03DwU8235tdLlRY-F55lxi-1zoN1dCS53-b8mMoPPeZG6e83t3OaGxnSV8FdQVVGNH6F8Vy8fxqvCAWeKJAB17mr2PrBqLMnzt5aTh0ZmL_RLQPWFZLHHnzh_-a350olOQtGZjCvowdjT31-TlFLrdaFDK0140JkjQk6BXTuB4NLFbLvoqC8i9Vx_SKAPJtHHSKSsSa0YTAGzosuhEPDL9Xf7nTP9rGPeeJALLhjzS2Q3TYKGnpRIDORWLI',
      title: 'D2C Brands',
      description:
        'We provide an integrated logistics solution built on Express Parcel, Cross Border, Warehousing, Freight and Software value added services that helps brands deliver faster and provide a superior experience',
    },
    {
      iconAlt: 'Personal Courier',
      icon:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAs9q5OPmvpL7exI1uCvYyQGgE11V_mLLrFL2gTI-7klPywCaWAUs0NWTNJ2ZCoXM-SaHXiZGjnlvxhCAlCCu6u5W9Z6AaV8s5w8cSzY0rx3J5a4kSJI1OTDieRuZC8HG8FGGg0zHR4i-MYshRxpmnXj5gCE3_EANIaSMaFrrBn-IRdlO1DdxfWoykPE_gnsnS_YBXTwzfm8WkIT40JG-Y4qXZRfvDGD0msn3WeGzl0AknE3xgJr3VKRQwkRGjB6Or1IaByfV5l2f4',
      title: 'Personal Courier',
      description:
        "India's only online courier solution for all your personal shipping needs. Send from your location to anywhere in the country and internationally with free doorstep pickup and real time tracking through our app",
    },
    {
      iconAlt: 'B2B Enterprises',
      icon:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDJPYrfK2RnGZ-tbJvxmmwNi7jHAC5xmP464DtGhzChkCYsuRTzrqg2r9m5fVwprEsucbIPBKmPMPsqMfYQTWySaCd5SEtB-VnfYRt6twC0ty-SyNYAPG5fxRqo7crTaWh64VhzLpZppVwuETRPGL_T40-DAAeBj0i318f6B2ubWqBSzkJaB5vg06RtyEwRCDM5eIaBy3jhUDnVQuDHzkwTZ6RSuehRebkcIakTgHmqWqDJIKk0lEx1zDtMIf0OKIEwn4Z3VlRWvns',
      title: 'B2B Enterprises',
      description:
        'We provide customised solutions to serve your factory to retailer supply chain end-to-end using our integrated warehousing, technology capabilities and logistics network that improve reliability and reduce cost',
    },
  ];

  readonly serviceCards: ServiceCard[] = [
    {
      imageAlt: 'Express Parcel',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuB_H1D6FXLYOoi-zw3C5jPAmwtwoW_emgi1tx_XVem9WhbDXnFRwgzKg2PBFTbpMI7h4Ql7OHBYcma4KxXoWieLp8CmsoGJwuT0tjCTtP49CduUMSPMEjGu2Wbn0YlfeiJq4tIDFO-MrTXzS0qvl-JQfNUJscBjn0_MHBUImxWENYLgXOtRFT2rkXcX3VJ8JRN8gw2bmQ0az_kFHZurdNnvEIqUHqFu1tnd8YS-QeccafGZVhjRakWmgQmf93apbFM_UMchmrEFoCw',
      label: 'Express Parcel Service',
      description:
        'Send shipments across India for parcels across categories including heavy goods. Get value added services like RTO reduction tools, door-step inspection and tracking',
    },
    {
      imageAlt: 'Warehousing',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDp0Br07SBVorWWDwxYBAUcVQjZhAh3HdUPbWe_RBrdvdEyS8AiDzcJCr_R6YKf2jq6CLjGEr8zYfpGGClm7difcN54N74GAPvYNpUlewgvABhiwQS_Ng37vFDItWT2J1iWCj6lTFCoSsNtLbszYXzoQUfqRBRN982gpHwyFtZjRp66oa6W-5thr0ynWxu2AEW5hL28nMa0mq3pxbUlnJn29OZVZR9cf7JOEgWTM6aq7T7Gy3sl4l3NMH04esjn2MRBOFweu2e90RA',
      label: 'Warehousing',
      description:
        'We store inventory across highly optimised locations across the country to fulfil orders originating across both B2C and B2B channels of sale',
    },
    {
      imageAlt: 'PTL',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAUapWhAGG9XJ0cBiq81HUMODD7f6T6y-ReMfGIo1BQjCGWjl9rPUA5ekf4A1LtenDR5FzvZaJcQ0N-vC3_YF0RT5CPDFJZxffvspAES-6N_tP1AsuHsm0u_JgmSe8bCNzzOotGFnE0nT3PofpSp6Jxyhu6iIkDemnWR0bIzdXpttR-C5hdMpksU1YD3ambGFPxzOUsWvTZ0iEXrRRmpL09R1xcOIkJC23iWqyUU9ij3CH3cMLmazJ33J6gwciJM3usfFITcJyswoc',
      label: 'Part Truckload Freight (PTL)',
      description:
        'Join one of the largest Express PTL networks in India. Get door-to-door and hub-to-hub delivery with additions such as multi-modal freight and client dashboard',
    },
    {
      imageAlt: 'FTL',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAYN3AgcNhOVyblHbXJNvWOL9ptfu4tx4C8IlGZEOc65h-lvk5ukH9svIUC_jXOMwN4Lo9nfZDqKkfzNzmWGlqa05Bi4tOW9Ov0HKVahVj4DjIaTWfhq-4HR8rxsJaPygCfOpVUW2npsQqlUH4hHuGtsP5IejpJ-aR2ljaY8leNLuz4fMXtJWDzLAgO6hPEeZjZS54fl2gU9icMxrWKhGs-X3w9kFKUNle_lGybAQt4dIQwSGsUcNMSMlhWBlSgciIxq7CGItlPJLY',
      label: 'Full Truckload Freight (FTL)',
      description:
        'Move high-volume and high-capacity orders faster with our full Truckload Freight logistics and work with our network of professional Truckload partners as well as our own Fleet',
    },
    {
      imageAlt: 'Cross Border',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuB6cYBEItqDAKH7adYN4MAVkckedLcSin07hAGP4qCySfPaQUSP6-1ZaskEkjBE4h0wlpx3ST5rrUWcnCQ86wOmUHftX-7Dyhlr3Hik8GYCvwdyf67WQW1WF8xW-pRKc6eQ_Q7Eqi3K4dNDuerlTumOefX2jn6OCvNbADQZ1-R5Yo-yV3pOzRTRjgI9oljPFsCyRwK8JpN08-N64SXij1Ck5kOisywbeOV7VCHohgcDKr0J0MDhLCBLvCqM12tkTZKwhtBwtJr4PcA',
      label: 'Cross Border Service',
      description:
        'Get door-to-door, port-to-port Express Parcel and Freight services from India to 220+ countries. Our strategic partners include FedEx and Aramex',
    },
    {
      imageAlt: 'Data Intelligence',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuC8axQmDMZqk2xaSkqmsTGsbQuhXQG3llecsWrDbLlA0oM2v53HBkCH18pgeKrZC_Vl_1-smfitKZCmhoIA5dP-wD9DsZo7yASNWML7AnV3y6u0CctWW3OTuix1g_WuRHVy2OWNfr9ZoqZeLrV8vqINThNhU2wBdx9535EQSZyW_c11T1oypJhCHJD6JyixuFwfeASmpF2HU0ZZcs5T1XZSAzrrPwx4qSk_fnuic2FNmq8-qfnJ9VWP0ESYwtqvTaODOihulX4xjTM',
      label: 'Data Intelligence',
      description:
        "Power your business with India's most accurate location intelligence stack. Improve delivery success and gain deep insights about user generated addresses and RTOs",
    },
  ];
}
