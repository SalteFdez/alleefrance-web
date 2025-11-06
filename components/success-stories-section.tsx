import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const successStories = [
  {
    name: "María González",
    visa: "VISA SALARIÉ",
    image: "/happy-woman-holding-french-visa-document.jpg",
    year: "2024",
  },
  {
    name: "Carlos Rodríguez",
    visa: "AUTORIZACIÓN DE TRABAJO",
    image: "/man-celebrating-with-french-work-permit.jpg",
    year: "2024",
  },
  {
    name: "Ana Martínez",
    visa: "TITRE DE SÉJOUR",
    image: "/woman-showing-french-residence-permit.jpg",
    year: "2023",
  },
  {
    name: "Luis Fernández",
    visa: "VISA ÉTUDIANT",
    image: "/student-with-french-student-visa.jpg",
    year: "2024",
  },
]

export function SuccessStoriesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ color: "#002654" }}>
            Historias reales, resultados comprobados
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Más de 100 clientes han logrado su sueño de vivir en Francia con nuestra asesoría
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {successStories.map((story, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 border-2"
              style={{ borderColor: "#002654" }}
            >
              <div className="relative aspect-square">
                <img src={story.image || "/placeholder.svg"} alt={story.name} className="w-full h-full object-cover" />
                <Badge
                  className="absolute top-4 left-4 text-white font-bold tracking-wide px-4 py-2"
                  style={{ backgroundColor: "#ED2939" }}
                >
                  CASO EXITOSO
                </Badge>
              </div>
              <div className="p-6 space-y-2">
                <h3 className="text-xl font-bold" style={{ color: "#002654" }}>
                  {story.name}
                </h3>
                <p className="font-semibold" style={{ color: "#ED2939" }}>
                  {story.visa}
                </p>
                <p className="text-sm text-gray-600">{story.year}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
