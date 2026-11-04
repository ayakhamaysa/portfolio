export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 bg-paper/85 backdrop-blur border-b border-ink/5">
      <nav className="max-w-6xl mx-auto px-5 h-16 flex items-center gap-6">
        <a href="#top" className="font-serif text-2xl">
          Aya<span className="text-gold">.</span>
        </a>

        <div className="hidden md:flex gap-8 mx-auto label text-muted">
          <a href="#work" className="hover:text-ink transition-colors">Work</a>
          <a href="#about" className="hover:text-ink transition-colors">About</a>
          <a href="#contact" className="hover:text-ink transition-colors">Contact</a>
        </div>

        <a
          href="#contact"
          className="ms-auto md:ms-0 label border border-gold/60 rounded-full px-5 py-2.5 hover:bg-ink hover:text-paper hover:border-ink transition-colors"
        >
          Let's talk ↗
        </a>
      </nav>
    </header>
  );
}
