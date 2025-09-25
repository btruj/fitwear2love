// app/about/page.tsx
export const metadata = { title: "About — FitWear2Love" };

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 md:px-6 py-16">
      {/* HERO */}
      <header className="mb-12 md:mb-16">
        <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-wide text-white/70 ring-1 ring-white/15">
          Our Story
        </span>
        <h1 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight text-white">
          FitWear2Love™ 
        </h1>
        <p className="mt-3 max-w-3xl text-white/70">
          Activewear designed with heart—inclusive sizing, flattering fits,
          and colors that move with you. Built by a small woman-owned brand,
          made for real life.
        </p>
      </header>

      {/* BIO + PHOTO */}
      <div className="grid gap-8 md:grid-cols-5 mb-14">
        <div className="md:col-span-2">
          {/* Replace /about-iris.jpg with your photo (recommended 900×1200) */}
          <div className="relative overflow-hidden rounded-2xl ring-1 ring-white/10 bg-white/5">
            <img
              src="/about-iris.JPG"
              alt="Iris Rincon — Founder of FitWear2Love"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        <div className="md:col-span-3">
          <h2 className="text-2xl md:text-3xl font-medium text-white">
            Hi, I’m Iris Rincon — founder & designer
          </h2>
          <p className="mt-4 text-white/80 leading-relaxed">
            FitWear2Love started with a simple idea: create pieces that feel
            as good as they look. After years of trying gear that didn’t fit
            right or fell apart, I began sketching styles for friends and
            clients. What started as small batch drops became a growing
            community—women cheering on women, one workout (or coffee run!)
            at a time.
          </p>
          <p className="mt-4 text-white/70 leading-relaxed">
            Every collection is tested for movement, durability, and that
            “feel-amazing” factor. We prioritize flexible fabrics, thoughtful
            stitching, and colors that celebrate you.
          </p>

          <div className="mt-6 grid grid-cols-3 gap-3 text-center">
            <Stat label="Women-Owned" value="100%" />
            <Stat label="Sizes" value="XS–3X" />
            <Stat label="Orders Shipped" value="1k+" />
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/shop"
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-base font-medium text-white
                         bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:from-fuchsia-600 hover:to-purple-700
                         shadow-lg shadow-purple-900/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            >
              Shop New Arrivals
            </a>
            <a
              href="https://www.instagram.com/fitwear2love/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-base font-medium
                         text-white/90 ring-1 ring-white/20 hover:bg-white/10"
            >
              Follow @fitwear2love
            </a>
          </div>
        </div>
      </div>

      {/* VALUES */}
      <section className="mb-14">
        <h3 className="text-xl md:text-2xl font-medium text-white">What we value</h3>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <ValueCard
            title="Confidence"
            text="Flattering cuts, thoughtful support, and buttery fabrics so you can focus on the win—not your waistband."
          />
          <ValueCard
            title="Inclusivity"
            text="We design for real bodies. Our fit model set spans sizes and heights for true-to-life testing."
          />
          <ValueCard
            title="Quality"
            text="Durable seams, squat-proof blends, and colorways that keep their pop after every wash."
          />
        </div>
      </section>

      {/* TIMELINE / MILESTONES */}
      <section aria-label="Milestones" className="mb-14">
        <h3 className="text-xl md:text-2xl font-medium text-white">Milestones</h3>
        <ol className="mt-6 space-y-5">
          <TimelineItem year="2022" text="First capsule drop sells out to friends & local clients." />
          <TimelineItem year="2023" text="Expanded sizes and introduced our signature purple gradient." />
          <TimelineItem year="2024" text="Community events + collabs; faster shipping and eco packaging." />
        </ol>
      </section>

      {/* CTA STRIP */}
      <aside className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 md:p-8 backdrop-blur">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h4 className="text-lg md:text-xl font-medium text-white">
              Want fit advice or bulk orders?
            </h4>
            <p className="text-white/70">
              Email us and we’ll help you find your perfect set.
            </p>
          </div>
          <a
            href="mailto:iris@fitwear2love.com?subject=Fit%20question%20—%20FitWear2Love"
            className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-base font-medium text-white
                       bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:from-fuchsia-600 hover:to-purple-700
                       shadow-lg shadow-purple-900/30"
          >
            Email iris@fitwear2love.com
          </a>
        </div>
      </aside>

      {/* SEO schema (optional) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "FitWear2Love",
            founder: { "@type": "Person", name: "Iris Rincon" },
            sameAs: ["https://www.instagram.com/fitwear2love/"],
          }),
        }}
      />
    </section>
  );
}

/* ---------- Small components ---------- */

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4">
      <div className="text-2xl font-semibold text-white">{value}</div>
      <div className="text-xs uppercase tracking-wide text-white/60 mt-1">{label}</div>
    </div>
  );
}

function ValueCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5">
      <h4 className="text-white font-medium">{title}</h4>
      <p className="mt-2 text-white/70 leading-relaxed">{text}</p>
    </div>
  );
}

function TimelineItem({ year, text }: { year: string; text: string }) {
  return (
    <li className="relative pl-10">
      <span className="absolute left-0 top-1.5 h-2 w-2 rounded-full bg-gradient-to-r from-fuchsia-500 to-purple-600" />
      <span className="text-white/60 text-sm">{year}</span>
      <p className="text-white mt-1">{text}</p>
    </li>
  );
}