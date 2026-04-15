import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TechnicalArtistry from '@/components/TechnicalArtistry';
import SelectedWorks from '@/components/SelectedWorks';
import TechStack from '@/components/TechStack';
import LetsBuild from '@/components/LetsBuild';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TechnicalArtistry />
      <SelectedWorks />
      <TechStack />
      <LetsBuild />
      <Footer />
    </main>
  );
}
