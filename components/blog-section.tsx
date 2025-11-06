import { Button } from "@/components/ui/button"
import Link from "next/link"

export function BlogSection() {
  const blogPosts = [
    {
      title: "Cómo obtener tu visa de trabajo en Francia",
      excerpt: "Guía completa paso a paso para conseguir tu visa Salarié.",
      date: "15 Mar 2024",
      readTime: "5 min",
      image: "/french-work-visa-documents.jpg",
      approved: true,
    },
    {
      title: "Visa de estudiante: Todo lo que necesitas saber",
      excerpt: "Requisitos y proceso para estudiar en universidades francesas.",
      date: "10 Mar 2024",
      readTime: "6 min",
      image: "/student-studying-in-paris.jpg",
      approved: false,
    },
    {
      title: "Reagrupación familiar en Francia",
      excerpt: "Cómo traer a tu familia a Francia de forma legal y segura.",
      date: "5 Mar 2024",
      readTime: "7 min",
      image: "/happy-family-in-france.jpg",
      approved: true,
    },
    {
      title: "Trabajar en París: Guía completa 2024",
      excerpt: "Consejos para encontrar empleo y establecerte en la capital.",
      date: "1 Mar 2024",
      readTime: "8 min",
      image: "/person-holding-french-flag-in-front-of-eiffel-towe.jpg",
      approved: true,
    },
  ]

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ color: "#002654" }}>
            BLOG
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {post.approved && (
                  <div
                    className="absolute top-4 left-4 px-4 py-2 rounded font-bold text-white text-sm"
                    style={{ backgroundColor: "#ED2939" }}
                  >
                    VISA APROBADA
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold mb-3 line-clamp-2" style={{ color: "#002654" }}>
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                <button className="text-sm font-semibold" style={{ color: "#ED2939" }}>
                  Leer más
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="font-semibold tracking-wide text-base px-8 py-6 rounded-lg border-2 bg-transparent"
            style={{ borderColor: "#002654", color: "#002654" }}
            asChild
          >
            <Link href="/blog">VER TODOS LOS ARTÍCULOS</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
