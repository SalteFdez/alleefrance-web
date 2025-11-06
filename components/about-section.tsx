export function AboutSection() {
  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold" style={{ color: "#002654" }}>
              ¿QUÉ ES ALLÉE FRANCE?
            </h2>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Allée France es tu socio de confianza en el proceso migratorio hacia Francia. Somos especialistas en
                trámites de visas, permisos de trabajo, reagrupación familiar y todos los servicios necesarios para
                hacer realidad tu sueño francés.
              </p>

              <p>
                Nuestro equipo de expertos te acompaña desde el primer paso hasta tu llegada a Francia, asegurando que
                cada documento esté en orden y que comprendas completamente el proceso.
              </p>

              <p>
                Con años de experiencia y cientos de casos exitosos, conocemos los requisitos exactos de cada tipo de
                visa y te guiamos para maximizar tus posibilidades de aprobación.
              </p>
            </div>
          </div>

          {/* Right - France Map Outline */}
          <div className="flex items-center justify-center">
            <svg viewBox="0 0 400 400" className="w-full max-w-md" xmlns="http://www.w3.org/2000/svg">
              {/* France outline map */}
              <path
                d="M200,50 L220,60 L240,55 L260,65 L280,60 L300,70 L310,90 L320,110 L325,130 L330,150 L328,170 L320,190 L310,210 L300,230 L285,245 L270,255 L250,265 L230,270 L210,268 L190,260 L170,250 L150,235 L135,220 L120,200 L110,180 L105,160 L100,140 L95,120 L100,100 L110,85 L125,70 L145,60 L165,55 L185,52 Z"
                fill="none"
                stroke="#ED2939"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Corsica */}
              <ellipse cx="320" cy="300" rx="15" ry="25" fill="none" stroke="#ED2939" strokeWidth="2" />
              {/* Decorative dots */}
              <circle cx="200" cy="150" r="4" fill="#002654" />
              <circle cx="180" cy="180" r="3" fill="#ED2939" />
              <circle cx="220" cy="170" r="3" fill="#002654" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
