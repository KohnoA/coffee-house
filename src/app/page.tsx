import Promo from '@/modules/Promo';
import Favorites from '@/modules/Favorites';
import About from '@/modules/About';
import Ecosystem from '@/modules/Ecosystem';

export default function Home() {
  return (
    <main className="container">
      <Promo />
      <Favorites />
      <About />
      <Ecosystem />
    </main>
  );
}
