import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Calendar, ArrowRight, Clock, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export const metadata: Metadata = {
  title: "Blog - Guías y Recursos sobre Migración a Francia | Allée France",
  description:
    "Artículos, guías completas y consejos actualizados sobre visas, migración, trabajo y vida en Francia. Información confiable para tu proceso migratorio.",
  keywords:
    "blog migración francia, guía visa francia, consejos vivir francia, trabajar en francia, estudiar en francia, visa francia blog, migrar a francia",
  openGraph: {
    title: "Blog - Guías sobre Migración a Francia",
    description:
      "Artículos y guías completas sobre visas, migración y vida en Francia. Información actualizada y confiable.",
  },
}

export default function BlogPage() {
  const blogPosts = [
    {
      title: "Guía Completa: Cómo Obtener tu Visa de Trabajo en Francia 2024",
      excerpt:
        "Todo lo que necesitás saber sobre los requisitos, documentación y proceso para conseguir tu visa de trabajo francesa. Incluye tips, tiempos estimados y errores comunes a evitar.",
      date: "15 Marzo 2024",
      readTime: "8 min",
      image: "/french-work-visa-documents.jpg",
      category: "Visas de Trabajo",
      slug: "guia-completa-visa-trabajo-francia-2024",
    },
    {
      title: "Visa de Estudiante: Requisitos y Pasos para Estudiar en Francia",
      excerpt:
        "Descubrí cómo aplicar a universidades francesas y obtener tu visa de estudiante sin complicaciones. Proceso completo desde la inscripción hasta la llegada a Francia.",
      date: "10 Marzo 2024",
      readTime: "6 min",
      image: "/student-studying-in-paris.jpg",
      category: "Visas de Estudiante",
      slug: "visa-estudiante-requisitos-estudiar-francia",
    },
    {
      title: "Reagrupación Familiar en Francia: Proceso Paso a Paso",
      excerpt:
        "Conocé los requisitos y documentación necesaria para traer a tu familia a Francia de forma legal. Guía completa con tiempos, costos y consejos prácticos.",
      date: "5 Marzo 2024",
      readTime: "7 min",
      image: "/happy-family-in-france.jpg",
      category: "Reagrupación Familiar",
      slug: "reagrupacion-familiar-francia-proceso",
    },
    {
      title: "Visa Saisonier: Trabajar Temporalmente en Francia",
      excerpt:
        "Todo sobre la visa de trabajo temporal en Francia. Sectores que contratan, requisitos, duración y cómo conseguir ofertas de trabajo estacional.",
      date: "1 Marzo 2024",
      readTime: "5 min",
      image: "/seasonal-worker-in-french-vineyard.jpg",
      category: "Visas de Trabajo",
      slug: "visa-saisonier-trabajo-temporal-francia",
    },
    {
      title: "Costo de Vida en Francia: Presupuesto Mensual Realista 2024",
      excerpt:
        "Desglose completo de gastos mensuales en Francia: alojamiento, comida, transporte, servicios. Comparativa entre París y otras ciudades francesas.",
      date: "25 Febrero 2024",
      readTime: "10 min",
      image: "/french-city-street-with-shops.jpg",
      category: "Vida en Francia",
      slug: "costo-vida-francia-presupuesto-mensual-2024",
    },
    {
      title: "Aprender Francés: Mejores Recursos y Métodos Efectivos",
      excerpt:
        "Recursos gratuitos y pagos para aprender francés desde cero. Apps, cursos online, métodos de inmersión y tips para acelerar tu aprendizaje del idioma.",
      date: "20 Febrero 2024",
      readTime: "7 min",
      image: "/person-learning-french-language.jpg",
      category: "Vida en Francia",
      slug: "aprender-frances-recursos-metodos-efectivos",
    },
    {
      title: "Buscar Trabajo en Francia: Portales, CV y Entrevistas",
      excerpt:
        "Guía práctica para buscar empleo en Francia. Mejores portales de trabajo, cómo adaptar tu CV al formato francés y prepararte para entrevistas laborales.",
      date: "15 Febrero 2024",
      readTime: "9 min",
      image: "/job-interview-in-modern-office.jpg",
      category: "Trabajo en Francia",
      slug: "buscar-trabajo-francia-portales-cv-entrevistas",
    },
    {
      title: "Sistema de Salud Francés: Cómo Funciona y Cómo Registrarte",
      excerpt:
        "Todo sobre el sistema de salud en Francia (Sécurité Sociale). Cómo registrarte, qué cubre, costos y cómo elegir una mutuelle complementaria.",
      date: "10 Febrero 2024",
      readTime: "8 min",
      image: "/french-hospital-healthcare.jpg",
      category: "Vida en Francia",
      slug: "sistema-salud-frances-como-funciona-registrarte",
    },
    {
      title: "Alquilar en Francia: Guía Completa para Encontrar Vivienda",
      excerpt:
        "Proceso completo para alquilar en Francia: documentos necesarios, garantías, ayudas al alquiler (CAF), portales inmobiliarios y derechos del inquilino.",
      date: "5 Febrero 2024",
      readTime: "11 min",
      image: "/french-apartment-building-exterior.jpg",
      category: "Vida en Francia",
      slug: "alquilar-francia-guia-completa-encontrar-vivienda",
    },
  ]

  const categories = [
    "Todos",
    "Visas de Trabajo",
    "Visas de Estudiante",
    "Reagrupación Familiar",
    "Vida en Francia",
    "Trabajo en Francia",
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6" style={{ backgroundColor: "#002654" }}>
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">Blog y Recursos</h1>
          <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
            Guías completas, artículos y consejos actualizados sobre migración, visas y vida en Francia. Información
            confiable para tu proceso migratorio.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Buscar artículos..."
                className="pl-12 pr-4 py-6 text-lg rounded-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 px-6 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className="rounded-full font-semibold"
                style={
                  index === 0
                    ? { backgroundColor: "#ED2939", color: "white" }
                    : { borderColor: "#002654", color: "#002654" }
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div
                    className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold text-white"
                    style={{ backgroundColor: "#002654" }}
                  >
                    {post.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3
                    className="text-xl font-bold mb-3 group-hover:text-french-red transition-colors line-clamp-2"
                    style={{ color: "#002654" }}
                  >
                    {post.title}
                  </h3>

                  <p className="text-gray-700 mb-4 leading-relaxed line-clamp-3">{post.excerpt}</p>

                  <button
                    className="flex items-center gap-2 font-semibold hover:gap-3 transition-all"
                    style={{ color: "#ED2939" }}
                  >
                    Leer más
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="font-semibold tracking-wide text-base px-8 py-6 rounded-lg bg-transparent"
              style={{ borderColor: "#002654", color: "#002654" }}
            >
              Cargar Más Artículos
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-6" style={{ backgroundColor: "#002654" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Suscribite a Nuestro Newsletter</h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Recibí las últimas guías, consejos y actualizaciones sobre migración a Francia directamente en tu email
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <Input type="email" placeholder="Tu email" className="flex-1 py-6 text-lg rounded-lg" />
            <Button
              size="lg"
              className="font-semibold tracking-wide hover:opacity-90 whitespace-nowrap"
              style={{ backgroundColor: "#ED2939", color: "white" }}
            >
              Suscribirme
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: "#002654" }}>
            ¿Necesitás Asesoría Personalizada?
          </h2>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Nuestro equipo está listo para ayudarte con tu proceso de migración a Francia
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="font-semibold tracking-wide hover:opacity-90"
              style={{ backgroundColor: "#ED2939", color: "white" }}
              asChild
            >
              <a href="https://wa.me/33601526171" target="_blank" rel="noopener noreferrer">
                Consultar por WhatsApp
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="font-semibold tracking-wide bg-transparent"
              style={{ borderColor: "#002654", color: "#002654" }}
              asChild
            >
              <a href="https://alleefrancelyon.taplink.ws" target="_blank" rel="noopener noreferrer">
                Agendar Asesoría
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
