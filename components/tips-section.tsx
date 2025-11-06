import { Card } from "@/components/ui/card"
import { FileCheck, Clock, Languages, Banknote } from "lucide-react"

const tips = [
  {
    icon: FileCheck,
    title: "Documentación Completa",
    description: "Asegurate de tener todos los documentos traducidos y apostillados antes de iniciar el trámite.",
  },
  {
    icon: Clock,
    title: "Planificá con Tiempo",
    description: "Los procesos migratorios pueden tomar de 2 a 6 meses. Iniciá tu trámite con anticipación.",
  },
  {
    icon: Languages,
    title: "Nivel de Francés",
    description: "Algunas visas requieren certificación de idioma. Preparate con cursos y exámenes oficiales.",
  },
  {
    icon: Banknote,
    title: "Recursos Económicos",
    description: "Demostrá solvencia económica suficiente para tu estadía en Francia según el tipo de visa.",
  },
]

export function TipsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ color: "#002654" }}>
            Consejos para tu Proceso Migratorio
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Tips esenciales para que tu trámite sea exitoso</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tips.map((tip, index) => {
            const Icon = tip.icon
            return (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-lg transition-all duration-300"
                style={{ backgroundColor: "white" }}
              >
                <div className="space-y-4">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto"
                    style={{ backgroundColor: index % 2 === 0 ? "rgba(237, 41, 57, 0.1)" : "rgba(0, 38, 84, 0.1)" }}
                  >
                    <Icon className="w-8 h-8" style={{ color: index % 2 === 0 ? "#ED2939" : "#002654" }} />
                  </div>

                  <h3 className="text-lg font-bold" style={{ color: "#002654" }}>
                    {tip.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed">{tip.description}</p>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
