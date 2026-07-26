import { NavLink } from "react-router-dom";

const navItems = [
  { label: "Dashboard", to: "/" },
  { label: "Clients", to: "/clients" },
  { label: "Tasks", to: "/tasks" },
  { label: "Settings", to: "/settings" },
];

export default function SidebarNav() {
  return (
    <aside className="border-b border-zinc-800 bg-zinc-900/80 lg:border-b-0 lg:border-r">
      <div className="flex h-full flex-col px-4 py-6">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">
            ClientFlow OS
          </p>
          <h1 className="mt-2 text-2xl font-semibold text-white">Workspace</h1>
          <p className="mt-2 text-sm text-zinc-400">
            Self-hosted service business operating system.
          </p>
        </div>

        <nav className="space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-sm transition ${
                  isActive
                    ? "bg-teal-500/15 text-teal-300 ring-1 ring-teal-500/30"
                    : "text-zinc-300 hover:bg-zinc-800 hover:text-white"
                }`
              }
            >
              <span>{item.label}</span>
              <span className="h-2.5 w-2.5 rounded-full bg-current opacity-70" />
            </NavLink>
          ))}
        </nav>

        <div className="mt-auto rounded-2xl border border-zinc-800 bg-zinc-950/70 p-4">
          <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">
            Environment
          </p>
          <p className="mt-2 text-sm text-zinc-200">
            Docker + React + Tailwind + pnpm
          </p>
        </div>
      </div>
    </aside>
  );
}
