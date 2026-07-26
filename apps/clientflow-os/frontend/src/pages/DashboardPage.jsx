import SectionCard from "../components/SectionCard";

const workQueue = [
  {
    title: "Review tasks due today across active clients.",
    context: "Tasks",
    status: "Now",
  },
  {
    title: "Follow up with accounts waiting on next response.",
    context: "Clients",
    status: "Now",
  },
  {
    title: "Clear blocked work before adding new tasks.",
    context: "Tasks",
    status: "Next",
  },
  {
    title: "Review workspace defaults for intake and delivery flow.",
    context: "Settings",
    status: "Later",
  },
];

const nextActions = [
  "Open Tasks and clear anything overdue or blocked.",
  "Open Clients and review accounts that need follow-up.",
  "Use Settings to finalize default workflow behavior.",
];

const summary = [
  {
    label: "Clients needing attention",
    value: "4",
    note: "Accounts with stalled or pending follow-up.",
  },
  {
    label: "Tasks due today",
    value: "6",
    note: "Immediate work that should move before anything new.",
  },
  {
    label: "Blocked items",
    value: "2",
    note: "Work waiting on input, approval, or dependency clearance.",
  },
];

const systemStatus = [
  { label: "Shell", value: "Stable" },
  { label: "Routing", value: "Stable" },
  { label: "Workflow model", value: "In progress" },
];

export default function DashboardPage() {
  return (
    <div className="grid gap-6 xl:grid-cols-[1.7fr_1fr]">
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
          title="Summary Snapshot"
          description="Small context blocks to support quick decisions."
        >
          <div className="grid gap-3 sm:grid-cols-3 xl:grid-cols-1">
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
      </div>

      <section>
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
      </section>
    </div>
  );
}
