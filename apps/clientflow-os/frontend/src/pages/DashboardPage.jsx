import SectionCard from "../components/SectionCard";

const workQueue = [
  {
    title: "Review tasks due today across active client work.",
    context: "Tasks",
    status: "Now",
  },
  {
    title: "Follow up on accounts waiting for a response.",
    context: "Clients",
    status: "Now",
  },
  {
    title: "Clear blocked work before adding anything new.",
    context: "Tasks",
    status: "Next",
  },
  {
    title: "Finalize workflow defaults for intake and delivery.",
    context: "Settings",
    status: "Later",
  },
];

const nextActions = [
  "Open Tasks and clear overdue or blocked work first.",
  "Open Clients and review accounts that need follow-up.",
  "Open Settings and finish baseline workflow configuration.",
];

const summarySnapshot = [
  {
    label: "Clients needing attention",
    value: "4",
    note: "Accounts with stalled communication or pending follow-up.",
  },
  {
    label: "Tasks due today",
    value: "6",
    note: "Immediate work that should move before anything new.",
  },
  {
    label: "Blocked items",
    value: "2",
    note: "Work waiting on approval, input, or dependency clearance.",
  },
];

const environment = [
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
          description="Choose a lane, then move into the route."
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
          description="Small context blocks that support quick decisions."
        >
          <div className="grid gap-3 sm:grid-cols-3 xl:grid-cols-1">
            {summarySnapshot.map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-zinc-800 bg-zinc-950/60 px-4 py-4"
              >
                <p className="text-xs uppercase tracking-wide text-zinc-500">
                  {item.label}
                </p>
                <p className="mt-1 text-xl font-semibold text-white">
                  {item.value}
                </p>
                <p className="mt-2 text-sm text-zinc-400">{item.note}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          title="Environment"
          description="Light build context for the current workspace."
        >
          <div className="space-y-2">
            {environment.map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between rounded-lg border border-zinc-800 bg-zinc-950/40 px-3 py-2 text-sm"
              >
                <span className="text-zinc-400">{item.label}</span>
                <span className="text-zinc-300">{item.value}</span>
              </div>
            ))}
          </div>
        </SectionCard>
      </div>
    </div>
  );
}