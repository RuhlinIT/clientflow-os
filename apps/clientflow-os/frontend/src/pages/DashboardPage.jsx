import SectionCard from "../components/SectionCard";

const workQueue = [
  {
    title: "Create backend /health endpoint.",
    context: "Infrastructure",
    status: "Now",
  },
  {
    title: "Add routing and protected layout.",
    context: "App shell",
    status: "In progress",
  },
  {
    title: "Design lead capture and client tables.",
    context: "Data model",
    status: "Next",
  },
  {
    title: "Create Leads and Projects placeholder pages.",
    context: "Route coverage",
    status: "Queued",
  },
];

const nextActions = [
  "Open Tasks and finish route-level placeholder coverage.",
  "Move lead and project concepts out of the dashboard and into their own pages.",
  "Keep dashboard focused on queue, context, and handoff.",
];

const summary = [
  {
    label: "Open leads",
    value: "12",
    note: "Still belongs in pipeline context, not as a hero KPI.",
  },
  {
    label: "Active projects",
    value: "7",
    note: "Useful for orientation only.",
  },
  {
    label: "Pending tasks",
    value: "23",
    note: "Best surfaced through the work queue.",
  },
];

const systemStatus = [
  { label: "Docker", value: "Online" },
  { label: "Frontend", value: "Running" },
  { label: "Tailwind", value: "Active" },
  { label: "Routing", value: "In Progress" },
];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <section className="grid gap-6 xl:grid-cols-[1.65fr_1fr]">
        <SectionCard
          title="Work Queue"
          description="The items that should move first."
        >
          <div className="space-y-3">
            {workQueue.map((item) => (
              <div
                key={item.title}
                className="flex items-start justify-between gap-4 rounded-xl border border-zinc-800 bg-zinc-950/60 px-4 py-3"
              >
                <div className="space-y-1">
                  <p className="text-sm font-medium text-white">{item.title}</p>
                  <p className="text-xs uppercase tracking-wide text-zinc-500">
                    {item.context}
                  </p>
                </div>

                <span className="shrink-0 rounded-full border border-zinc-700 px-2.5 py-1 text-xs text-teal-300">
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </SectionCard>

        <div className="space-y-6">
          <SectionCard
            title="Next Actions"
            description="Use the dashboard to choose a lane, then move into the route."
          >
            <ul className="space-y-3 text-sm text-zinc-300">
              {nextActions.map((item) => (
                <li
                  key={item}
                  className="rounded-xl border border-zinc-800 bg-zinc-950/60 px-4 py-3"
                >
                  {item}
                </li>
              ))}
            </ul>
          </SectionCard>

          <SectionCard
            title="System Status"
            description="Light operational context."
          >
            <div className="space-y-3">
              {systemStatus.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-950/60 px-4 py-3 text-sm"
                >
                  <span className="text-zinc-400">{item.label}</span>
                  <span className="text-teal-300">{item.value}</span>
                </div>
              ))}
            </div>
          </SectionCard>
        </div>
      </section>

      <section>
        <SectionCard
          title="Dashboard Summary"
          description="Small context blocks, not a KPI wall."
        >
          <div className="grid gap-4 md:grid-cols-3">
            {summary.map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-zinc-800 bg-zinc-950/60 px-4 py-4"
              >
                <p className="text-xs uppercase tracking-wide text-zinc-500">
                  {item.label}
                </p>
                <p className="mt-2 text-2xl font-semibold text-white">
                  {item.value}
                </p>
                <p className="mt-2 text-sm text-zinc-400">{item.note}</p>
              </div>
            ))}
          </div>
        </SectionCard>
      </section>
    </div>
  );
}
