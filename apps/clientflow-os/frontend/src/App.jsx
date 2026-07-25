import { Routes, Route } from 'react-router-dom'
import DashboardLayout from './layouts/DashboardLayout'
import ProtectedRoute from './routes/ProtectedRoute'

import DashboardPage from './pages/DashboardPage'
import LeadsPage from './pages/LeadsPage'
import ProjectsPage from './pages/ProjectsPage'
import TasksPage from './pages/TasksPage'
import ClientsPage from './pages/ClientsPage'
import AnalyticsPage from './pages/AnalyticsPage'
import SettingsPage from './pages/SettingsPage'
import LoginPage from './pages/LoginPage'
import NotFoundPage from './pages/NotFoundPage'

import AnalyticsOverviewPage from './pages/analytics/AnalyticsOverviewPage'
import RevenueAnalyticsPage from './pages/analytics/RevenueAnalyticsPage'
import ConversionAnalyticsPage from './pages/analytics/ConversionAnalyticsPage'

import SettingsOverviewPage from './pages/settings/SettingsOverviewPage'
import ProfileSettingsPage from './pages/settings/ProfileSettingsPage'
import BillingSettingsPage from './pages/settings/BillingSettingsPage'

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />

      <Route element={<ProtectedRoute />}>
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/leads" element={<LeadsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="/clients" element={<ClientsPage />} />

          <Route path="/analytics" element={<AnalyticsPage />}>
            <Route index element={<AnalyticsOverviewPage />} />
            <Route path="revenue" element={<RevenueAnalyticsPage />} />
            <Route path="conversions" element={<ConversionAnalyticsPage />} />
          </Route>

          <Route path="/settings" element={<SettingsPage />}>
            <Route index element={<SettingsOverviewPage />} />
            <Route path="profile" element={<ProfileSettingsPage />} />
            <Route path="billing" element={<BillingSettingsPage />} />
          </Route>
        </Route>
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}