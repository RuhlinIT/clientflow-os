import StatCard from '../components/StatCard'
import Panel from '../components/Panel'

const stats = [
  { label: 'Open Leads', value: '12', change: '+3 this week' },
  { label: 'Active Projects', value: '7', change: '+1 this week' },
  { label: 'Pending Tasks', value: '23', change: '5 due today' },
  { label: 'Unread Updates', value: '5', change: '2 new messages' },
]

const activity = [
  'New inquiry submitted for wedding DJ package.',
  'Real estate media project moved to editing.',
  'Client portal access granted for a new customer.',
  'Homepage dashboard shell deployed locally.',
]

const nextActions = [
  'Create backend /health endpoint.',
  'Add routing and protected layout.',
  'Design lead capture and client tables.',
]

const pipeline = [
  { stage: 'New Leads', count: 12 },
  { stage: 'Qualified', count: 6 },
  { stage: 'Proposal Sent', count: 4 },
  { stage: 'Booked', count: 2 },
]

const tasks = [
  'Polish dashboard spacing and card hierarchy.',
  'Keep shared UI local until monorepo packaging is stable.',
  'Create Leads and Projects placeholder pages.',
]

const systemStatus = [
  { label: 'Docker', value: 'Online' },
  { label: 'Frontend', value: 'Running' },
  { label: 'Tailwind', value: 'Active' },
  { label: 'Routing', value: 'In Progress' },
]

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <StatCard
            key={stat.label}
            label={stat.label}
            value={stat.value}
            change={stat.change}
          />
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.5fr_1fr]">
        <Panel title="Recent Activity">
          <ul className="space-y-3 text-sm text-zinc-300">
            {activity.map((item) => (
              <li
                key={item}
                className="rounded-xl border border-zinc-800 bg-zinc-950/60 px-4 py-3"
              >
                {item}
              </li>
            ))}
          </ul>
        </Panel>

        <Panel title="Next Actions">
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
        </Panel>
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        <Panel title="Pipeline Summary">
          <div className="space-y-3">
            {pipeline.map((item) => (
              <div
                key={item.stage}
                className="flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-950/60 px-4 py-3 text-sm"
              >
                <span className="text-zinc-300">{item.stage}</span>
                <span className="font-medium text-white">{item.count}</span>
              </div>
            ))}
          </div>
        </Panel>

        <Panel title="Upcoming Tasks">
          <ul className="space-y-3 text-sm text-zinc-300">
            {tasks.map((item) => (
              <li
                key={item}
                className="rounded-xl border border-zinc-800 bg-zinc-950/60 px-4 py-3"
              >
                {item}
              </li>
            ))}
          </ul>
        </Panel>

        <Panel title="System Status">
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
        </Panel>
      </section>
    </div>
  )
}