import { Injectable } from '@angular/core';

export interface WarehouseCard {
  image: string;
  imageAlt: string;
  title: string;
  description?: string;
  accent?: 'left' | 'right';
}

@Injectable({
  providedIn: 'root',
})
export class WarehousingContentService {
  readonly hero = {
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBgvESIctrKdc6Ddq1nbw-R94wMjtSjhyYuRh0_H7f6CqCEpO49WvDAVHhNkM4kQwTz61Ss5tbazxKQBZoHqHap-kczRP47ML_LuRasd4xpHgtNxDHEGL3du2eQX4WlbFO_RUz2f53PrJWI9xtUUpfx8ip-od3wvcvOkQ46KysFreozBUagAm-erylI76bGdQflTIQYzo3VjNpfKLff_-lsrQCThfTF9TV1keh-yZIEcwXzcOkCRJp5PCqBcKtrgCaKg_MiVAv3BcM',
  };

  readonly overview = {
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCpT1QRueij5sfzvcNYctkQ6ftqydB1MdnEwulgLIYRU4cKrwdq8teiCA2YSG_Dwv_NjlJvpBidVH3iBIfO2pRhC_vEWXE5njjldoWHn737RwXUEOxGyo3JuMeusA01vUyb7UDVaZ5o9In46xj7NKV3aihlfbE7RsE1MT4ITE3H53w7MNQFuKS4d8-xT7xltg5RX-TwcHbusNqf5EnfT6ih6VlyAMmxGJiXmJ9FczgwEeBuFZVwd9zMEQnEoXkGukcULgq3aWhzg8s',
  };

  readonly advantages: WarehouseCard[] = [
    {
      imageAlt: 'Multi-tenant Icon',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAux7hSxHF8aTpxHG7Lso3iCs2IvxZLOOTaPX0kg6HPz3wB-dPEFVAFn1NLPmy3R7wZXjfBpZf5al94BTIeuIB9NJrSPH8SpQB3uK-SKKfSIowdBkc181136uSX02DpktzdzTKrmkKqJxWirP4BxRvkDV2jleMGBw9hHLgCWUOhrq_lMMqB4kvK4jFATqCRlMElY6-JtCv_5s1rLKYdfAX2YCP1sDP9AbBoQhPf8FrqsVHZb7YscV3eLTEo8BJnYcyOJfdcoXHYtzk',
      title: 'Multi-tenant warehouses with 7 Mn+ square feet of warehousing infrastructure',
    },
    {
      imageAlt: 'Technology Icon',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuB-OfC_3klx_6fIrz6WHwQfi4bstq5__OxSPaHKhTK7MUaARMS9o8_MaEdEn9kePsX963GDrfzPpaZhZvS9KMWS9rnM8UXIjzav1BL385YiNM3zQjyOnP1wWBzvy7A35cpYQVqDBngnDnPbK9phQScvsk2N3_1TAOuxz0y-EGvzI1BNT7UDR5G4ULGn30DdFCYK_UA9M9_vviM1g7XogFLutBjXI14l2ht_OVEAtqy1zgTTLxS071wzPUvLCfNttXGo9RW2IgcVBhQ',
      title: 'Proprietary technology that lowers cost of fulfilment as you scale',
    },
    {
      imageAlt: 'Integration Icon',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuA-Ha8sNV4s6kgI-y8ZHM1B7xB_96byr47Narqgwu6ftpHVf4o0T2Adgr6fjMepuhXLBvEXyMDg07el0yshTTXnbJdzizUi0UVkpDt5n2paNe8gYWslDmNAD8kMuayaG1HgfZSh2_rS2jjHt6HHlwLX3ByuXCcx1V1u3TGlzaLe6MGlzBULQmjNUE61JuFIeDBFrF26P2pa2FSvYmt-12_N9i86aEOCJYXi2ljEJnwyYzJRHkUAp2mO3-nORfcl-XGUQ5x84W9WnQM',
      title: 'Seamless integration with Express Parcel, Freight and Cross-Border shipping',
    },
    {
      imageAlt: 'Visibility Icon',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuC1rfKwbYaxnr6G1kIHNWzMYuJsLFYrnvbDQhAGnCZfUVB-5tf0GVjPFh-j8i9EEnN9dNlkMI6k-U7Cjz7a4rls61gbsE3TSFttzJmcwlqNZVh799l5yCinY8dZhecFiBgC5NSX6S6YJo1LQh6vl8S5G8TK-2jlRi3AstqFFrzvVXqE6u-NaKODSPiJPulK6ZbjoNhyaAOHEb8k3X9sSOe9xKXmN7y2E1x6UrbB4opcy5haKzRwjdwjtqJkrhnnXy9bQ3LRWFGKsHc',
      title: 'End-to-end visibility over inventory, order management and supply chain',
    },
  ];

  readonly fulfilmentSteps: WarehouseCard[] = [
    {
      imageAlt: 'Inventory Control',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAQj8P-q0QBAqKIVH2asbFgE-fz7GkFqb9rgGIpiGi8w1Acm-bqfcFBd0DzGz1WqACxMYqR0QkStpRebCCTR1jI9ctQe4fAnLeXROyQnaDISp0LbJzf_Zsa31MjkmFLA7SAEVYtm7x7KZeGAcNwjvKNehPbjijtsbJMZZ5SLB93gvO8FAOkho6utEsXw79k7F452nRVAK_Ofsqg-qh_9iAbYu5tfLibhwWqznfKruXp8Rm0B9itBURNmir-qbtQfgPage9xgycCdDM',
      title: 'Inventory control',
      description:
        'Our system driven workflows are built to cater to specific types of inventory at scale to ensure effective and efficient fulfilment of goods no matter what industry you belong to',
    },
    {
      imageAlt: 'In-house management system',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuANq_KLzgxzMdlY9Q4KTDp-YKGfSmbLG-TmvHWF4YMHcRJqALUe9jhe7Gw1OIxZqsPDZeBLlPRwTjHA7KCxh6e6JcSdEw8_jE62GIxmrE2Jq6vVaKIxZDdfzTiUUsYtwE_0h62_rAjdk7R6VAPippeB0gEaPmJu-JMdFk11yDyFlLj6d6K95nscdcGxqSwxhzsctELTEAAn_x8TDdZKhkz5QZQrOzFF8e4Ea8sGr88zYu2dU30KwHQAiQSSMv55NpVOwQI-bnhM7pk',
      title: 'In-house management system',
      description:
        "Delhivery's integration of the warehouse management system with all major partners and demand channels helps with faster TAT and enables multi-location and multi-tenant warehousing",
    },
    {
      imageAlt: 'Cost advantage',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDPefZH0aMIpl_v8NNjphELLDlJdIKDeOfeqIPoYvDYmpimwCamfOpnDvW2wdBd3pSSwRLWxHaLNTUyAaqK0MfgohHvKH6op5MBQMmto_VWvAbNB6RwuhTtLNQ5bgUOULmqyO5LBNIhGu5-YHNuoMI3L9a405Xl8ww04_8WRQpiXwdk0RC7z1eR1x8Dg9FuSPdBMU8LKR0daXo9Sy1Yl2ddnMoPZIhpJOKksGnlUE_rztXVI5CkJEi4Mxw3xrqxVc9orZs5iAaOQAM',
      title: 'Cost advantage',
      description:
        'Delhivery offers integrated solution for distribution to enterprises. This is done by utilising our freight and warehousing infrastructure that facilitates quicker offline distribution with cost efficiency',
    },
    {
      imageAlt: 'Technology differentiation',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCA0cq6lEoqDtJF5R4euuYtpQe4AZsvpFDb1g5wV5ePAI88dBe6XoYHMBthhuRVvhvPevK42A0NT1OhLFIcWvamlORhR3EteV_lzZ4HXS1jusd5H96LcgTZg9Y5r2k_slHcZT52ckH6dxWR9wFq7WkzElW4quQjhTQ0hcQpH1MSyPyp7N2-MXGdwRD2iD06nnoFvdFYcLijmbqvKSS-LkTowZVVGqaa71I8IowUfT-IXGBMn3YjiUGOYqcTSU1V4jmcWzlx7gkHWMg',
      title: 'Technology differentiation',
      description:
        "While Delhivery's warehousing systems allow for efficient maintenance of inventory, our data intelligence platforms help minimise the risks of shipment delays and damages",
    },
  ];

  readonly caseStudy = {
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCMgk1DoUdDugGw0lbj91J2ndFpfWSCNu6ct1gwWC-91HAgtMD4ofk9HxIjcuKTYnPQnp8ocEQ8p21uqI12DM0mLCNjUzEZ315WAzkP6eHufsaywQbhwvmB4hOCr-IO6tTHqmWg5d_qqrJAz0-s2mbbw_6rSXN5wvsMyjwON88emb02UbercUkg8wrztlGKLoxjR7gfIva-z5mu4vIhNn6UEGhk7qHhLVSWhefUDZpRQGr9sCQrLE1HmjLYnbCYC3YsNQb1zSlKvtQ',
  };

  readonly relatedServices: WarehouseCard[] = [
    {
      imageAlt: 'Express Parcel',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBJrOQlgXBw-221oYIL01unSAqaT2eykpeHLuM--2VJmjMvyUw_Jb9ZCrC6LCinS0lfunM-PlWyxlhe74jp3Hx7cxX0QcBkvl45X5W08JPvJYZd9mFm5tMfwp_fLR5T_RTwgtliNuzmV0_Um5lsnz_dplKmLCcnZHOtiQ3deZTsMtsRf5JtZMhDb99jtidJ_H-LT2vv74VVMn08pc63oIvlZDHRIFr85YDoMkyT-EwhGeSSovkDQyUNPtXSKeFjWjn6FhJZqId2I98',
      title: 'Express Parcel',
      description:
        'Send shipments across India for parcels across categories including heavy goods. Get value added services like RTO reduction tools, door-step inspection and tracking',
      accent: 'left',
    },
    {
      imageAlt: 'Part Truckload Freight (PTL)',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAjjwLqbg54MLbiU7e4JnSp2pOt-W7eD9JZ6oiacoMJb9iTptitR7jLxeEknwOfAZBxHp6rIxaYSEptZ-aYfw6xyvWCkQWJruScI4gbWf7KbscgBno-vGC72ZGmnggpLQPElGoXFq3zhjyP7G2JIaJgy72WLU0ksFn0blR38ECljfE2Mw-CISDfLYzj4L4phkcD8GvIFr7wg-Gqfw2rkiMcvsmneGi3iQfLqwFB5tQtFigLBaF0QXj8tjsT175ljmCTz0ar3nhPgD4',
      title: 'Part Truckload Freight (PTL)',
      description:
        'Join one of the largest Express PTL networks in India. Get door-to-door and hub-to-hub delivery with multi-modal freight and appointments via a DIY Client Dashboard',
    },
    {
      imageAlt: 'Full Truckload Freight (FTL)',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBZEgKHVgkACx3vy0AknIYogrveeqBsxC_3BrgiC44xwD7Exk6gtQh5LNxDunSsb2ubOLYgDfdVvfxcrBCdccDZBbmPa3wH_6zlpZusaC-3upKb-vEhjc6YyFCwG2W7ucZJJL2vKSX-FrG3GY68RN44T82QGsgC_40COA_BRXEGPUqQ9bzfca6hVyCbfON2b0O2kw_vB4jW5qsJlFYP0BEQRqPu7OV20BUNSKM-ODrSAKzBE37njouQxWTDjtgg7L73t9e3k0aVnPc',
      title: 'Full Truckload Freight (FTL)',
      description:
        'Move high-volume and high-capacity orders faster with our full Truckload Freight logistics and work with our network of professional Truckload partners as well as our own Fleet',
      accent: 'right',
    },
  ];
}
