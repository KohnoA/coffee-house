import About from '@/modules/About';
import Ecosystem from '@/modules/Ecosystem';
import Promo from '@/modules/Promo';

export default function Home() {
  return (
    <main className="container">
      <Promo />
      <About />
      <Ecosystem />
    </main>
  );
}
