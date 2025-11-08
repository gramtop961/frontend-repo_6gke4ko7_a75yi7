import React from 'react'

export default function Footer() {
  return (
    <footer className="mt-10 border-t bg-white/60 backdrop-blur supports-[backdrop-filter]:bg-white/40">
      <div className="mx-auto w-full max-w-6xl px-4 py-6 text-center text-sm text-gray-600">
        <p>
          HRIS Payroll Boilerplate • Next.js, Express, Sequelize, MySQL, Redis, FCM, Nodemailer • Docker ready
        </p>
        <p className="mt-1 text-xs text-gray-500">Sample logic only — consult tax specialist for production payroll rules.</p>
      </div>
    </footer>
  )
}
