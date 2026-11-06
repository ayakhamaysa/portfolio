import Reveal from "./Reveal";

const numbers = [
  { value: "10", title: "Live projects", text: "From a client store to booking and AI-powered systems." },
  { value: "2", title: "Languages", text: "Arabic and English, right-to-left and left-to-right." },
  { value: "6", title: "Industries", text: "Retail, healthcare, restaurants, cafés, beauty, hospitality." },
  { value: "Mobile", title: "First", text: "Every page is designed for phones first." },
];

const steps = [
  {
    title: "Design & Plan",
    text: "Every project starts with the brand: colors, type, layout and the content the business really needs.",
    tools: "Figma · Stitch",
  },
  {
    title: "Build & Animate",
    text: "Clean React and Tailwind components, subtle motion with Framer Motion and GSAP, and Supabase when data is needed.",
    tools: "React · Framer Motion · GSAP",
  },
  {
    title: "Polish & Launch",
    text: "Speed and accessibility checks, SEO and share previews, then launch on Vercel or Netlify.",
    tools: "Vercel · Lighthouse",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-sand/60 border-y border-ink/5">
      <div className="max-w-6xl mx-auto px-5 py-24">
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <p className="label text-gold-deep">02 / Background & craft</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight mt-3">
              Engineering mindset meets editorial design.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="text-muted leading-relaxed space-y-4 lg:pt-8">
            <p className="text-ink text-lg">
              I'm a Computer Systems Engineering graduate (Class of 2026) who builds websites for real businesses:
              online stores, clinics, restaurants and cafés.
            </p>
            <p>
              I care about the details people feel: pages that open fast on phones, clear Arabic and English
              typography, and motion that guides the eye instead of getting in the way.
            </p>
          </Reveal>
        </div>

        {/* Numbers */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mt-16">
          {numbers.map((n, i) => (
            <Reveal key={n.title} delay={i * 0.08} className="bg-paper rounded-2xl p-6">
              <p className="font-serif text-5xl">{n.value}</p>
              <p className="label text-gold-deep !text-[10px] mt-3">{n.title}</p>
              <p className="text-muted text-sm mt-2">{n.text}</p>
            </Reveal>
          ))}
        </div>

        {/* How I work */}
        <p className="label text-muted mt-20">How I work</p>
        <div className="grid gap-4 md:grid-cols-3 mt-6">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1} className="bg-paper rounded-2xl p-7 flex flex-col">
              <p className="font-serif text-2xl text-gold-deep">0{i + 1}.</p>
              <h3 className="font-serif text-2xl mt-3">{s.title}</h3>
              <p className="text-muted text-sm leading-relaxed mt-3">{s.text}</p>
              <p className="label !text-[10px] text-muted mt-auto pt-8 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                {s.tools}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
