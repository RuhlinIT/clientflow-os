import { Navigate, Routes, Route } from 'react-router-dom'
import AppShellLayout from './layouts/AppShellLayout'
import ProtectedRoute from './routes/ProtectedRoute'

import DashboardPage from './pages/DashboardPage'
import TasksPage from './pages/TasksPage'
import ClientsPage from './pages/ClientsPage'
import SettingsPage from './pages/SettingsPage'
import LoginPage from './pages/LoginPage'
import NotFoundPage from './pages/NotFoundPage'

import SettingsOverviewPage from './pages/settings/SettingsOverviewPage'
import ProfileSettingsPage from './pages/settings/ProfileSettingsPage'
import BillingSettingsPage from './pages/settings/BillingSettingsPage'

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />

      <Route element={<ProtectedRoute />}>
        <Route element={<AppShellLayout />}>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/clients" element={<ClientsPage />} />
          <Route path="/tasks" element={<TasksPage />} />

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