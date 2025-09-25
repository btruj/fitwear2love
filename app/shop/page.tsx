import Image from "next/image";

export const metadata = {
  title: "Shop — FitWear2Love",
};

const categories = [
  { name: "Shop All", img: "/shop/shop-all.png" },
  { name: "New Arrivals", img: "/shop/leg1.png" },
  { name: "Matching Sets", img: "/shop/leg2.png" },
  { name: "All Bottoms", img: "/shop/leg3.png" },
  { name: "All Tops", img: "/shop/leg4.png" },
  { name: "Leggings", img: "/shop/leg5.png" },
];

const products = [
  {
    name: "Sculpt & Stretch",
    variant: "$49.99",
    img: "/shop/leg6.png",
    isNew: true,
  },
  {
    name: "Marble Effect Active",
    variant: "$49.99",
    img: "/shop/leg7.png",
    isNew: false,
  },
  {
    name: "Desert Sand Luxe",
    variant: "$49.99",
    img: "/shop/leg8.png",
    isNew: true,
  },
  {
    name: "Lightning Bolt Power",
    variant: "$49.99",
    img: "/shop/leg1.png",
    isNew: false,
  },
];

export default function ShopPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 md:px-8 py-12 text-white">
      {/* Breadcrumb */}
      <p className="text-sm text-white/70 mb-6">
        HOME / SHOP ALL / <span className="text-white ">NEW ARRIVALS</span>
      </p>

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

      {/* Filters + Sort */}
      <div className="flex flex-col md:flex-row md:items-center justify-between border-y border-white/20 py-3 mb-8">
        <button className="text-sm flex items-center gap-1">
          Filters <span className="text-xs">▼</span>
        </button>
        <button className="text-sm  flex items-center gap-1 mt-2 md:mt-0">
          Sort by <span className="text-xs">▼</span>
        </button>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((p, idx) => (
          <div key={idx} className="relative group">
            {p.isNew && (
              <span className="absolute top-2 left-2 bg-purple-700 text-white text-xs px-2 py-1 rounded">
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
              <h3 className="text-sm font-semi">{p.name}</h3>
              <p className="text-xs text-white/70">{p.variant}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}