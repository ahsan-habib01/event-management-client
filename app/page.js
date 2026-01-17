import CTA from '@/components/CTA';
import Features from '@/components/Features';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import PopularEvents from '@/components/PopularEvents';
import Stats from '@/components/Stats';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <PopularEvents></PopularEvents>
      <Features></Features>
      <Stats></Stats>
      <Testimonials></Testimonials>
      <HowItWorks></HowItWorks>
      <CTA></CTA>
    </div>
  );
}
