import { products } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  return (
    <main className="min-h-screen p-10 bg-gray-50">
      <h1 className="text-5xl font-bold">Handcrafted Haven</h1>

      <p className="mt-4 text-lg text-gray-600">
        Discover unique handmade products from talented artisans.
      </p>

      {/* PRODUCTS */}
      <section id="products" className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Products</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* SELLERS */}
      <section id="sellers" className="mt-16">
        <h2 className="text-2xl font-semibold mb-4">Sellers</h2>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 border rounded bg-white">
            <h3 className="font-bold">Emma Crafts</h3>
            <p className="text-gray-600">
              Ceramic artist specializing in handmade pottery.
            </p>
          </div>

          <div className="p-4 border rounded bg-white">
            <h3 className="font-bold">WoodWorks Studio</h3>
            <p className="text-gray-600">
              Creates sustainable handcrafted wooden goods.
            </p>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="mt-16">
        <h2 className="text-2xl font-semibold mb-4">Reviews</h2>

        <div className="space-y-3">
          <div className="p-4 border rounded bg-white">
            ⭐⭐⭐⭐⭐ “Amazing handmade quality!”
          </div>
          <div className="p-4 border rounded bg-white">
            ⭐⭐⭐⭐ “Beautiful craftsmanship and fast delivery.”
          </div>
        </div>
      </section>
    </main>
  );
}