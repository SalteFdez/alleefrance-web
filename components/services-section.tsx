import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Briefcase, GraduationCap, Plane, MapPin } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Briefcase,
    title: "Visa Salarié",
    price: "250€",
    description: "Visa de trabajo para empleados. Tramitación completa con acompañamiento profesional.",
    features: ["Contrato de trabajo", "Autorización OFII", "Documentación completa"],
  },
  {
    icon: GraduationCap,
    title: "Visa Étudiant",
    price: "250€",
    description: "Estudia en universidades francesas. Asesoría completa para tu proceso académico.",
    features: ["Inscripción universitaria", "Campus France", "Permiso de trabajo parcial"],
  },
  {
    icon: Plane,
    title: "Visa Vacances Travel",
    price: "200€",
    description: "Visa de vacaciones y trabajo temporal. Experiencia internacional en Francia.",
    features: ["Trabajo temporal", "Turismo", "Validez 12 meses"],
  },
  {
    icon: MapPin,
    title: "Guía para Trabajar en París",
    price: "150€",
    description: "Orientación completa para encontrar empleo y establecerte en la capital francesa.",
    features: ["Búsqueda de empleo", "Alojamiento", "Integración cultural"],
  },
]

export function ServicesSection() {
  return (
    <section id="servicios" className="py-20 relative overflow-hidden" style={{ backgroundColor: "#1e3a8a" }}>
      {/* Curved Wave Top */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none">
        <svg
          className="relative block w-full h-16 rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M0,0 C300,100 900,100 1200,0 L1200,120 L0,120 Z" fill="white" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">SERVICIOS</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="p-6 bg-white hover:shadow-xl transition-shadow">
                <div className="space-y-4">
                  <div
                    className="w-14 h-14 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: "rgba(30, 58, 138, 0.1)" }}
                  >
                    <Icon className="w-7 h-7" style={{ color: "#1e3a8a" }} />
                  </div>

                  <h3 className="text-xl font-bold" style={{ color: "#002654" }}>
                    {service.title}
                  </h3>

                  <p className="text-2xl font-bold" style={{ color: "#ED2939" }}>
                    {service.price}
                  </p>

                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>

                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                        <span style={{ color: "#ED2939" }}>•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button
                    className="w-full text-white font-semibold hover:opacity-90"
                    style={{ backgroundColor: "#ED2939" }}
                    asChild
                  >
                    <Link href="/servicios">Ver más</Link>
                  </Button>
                </div>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="font-semibold tracking-wide text-base px-8 py-6 rounded-lg border-2 text-white hover:bg-white hover:text-blue-900 bg-transparent"
            style={{ borderColor: "white" }}
            asChild
          >
            <Link href="/servicios">VER TODOS LOS SERVICIOS</Link>
          </Button>
        </div>
      </div>

      {/* Curved Wave Bottom */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
        <svg
          className="relative block w-full h-16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M0,0 C300,100 900,100 1200,0 L1200,120 L0,120 Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}
