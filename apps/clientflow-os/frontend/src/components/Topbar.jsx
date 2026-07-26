import { useLocation } from "react-router-dom";

const pageMeta = {
  "/": {
    eyebrow: "Focused work queue",
    title: "Dashboard",
    description:
      "See active work, priority items, and the next action to take.",
  },
  "/clients": {
    eyebrow: "Relationship context",
    title: "Clients",
    description: "Track accounts, status, and where attention is needed.",
  },
  "/tasks": {
    eyebrow: "Execution workflow",
    title: "Tasks",
    description: "Manage due work, ownership, and delivery momentum.",
  },
  "/settings": {
    eyebrow: "Workspace configuration",
    title: "Settings",
    description: "Adjust system preferences and operating defaults.",
  },
  "/settings/profile": {
    eyebrow: "Workspace configuration",
    title: "Profile",
    description: "Manage identity, profile details, and workspace presence.",
  },
  "/settings/billing": {
    eyebrow: "Workspace configuration",
    title: "Billing",
    description: "Review billing details and subscription-related settings.",
  },
};

export default function Topbar() {
  const location = useLocation();
  
  const meta = pageMeta[location.pathname] ?? {
    eyebrow: "ClientFlow OS",
    title: "Workspace",
    description: "Lean operating surface for client delivery and task flow.",
  };

  return (
    <header className="border-b border-zinc-800 bg-zinc-950/80 px-4 py-4 backdrop-blur sm:px-6 lg:px-8">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">{meta.eyebrow}</p>
          <h1 className="mt-1 text-2xl font-semibold text-white">{meta.title}</h1>
          <p className="mt-2 max-w-2xl text-sm text-zinc-400">{meta.description}</p>
        </div>

        <div className="flex items-center gap-3">
          <div className="rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm text-zinc-300">
            Build in progress
          </div>
        </div>
      </div>
    </header>
  );
}
