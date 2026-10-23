import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="max-w-4xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>

      <div className="grid gap-10">
        {projects.map((project) => (
          <div key={project.title} className="border border-gray-200 rounded-xl overflow-hidden">
            {/* Phone screens */}
            <div className="flex lg:justify-center gap-4 overflow-x-auto p-6 bg-gray-50">
              {project.images.map((img) => (
                <img
                  key={img}
                  src={img}
                  alt=""
                  className="w-36 shrink-0 aspect-[9/19] object-cover object-top rounded-3xl border-4 border-gray-900 shadow-lg"
                />
              ))}
            </div>

            {/* Text */}
            <div className="p-6">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-600 mt-2">{project.description}</p>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((t) => (
                  <span key={t} className="text-sm bg-gray-100 px-3 py-1 rounded-full">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-6 text-emerald-600 font-medium">
                {project.live && (
                  <a href={project.live} target="_blank">Live</a>
                )}
                {project.github && (
                  <a href={project.github} target="_blank">Code</a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}