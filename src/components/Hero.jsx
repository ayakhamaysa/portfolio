import { Component, lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { projects } from "../data/projects";

// The 3D ring (three.js is big) loads in its own file, after the text is already on screen
const HeroGallery = lazy(() => import("./HeroGallery"));

// The projects shown on the ring, in this order
const featured = ["NOCTA", "ORIEL", "AURA", "MASKAN", "Glossy", "NUVO", "MIZU", "APEX", "Pizzeria 450° Ordering", "Jericho"];
const cards = featured.map((name) => projects.find((p) => p.title.startsWith(name))).filter(Boolean);

// Can this device draw 3D? (WebGL can be off on some computers and old phones)
function canDraw3D() {
  try {
    const c = document.createElement("canvas");
    return !!(c.getContext("webgl2") || c.getContext("webgl"));
  } catch {
    return false;
  }
}

// If the 3D ever fails, show the still screenshots instead of an empty space
class Safe3D extends Component {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    return this.state.failed ? <Still /> : this.props.children;
  }
}

// Plan B without 3D: three screenshots fanned out like cards on a table
function Still() {
  return (
    <div className="relative h-full grid place-items-center">
      {cards.slice(0, 3).map((p, i) => (
        <img
          key={p.title}
          src={p.image}
          alt=""
          width="1200"
          height="630"
          className="absolute w-[72%] rounded-lg shadow-2xl ring-1 ring-gold/50"
          style={{ transform: `translate(${(i - 1) * 14}%, ${(i - 1) * 9}%) rotate(${(i - 1) * 5}deg)`, zIndex: 3 - Math.abs(i - 1) }}
        />
      ))}
    </div>
  );
}

const show3D = typeof window !== "undefined" && canDraw3D();

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Soft gold light behind the ring */}
      <div className="pointer-events-none absolute -right-40 top-10 w-[720px] h-[720px] rounded-full bg-[radial-gradient(closest-side,#e9dcc0,transparent)] opacity-70" />

      <div className="relative max-w-7xl mx-auto px-5 pt-14 pb-16 md:pt-20 md:pb-24 grid gap-6 grid-cols-[minmax(0,1fr)] lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.15fr)] items-center">
        <motion.div className="min-w-0" initial={{ y: 20 }} animate={{ y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
          <p className="inline-flex items-center gap-2 bg-sand rounded-full px-4 py-2 text-xs text-muted">
            <span className="relative flex w-2 h-2">
              <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-60" />
              <span className="relative w-2 h-2 rounded-full bg-emerald-500" />
            </span>
            Open to remote roles & freelance projects<span className="hidden sm:inline"> · GMT+2</span>
          </p>

          <p className="label text-gold-deep mt-9">Aya Khamaysa · Frontend Developer</p>
          {/* The promise first: what a company or a client gets */}
          <h1 className="font-serif text-5xl sm:text-6xl xl:text-[4.4rem] leading-[1.02] mt-4">
            Websites that look <em className="text-gold-deep whitespace-nowrap">world-class</em>, and sell.
          </h1>

          <p className="text-muted text-lg leading-relaxed mt-6 max-w-xl">
            I build product launches with real-time 3D, online stores, ordering systems and AI assistants in React and TypeScript, in Arabic
            and English. <span className="text-ink">Fast on phones, polished to the last pixel.</span>
          </p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-4 mt-9">
            <a href="#work" className="label bg-ink text-paper px-7 py-4 hover:bg-gold-deep transition-colors">
              View my work ↓
            </a>
            <a
              href="#contact"
              className="label border border-ink/25 px-7 py-[15px] hover:border-gold-deep hover:text-gold-deep transition-colors"
            >
              Start a project ↗
            </a>
          </div>

          {/* Proof in numbers */}
          <dl className="grid grid-cols-4 gap-x-4 sm:gap-x-8 mt-10 pt-6 border-t border-ink/10 max-w-xl">
            {[
              [projects.length, "Live projects"],
              ["12", "Industries"],
              ["3D", "Product pages"],
              ["AI", "Assistants"],
            ].map(([value, label]) => (
              <div key={label}>
                <dt className="font-serif text-3xl sm:text-4xl">{value}</dt>
                <dd className="label !text-[9px] sm:!text-[10px] !tracking-[0.14em] sm:!tracking-[0.2em] text-muted mt-1">{label}</dd>
              </div>
            ))}
          </dl>
        </motion.div>

        {/* The 3D ring of real projects */}
        <div className="relative w-full min-w-0 overflow-hidden h-[300px] -mt-14 sm:mt-0 sm:h-[440px] lg:h-[580px] lg:-me-16">
          {show3D ? (
            <Safe3D>
              <Suspense fallback={<div className="h-full grid place-items-center label text-muted animate-pulse">Loading work…</div>}>
                <HeroGallery cards={cards} />
              </Suspense>
            </Safe3D>
          ) : (
            <Still />
          )}
        </div>
      </div>
    </section>
  );
}
