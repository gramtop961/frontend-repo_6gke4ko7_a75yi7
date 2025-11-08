import React from 'react'
import Hero from './components/Hero'
import FeatureGrid from './components/FeatureGrid'
import StatsOverview from './components/StatsOverview'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 text-gray-900">
      <header className="mx-auto w-full max-w-6xl px-4 pt-8 pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg bg-blue-600 text-white grid place-items-center font-bold">HR</div>
            <span className="font-semibold tracking-tight">HRIS Payroll Starter</span>
          </div>
          <nav className="hidden sm:flex items-center gap-4 text-sm text-gray-600">
            <a href="#features" className="hover:text-gray-900">Features</a>
            <a href="#stats" className="hover:text-gray-900">Stats</a>
            <a href="#get-started" className="hover:text-gray-900">Get Started</a>
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl px-4 space-y-8 pb-12">
        <Hero />

        <section id="features" className="mt-8">
          <h2 className="mb-3 text-xl font-semibold tracking-tight">Core Modules</h2>
          <FeatureGrid />
        </section>

        <section id="stats" className="mt-8">
          <h2 className="mb-3 text-xl font-semibold tracking-tight">Snapshot</h2>
          <StatsOverview />
        </section>

        <section id="get-started" className="mt-8">
          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold">Spin up the full stack</h3>
            <p className="mt-2 text-sm text-gray-600">
              This UI is the front door for your HRIS Payroll boilerplate. The backend API, web admin, and mobile app
              are part of the complete starter. Use Docker to launch MySQL, Redis, and services; plug in SMTP and Firebase
              keys to enable notifications and email.
            </p>
            <ul className="mt-4 list-disc pl-5 text-sm text-gray-700 space-y-1">
              <li>JWT auth with refresh tokens</li>
              <li>Sequelize models for employees, payroll, attendance</li>
              <li>Redis caching hooks and rate limiting</li>
              <li>Swagger docs and example tests</li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
