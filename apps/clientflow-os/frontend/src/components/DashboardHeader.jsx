import { useLocation } from 'react-router-dom'

const pageMeta = {
  '/': {
    eyebrow: 'Friday build session',
    title: 'Dashboard Overview',
  },
  '/leads': {
    eyebrow: 'Client pipeline',
    title: 'Leads',
  },
  '/projects': {
    eyebrow: 'Delivery workspace',
    title: 'Projects',
  },
  '/tasks': {
    eyebrow: 'Execution board',
    title: 'Tasks',
  },
  '/clients': {
    eyebrow: 'Relationship management',
    title: 'Clients',
  },
  '/settings': {
    eyebrow: 'Workspace configuration',
    title: 'Settings',
  },
  '/settings/profile': {
    eyebrow: 'Workspace configuration',
    title: 'Profile Settings',
  },
  '/settings/billing': {
    eyebrow: 'Workspace configuration',
    title: 'Billing Settings',
  },
  '/analytics': {
    eyebrow: 'Performance reporting',
    title: 'Analytics',
  },
  '/analytics/revenue': {
    eyebrow: 'Performance reporting',
    title: 'Revenue Analytics',
  },
  '/analytics/conversions': {
    eyebrow: 'Performance reporting',
    title: 'Conversion Analytics',
  },
}

export default function DashboardHeader() {
  const location = useLocation()
  const meta = pageMeta[location.pathname] ?? {
    eyebrow: 'ClientFlow OS',
    title: 'Workspace',
  }

  return (
    <header className="border-b border-zinc-800 bg-zinc-950/80 px-4 py-4 backdrop-blur sm:px-6 lg:px-8">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm text-zinc-400">{meta.eyebrow}</p>
          <h2 className="text-2xl font-semibold text-white">{meta.title}</h2>
        </div>

        <div className="flex items-center gap-3">
          <div className="rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm text-zinc-300">
            Local stack online
          </div>
          <button className="rounded-xl bg-teal-500 px-4 py-2 text-sm font-medium text-zinc-950 transition hover:bg-teal-400">
            New Lead
          </button>
        </div>
      </div>
    </header>
  )
}