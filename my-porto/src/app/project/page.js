const projects = [
  {
    title: 'Portfolio Website',
    category: 'Web Development',
    description:
      'A personal portfolio website built with Next.js and Tailwind to present my profile, projects, and contact information in a modern and responsive layout.',
    tags: ['Next.js', 'Tailwind', 'Responsive'],
    accent: 'from-blue-500 to-cyan-400',
    status: 'Completed',
  },
  {
    title: 'Cyber Security Dashboard',
    category: 'Security',
    description:
      'A dashboard concept for monitoring security alerts, vulnerabilities, and system health with a clear and structured user experience for technical teams.',
    tags: ['Security', 'Dashboard', 'UI/UX'],
    accent: 'from-violet-500 to-purple-600',
    status: 'In Progress',
  },
  {
    title: 'Flight Operations App',
    category: 'Aviation',
    description:
      'A mock aviation operations tool designed to help track flight schedules, checklists, and operational notes with a streamlined interface and pilot-focused workflow.',
    tags: ['Aviation', 'Planning', 'Prototype'],
    accent: 'from-amber-400 to-orange-500',
    status: 'Concept',
  },
];

export default function ProjectPage() {
  return (
    <div className="min-h-screen bg-white px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
            Selected Works
          </p>
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">My Projects</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            A collection of work that combines technology, security thinking, and a structured, user-first approach.
          </p>
        </header>

        <div className="mb-10 flex flex-wrap items-center justify-center gap-3">
          {['All', 'Web', 'Security', 'Aviation'].map((item, index) => (
            <button
              key={item}
              type="button"
              className={[
                'rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200',
                index === 0
                  ? 'border-gray-900 bg-gray-900 text-white'
                  : 'border-gray-300 bg-white text-gray-700 hover:border-gray-900 hover:text-gray-900',
              ].join(' ')}
            >
              {item}
            </button>
          ))}
        </div>

        <section className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className={`h-40 bg-linear-to-br ${project.accent}`} />

              <div className="p-6">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <span className="rounded-full bg-gray-100 px-2.5 py-1 text-xs font-semibold text-gray-700">
                    {project.category}
                  </span>
                  <span className="text-xs font-medium text-gray-500">{project.status}</span>
                </div>

                <h2 className="mb-3 text-2xl font-bold text-gray-900">{project.title}</h2>
                <p className="mb-5 text-sm leading-6 text-gray-600">{project.description}</p>

                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href="#"
                  className="inline-flex items-center rounded-full bg-gray-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-gray-700"
                >
                  View Project
                </a>
              </div>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
}
