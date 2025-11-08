import React from 'react'
import { Shield, Users, Clock, DollarSign } from 'lucide-react'

const features = [
  {
    title: 'Payroll & Finance',
    description: 'Sample calculations for gross, allowances, deductions, and simulated disbursements.',
    icon: DollarSign,
  },
  {
    title: 'Attendance & Leave',
    description: 'Clock-in/out flows, leave and overtime requests, with Redis caching hooks.',
    icon: Clock,
  },
  {
    title: 'Employees & Org',
    description: 'CRUD for employees, branches, roles, permissions, and org chart endpoints.',
    icon: Users,
  },
  {
    title: 'Security & Auth',
    description: 'JWT auth with RBAC middleware, validation, CORS & rate limiting.',
    icon: Shield,
  },
]

export default function FeatureGrid() {
  return (
    <section className="grid gap-4 sm:gap-6 md:grid-cols-2 xl:grid-cols-4">
      {features.map((f) => (
        <div key={f.title} className="rounded-xl border bg-white p-5 shadow-sm">
          <div className="flex items-start gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
              <f.icon className="h-5 w-5" />
            </span>
            <div>
              <h3 className="font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-1 text-sm text-gray-600">{f.description}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}
