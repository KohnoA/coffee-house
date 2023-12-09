import About from '@/modules/About';
import Promo from '@/modules/Promo';

export default function Home() {
  return (
    <main className="container">
      <Promo />
      <About />
    </main>
  );
}
