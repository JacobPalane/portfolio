'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-primary text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="font-bold text-xl hover:text-accent transition">
            JP
          </Link>
          
          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <ul className={`hidden md:flex gap-8 items-center ${isOpen ? 'flex' : 'hidden'} flex-col md:flex-row absolute md:static top-16 left-0 right-0 bg-primary md:bg-transparent p-4 md:p-0`}>
            <li><Link href="/" className="hover:text-accent transition">Home</Link></li>
            <li><Link href="/about" className="hover:text-accent transition">About</Link></li>
            <li><Link href="/research" className="hover:text-accent transition">Research</Link></li>
            <li><Link href="/skills" className="hover:text-accent transition">Skills</Link></li>
            <li><Link href="/projects" className="hover:text-accent transition">Projects</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
