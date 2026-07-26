import SectionCard from '../components/SectionCard'

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-zinc-950 px-4 py-10 text-zinc-100 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-xl">
        <SectionCard title="Login">
          <p className="text-sm text-zinc-300">
            Authentication UI will go here. For now, this is the placeholder login route for protected pages.
          </p>
        </SectionCard>
      </div>
    </div>
  )
}