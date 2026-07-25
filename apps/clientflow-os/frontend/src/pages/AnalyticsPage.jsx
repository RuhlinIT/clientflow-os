import { NavLink, Outlet } from 'react-router-dom'

export default function AnalyticsPage() {
  const tabClass = ({ isActive }) =>
    `rounded-lg px-3 py-2 text-sm transition ${
      isActive
        ? 'bg-teal-500/15 text-teal-300 ring-1 ring-teal-500/30'
        : 'text-zinc-300 hover:bg-zinc-800 hover:text-white'
    }`

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        <NavLink to="/analytics" end className={tabClass}>
          Overview
        </NavLink>
        <NavLink to="/analytics/revenue" className={tabClass}>
          Revenue
        </NavLink>
        <NavLink to="/analytics/conversions" className={tabClass}>
          Conversions
        </NavLink>
      </div>

      <Outlet />
    </div>
  )
}