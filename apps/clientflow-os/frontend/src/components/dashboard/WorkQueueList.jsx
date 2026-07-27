import { Link } from "react-router-dom";

export default function WorkQueueList({ items }) {
  return (
    <div className="space-y-3">
      {items.map((item) => (
        <Link
          key={item.title}
          to={item.to}
          className="group flex items-start justify-between gap-4 rounded-xl border border-zinc-800 bg-zinc-950/60 px-4 py-3 transition hover:border-zinc-700 hover:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-teal-500/40"
        >
          <div className="space-y-1">
            <p className="text-sm font-medium text-white">{item.title}</p>
            <p className="text-xs uppercase tracking-wide text-zinc-500">
              {item.context}
            </p>
          </div>

          <span className="shrink-0 rounded-full border border-zinc-700 px-2.5 py-1 text-xs text-teal-300 transition group-hover:border-teal-500/40 group-hover:text-teal-200">
            {item.status}
          </span>
        </Link>
      ))}
    </div>
  );
}