import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { ServicesCatalog } from "@/components/servicios/services-catalog";
import { personas, services } from "@/lib/services-data";

export default function ServiciosPage() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gray-50">
      <Navbar />

      <main className="pb-16 pt-24">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateOnScroll direction="fade" delay={0.1}>
            <div className="mb-12 text-center">
              <h1 className="mb-4 text-4xl font-bold text-[#002654] lg:text-5xl">
                Catálogo de Servicios
              </h1>
              <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-600">
                Gestoría Allée France Lyon - Soluciones completas para tu
                proceso migratorio y administrativo en Francia
              </p>
            </div>
          </AnimateOnScroll>

          <ServicesCatalog personas={personas} services={services} />

          <AnimateOnScroll direction="fade" delay={0.3}>
            <div className="mt-16 text-center">
              <Card
                className="border-2 bg-white p-8"
                style={{ borderColor: "rgba(0, 38, 84, 0.1)" }}
              >
                <h2 className="mb-4 text-2xl font-bold text-[#002654]">
                  ¿No encuentras el servicio que necesitas?
                </h2>
                <p className="mx-auto mb-6 max-w-2xl leading-relaxed text-gray-600">
                  Contáctanos para una consulta personalizada. Nuestro equipo de
                  expertos está listo para ayudarte con cualquier trámite
                  migratorio o administrativo en Francia.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                  <Button
                    asChild
                    className="font-semibold text-white hover:opacity-90"
                    style={{ backgroundColor: "#ED2939" }}
                  >
                    <a
                      href="https://wa.me/33601526171"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Consulta Gratis por WhatsApp
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-2 bg-transparent font-semibold text-[#002654]"
                    style={{ borderColor: "#002654" }}
                  >
                    <Link href="/#contacto">Formulario de Contacto</Link>
                  </Button>
                </div>
              </Card>
            </div>
          </AnimateOnScroll>
        </div>
      </main>

      <Footer />
    </div>
  );
}
