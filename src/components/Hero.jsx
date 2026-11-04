import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="top" className="max-w-6xl mx-auto px-5 pt-16 pb-20 md:pt-24 md:pb-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl"
      >
        <p className="inline-flex items-center gap-2 bg-sand rounded-full px-4 py-2 text-xs text-muted">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          Available for remote work worldwide · GMT+2 (Palestine)
        </p>

        <p className="label text-gold-deep mt-10">Frontend Developer · Portfolio</p>
        <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl leading-[1] mt-4">Aya Khamaysa</h1>
        <p className="font-serif italic text-2xl md:text-3xl text-gold-deep mt-5">
          "I build fast, animated websites that sell."
        </p>

        <p className="text-muted text-lg leading-relaxed mt-7 max-w-xl">
          Frontend developer building online stores, restaurant menus and ordering systems, booking pages and
          bilingual Arabic / English websites, with clean code and motion that feels premium.
        </p>

        <div className="flex flex-wrap items-center gap-6 mt-10">
          <a href="#work" className="label bg-ink text-paper px-7 py-4 hover:bg-gold-deep transition-colors">
            View selected work ↓
          </a>
          <a href="#contact" className="label hover:text-gold-deep transition-colors">
            Contact me ↗
          </a>
        </div>
      </motion.div>
    </section>
  );
}
