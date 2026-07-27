export default function SummarySnapshot({ items }) {
  return (
    <div className="grid gap-3 sm:grid-cols-3 xl:grid-cols-1">
      {items.map((item) => (
        <div
          key={item.label}
          className="rounded-xl border border-zinc-800 bg-zinc-950/60 px-4 py-4 min-h-[132px]"
        >
          <p className="text-[11px] uppercase tracking-[0.18em] text-zinc-500">
            {item.label}
          </p>

          <p className="mt-2 text-2xl font-semibold tracking-tight tabular-nums text-white">
            {item.value}
          </p>

          <p className="mt-2 text-sm leading-6 text-zinc-400">
            {item.note}
          </p>
        </div>
      ))}
    </div>
  );
}