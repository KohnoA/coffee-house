import Promo from '@/modules/Promo';
import NewProducts from '@/modules/NewProducts';
import About from '@/modules/About';
import Ecosystem from '@/modules/Ecosystem';

export default function Home() {
  return (
    <main className="container">
      <Promo />
      <NewProducts />
      <About />
      <Ecosystem />
    </main>
  );
}
