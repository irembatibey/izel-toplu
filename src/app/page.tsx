import { Hero } from '@/components/sections/Hero';
import { TrustIndicators } from '@/components/sections/TrustIndicators';
import { AboutPreview } from '@/components/sections/AboutPreview';
import { TherapyAreasPreview } from '@/components/sections/TherapyAreasPreview';
import { TherapyProcessPreview } from '@/components/sections/TherapyProcessPreview';
import { TestimonialsPreview } from '@/components/sections/TestimonialsPreview';
import { FinalCTA } from '@/components/sections/FinalCTA';

/**
 * Phase 4: complete homepage. Order matches the agreed structure —
 * Hero, Trust Indicators, About Preview, Therapy Areas, Therapy
 * Process, Testimonials (placeholder), Final CTA. No other pages
 * are implemented yet.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustIndicators />
      <AboutPreview />
      <TherapyAreasPreview />
      <TherapyProcessPreview />
      <TestimonialsPreview />
      <FinalCTA />
    </>
  );
}