export default function StatCard({ label, value, change }) {
  return (
    <article className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5 shadow-sm">
      <p className="text-sm text-zinc-400">{label}</p>
      <p className="mt-3 text-3xl font-semibold text-white">{value}</p>
      <p className="mt-2 text-sm text-teal-300">{change}</p>
    </article>
  )
}