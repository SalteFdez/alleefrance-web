"use client";

import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { OtherDestinationsCarousel } from "@/components/working-holiday/other-destinations-carousel";

export function WorkingHolidaySection() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-[#1E3A8A]" />
      <div className="pointer-events-none absolute top-0 left-0 h-20 w-full bg-linear-to-b from-[#1e3a8a] to-transparent" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-24 w-full bg-linear-to-t from-[#172554] to-transparent" />
      <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-blue-300/20 blur-[120px]" />
      <div className="pointer-events-none absolute -left-32 bottom-10 h-96 w-96 rounded-full bg-indigo-400/10 blur-[140px]" />
      <div className="pointer-events-none absolute inset-x-0 top-32 h-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.18),transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr,0.9fr]">
          <AnimateOnScroll direction="left">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-blue-200">
                Working Holiday Francia
              </p>
              <h2 className="mt-4 text-3xl font-bold text-white lg:text-5xl">
                Tu próximo año en Francia empieza acá
              </h2>
              <p className="mt-4 max-w-xl text-lg text-slate-300 leading-relaxed">
                Todo lo que necesitás para postular con éxito: requisitos
                actualizados, cupos anuales y acompañamiento estratégico para
                que tu dossier llegue impecable.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold text-white">
                <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 shadow-sm">
                  12 meses de estadía
                </span>
                <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 shadow-sm">
                  Trabajo legal
                </span>
                <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 shadow-sm">
                  Guía consular completa
                </span>
              </div>
              <div className="mt-8">
                <Button
                  size="lg"
                  className="bg-red-600 px-8 py-5 text-base font-semibold text-white shadow-xl shadow-red-600/30 transition-all hover:bg-red-700 hover:scale-[1.02]"
                  asChild
                >
                  <Link href="/working-holiday">
                    Ver requisitos Working Holiday
                  </Link>
                </Button>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll direction="right">
            <div className="relative">
              <div className="relative overflow-hidden rounded-4xl border border-white/15 shadow-2xl">
                <div className="absolute inset-0 bg-linear-to-r from-[#1E3A8A] via-transparent to-[#1E3A8A]" />
                <div className="relative h-[360px] w-full">
                  <Image
                    src="/person-holding-french-flag-in-front-of-eiffel-towe.jpg"
                    alt="Working Holiday en Francia"
                    fill
                    className="object-cover"
                    style={{
                      maskImage:
                        "linear-gradient(90deg, transparent 0%, black 16%, black 84%, transparent 100%)",
                      WebkitMaskImage:
                        "linear-gradient(90deg, transparent 0%, black 16%, black 84%, transparent 100%)",
                    }}
                  />
                </div>
              </div>
              <div className="absolute bottom-6 left-6 rounded-2xl border border-white/20 bg-white/10 px-4 py-3 backdrop-blur">
                <p className="text-xs uppercase tracking-[0.3em] text-blue-100/80">
                  Cupos limitados
                </p>
                <p className="mt-1 text-lg font-semibold text-white">2025</p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>

        <div className="mt-16">
          <AnimateOnScroll direction="fade">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-200">
                O explora otros destinos Working Holiday
              </p>
              <h3 className="mt-3 text-3xl font-bold text-white">
                Otros destinos Working Holiday
              </h3>
              <p className="mt-3 text-lg text-blue-100/90">
                Explorá alternativas disponibles para argentinos y residentes
                LATAM.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="mt-10">
            <OtherDestinationsCarousel />
          </div>
        </div>

        <AnimateOnScroll direction="fade" delay={0.2}>
          <div className="mt-14 flex justify-center">
            <Button
              size="lg"
              className="bg-[#ED2939] px-10 py-6 text-base font-semibold text-white shadow-xl transition-transform hover:scale-105"
              asChild
            >
              <Link href="/working-holiday">Ver más destinos</Link>
            </Button>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
