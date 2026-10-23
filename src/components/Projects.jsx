import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="max-w-4xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>

      <div className="grid gap-10">
        {projects.map((project) => {
          const [cover, ...gallery] = project.images;

          return (
            <div key={project.title} className="border border-gray-200 rounded-xl overflow-hidden">
              {/* Cover image */}
              <img
                src={cover}
                alt={project.title}
                className="w-full"
              />

              {/* Small images */}
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 p-2 bg-gray-50">
                {gallery.map((img) => (
                  <a key={img} href={img} target="_blank">
                    <img
                      src={img}
                      alt=""
                      className="w-full aspect-video object-cover object-top rounded-md hover:opacity-80"
                    />
                  </a>
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
          );
        })}
      </div>
    </section>
  );
}