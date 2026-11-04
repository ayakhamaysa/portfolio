import { projects } from "../data/projects";
import Reveal from "./Reveal";

// Space each card takes on big screens (the grid has 6 columns)
const sizes = {
  large: "lg:col-span-4",
  half: "lg:col-span-3",
  small: "lg:col-span-2",
  row: "lg:col-span-6",
};

function ProjectCard({ project, index }) {
  const number = String(index + 1).padStart(3, "0");
  const isRow = project.size === "row";

  return (
    <article
      className={`group bg-sand rounded-2xl overflow-hidden h-full flex flex-col ${isRow ? "lg:grid lg:grid-cols-2" : ""}`}
    >
      {/* Screenshot */}
      <a href={project.live} target="_blank" className="relative block overflow-hidden flex-1 min-h-0">
        {/* Keeps the screenshot at least at its normal shape; it can grow taller to fill the card */}
        <div className="aspect-[1200/630]" />
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          width="1200"
          height="630"
          className={`absolute inset-0 w-full h-full object-cover ${project.focus || "object-top"} group-hover:scale-[1.04] transition-transform duration-700`}
        />
        <span
          className={`absolute top-4 left-4 label !text-[10px] rounded-full px-3 py-1.5 ${
            project.badge === "Client project" ? "bg-gold text-ink" : "bg-paper/90 text-ink"
          }`}
        >
          {project.badge}
        </span>
        <span className="hidden sm:block absolute top-4 right-4 label !text-[10px] rounded-full px-3 py-1.5 bg-paper/90 text-muted">
          {number} / {project.category}
        </span>
      </a>

      {/* Text */}
      <div className="p-6 md:p-7 flex flex-col">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-serif text-2xl leading-snug">{project.title}</h3>
          <div className="flex gap-4 mt-2 whitespace-nowrap">
            <a href={project.live} target="_blank" className="label text-gold-deep hover:text-ink transition-colors">
              Live ↗
            </a>
            {/* Only for projects with public code */}
            {project.github && (
              <a href={project.github} target="_blank" className="label text-muted hover:text-ink transition-colors">
                Code ↗
              </a>
            )}
          </div>
        </div>
        <p className="text-muted text-sm leading-relaxed mt-3">{project.description}</p>

        <div className="flex flex-wrap gap-2 mt-auto pt-6">
          {project.tech.map((t) => (
            <span key={t} className="label !text-[10px] !tracking-[0.12em] text-muted border border-ink/10 rounded-full px-3 py-1.5">
              {t}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="work" className="max-w-6xl mx-auto px-5 py-24">
      {/* Title, then a short line under it */}
      <Reveal className="mb-12">
        <p className="label text-gold-deep">01 / Portfolio index</p>
        <h2 className="font-serif text-4xl md:text-5xl mt-3">Selected Projects & Client Work</h2>
        <p className="text-muted max-w-xl leading-relaxed mt-4">
          Online stores, restaurant systems, booking pages and bilingual sites, each one live and built from scratch.
        </p>
      </Reveal>

      <div className="grid gap-6 lg:grid-cols-6">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={(i % 3) * 0.08} className={sizes[project.size]}>
            <ProjectCard project={project} index={i} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
