'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Prevent body scroll when mobile menu is open
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  const navItems = [
    { id: 'home', label: 'Beranda' },
    { id: 'about', label: 'Tentang Kami' },
    { id: 'services', label: 'Layanan' },
    { id: 'gallery', label: 'Galeri' },
    { id: 'contact', label: 'Kontak' },
  ]

  return (
    <>
      {/* Top Bar - Corporate Style */}
      <div className="hidden md:block bg-gray-100 text-xs py-2 border-b border-gray-200">
        <div className="container-custom flex justify-end gap-6 text-gray-600">
          <span>Karir</span>
          <span>Hubungan Investor</span>
          <span>Berita</span>
          <span className="font-bold text-black">Hubungi Kami: +62 21 1234 5678</span>
        </div>
      </div>

      <nav className="sticky top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-4">
              {/* Logo Block */}
              <div className="w-12 h-12 bg-yellow-400 flex items-center justify-center text-black font-black text-2xl">A</div>
              <div className="flex flex-col">
                <h1 className="text-xl font-black text-black uppercase leading-none tracking-tighter">
                  ALAT BERAT
                </h1>
                <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Professional</span>
              </div>
            </div>

            {/* Desktop Menu - Right Aligned & Clean */}
            <div className="hidden md:flex items-center h-full">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="h-full flex items-center px-5 text-gray-800 hover:text-black hover:bg-gray-50 font-bold text-xs uppercase tracking-widest transition-colors border-b-4 border-transparent hover:border-yellow-400"
                >
                  {item.label}
                </button>
              ))}
              <button className="ml-6 bg-black text-white text-xs font-bold uppercase px-6 py-3 hover:bg-yellow-400 hover:text-black transition-colors tracking-widest">
                Penawaran
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-black p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden bg-white border-t border-gray-100 ${
            isMobileMenuOpen ? 'max-h-screen' : 'max-h-0'
          } transition-all duration-300`}
        >
          <div className="container-custom py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left py-3 px-4 text-gray-800 hover:bg-yellow-50 font-bold uppercase text-sm border-l-4 border-transparent hover:border-yellow-400"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </>
  )
}
