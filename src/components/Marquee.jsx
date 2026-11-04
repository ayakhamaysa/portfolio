const skills = ["React", "JavaScript", "Tailwind CSS", "Framer Motion", "GSAP & ScrollTrigger", "Supabase", "PostgreSQL", "Vercel", "RTL / i18n"];

export default function Marquee() {
  // The list is shown twice, so when the first copy slides away the second takes its place
  const row = [...skills, ...skills];

  return (
    <div className="bg-sand border-y border-ink/5 overflow-hidden py-4">
      <div className="marquee flex w-max gap-10">
        {row.map((s, i) => (
          <span key={i} className="label text-muted flex items-center gap-10">
            {s}
            <span className="w-1 h-1 rounded-full bg-gold" />
          </span>
        ))}
      </div>
    </div>
  );
}
