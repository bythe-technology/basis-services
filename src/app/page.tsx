import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import {
  Areas,
  FeaturedServices,
  Hero,
  Process,
  QuoteSection,
  WhyBasis,
  WorkDetails,
  WorkGallery,
} from "@/components/home-sections";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <FeaturedServices />
        <WorkGallery />
        <WhyBasis />
        <WorkDetails />
        <Process />
        <Areas />
        <QuoteSection />
      </main>
      <Footer />
    </>
  );
}
