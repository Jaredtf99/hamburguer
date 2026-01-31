import Hero from "@/components/Hero";
import Architecture from "@/components/Architecture";
import Preparation from "@/components/Preparation";
import Specs from "@/components/Specs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-black text-white selection:bg-orange-500 selection:text-white">
      <Hero />
      <Architecture />
      <Preparation />
      <Specs />
      <Footer />
    </main>
  );
}
