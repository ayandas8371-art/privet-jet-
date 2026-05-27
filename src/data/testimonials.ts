export interface Testimonial {
  id: number
  name: string
  role: string
  quote: string
  tag: string
  image: string
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'ALEXANDER VOSS',
    role: 'TECH FOUNDER & INVESTOR',
    quote: '"The entire flight experience felt absolutely seamless. It is rare to find an aviation partner that perfectly understands the value of time and flawless execution."',
    tag: 'MONACO BUSINESS WEEK',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=256&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'ELENA MARCHETTI',
    role: 'LUXURY TRAVEL CONSULTANT',
    quote: '"The level of comfort, privacy, and precision was exceptional. I recommend The Privet Key to my most discerning ultra-high-net-worth clients without hesitation."',
    tag: 'DUBAI PRIVATE FLIGHT',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=256&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'JAMES HARRINGTON',
    role: 'GLOBAL ENTREPRENEUR',
    quote: '"I have flown private across the world for years, but the Obsidian Velocity redefined my expectations of what a transatlantic journey could feel like."',
    tag: 'TRANSATLANTIC JOURNEY',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=256&auto=format&fit=crop'
  },
  {
    id: 4,
    name: 'SOFIA LAURENT',
    role: 'CREATIVE DIRECTOR',
    quote: '"Every detail felt cinematic, modern, and perfectly curated. From the boarding experience to the bespoke cabin interior, it was absolute perfection."',
    tag: 'SUNSET SKY ROUTE',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=256&auto=format&fit=crop'
  },
  {
    id: 5,
    name: 'MARCUS CHEN',
    role: 'CEO & ENTREPRENEUR',
    quote: '"Our executive team traveled in complete privacy and comfort. The transparent wholesale pricing and guaranteed availability give my corporation incredible peace of mind."',
    tag: 'CORPORATE AVIATION RETREAT',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=256&auto=format&fit=crop'
  },
  {
    id: 6,
    name: 'ISABELLE DURAND',
    role: 'LUXURY LIFESTYLE CLIENT',
    quote: '"The experience felt less like a flight and more like a private five-star sky lounge. The crew was exceptionally attentive, anticipating my needs before I even asked."',
    tag: 'PRIVATE ISLAND WEEKEND',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=256&auto=format&fit=crop'
  }
]
