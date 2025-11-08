import React from 'react'

const stats = [
  { label: 'Employees', value: '128' },
  { label: 'Branches', value: '6' },
  { label: 'Active Payroll Runs', value: '2' },
  { label: 'Today\'s Attendance', value: '93%' },
]

export default function StatsOverview() {
  return (
    <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((s) => (
        <div key={s.label} className="rounded-xl border bg-white p-5 shadow-sm">
          <p className="text-xs uppercase tracking-wide text-gray-500">{s.label}</p>
          <p className="mt-2 text-2xl font-bold text-gray-900">{s.value}</p>
        </div>
      ))}
    </section>
  )
}
