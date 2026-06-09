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
export class ExpressParcelContentService {
  readonly hero = {
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAWbieP2mLtezHHkPd73dqg-PPJRAZYYysJfC0VJCmVDG9gyFk_MMIy6uOAkby-qG3eJ0_NpVq7QRG-EsN9eQ6LBug0n2gP-7ogzaMvtN7xFZoXAbxP4sfP-mQOS5QKJttDcRKJP_cxglya-aqsNayumwt5k_4MCBaR47Aracd6E1ZI0vYGo6PYA0BJH20PPc8YLi-ADtB2S2TVMOcY-LfUYk2-ZVb0fES-byz9-9K-yYCJGfejdtZWlP2jdTocaEBSeUjc3QorWTU',
  };

  readonly largestPlayer = {
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAA0N4wCiDtEQdZCgP4NY-Pi252YqY1ODpqftsI-DUbCxmRsBImipP7Qrx0qLHxBw2CgStzoBx18RzHUcavpxnaM8aoQQIB9xf7kIY-oqvao0rIMHsa-ghmU3914y3aT2SPuaS9NCEIvePtq39wDEiBSV4NMH6Sn-ba8dZHmB2tOyaah5Pv-CYk_yU2HmitKzme6nIU24ar9KKjwsrr47GO-MGhkiYZWE81UG2uqyJQ-YNSgiemZYY5rRiK3fTJA5JrypnKNgCcsBw',
  };

  readonly stats: IconTextItem[] = [
    {
      iconAlt: 'Box icon',
      icon:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCMxf1KEnZY9baFmpc0DFpKFzCmFkBp-plbWhzfflk8LJ3N0TT-D4IsKb4P8cOHdd0VkycncpZ57zU2GZkJv1Rai7PJGEMIL6QfaMDbSRH4ybOZ21LRGCcXS8Hi3Bq69lctlCdUVrfuQQeYGsRua4GtjSr3mGYEovkGzIFNqUo8h2mT-HW1zankJp_f8hOPKiSGPG4vqwFqKM7BzYYW4cytfW2sOzJH8UQnBd090sORgHt_83Trh46rfz0LOItn36FtOX8wqlzOokc',
      title: '4 Bn+',
      description: 'Parcels shipped since inception',
    },
    {
      iconAlt: 'Building icon',
      icon:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAz43E8hSx7biKsvlqUU2vCSmbzG3p2hmMuNRO4Wobc0Ijk9krwA6hi_c_c8Ydon2E21R5vVvZ2FHuzFwQh74I_OzuQLI9SNnNg6npFAAO7KXUr6pVa3V-Lr0FLceBT_vTS530cyRhdtttpd4TbFXc7LyhJ7i2u4og7NRYPvgboy-8H6LQt0clnEfzw3ReRU5pGuq37L__7Cw-59JS26qZwu7octJ_niDlTWpP7ATck4yfYB5NjwiBT-8en49i2FeHz_Ppp8nj7fng',
      title: '48K+',
      description: 'Businesses served',
    },
    {
      iconAlt: 'Pin icon',
      icon:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAONws_MNFghUNTU7i7vbSxC9-y0urQ-TOhmSspbCZcNk9zXF2PrjVyCpoQ51djQmNqwbPCgVoV-f7OLLLYV5mZCsMHIZfSKHpuwWNRmkt_RlWQ6ZEwF3rkf3KSOkMEeOfglOmamaq0Z3KF3j8YcrOkSaixugF9nqyHNXA2EiGpaWkRFbMN5l-paZcflBPACwj8UacKEwGSFLw_omPLWsYMSG3mhZVo3-aZPTZOwOVV2ViK5iNxWCy3Fa38mk03Uyupp512tycGZhs',
      title: '18,850+',
      description: 'Pin codes covered',
    },
  ];

  readonly efficiencyFeatures: IconTextItem[] = [
    {
      iconAlt: 'Scooter',
      icon:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAzsRDJ1ckOenTP_XBnPKfkAjqFZVa2FinZ4La8wC9xI2tWhcri2fJ0UqEWSK-JUirIrxY9KGlmVZ-x602tR9mnie5hgflCyfBFaqWiHN7TC8WjehkbToPx4Tb_nQg5X57RGlt3iYgDWB32hM2PVJxLCg8WG561GVVu1tFgH9ANbr3X8aOXUDcbT_chSiJMu5hSV5qsD0S8ZZhZJburerk9soQlViPhvj3dWG4_m6Vn5MH2b6Slg0jUNcWoHoPb4lHdjDZH0d1FPD0',
      title: 'Faster shipping',
      description: 'Reach your customers on industry leading Turn Around Time across Air and Surface modes',
    },
    {
      iconAlt: 'Money',
      icon:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBt5hba4xOx6ld0yEmjh1SAfuLRAxkV99TTqwApIUinkXmpeFVFVD4pK9jyneCAJ10YTM0R4goOAwEO7ZPTRE7PnsAq4tyQjX4hgUnJUhVoMdbayYF8ISjbNObLr0nUqzaantKsuU4fRSUVSoVA6Epef-9LLrCP7-7frihWS-s2GbOOvccgEubTDjbAyiPRPSa3zQloJsyc6qZfM1epUwoCDsmBm1RyusVBdHyA6FN2zL-Y1a8IGgX4I2mqQlQeww_1Og62WFpZOko',
      title: 'Free early COD remittance',
      description: 'Free up your working capital with next day COD remittance at no additional charges',
    },
    {
      iconAlt: 'Support',
      icon:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuB8GfmQNdrkNk9uRbAxwU1iAAsNWCdlqL_Y4xCdfMM_yMo5SE3Egecene06rfD3QV7_6BBZiwKmy8tNvRKKildZtBcN6WKSCda_8qyg7Mufko--GXvS9uCqsrzniiQvoLh_BpNIZ7eMB1kRc03OYrGn7u_Fpj6hHE-e8k3yVObPNsZZIgeMYLDX41Y7pcu_dWOtH9StLLLIEtJsvciB5AxaZs92nRA4RszEAClFUuD1TJAc1M2-158f_OZ5qgoiegKdmaShMneLovw',
      title: 'Faster customer service',
      description: 'Directly work with our dedicated service representatives to promptly resolve all your queries',
    },
    {
      iconAlt: 'Added services',
      icon:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuC014nm0kXdJvOM0J33g2L6V7uSMAcHZIpXe3wGPzXTCyhR47zpyqGbYbOTqwIwhGuCwjwLZUmm44DZejIaEc-mPwdIgxZgiZOFoJdAKhrV9-fJYDVq8qLVzg1gjPNDSyUJfr-ganUX_Ug32VufuoFuS7yS07a5_UrF8gK-zssqsinvM8uN0LzH77rcHwWYOTll-AmYBa6YIkqWxHqtDlfb-JFcqqf281OUqSw9UVHsgRGw8k-zOK-6PRjvWl--0Ttb92ADQD35HmY',
      title: 'Value added services',
      description: "Verify returns at customer's doorstep and improve saleability for your products",
    },
  ];

  readonly segments: IconTextItem[] = [
    {
      iconAlt: 'D2C',
      icon:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuA7i0Z1LFpWsD3j9E9q2WriZAEeHmuJalsGWZXdMZTv_-yBHjLXDy0QgerMReIYido8EfI-7XZoklnukLrNPS4mGSecYL1Swsjk9I3842qaTe42ttRz51UWqadKoUgkvcG5yW7PpltjiD4ZVd-uGAa0btvs29vU3J9bTe4WeQbZHDbLt7MZVal_bf7QVlQ3h99YK7ijLkBli9wSL4CI5ZnigGs3J3gk_aBDGv6ZZjGfQhYUd17NhiTl5JqX6qQPsLs1LgCOmqMM4ao',
      title: 'D2C brands',
    },
    {
      iconAlt: 'SME',
      icon:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCYfnZbypArBnpwHLadBS0Agl5Uqmoyh1mKy8wF-64aWRUqIHbJiNgEZnyF9ZPga3NvYJcUzFDVZac2E86u_onysX0pOmWF_8pnkTKFdthxa4CsUvg8-kBPdxhCudWQAGGH8BHAJTJTzJ5UUl84uJL0jgdao5v6BZNBtoUFn0_2apP8uQRW7-wbgL376jyRT6GjR6x0BnkX-w-9OhtX3cd-T2NtZV8e4VpFkcP5k5dhv3SKrW170Bg3yOR-3ollQ17qe1UDaiGP71M',
      title: 'Small & medium enterprises',
    },
    {
      iconAlt: 'Marketplaces',
      icon:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBiwM_Mwtpq-HVkxS8IO0uW2DN-Tt2YdBerLm1r74icwsRkD2bt2etTveWqBtAp2MQVvZnPi4JWbNG7UHVOmLfb6_GdqgzS5hlyaeR7HOxrFCidLermOZQ2Y6uKKRkoATldsJNOpUg_0g5X4wVar0343brwOlLQhyF54a6howj-uiifHKqK6L_5OnApTJR8sqcVNwODqE0Broka2CkWjZHU-CwIAx6Em9nCKJhdy_hkqjAWuz_gmxwbz3i94WH3v2K3fsDTI-FZzWg',
      title: 'Marketplaces',
    },
    {
      iconAlt: 'Banks',
      icon:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCVq_n0bxUgMpQ7OcOgMSiNVZAFA0-nACwmoup4gCp8v9tSktR_pgqs4AWAXybpAVCKt7pjZvKktG-SuAokztrCoFriyX68f6kq5vB_Wp7_s4kntjHrs8GptBYoApOCYW78iKalcmN6g2PKSTcySaL4MgfZXHj-hb-LyZxGN9IY3oPCy-AlIJgdRPSie12_-QEzkeCdYnIvF38ILqCft4iR97ypT4GBH5WSZN7WQOyRNky5zVM_Z4z4ypRre48S5m9rJ5ksdxphDyw',
      title: 'Banks & financial institutions',
    },
    {
      iconAlt: 'Social commerce',
      icon:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCDQ6khJEbRkOKviRkOGQVf4i-mcqPjjCNskpqNiz0dUDp4Lcf7xiEUS6ilAqlF_wtI3FJUW7oMaF9Pmvoi8DPo-x4X96Sh1LG46_CmamLFdTfD7Zb4NvyW2G-O2I4u4ew43HdDD19BZZyQHIVvXYI2EKHyKE0RLog7Q-fe-N0DCrsAA0l0CTVK9XWLKhKsjxCUzCQvQ7QJgiFWjDiJjtufCZ9xnCouHe5SQkak9LQrVZBwHT7zDdd7quvuH-rH-yg0QHLovP-TOaE',
      title: 'Social commerce',
    },
    {
      iconAlt: 'Personal',
      icon:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCrh_Zq21UgdPMizUccjZDkURs-XDJgNHEfjniAR1oWNRUXGlKvHRB2s0cYlWjC4XBRzW1MoDysUBRn8xKOqZk0x7xbqi47Kjr68M8BmVyqCqn1HOykTk_OtX4OzdNMFFUjo9xEiDR4gImd_KL_kPQvyTJtgf8URhptIMAcLc4TdAjVIamIKhcMUq512oQ6s3u7xjhtnGGdttpatSlNxqPNaX_nREIjN3DS-GZqVBe8pbvt-tC-ZiiO9ewEvXmbBpFJFWnly93JHdU',
      title: 'Personal Shipping',
    },
  ];

  readonly platformFeatures: IconTextItem[] = [
    {
      iconAlt: 'API',
      icon:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAQdAZLHkOGlZnPKYkkbg9C-z48e0rmb8OU3zv4MgqdkpnXpq92OZflwdGX-vAxyDaRZEYLBuhS-m1bB52Q1YpzlFhx4jgc4d-_nhQMcPr6KLeMRS6EfyPo7fpkcRqX9Qpu9N9_AgttIai1kRo7HRvB-iCVC0PKicVjZYYLRlYLxP6gh_8t1vGtm-5xrFpRNVLFvCUwlnqwoivqF-nUnTccdOTWPaWJaiw4NVoPq5KZ4R5sgNhovSgjDvQ3SIppw81-ujgCfDu4e40',
      title: 'API integration',
      description: 'Seamlessly integrate your sales channels (like Website, Marketplaces) with our built in integrations',
    },
    {
      iconAlt: 'RTO',
      icon:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBGzxqA9z2AYnxRHbCqs1BTSTZXxrkOaEt9w---8fxGRVEmrbRcOeK34m-5weUFJGumRuNAlEAp1rX-Qke3v4tggR5wpybVph4Kv5jmkPaLE35F_09N97bF35DUiSa8_6aFxhwqLY04MjRDaxfsdLxHFiZPFF56omzU35AohyHMtZsTMiQ9lzX3rgktlalfHdTucRLR1cH1vdOeU3f48MvCIHbENM3SdcD3suS10mOH4nF92Tm7OIFzzIm2W0ozga2IsOwh50wjOtw',
      title: 'RTO Predictor',
      description: 'Over 2 Billion shipments have trained our Machine Learning algorithms to call out potential RTOs',
    },
    {
      iconAlt: 'Address',
      icon:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAls3JafEjxIwIKCxlDyiiaDWGWxmHvyNuhcQwH7ZGpJ_fsEmPbBNUjl9lDavKtr0RxqR-NXkTST0x-bH1j2o02NQquh13INTpq19Wp0VammjGfhPcXZxq81JpNb4T5Sj32ogLwDe-tmKGiP1l6cNEq0MGz6d1yMjtAaTbLyWdVvFMYlbS08AHn_TCZrJwaUnIEWrcl81auIeLlOnorwsyXajVT71lWjqMCJ_zVtcfarx8MMRH71JbjVfqLDmWNkevjYSx1keIhxn4',
      title: 'Address validation',
      description: 'Increase deliverability using our address intelligence products to validate and standardise',
    },
    {
      iconAlt: 'Non Delivery',
      icon:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuB6OpGQKFkpaHJBy3ec96qdH2VxBO8TLiP8B5y758rjhMFOezLSIXCMST2wS_dPoLCnpkFWEPu4--JJfW8dJxkYDPEQRJ53pzwh-FETjedq25BJwXmkN67Myh1jBeEO9feVoJudzBJ6jB4XEDQHnj8cbgoP4qWgb9IUThbdMQH7RN0WnYgXSumHyPykCm5QkZMbmqqnv7h4yiKPU_cVFPHow5rqHJLXjUxwif5nFTkHyLLdZX5T6bXEooy1F5Zk1Qepg29YG25iLDw',
      title: 'Non Delivery Management',
      description: 'Reduce Return-To-Origin using our WhatsApp communication services and business intelligence product suite',
    },
  ];

  readonly testimonials: IconTextItem[] = [
    {
      iconAlt: 'Nestasia Logo',
      icon:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAtIKlycGxYukmO3xXgvmlH8SZErsRGOGBf47t2soutSSTy5_-AP3Jged_3yvLvmnZHpJolWnvKRO2tKwYr5Zd6JV8FOx8OqTz5tIZNtAAJ47FbRvbj3H-mmyhKjXsudOYHZBqsol44lLs6srGU4c-sJd8dh77c4keiGTVpECuyVvWw-1mSkR2CmtmIvw97nXbUJYoNSQF4QAz2aYroMniOHuJ2rm2OYwqe4qQgTCZmjNwN--okZAl_2d0vPEQM5oRr2nG7y-noXgI',
      title: 'Nestasia',
      description:
        "Delhivery's efficient NDR management, dedicated Account Manager, and RTO predictor tool helped us to reduce returns and shipping costs.",
    },
    {
      iconAlt: 'Meesho Logo',
      icon:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuD79ux8L-jIWyWHW-7dVaNQH33TbryrYHfWPXw1pNjzGmPNTP_7pWUu-IpWS2qs2HwWbXQaFzWpFVx9qAbvt4H9Zjang6TqFZzN632wzHu-Lyej6xY4_40gXWf9vi4K-_fKRhAT220hz0LUfXBsxdtwPtKC3g5lED6u2lamo2LomKd8i8RlwIGrsLvHw1VGH8C6lam8acR7wlvWPIuUtSVmLy9vi_M1759U482KifLnfpEdVH841OcKydLtXKyRd6X_3BVBLtBb1Ok',
      title: 'Meesho',
      description: 'Delhivery has been our partner of choice, given its pan-India reach to the remotest corners of India.',
    },
    {
      iconAlt: 'Fabric Pandit Logo',
      icon:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDI2WwtFjwe7RX42BQL6iBD_zwyczHtuqL7lDLF9fNlTtY_A9wPtEQufPv78LB-Ix9HOoKMfZ0m-RKsIa-Ydzw_aQugZbil4FXjQ11N9R_1K42KyhzGx9iegnx3Am8K8Dxbfb4u0yIKyYhHucnArpMCsMErCYDVB9aM0zFSb1ULGcyrq_EXYJC0ArIbnP7rtNa4m2BI3oA5LA1oyov_A-MffO7fWh-oizvsqqE2Aliwm4JBsEJWDmPZ68hdDfUthAb0TCoGzJVH0tw',
      title: 'Fabric Pandit',
      description:
        'Delhivery helped us reduce our response time to under two hours, thereby building brand trust; reducing costs on shipping high-volume orders, and improving delivery speed.',
    },
  ];

  readonly relatedServices: RelatedService[] = [
    {
      imageAlt: 'Warehousing',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDZS40UmjSjaiMqYVbOMAJvaVSaKYw7_60SsiwEWoDmr2UJs4La4XjSHcc5oOpceKc5_oMepELKTKuocmy7iobE2Y974b3dkc_XFtaU_kTju3A_YrZaUANgJ2ZmWGnso1Pgy_cB2Jkb0rQ-Ce5X8cMCBmYPRRehoHoZLv2cFIf3M8jlGQs5EX-Ac00eegdAA2chTUuz6HFfo1ktZEQ7a0xzrjrxcW-fi7QRS_QuNz56CrGh6Codn8QJh7UdWFpokHW_ySZDfUkDQ3w',
      title: 'Warehousing',
      description:
        'We store inventory across highly optimised locations across the country to fulfill orders originating across both B2C and B2B channels of sale',
      accent: 'left',
    },
    {
      imageAlt: 'Cross Border',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCcCipLeBqsLTSxjwcWuqQTWyzePZJjb0gjVg2NGZl7MuPLV2wPA1Ngz5fzxXWVL-iBvGjzJbkeh8JVDJ7c8j9yvxazj0kDQJ0uGDDHeDXJGXC8-Ny3XerOt5S3WxUkV3B1RaYaaF0rOy_Pl7Fr7TnLul3Ad8pXmbOkpDDofS12oIhKDcnP2CJOHETvPddC9nqQmltZPEcgvfJl1NsX0KnCAsA4mnQy5NU6_x7JGJGrRsNc0u8wSGg2gjBUp0TmM-oAJLvK2uMlfvE',
      title: 'Cross Border',
      description:
        'Get door-to-door, port-to-port Express Parcel and Freight services from India to 220+ countries. Our strategic partners include FedEx and Aramex',
    },
    {
      imageAlt: 'Data Intelligence',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAYj4-uUdWpa-RSeZxI4LkHidpdW_dKNNSmTjOCg4WY8NARSqim9BXqnMflVU2JvY2O3VB-9e8apBy3wSuidNNHpcQzSuWnxw9Y3qiDJBQgUE0-T7mBTv6RTYymbfs_A9YdEbn502-4ajbsn74ebGYktwdwTBD2lTkwnPT3PyV1wLOmZI8lELUcSYnrgrUqrtyoEcxuyoIr6boHUAyGc6h1NEY0Mt1ObHXGJyXD60y5yHQQJUY5Yycku4ECI8YbQXKBoDWIzszf35U',
      title: 'Data Intelligence',
      description:
        "Power your business with India's most accurate location intelligence stack. Improve delivery success and gain deep insights about user generated addresses and RTOs",
      accent: 'right',
    },
  ];
}
