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
          <p className="mt-2 text-sm text-zinc-400">
            Lean operating surface for client delivery, task flow, and system
            setup.
          </p>
        </div>

        <nav aria-label="Primary">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.label}>
                <NavLink
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) =>
                    `flex w-full items-center rounded-xl px-3 py-2.5 text-sm transition ${
                      isActive
                        ? "bg-teal-500/15 text-teal-300 ring-1 ring-teal-500/30"
                        : "text-zinc-300 hover:bg-zinc-800 hover:text-white"
                    }`
                  }
                >
                  <span>{item.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-auto rounded-2xl border border-zinc-800 bg-zinc-950/70 p-4">
          <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">
            Build Context
          </p>
          <p className="mt-2 text-sm text-zinc-200">
            Shell locked. Routes narrowed. Workflow surfaces next.
          </p>
        </div>
      </div>
    </aside>
  );
}
