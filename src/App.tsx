import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { FeaturedServices } from './components/FeaturedServices';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { VideoShowcase } from './components/VideoShowcase';
import { BusinessPromotion } from './components/BusinessPromotion';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Process } from './components/Process';
import { Pricing } from './components/Pricing';
import { InquiryForm } from './components/InquiryForm';
import { ContactSection } from './components/ContactSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [selectedServiceForInquiry, setSelectedServiceForInquiry] = useState<string>('Graphic Design');

  const handleOpenInquiry = (serviceTitle?: string) => {
    if (serviceTitle) {
      setSelectedServiceForInquiry(serviceTitle);
    }
    const inquiryElement = document.getElementById('inquiry');
    if (inquiryElement) {
      inquiryElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#070B14] text-white flex flex-col selection:bg-cyan-500/30 selection:text-cyan-300 relative">
      {/* Elegant Dark Subtle Radial Dot Grid Overlay */}
      <div
        className="fixed inset-0 pointer-events-none opacity-10 z-0"
        style={{
          backgroundImage: 'radial-gradient(#00E5FF 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Top Sticky Navigation */}
      <Navbar onOpenInquiry={() => handleOpenInquiry()} />

      <main className="flex-grow relative z-10">
        {/* 1. Hero Section */}
        <Hero
          onOpenInquiry={() => handleOpenInquiry()}
        />

        {/* 2. About Sukhen Sarkar */}
        <About onOpenInquiry={() => handleOpenInquiry()} />

        {/* 3. Featured 3 Major Pillars */}
        <FeaturedServices onSelectService={(svc) => handleOpenInquiry(svc)} />

        {/* 4. Complete Services (10 Services + Custom Request) */}
        <Services onSelectForInquiry={(svc) => handleOpenInquiry(svc)} />

        {/* 5. Filterable Portfolio (10 Categories + Modal Lightbox) */}
        <Portfolio />

        {/* 6. Video Showcase (Cinematic Gallery + Modal Player) */}
        <VideoShowcase />

        {/* 7. Business Promotion Growth Section */}
        <BusinessPromotion />

        {/* 8. Why Choose Sukhen Sarkar */}
        <WhyChooseUs />

        {/* 9. 4-Step Process */}
        <Process />

        {/* 10. Pricing & Custom Estimation */}
        <Pricing onOpenInquiry={() => handleOpenInquiry()} />

        {/* 11. Project Inquiry Form */}
        <InquiryForm initialService={selectedServiceForInquiry} />

        {/* 12. Direct Contact & Socials */}
        <ContactSection />

        {/* 13. Final Call-to-Action */}
        <FinalCTA onOpenInquiry={() => handleOpenInquiry()} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Quick Conversion */}
      <FloatingWhatsApp />
    </div>
  );
}
