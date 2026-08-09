import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Fleet from "@/components/Fleet";
import Services from "@/components/Services";
import Rentals from "@/components/Rentals";
import Sell from "@/components/Sell";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Stats />
        <Fleet />
        <Services />
        <Rentals />
        <Sell />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
