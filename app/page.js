import CTA from '@/components/CTA';
import Features from '@/components/Features';
import Hero from '@/components/Hero';
import PopularEvents from '@/components/PopularEvents';
import Stats from '@/components/Stats';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features></Features>
      <PopularEvents></PopularEvents>
      <Stats></Stats>
      <Testimonials></Testimonials>
      <CTA></CTA>
    </div>
  );
}
