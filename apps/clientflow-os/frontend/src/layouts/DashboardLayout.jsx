import { Outlet } from 'react-router-dom'
import DashboardSidebar from '../components/DashboardSidebar'
import DashboardHeader from '../components/DashboardHeader'

export default function DashboardLayout() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="grid min-h-screen lg:grid-cols-[232px_1fr]">
        <DashboardSidebar />

        <div className="flex min-h-screen flex-col">
          <DashboardHeader />
          <main className="flex-1 px-4 py-6 sm:px-6 lg:px-8">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  )
}