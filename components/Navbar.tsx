
'use client'
import { useState } from 'react'
import clsx from 'clsx'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
      <div className="container flex items-center justify-between py-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pm-petrol to-pm-aqua" />
          <span className="font-display font-bold text-pm-petrol">ProcMind</span>
        </div>
        <nav className={clsx('md:flex items-center gap-6 font-semibold text-gray-800', open ? 'block' : 'hidden md:block')}>
          <a href="#about">Qué es ProcMind</a>
          <a href="#mvv">Misión y valores</a>
          <a href="#story">Historia</a>
          <a href="#training">Capacitación</a>
          <a href="#contact" className="hidden md:inline-block btn btn-primary">Asesoría</a>
        </nav>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Abrir menú">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M3 6h18M3 12h18M3 18h18" stroke="#0F3B43" strokeWidth="2" strokeLinecap="round"/></svg>
        </button>
      </div>
    </header>
  )
}
