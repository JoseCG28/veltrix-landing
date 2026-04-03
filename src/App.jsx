import logo from "./assets/logo.png";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute right-[-120px] top-[80px] h-[300px] w-[300px] rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>
   

      {/* HEADER */}
      <header className="sticky top-0 z-30 border-b border-white/10 bg-black/60 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Veltrix logo"
              className="h-10 w-auto"
            />
            <div>
              <p className="text-sm font-bold tracking-[0.28em] uppercase">
                Veltrix
              </p>
              <p className="text-[11px] text-white/40">
                Growth systems for supplement brands
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="rounded-full border border-cyan-400/30 px-4 py-2 text-sm text-cyan-200 hover:bg-cyan-400/10"
          >
            Request a Revenue Review
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-2">
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-cyan-300">
            For supplement brands
          </p>

          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
            AI Systems for Scalable Brand Growth
          </h1>

          <p className="mt-6 text-lg text-white/70">
           We help supplement brands increase revenue, retention, and AOV through AI-powered systems and automation.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black"
            >
              Get Your Free Review
            </a>

            <a
              href="#services"
              className="rounded-full border border-white/20 px-6 py-3 text-sm"
            >
              View services
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <p className="text-sm text-white/50">What we focus on</p>

          <ul className="mt-4 space-y-3 text-white/70">
            <li>• Conversion-focused landing pages</li>
            <li>• Email & SMS retention systems</li>
            <li>• AI-powered customer flows</li>
            <li>• Cleaner, scalable store structure</li>
          </ul>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-3xl font-semibold">
          What we build for supplement brands
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
  <div className="rounded-2xl border border-white/10 p-6">
    <h3 className="text-xl font-semibold">Revenue Systems</h3>
    <p className="mt-3 text-white/60">
      We design and implement AI-driven systems that increase your store’s revenue through smarter upsells, cross-sells, and conversion optimization.
    </p>
  </div>

  <div className="rounded-2xl border border-white/10 p-6">
    <h3 className="text-xl font-semibold">Customer Journey Automation</h3>
    <p className="mt-3 text-white/60">
      We automate your customer journey to improve retention, increase repeat purchases, and maximize lifetime value.
    </p>
  </div>

  <div className="rounded-2xl border border-white/10 p-6">
    <h3 className="text-xl font-semibold">Funnel Optimization</h3>
    <p className="mt-3 text-white/60">
      We identify and fix bottlenecks in your funnel to improve conversion rates and unlock hidden revenue opportunities.
    </p>
  </div>
</div>
      </section>

      {/* PROCESS */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-3xl font-semibold">Our process</h2>

        <div className="mt-10 grid gap-6 md:grid-cols-4">
          <div>
            <p className="text-cyan-300">01</p>
            <h3 className="font-semibold">Audit</h3>
            <p className="text-white/60">
              We review your current store and identify gaps.
            </p>
          </div>

          <div>
            <p className="text-cyan-300">02</p>
            <h3 className="font-semibold">Build</h3>
            <p className="text-white/60">
              We create pages, flows, and automation systems.
            </p>
          </div>

          <div>
            <p className="text-cyan-300">03</p>
            <h3 className="font-semibold">Launch</h3>
            <p className="text-white/60">
              We implement everything into your store.
            </p>
          </div>

          <div>
            <p className="text-cyan-300">04</p>
            <h3 className="font-semibold">Improve</h3>
            <p className="text-white/60">
              We refine based on performance and feedback.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-10">
          <h2 className="text-3xl font-semibold">
            Get a Free Revenue Opportunity Review
          </h2>

          <p className="mt-4 text-white/70">
            If you run a supplement brand, we’ll analyze your store and show you where you're leaving money on the table.
          </p>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row">
            <a
              href="mailto:veltrixgrowth.ai@gmail.com"
              className="rounded-full bg-white px-6 py-3 text-black"
            >
              veltrixgrowth.ai@gmail.com
            </a>

            <a
              href="tel:+14026152139"
              className="rounded-full border border-white/20 px-6 py-3"
            >
              +1 (402) 615-2139
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
<footer className="border-t border-white/10 mt-20">
  <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
    <div>
      <h3 className="text-lg font-semibold text-white">Veltrix Growth</h3>
      <p className="text-sm text-white/70 mt-2 max-w-md">
        AI systems, automation, and revenue optimization for supplement brands.
      </p>
    </div>
   <div className="flex flex-col gap-2 text-sm text-white/70">
  <a
    href="/privacy-policy.html"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-white transition"
  >
    Privacy Policy
  </a>

  <a
    href="/cookie-policy.html"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-white transition"
  >
    Cookie Policy
  </a>

  <a
    href="mailto:veltrixgrowth.ai@gmail.com"
    className="hover:text-white transition"
  >
    veltrixgrowth.ai@gmail.com
  </a>

  <a
    href="https://veltrixgrowth.io"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-white transition"
  >
    
  </a>
</div>
   
  </div>
</footer>
    </div>
  );
}