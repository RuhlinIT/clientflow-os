export default function EnvironmentStatus({ items }) {
  return (
    <div className="space-y-2">
      {items.map((item) => (
        <div
          key={item.label}
          className="flex items-center justify-between rounded-lg border border-zinc-800 bg-zinc-950/40 px-3 py-2"
        >
          <span className="text-sm text-zinc-500">{item.label}</span>
          <span className="text-sm font-medium text-zinc-300">{item.value}</span>
        </div>
      ))}
    </div>
  );
}