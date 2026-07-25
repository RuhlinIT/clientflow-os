import { NavLink, Outlet } from 'react-router-dom'

export default function SettingsPage() {
  const tabClass = ({ isActive }) =>
    `rounded-lg px-3 py-2 text-sm transition ${
      isActive
        ? 'bg-teal-500/15 text-teal-300 ring-1 ring-teal-500/30'
        : 'text-zinc-300 hover:bg-zinc-800 hover:text-white'
    }`

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        <NavLink to="/settings" end className={tabClass}>
          Overview
        </NavLink>
        <NavLink to="/settings/profile" className={tabClass}>
          Profile
        </NavLink>
        <NavLink to="/settings/billing" className={tabClass}>
          Billing
        </NavLink>
      </div>

      <Outlet />
    </div>
  )
}