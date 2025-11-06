import { Instagram, MessageCircle, ExternalLink } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="py-12" style={{ backgroundColor: "#002654" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Vtix0eTofgeNjrQ4fneJ7FLj7BQyUU.png"
                alt="Allée France Logo"
                width={140}
                height={70}
                className="h-14 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Especialistas en asesoría migratoria y tramitación de visas para Francia. Tu sueño francés, nuestro
              compromiso.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-bold text-white text-lg">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="/#servicios" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Servicios
                </a>
              </li>
              <li>
                <a href="/#casos-exitosos" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Casos Exitosos
                </a>
              </li>
              <li>
                <a href="/#guia-visas" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Guía de Visas
                </a>
              </li>
              <li>
                <a href="/#faq" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Preguntas Frecuentes
                </a>
              </li>
              <li>
                <a href="/pagos" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Pagar Servicio
                </a>
              </li>
              <li>
                <a href="/#contacto" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contact and Social */}
          <div className="space-y-4">
            <h3 className="font-bold text-white text-lg">Contacto</h3>
            <div className="space-y-3">
              <p className="text-gray-300 text-sm">📞 +33 6 01 52 61 71</p>
              <p className="text-gray-300 text-sm">📍 Lyon, Francia</p>
              <div className="flex gap-4 pt-2">
                <a
                  href="https://instagram.com/alleefrancelyon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white hover:opacity-80 transition-opacity"
                  style={{ backgroundColor: "#ED2939" }}
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://wa.me/33601526171"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white hover:opacity-80 transition-opacity"
                  style={{ backgroundColor: "#ED2939" }}
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
                <a
                  href="https://alleefrancelyon.taplink.ws"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white hover:opacity-80 transition-opacity"
                  style={{ backgroundColor: "#ED2939" }}
                  aria-label="Taplink"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Allée France. Todos los derechos reservados.
            </p>
            <p className="text-gray-400 text-sm">Asesoría migratoria profesional para Francia</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
