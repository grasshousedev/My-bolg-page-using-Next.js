const individual = {
  name: 'Individual',
  icon: '/v1546980910/icon-individuals.svg',
  href: '#',
  children: [
    {
      name: 'Entertainment',
      icon: '/v1546980900/icon-entertainment.svg',
      href: '/services/individual/entertainment-industry/'
    },
    {
      name: 'Technology',
      icon: '/v1546980898/icon-technology.svg',
      href: '/services/individual/software-engineer-developer/',
    },
    {
      name: 'Medical Professional',
      icon: '/v1546980898/icon-medical.svg',
      href: '/services/individual/doctors-physicians/',
    },
    {
      name: 'Business Executive',
      icon: '/v1548793957/Navalign_Executive_Icon.svg',
      href: '/services/individual/business-executive/',
    },
    {
      name: 'Enrepreneur',
      icon: '/v1546980898/icon-business.svg',
      href: '/services/individual/entrepreneur-business-owner/',
    },
    {
      name: 'Retired',
      icon: '/v1546980898/icon-retirement.svg',
      href: '/services/family/retired/',
    },
  ],
}

const family = {
  name: 'Family',
  icon: '/v1546980902/icon-family.svg',
  href: '#',
  children: [
    {
      name: 'Recently Marries',
      icon: '/v1546980898/icon-recently-married.svg',
      href: '/services/family/recently-married/',
    },
    {
      name: 'Raising a Family',
      icon: '/v1546980898/icon-families.svg',
      href: '/services/family/raising-a-family/',
    },
    {
      name: 'Married No Children',
      icon: '/v1546980898/icon-married-no-children.svg',
      href: '/services/family/married-no-children/',
    },
    {
      name: 'Empty Nesters',
      icon: '/v1546980898/icon-empty-nester.svg',
      href: '/services/family/empty-nesters/',
    },
  ],
}

const business = {
  name: 'Business',
  icon: '/v1546980898/icon-business.svg',
  href: '#',
  children: [
    {
      name: '4001(k) & Pension Plans',
      icon: '/v1546980898/icon-401k.svg',
      href: '/services/business/401k-and-pension-plan-fiduciary/',
    },
    {
      name: 'Succession Planning',
      icon: '/v1548794795/icon-succession-planning.svg',
      href: '/services/business/succession-exit-planning/',
    },
    {
      name: 'Business Owner',
      icon: '/v1548923972/icon-ent.svg',
      href: '/services/business/business-owner/',
    },
  ]
}

const trusts = {
  name: 'Trusts',
  icon: 'https://d33wubrfki0l68.cloudfront.net/662b47dc70aae5c2a28c4ca16a91b7e23300e9c6/135c1/uploads/icon-trusts.svg',
  href: '/services/trusts-estates/',
}

const funnels = [
  individual,
  family,
  business,
  trusts,
]

export default funnels
