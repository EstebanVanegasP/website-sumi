import HeroSection from '../../sections/home/HeroSection/HeroSection';
import EventTypesSection from '../../sections/home/EventTypesSection/EventTypesSection';
import ServicesSection from '../../sections/home/ServicesSection/ServicesSection';
import GallerySection from '../../sections/home/GallerySection/GallerySection';
import AboutSection from '../../sections/home/AboutSection/AboutSection';
import CTASection from '../../sections/home/CTASection/CTASection';

function HomePage() {
  return (
    <>
      <HeroSection />
      <EventTypesSection />
      <ServicesSection />
      <GallerySection />
      <AboutSection />
      <CTASection />
    </>
  );
}

export default HomePage;