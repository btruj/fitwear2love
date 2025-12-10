import Image from "next/image";

const categories = [
  { name: "Shop All", img: "/shop/shop-all.png" },
  { name: "New Arrivals", img: "/shop/leg1.png" },
  { name: "Matching Sets", img: "/shop/leg2.png" },
  { name: "All Bottoms", img: "/shop/leg3.png" },
  { name: "All Tops", img: "/shop/top1.png" },
  { name: "Leggings", img: "/shop/leg5.png" },
];

// First row
const productsA = [
  { name: "Sculpt & Stretch",      variant: "$49.99", img: "/shop/leg6.png",  isNew: true  },
  { name: "Marble Effect Active",  variant: "$49.99", img: "/shop/leg7.png",  isNew: false },
  { name: "Desert Sand Luxe",      variant: "$49.99", img: "/shop/leg8.png",  isNew: true  },
  { name: "Lightning Bolt Power",  variant: "$49.99", img: "/shop/leg9.png",  isNew: false },
];

// Second row — different names; point to your upcoming logo9–logo13
const productsB = [
  { name: "Peace & Love Vibes Set",            variant: "$49.99", img: "/shop/leg10.png",  isNew: true  },
  { name: "Monochrome Lightning Set",            variant: "$49.99", img: "/shop/leg11.png", isNew: false },
  { name: "Ocean Sky Ombré Set",         variant: "$49.99", img: "/shop/leg12.png", isNew: false },
  { name: "Neon Hearts Glow Set",          variant: "$49.99", img: "/shop/leg13.png", isNew: true  },
  // If you want a 5th item later:
  // { name: "Electric Vibe",      variant: "$49.99", img: "/shop/logo13.png", isNew: false },
];

function ProductCard({ p }: { p: typeof productsA[number] }) {
  return (
    <div className="relative group">
      {p.isNew && (
        <span className="absolute top-2 left-2 bg-fuchsia-500 text-white text-xs px-2 py-1 rounded">
          NEW
        </span>
      )}
      <Image
        src={p.img}
        alt={`${p.name} - ${p.variant}`}
        width={300}
        height={400}
        className="w-full h-64 object-cover rounded-md"
      />
      <div className="mt-3">
        <h3 className="text-sm font-semibold">{p.name}</h3>
        <p className="text-xs text-white/70">{p.variant}</p>
      </div>
    </div>
  );
}

export default function ShopSection() {
  return (
    <section
      id="shop"
      className="mx-auto max-w-7xl px-4 md:px-8 py-16 text-white scroll-mt-28"
    >
      <div className="flex items-end justify-between mb-6">
        <h2 className="text-3xl md:text-4xl font-semibold">Shop</h2>
        <a
          href="/shop"
          className="text-sm underline underline-offset-4 text-white/80 hover:text-white"
        >
          View all →
        </a>
      </div>

      {/* Categories */}
      <div className="flex gap-4 overflow-x-auto pb-4 mb-8">
        {categories.map((cat) => (
          <div
            key={cat.name}
            className="flex-shrink-0 w-40 rounded-lg border border-white/20 overflow-hidden cursor-pointer hover:scale-105 transition"
          >
            <Image
              src={cat.img}
              alt={cat.name}
              width={160}
              height={100}
              className="w-full h-28 object-cover"
            />
            <div className="p-2 text-center text-sm">{cat.name}</div>
          </div>
        ))}
      </div>

      {/* Products Grid A */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        {productsA.map((p) => (
          <ProductCard key={p.name} p={p} />
        ))}
      </div>

      {/* Products Grid B (different names & images) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {productsB.map((p) => (
          <ProductCard key={p.name} p={p} />
        ))}
      </div>
    </section>
  );
}