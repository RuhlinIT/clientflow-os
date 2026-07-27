import { Link } from "react-router-dom";

export default function NextActionsList({ items }) {
  return (
    <div className="space-y-3">
      {items.map((item) => (
        <Link
          key={item.label}
          to={item.to}
          className="group block rounded-xl border border-zinc-800 bg-zinc-950/60 px-4 py-3 transition hover:border-zinc-700 hover:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-teal-500/40"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-white">{item.label}</p>
              <p className="mt-1 text-sm leading-6 text-zinc-400">
                {item.description}
              </p>
            </div>

            <span className="mt-0.5 text-sm text-zinc-500 transition group-hover:text-teal-300">
              →
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}