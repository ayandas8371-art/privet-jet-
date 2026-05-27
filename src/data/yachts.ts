export interface Yacht {
  id: string
  name: string
  tagline: string
  style: string
  bestFor: string
  videoSrc: string
  quickSpecs: { label: string; value: string }[]
  fullSpecs: {
    category: string
    items: { label: string; value: string }[]
  }[]
  images: string[]
}

export const yachts: Yacht[] = [
  {
    id: 'obsidian-velocity',
    name: 'OBSIDIAN VELOCITY',
    tagline: 'Silent Power Above The Clouds.',
    style: 'Black stealth luxury jet',
    bestFor: 'Dark cinematic cloud videos',
    videoSrc: '/media/video/Black%20Plane%20video%205.mp4',
    quickSpecs: [
      { label: 'LENGTH', value: '142 FT' },
      { label: 'CRUISING SPEED', value: '610 MPH' },
      { label: 'GUESTS', value: 'UP TO 16' },
      { label: 'CABINS', value: '3 SUITES' }
    ],
    fullSpecs: [
      {
        category: 'PERFORMANCE',
        items: [
          { label: 'CRUISING SPEED', value: '610 MPH' },
          { label: 'RANGE', value: '7,800 NM' }
        ]
      },
      {
        category: 'ACCOMMODATION',
        items: [
          { label: 'GUESTS', value: 'UP TO 16' },
          { label: 'CABINS', value: '3 LUXURY SUITES' },
          { label: 'INTERIOR', value: 'BLACK WALNUT & CARBON LEATHER' }
        ]
      }
    ],
    images: [
      '/media/Black%20Plane%209.jpeg',
      '/media/Black%20Plane%2014.jpeg'
    ]
  },
  {
    id: 'aurum-eclipse',
    name: 'AURUM ECLIPSE',
    tagline: 'Crafted For Those Above Ordinary.',
    style: 'Golden ultra-luxury jet',
    bestFor: 'Warm sunset/golden cloud visuals',
    videoSrc: '/media/video/Gold%20Plane%20video%203.mp4',
    quickSpecs: [
      { label: 'LENGTH', value: '148 FT' },
      { label: 'CRUISING SPEED', value: '640 MPH' },
      { label: 'GUESTS', value: 'UP TO 18' },
      { label: 'CABINS', value: 'PRESIDENTIAL' }
    ],
    fullSpecs: [
      {
        category: 'PERFORMANCE',
        items: [
          { label: 'CRUISING SPEED', value: '640 MPH' },
          { label: 'RANGE', value: '8,200 NM' }
        ]
      },
      {
        category: 'ACCOMMODATION',
        items: [
          { label: 'GUESTS', value: 'UP TO 18' },
          { label: 'CABINS', value: 'PRESIDENTIAL CONFIGURATION' },
          { label: 'INTERIOR', value: 'CHAMPAGNE GOLD & IVORY SILK' }
        ]
      }
    ],
    images: [
      '/media/Golden%20Plane%2016.jpeg',
      '/media/Golden%20Plane%2022.jpeg'
    ]
  },
  {
    id: 'titanium-stratus',
    name: 'TITANIUM STRATUS',
    tagline: 'Precision Engineered Luxury.',
    style: 'Premium gray heavy jet',
    bestFor: 'Cold cinematic storm-cloud visuals',
    videoSrc: '/media/video/Grey%20Plane%20video%206.mp4',
    quickSpecs: [
      { label: 'LENGTH', value: '155 FT' },
      { label: 'CRUISING SPEED', value: '655 MPH' },
      { label: 'GUESTS', value: 'UP TO 19' },
      { label: 'CABINS', value: '4 SUITES' }
    ],
    fullSpecs: [
      {
        category: 'PERFORMANCE',
        items: [
          { label: 'CRUISING SPEED', value: '655 MPH' },
          { label: 'RANGE', value: '8,600 NM' }
        ]
      },
      {
        category: 'ACCOMMODATION',
        items: [
          { label: 'GUESTS', value: 'UP TO 19' },
          { label: 'CABINS', value: '4 EXECUTIVE SUITES' },
          { label: 'INTERIOR', value: 'TITANIUM ALLOY & SMOKED OAK' }
        ]
      }
    ],
    images: [
      '/media/Grey%20Plane%203.jpeg',
      '/media/Grey%20Plane%209.jpeg'
    ]
  }
]
