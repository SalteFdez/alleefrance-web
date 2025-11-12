"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import {
  Clock,
  CheckCircle,
  MessageCircle,
  FileText,
  Plane,
  Shield,
  Heart,
  Flag,
  GraduationCap,
  Users,
  Calculator,
  Briefcase,
  Languages,
  HeartPulse,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import type {
  IconName,
  Persona,
  PersonaId,
  ServiceCard,
} from "@/lib/services-data";
import type { LucideIcon } from "lucide-react";

type ServicesCatalogProps = {
  personas: Persona[];
  services: ServiceCard[];
};

const gridVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
  },
  exit: {
    opacity: 0,
    y: 16,
    transition: { duration: 0.2, ease: [0.4, 0, 1, 1] },
  },
};

const iconMap: Record<IconName, LucideIcon> = {
  MessageCircle,
  FileText,
  Plane,
  Shield,
  Heart,
  Flag,
  GraduationCap,
  Users,
  Calculator,
  CheckCircle,
  Briefcase,
  Languages,
  HeartPulse,
};

export function ServicesCatalog({ personas, services }: ServicesCatalogProps) {
  const defaultPersona = personas[0]?.id ?? "general";
  const [selectedPersona, setSelectedPersona] =
    useState<PersonaId>(defaultPersona);

  const filteredServices = services.filter((service) =>
    service.personas.includes(selectedPersona)
  );

  return (
    <>
      <AnimateOnScroll direction="fade" delay={0.2}>
        <div className="mb-12 flex flex-col gap-3 md:flex-row md:flex-wrap md:justify-center">
          {personas.map((persona) => {
            const isActive = selectedPersona === persona.id;
            return (
              <motion.button
                key={persona.id}
                type="button"
                onClick={() => setSelectedPersona(persona.id)}
                className="relative w-full cursor-pointer overflow-hidden rounded-2xl border-2 border-slate-200 px-6 py-4 text-left transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ED2939]/60 md:w-auto md:rounded-full"
                aria-pressed={isActive}
                whileTap={{ scale: 0.98 }}
              >
                {isActive && (
                  <motion.span
                    layoutId="persona-pill"
                    className="absolute inset-0 rounded-full"
                    style={{
                      background:
                        "linear-gradient(120deg, rgba(0,38,84,0.18), rgba(0,38,84,0.35))",
                    }}
                    aria-hidden="true"
                    transition={{ type: "spring", bounce: 0.3, duration: 0.4 }}
                  />
                )}
                <div className="relative flex flex-col gap-1">
                  <span
                    className={`text-base font-semibold ${
                      isActive ? "text-[#002654]" : "text-slate-700"
                    }`}
                  >
                    {persona.label}
                  </span>
                  <span className="text-xs text-slate-500">
                    {persona.helper}
                  </span>
                </div>
              </motion.button>
            );
          })}
        </div>
      </AnimateOnScroll>

      <AnimatePresence mode="wait">
        <motion.div
          key={selectedPersona}
          variants={gridVariants}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {filteredServices.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ type: "spring", stiffness: 280, damping: 18 }}
                className="h-full"
              >
                <Card className="group h-full rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_15px_40px_rgba(0,0,0,0.08)] transition-colors duration-300 hover:border-[#002654]/40">
                  <div className="space-y-5">
                    <div className="flex items-start justify-between">
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#ED2939]/10 text-[#ED2939] transition-transform duration-300 group-hover:scale-110">
                        <Icon className="h-7 w-7" />
                      </div>
                      <Badge className="rounded-full bg-[#002654]/10 px-4 py-1 font-semibold text-[#002654]">
                        {service.price}
                      </Badge>
                    </div>

                    <div>
                      <h3 className="mb-2 text-xl font-bold text-[#002654]">
                        {service.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-gray-600">
                        {service.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Clock className="h-4 w-4" />
                      <span>{service.duration}</span>
                    </div>

                    <ul className="space-y-2">
                      {service.details.slice(0, 3).map((detail, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-2 text-sm text-gray-600"
                        >
                          <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#ED2939]" />
                          <span className="leading-relaxed">{detail}</span>
                        </li>
                      ))}
                      {service.details.length > 3 && (
                        <li className="text-sm italic text-gray-500">
                          +{service.details.length - 3} más...
                        </li>
                      )}
                    </ul>

                    <Button
                      asChild
                      className="w-full font-semibold text-white transition hover:opacity-90"
                      style={{ backgroundColor: "#ED2939" }}
                    >
                      <Link href={service.link}>Solicitar Servicio</Link>
                    </Button>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
