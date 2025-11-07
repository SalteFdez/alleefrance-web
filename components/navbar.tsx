"use client"

import { useState } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  const navLinks = [
    { href: "/#inicio", label: "Inicio" },
    { href: "/#nosotros", label: "Nosotros" },
  ]

  const serviceLinks = [
    { href: "/servicios/visa-salarie", label: "Visa Salarié" },
    { href: "/servicios/visa-saisonier", label: "Visa Saisonier" },
    { href: "/servicios/visa-etudiant", label: "Visa Étudiant" },
    { href: "/servicios", label: "Ver Todos los Servicios", featured: true },
  ]

  const otherLinks = [
    { href: "/#blog", label: "Blog" },
    { href: "/#guia-visas", label: "Guía de Visas" },
    { href: "/#faq", label: "FAQ" },
    { href: "/#contacto", label: "Contacto" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Vtix0eTofgeNjrQ4fneJ7FLj7BQyUU.png"
              alt="Allée France Logo"
              width={120}
              height={60}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors font-medium"
                style={{ color: "#002654" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#ED2939")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#002654")}
              >
                {link.label}
              </Link>
            ))}

            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                className="flex items-center gap-1 transition-colors font-medium"
                style={{ color: "#002654" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#ED2939")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#002654")}
              >
                Servicios
                <ChevronDown className="w-4 h-4" />
              </button>

              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-2">
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2 transition-colors font-medium"
                      style={{
                        color: link.featured ? "#ED2939" : "#002654",
                        fontWeight: link.featured ? "700" : "500",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "rgba(237, 41, 57, 0.1)"
                        e.currentTarget.style.color = "#ED2939"
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "transparent"
                        e.currentTarget.style.color = link.featured ? "#ED2939" : "#002654"
                      }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {otherLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors font-medium"
                style={{ color: "#002654" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#ED2939")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#002654")}
              >
                {link.label}
              </Link>
            ))}

            <Button
              asChild
              className="text-white hover:opacity-90"
              style={{ backgroundColor: "#0055A4" }}
            >
              <Link href="/working-holiday">Working Holiday</Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="font-medium border-2 bg-transparent"
              style={{ borderColor: "#002654", color: "#002654" }}
            >
              <Link href="/pagos">Pagar Servicio</Link>
            </Button>

            <Button asChild className="text-white hover:opacity-90" style={{ backgroundColor: "#ED2939" }}>
              <a href="https://wa.me/33601526171" target="_blank" rel="noopener noreferrer">
                Consulta Gratis
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
            style={{ color: "#002654" }}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="transition-colors font-medium py-2"
                  style={{ color: "#002654" }}
                >
                  {link.label}
                </Link>
              ))}

              <div className="py-2">
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="flex items-center justify-between w-full font-medium"
                  style={{ color: "#002654" }}
                >
                  Servicios
                  <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
                </button>
                {isServicesOpen && (
                  <div className="mt-2 ml-4 flex flex-col gap-2">
                    {serviceLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="py-2 text-gray-600 hover:text-gray-900"
                        style={{
                          color: link.featured ? "#ED2939" : "#002654",
                          fontWeight: link.featured ? "700" : "500",
                        }}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {otherLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="transition-colors font-medium py-2"
                  style={{ color: "#002654" }}
                >
                  {link.label}
                </Link>
              ))}

              <Button
                asChild
                className="text-white w-full"
                style={{ backgroundColor: "#0055A4" }}
              >
                <Link href="/working-holiday" onClick={() => setIsOpen(false)}>
                  Working Holiday
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="w-full border-2 bg-transparent"
                style={{ borderColor: "#002654", color: "#002654" }}
              >
                <Link href="/pagos" onClick={() => setIsOpen(false)}>
                  Pagar Servicio
                </Link>
              </Button>

              <Button asChild className="text-white w-full" style={{ backgroundColor: "#ED2939" }}>
                <a
                  href="https://wa.me/33601526171"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                >
                  Consulta Gratis
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
