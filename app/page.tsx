// app/page.tsx
import Hero from "@/components/sections/Hero";
import ShopSection from "@/components/sections/ShopSection";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import Section from "@/components/ui/Section";
import SectionDivider from "@/components/ui/SectionDivider";

export default function HomePage() {
  return (
    <>
      {/* Hero stays full-bleed */}
      <Hero />

      <SectionDivider />

      <Section alt>
        <ShopSection />
      </Section>

      <SectionDivider />

      <Section>
        <AboutSection />
      </Section>

      <SectionDivider />

      <Section alt>
        <ContactSection />
      </Section>
    </>
  );
}