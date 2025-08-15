import Header from '@/components/Header';
import Banner from '@/components/Banner';
import ProductFeed from '@/components/ProductFeed';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="w-full bg-amazon text-white">
        <Header />
        <Banner />
        <ProductFeed />
      </div>
    </main>
  );
}