// app/contact/page.tsx
export const metadata = { title: "Contact — FitWear2Love" };

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16">
      {/* Heading */}
      <header className="mb-10">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">
          Contact
        </h1>
        <p className="mt-3 text-white/70 max-w-2xl">
          Questions, sizes, or bulk orders? We’d love to help. PayPal accepted.
        </p>
      </header>

      {/* Contact Card */}
      <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 md:p-8 backdrop-blur">
        <div className="grid gap-6 md:grid-cols-2">
          {/* Left: methods */}
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              {/* Mail icon */}
              <svg
                className="h-6 w-6 shrink-0 text-white/80"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M2 7.5A2.5 2.5 0 0 1 4.5 5h15A2.5 2.5 0 0 1 22 7.5v9A2.5 2.5 0 0 1 19.5 19h-15A2.5 2.5 0 0 1 2 16.5v-9Zm2.2-.3 7.26 4.84a1.5 1.5 0 0 0 1.58 0L20.3 7.2a.5.5 0 0 0-.3-.2H4.5a.5.5 0 0 0-.3.2Z" />
              </svg>
              <div>
                <div className="text-sm uppercase tracking-wider text-white/50">
                  Email
                </div>
                <a
                  href="mailto:iris@fitwear2love.com"
                  className="text-lg text-white hover:text-white/90 underline underline-offset-4 decoration-white/30"
                >
                  iris@fitwear2love.com
                </a>
              </div>
            </li>

            <li className="flex items-start gap-3">
              {/* IG icon */}
              <svg
                className="h-6 w-6 shrink-0 text-white/80"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm5 4.5A5.5 5.5 0 1 0 17.5 13 5.5 5.5 0 0 0 12 7.5Zm0 2A3.5 3.5 0 1 1 8.5 13 3.5 3.5 0 0 1 12 9.5ZM18 6.9a1.1 1.1 0 1 0 1.1 1.1A1.1 1.1 0 0 0 18 6.9Z" />
              </svg>
              <div>
                <div className="text-sm uppercase tracking-wider text-white/50">
                  Instagram
                </div>
                <a
                  href="https://www.instagram.com/fitwear2love/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-lg text-white hover:text-white/90 underline underline-offset-4 decoration-white/30"
                >
                  @fitwear2love
                </a>
                <p className="mt-1 text-white/60">
                  DM for orders — we respond quickly.
                </p>
              </div>
            </li>

            <li className="flex items-start gap-3">
              {/* Card icon */}
              <svg
                className="h-6 w-6 shrink-0 text-white/80"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Zm2 1h14v2H5V8Zm0 5h6v2H5v-2Z" />
              </svg>
              <div>
                <div className="text-sm uppercase tracking-wider text-white/50">
                  Payments
                </div>
                <p className="text-lg text-white">PayPal accepted</p>
              </div>
            </li>
          </ul>

          {/* Right: CTA panel */}
          <div className="flex flex-col justify-between">
            <p className="text-white/70">
              Prefer email? Send your size and style and we’ll confirm
              availability, total, and shipping.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="mailto:iris@fitwear2love.com?subject=Order%20Inquiry%20—%20FitWear2Love"
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-base font-medium text-white
                           bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:from-fuchsia-600 hover:to-purple-700
                           shadow-lg shadow-purple-900/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
              >
                Email Us
              </a>

              <a
                href="https://www.instagram.com/fitwear2love/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-base font-medium
                           text-white/90 ring-1 ring-white/20 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                aria-label="DM FitWear2Love on Instagram"
              >
                DM on Instagram
              </a>
            </div>

            <p className="mt-6 text-sm text-white/50">
              #fitwear2love — Iris Rincon
            </p>
          </div>
        </div>
      </div>

      {/* Structured data for better SEO (optional but nice) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "FitWear2Love",
            email: "iris@fitwear2love.com",
            sameAs: ["https://www.instagram.com/fitwear2love/"],
          }),
        }}
      />
    </section>
  );
}