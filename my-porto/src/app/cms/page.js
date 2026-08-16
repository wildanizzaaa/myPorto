const stats = [
  { label: 'Projects', value: '12', delta: '+3 this month', tone: 'bg-sky-100 text-sky-700' },
  { label: 'Published', value: '09', delta: '75% complete', tone: 'bg-emerald-100 text-emerald-700' },
  { label: 'Messages', value: '28', delta: '+7 new', tone: 'bg-violet-100 text-violet-700' },
  { label: 'Visitors', value: '1.4K', delta: '+18% vs last week', tone: 'bg-amber-100 text-amber-700' },
];

const projects = [
  { name: 'Portfolio Website', category: 'Web Development', status: 'Published', updated: '2 days ago' },
  { name: 'Cyber Security Dashboard', category: 'Security', status: 'Draft', updated: '4 days ago' },
  { name: 'Flight Operations App', category: 'Aviation', status: 'Review', updated: '1 week ago' },
  { name: 'Booking System', category: 'Fullstack', status: 'Published', updated: '2 weeks ago' },
];

const menu = [
  'Dashboard',
  'About',
  'Projects',
  'Contact',
  'Media',
  'Settings',
];

export default function CmsDashboard() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-800">
      <div className="mx-auto flex max-w-[1600px] gap-6 p-4 md:p-6">
        <aside className="hidden w-72 shrink-0 rounded-3xl bg-slate-900 p-5 text-white shadow-xl lg:block">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-sky-500 font-black text-slate-900">
              W
            </div>
            <div>
              <p className="text-lg font-bold">Wildan CMS</p>
              <p className="text-xs text-slate-400">Portfolio Admin</p>
            </div>
          </div>

          <nav className="space-y-2">
            {menu.map((item, index) => (
              <button
                key={item}
                className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-sm font-medium transition ${
                  index === 0
                    ? 'bg-white/10 text-white shadow-inner'
                    : 'text-slate-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                <span>{item}</span>
                <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] uppercase tracking-wider">
                  {index === 0 ? 'Live' : 'View'}
                </span>
              </button>
            ))}
          </nav>

          <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Quick note</p>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Keep your profile description, projects, and contact data fresh for potential recruiters and clients.
            </p>
          </div>
        </aside>

        <main className="flex-1">
          <header className="mb-6 flex flex-col gap-4 rounded-3xl bg-white p-5 shadow-sm md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Dashboard</p>
              <h1 className="mt-2 text-2xl font-bold text-slate-900">Welcome back, Wildan</h1>
            </div>

            <div className="flex items-center gap-3">
              <div className="hidden rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-500 md:block">
                Search content...
              </div>
              <button className="rounded-2xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-800">
                + New Project
              </button>
            </div>
          </header>

          <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-3xl bg-white p-5 shadow-sm">
                <div className={`inline-flex rounded-2xl px-3 py-2 text-xs font-semibold ${stat.tone}`}>
                  {stat.label}
                </div>
                <div className="mt-5 flex items-end justify-between">
                  <div>
                    <p className="text-3xl font-bold text-slate-900">{stat.value}</p>
                    <p className="mt-2 text-sm text-slate-500">{stat.delta}</p>
                  </div>
                  <div className="text-2xl text-slate-300">↗</div>
                </div>
              </div>
            ))}
          </section>

          <section className="mt-6 grid gap-6 xl:grid-cols-[1.6fr_0.9fr]">
            <div className="rounded-3xl bg-white p-5 shadow-sm">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-slate-900">Recent Projects</h2>
                  <p className="text-sm text-slate-500">Latest uploaded and edited content</p>
                </div>
                <button className="text-sm font-semibold text-sky-600 hover:text-sky-500">View all</button>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-slate-200 text-slate-500">
                      <th className="pb-3 pr-4 font-medium">Name</th>
                      <th className="pb-3 pr-4 font-medium">Category</th>
                      <th className="pb-3 pr-4 font-medium">Status</th>
                      <th className="pb-3 font-medium">Updated</th>
                    </tr>
                  </thead>
                  <tbody>
                    {projects.map((project) => (
                      <tr key={project.name} className="border-b border-slate-100 last:border-0">
                        <td className="py-3 pr-4 font-semibold text-slate-800">{project.name}</td>
                        <td className="py-3 pr-4 text-slate-600">{project.category}</td>
                        <td className="py-3 pr-4">
                          <span
                            className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${
                              project.status === 'Published'
                                ? 'bg-emerald-100 text-emerald-700'
                                : project.status === 'Draft'
                                  ? 'bg-amber-100 text-amber-700'
                                  : 'bg-sky-100 text-sky-700'
                            }`}
                          >
                            {project.status}
                          </span>
                        </td>
                        <td className="py-3 text-slate-500">{project.updated}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-3xl bg-white p-5 shadow-sm">
                <h2 className="text-xl font-bold text-slate-900">Quick Actions</h2>
                <div className="mt-4 space-y-3">
                  <button className="flex w-full items-center justify-between rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white hover:bg-slate-800">
                    <span>Edit About Page</span>
                    <span>→</span>
                  </button>
                  <button className="flex w-full items-center justify-between rounded-2xl bg-sky-50 px-4 py-3 text-sm font-semibold text-sky-700 hover:bg-sky-100">
                    <span>Add New Project</span>
                    <span>+</span>
                  </button>
                  <button className="flex w-full items-center justify-between rounded-2xl bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700 hover:bg-emerald-100">
                    <span>Review Messages</span>
                    <span>→</span>
                  </button>
                </div>
              </div>

              <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-sky-900 p-5 text-white shadow-sm">
                <p className="text-sm uppercase tracking-[0.2em] text-slate-300">Portfolio Status</p>
                <h3 className="mt-4 text-2xl font-bold">All systems healthy</h3>
                <p className="mt-3 text-sm text-slate-300">
                  Last sync: 12 minutes ago. Website is online and ready to showcase your work.
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
