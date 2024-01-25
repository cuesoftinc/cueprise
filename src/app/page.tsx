import HeroSection from "../components/HeroSection/Index";
import Features from "../components/Features";
import Management from "../components/Management";

export default function Home() {
  return (
    <main data-testid="temp">
      <HeroSection />
      <Features />
      <Management />
    </main>
  );
}
