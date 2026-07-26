import { Outlet } from 'react-router-dom'
import SidebarNav from '../components/SidebarNav'
import Topbar from '../components/Topbar'

export default function AppShellLayout() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="grid min-h-screen lg:grid-cols-[232px_1fr]">
        <SidebarNav />

        <div className="flex min-h-screen flex-col">
          <Topbar />
          <main className="flex-1 px-4 py-6 sm:px-6 lg:px-8">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  )
}