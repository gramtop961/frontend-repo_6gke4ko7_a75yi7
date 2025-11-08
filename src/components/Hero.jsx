import React from 'react'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      <div className="h-[460px] w-full">
        <Spline
          scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/90 via-white/40 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
        <div className="max-w-3xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
            HRIS Payroll System Starter
          </h1>
          <p className="mt-2 text-sm sm:text-base text-gray-700">
            Modular foundation for payroll, attendance, leave, and employee management — ready for APIs, web, and mobile.
          </p>
        </div>
      </div>
    </section>
  )
}
