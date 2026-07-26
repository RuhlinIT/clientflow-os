export default function SectionCard({ title, children }) {
  return (
    <section className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-medium text-white">{title}</h3>
      </div>
      {children}
    </section>
  )
}