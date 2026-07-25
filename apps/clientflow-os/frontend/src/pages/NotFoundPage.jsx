import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-zinc-950 px-4 py-10 text-zinc-100 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-xl rounded-2xl border border-zinc-800 bg-zinc-900 p-8">
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">404</p>
        <h1 className="mt-3 text-3xl font-semibold text-white">Page not found</h1>
        <p className="mt-3 text-sm text-zinc-300">
          The route you requested does not exist yet or may have been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex rounded-xl bg-teal-500 px-4 py-2 text-sm font-medium text-zinc-950 transition hover:bg-teal-400"
          >
            Return to dashboard
          </Link>
        </div>
      </div>
    </div>
  )
}