"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, ChevronDown } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isCustomerServiceOpen, setIsCustomerServiceOpen] = useState(false)

  const navItems = [
    { href: "/multicookers", label: "Multicookers" },
    { href: "/reviews", label: "Reviews" },
  ]

  const customerServiceItems = [
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
    { href: "/terms", label: "Terms & Conditions" },
    { href: "/privacy", label: "Privacy & Policy" },
    { href: "/disclaimer", label: "Disclaimer" },
  ]

  return (
    <header
      className="sticky top-0 z-50"
      style={{
        backgroundImage:
          "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-4bfJfqirdCtsX9IM8AJLgR0Km28TYy.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black/50" />

      <nav
        className="relative mx-auto px-4 sm:px-6 lg:px-8 py-6"
        style={{
          backgroundImage: "url('/wooden-table-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60 rounded-none" />

        <div className="flex items-center justify-between relative z-10">
          {/* Logo and Brand Section */}
          <div className="flex items-center gap-4 group">
            <Link href="/" className="flex flex-col transition-transform group-hover:scale-105">
              <span className="text-2xl font-bold text-white">TheSmartChefs</span>
              <span className="text-sm text-white/90">Premium Cooking</span>
            </Link>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex flex-1 items-center justify-center">
            <div className="flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  scroll={true}
                  className="text-white hover:text-white/80 transition-colors font-medium"
                >
                  {item.label}
                </Link>
              ))}

              <Link
                href="/recipes"
                scroll={true}
                className="text-white hover:text-white/80 transition-colors font-medium"
              >
                Recipes
              </Link>

              <div
                className="relative"
                onMouseEnter={() => setIsCustomerServiceOpen(true)}
                onMouseLeave={() => setIsCustomerServiceOpen(false)}
              >
                <button className="text-white hover:text-white/80 transition-colors font-medium flex items-center gap-1 py-2">
                  Customer Service
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${isCustomerServiceOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {isCustomerServiceOpen && (
                  <div className="absolute top-full left-0 pt-1 w-64 z-50">
                    <div
                      className="rounded-lg shadow-xl py-3 border border-gray-200 relative overflow-hidden"
                      style={{
                        backgroundImage: "url('/kitchen-utensils-pattern.png')",
                        backgroundSize: "200px 200px",
                        backgroundRepeat: "repeat",
                      }}
                    >
                      <div className="absolute inset-0 bg-white/30" />
                      {customerServiceItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          scroll={true}
                          className="relative block px-6 py-3 text-gray-900 hover:bg-white/40 hover:text-gray-900 transition-colors text-base font-semibold"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button className="md:hidden p-2 text-white hover:text-white/80 transition-colors">
                <Menu size={24} />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    scroll={true}
                    className="text-lg font-medium hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}

                <div className="border-t pt-4 mt-2">
                  <p className="text-sm font-semibold text-gray-500 mb-2">Customer Service</p>
                  {customerServiceItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      scroll={true}
                      className="block text-base font-medium hover:text-primary transition-colors py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}
