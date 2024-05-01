export const metadata = {
  title: 'SecantX - P2P Plugin',
  description: 'SecantX enables interoperability p2p transactions for third-party non-custodial and custodial centralized and centralized exchanges.',
}

import Hero from '@/components/hero'
import Clients from '@/components/clients'
import Features from '@/components/features'
import Features02 from '@/components/features-02'
import Features03 from '@/components/features-03'
import TestimonialsCarousel from '@/components/testimonials-carousel'
import Features04 from '@/components/features-04'
import Pricing from './pricing-section'
import Testimonials from '@/components/testimonials'
import Cta from '@/components/cta'
import TempHero from '@/components/temp-hero'

export default function Home() {
  return (
    <>
      {/* <Hero /> */}
      <TempHero />
      <Features02 />
       {/* <Clients /> */}
      <Features />
      {/* <Features03 /> */}
      {/* <TestimonialsCarousel /> */}
      <Features04 />
      {/* <Pricing /> */}
      {/* <Testimonials /> */}
      <Cta />
    </>
  )
}
