"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  CheckCircle2,
  Clock,
  FileText,
  Phone,
  MessageCircle,
  Calendar,
  Briefcase,
  Sprout,
  Scale,
  Search,
  FileCheck,
  Building2,
  Timer,
  Shield,
  Users,
  ArrowRight,
  Link as LinkIcon,
  List,
  CheckCircle,
  AlertTriangle,
  ArrowRightCircle,
} from "lucide-react";
import { Navbar } from "@/components/navbar";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { Footer } from "@/components/footer";

export default function VisasTrabajoPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section
        className="pt-32 pb-16 px-6 relative overflow-hidden"
        style={{
          backgroundColor: "#002654",
          backgroundImage: "url('/visas-trabajo-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay para mejorar legibilidad */}
        <div 
          className="absolute inset-0" 
          style={{ backgroundColor: "rgba(0, 38, 84, 0.85)" }}
        ></div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="flex justify-center mb-6">
            <Scale className="w-16 h-16 text-white" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Visas de Trabajo en Francia
          </h1>
          <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
            Conocé las opciones de visas de trabajo disponibles en Francia: Visa Salarié para empleo permanente y Visa Saisonier para trabajo temporal estacional.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              size="lg"
              className="font-semibold tracking-wide text-white hover:opacity-90"
              style={{ backgroundColor: "#ED2939" }}
              asChild
            >
              <a
                href="https://wa.me/33601526171"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                CONSULTAR POR WHATSAPP
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="font-semibold tracking-wide bg-white hover:bg-gray-50"
              style={{ color: "#002654" }}
              asChild
            >
              <a
                href="https://alleefrancelyon.taplink.ws"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Calendar className="mr-2 h-5 w-5" />
                AGENDAR ASESORÍA
              </a>
            </Button>
          </div>
          
          {/* Comunidad WhatsApp */}
          <AnimateOnScroll direction="fade" delay={0.3}>
            <div className="flex justify-center">
              <a
                href="https://chat.whatsapp.com/Jp7yTFyDhAM3i4dhHW0m8Z"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-4 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <MessageCircle className="w-6 h-6" />
                <span>Únete y sé parte de la comunidad</span>
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>


      {/* Sección 7 Pasos - Visa Salarié y Saisonier lado a lado */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
        <h2
            className="text-3xl lg:text-4xl font-bold mb-12 text-center"
            style={{ color: "#002654" }}
          >
            Información de Cada Visa
          </h2>
          <AnimateOnScroll direction="fade" delay={0.1}>
            <div className="text-center mb-12">
              <h2
                className="text-3xl lg:text-4xl font-bold mb-4"
                style={{ color: "#002654" }}
              >
                7 Pasos para Obtener tu Visa
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Proceso completo para Visa Salarié y Visa Saisonier
              </p>
            </div>
          </AnimateOnScroll>

          {/* Layout de dos columnas: mitad y mitad */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Columna Izquierda: Visa Salarié */}
            <div className="space-y-4 md:space-y-6">
              <div className="text-center mb-6 md:mb-8">
                <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full mb-3 md:mb-4" style={{ backgroundColor: "rgba(237, 41, 57, 0.1)" }}>
                  <Briefcase className="w-4 h-4 md:w-5 md:h-5" style={{ color: "#ED2939" }} />
                  <span className="text-xs md:text-sm font-semibold uppercase tracking-wide" style={{ color: "#ED2939" }}>
                    Visa Salarié
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-2" style={{ color: "#002654" }}>
                  Visa Salarié
                </h3>
                <p className="text-xs md:text-sm text-gray-600">
                  7 pasos para visa permanente
                </p>
              </div>
              {/* Paso 1: DEFINICION */}
              <AnimateOnScroll direction="zoom" delay={0.1}>
                <div className="relative group">
                  <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-4 md:p-6 shadow-md hover:shadow-xl border-t-4 transition-all duration-300 h-full relative overflow-hidden"
                    style={{ borderTopColor: "#ED2939" }}>
                    {/* Banda decorativa lateral */}
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#ED2939] to-[#ED2939]/50"></div>
                    
                    {/* Header con número e icono */}
                    <div className="flex items-center gap-3 md:gap-4 mb-4">
                      <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-lg shadow-sm group-hover:shadow-md transition-all duration-300"
                        style={{ backgroundColor: "#ED2939" }}>
                        <span className="text-lg md:text-xl font-bold text-white">1</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <FileText className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" style={{ color: "#ED2939" }} />
                          <h3 className="text-base md:text-lg font-bold" style={{ color: "#002654" }}>
                            DEFINICIÓN
                          </h3>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-xs md:text-sm text-gray-700 leading-relaxed space-y-2 md:space-y-3 pl-1">
                      <p>
                        La <strong>Visa Salarié</strong> es un permiso de residencia y trabajo destinado a personas contratadas por una empresa francesa mediante un <strong>CDI</strong> o un <strong>CDD de larga duración</strong>. Su obtención requiere que el empleador solicite una autorización de trabajo y cumpla las condiciones laborales exigidas por Francia.
                      </p>
                      <div className="bg-blue-50 p-3 md:p-4 rounded-lg border-l-2" style={{ borderLeftColor: "#ED2939" }}>
                        <p className="text-xs md:text-sm">
                          Es uno de los permisos más valorados por su <strong>estabilidad</strong>, su <strong>claridad jurídica</strong> y su <strong>proyección a largo plazo</strong> dentro del territorio francés.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>

              {/* Paso 2: OFERTA DE EMPLEO/METIER EN TENSION */}
              <AnimateOnScroll direction="zoom" delay={0.2}>
                <div className="relative group">
                  <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-4 md:p-6 shadow-md hover:shadow-xl border-t-4 transition-all duration-300 h-full relative overflow-hidden"
                    style={{ borderTopColor: "#002654" }}>
                    {/* Banda decorativa lateral */}
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#002654] to-[#002654]/50"></div>
                    
                    {/* Header con número e icono */}
                    <div className="flex items-center gap-3 md:gap-4 mb-4">
                      <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-lg shadow-sm group-hover:shadow-md transition-all duration-300"
                        style={{ backgroundColor: "#002654" }}>
                        <span className="text-lg md:text-xl font-bold text-white">2</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <Search className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" style={{ color: "#002654" }} />
                          <h3 className="text-base md:text-lg font-bold" style={{ color: "#002654" }}>
                            OFERTA DE EMPLEO / MÉTIER EN TENSION
                          </h3>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-xs md:text-sm text-gray-700 leading-relaxed space-y-2 md:space-y-3 pl-1">
                      <p>
                        Para solicitar una Visa Salarié, todo comienza con una <strong>oferta de empleo formal</strong> emitida por una empresa francesa. Cada puesto está identificado por un <strong>código ROME</strong>, que determina la función laboral y la categoría profesional del trabajador.
                      </p>
                      <div className="bg-amber-50 p-3 md:p-4 rounded-lg border-l-2" style={{ borderLeftColor: "#002654" }}>
                        <p className="font-semibold mb-2 text-xs md:text-sm" style={{ color: "#002654" }}>Métiers en Tension:</p>
                        <p className="mb-2 text-xs md:text-sm">
                          Son las profesiones donde Francia registra <strong>escasez de personal</strong>. Esta lista varía según la región, ya que cada zona del país tiene necesidades diferentes.
                        </p>
                        <p className="text-xs md:text-sm">
                          Cuando un puesto pertenece a un métier en tension, el proceso suele ser <strong>más ágil</strong>, ya que el empleador no necesita justificar la falta de candidatos locales.
                        </p>
                      </div>
                      <div className="mt-3 pt-3 border-t border-gray-200">
                        <div className="flex items-center gap-2 mb-2">
                          <List className="w-4 h-4" style={{ color: "#002654" }} />
                          <p className="font-semibold text-sm">Listas oficiales:</p>
                        </div>
                        <a href="https://www.legifrance.gouv.fr" target="_blank" rel="noopener noreferrer" className="text-sm text-[#002654] hover:underline flex items-center gap-1 mb-1">
                          <LinkIcon className="w-3 h-3" />
                          legifrance.gouv.fr
                        </a>
                        <a href="https://www.pole-emploi.fr/candidat/le-rome-et-les-fiches-metiers.html" target="_blank" rel="noopener noreferrer" className="text-sm text-[#002654] hover:underline flex items-center gap-1">
                          <LinkIcon className="w-3 h-3" />
                          pole-emploi.fr
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>

              {/* Paso 3: France TRAVAIL */}
              <AnimateOnScroll direction="zoom" delay={0.3}>
                <div className="relative group">
                  <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-4 md:p-6 shadow-md hover:shadow-xl border-t-4 transition-all duration-300 h-full relative overflow-hidden"
                    style={{ borderTopColor: "#ED2939" }}>
                    {/* Banda decorativa lateral */}
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#ED2939] to-[#ED2939]/50"></div>
                    
                    {/* Header con número e icono */}
                    <div className="flex items-center gap-3 md:gap-4 mb-4">
                      <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-lg shadow-sm group-hover:shadow-md transition-all duration-300"
                        style={{ backgroundColor: "#ED2939" }}>
                        <span className="text-lg md:text-xl font-bold text-white">3</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <Building2 className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" style={{ color: "#ED2939" }} />
                          <h3 className="text-base md:text-lg font-bold" style={{ color: "#002654" }}>
                            FRANCE TRAVAIL
                          </h3>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-xs md:text-sm text-gray-700 leading-relaxed space-y-2 md:space-y-3 pl-1">
                      <p>
                        Una vez verificado que el oficio <strong>NO</strong> se encuentra en la lista de Métiers en Tension, el empleador debe publicar la oferta de empleo en <strong>France Travail</strong>, la plataforma oficial de empleo del Estado francés.
                      </p>
                      <div className="bg-blue-50 p-3 md:p-4 rounded-lg border-l-2" style={{ borderLeftColor: "#002654" }}>
                        <div className="flex items-center gap-2 mb-2">
                          <Timer className="w-3 h-3 md:w-4 md:h-4" style={{ color: "#002654" }} />
                          <p className="font-semibold text-xs md:text-sm" style={{ color: "#002654" }}>TIEMPO DE PUBLICACIÓN</p>
                        </div>
                        <p className="mb-3 text-xs md:text-sm">
                          Este paso forma parte del proceso de <strong>control de mercado laboral</strong> y sirve para demostrar que la empresa intentó contratar primero a candidatos disponibles en Francia o dentro de la Unión Europea.
                        </p>
                        <div className="bg-white p-2 md:p-3 rounded border">
                          <p className="font-semibold mb-2 text-xs md:text-sm" style={{ color: "#ED2939" }}>¿Qué hago luego?</p>
                          <p className="mb-2 text-xs md:text-sm">
                            Debe estar publicado por un mínimo de <strong>21 días sin modificaciones</strong>. Cada vez que modificas la oferta de empleo se reinicia el contador.
                          </p>
                          <p className="text-xs md:text-sm">
                            Solicitar a tu asesor de France Travail el <strong>cierre de la oferta</strong>.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>

              {/* Paso 4: PROCEDIMIENTO Y TIEMPOS */}
              <AnimateOnScroll direction="zoom" delay={0.4}>
                <div className="relative group">
                  <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-4 md:p-6 shadow-md hover:shadow-xl border-t-4 transition-all duration-300 h-full relative overflow-hidden"
                    style={{ borderTopColor: "#002654" }}>
                    {/* Banda decorativa lateral */}
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#002654] to-[#002654]/50"></div>
                    
                    {/* Header con número e icono */}
                    <div className="flex items-center gap-3 md:gap-4 mb-4">
                      <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-lg shadow-sm group-hover:shadow-md transition-all duration-300"
                        style={{ backgroundColor: "#002654" }}>
                        <span className="text-lg md:text-xl font-bold text-white">4</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <Timer className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" style={{ color: "#002654" }} />
                          <h3 className="text-base md:text-lg font-bold" style={{ color: "#002654" }}>
                            PROCEDIMIENTO Y TIEMPOS
                          </h3>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-xs md:text-sm text-gray-700 leading-relaxed space-y-2 md:space-y-3 pl-1">
                      <p>
                        El empleador reúne la documentación e ingresa la solicitud oficial en la plataforma del <strong>Ministerio del Interior (ANEF empleadores)</strong>.
                      </p>
                      <p className="font-semibold" style={{ color: "#002654" }}>La administración revisa:</p>
                      <ul className="list-disc list-inside space-y-1 ml-2">
                        <li>Legalidad del contrato</li>
                        <li>Salario acorde al convenio</li>
                        <li>Actividad real del empleador</li>
                        <li>Coherencia del perfil con el puesto</li>
                        <li>Cumplimiento de normativa francesa</li>
                      </ul>
                      <div className="bg-green-50 p-3 md:p-4 rounded-lg border-l-2 mt-3" style={{ borderLeftColor: "#ED2939" }}>
                        <div className="flex items-center gap-2 mb-2">
                          <Clock className="w-3 h-3 md:w-4 md:h-4" style={{ color: "#002654" }} />
                          <p className="font-semibold text-xs md:text-sm" style={{ color: "#002654" }}>Demora promedio de la autorización:</p>
                        </div>
                        <p className="mb-3 flex items-start gap-2 text-xs md:text-sm">
                          <ArrowRightCircle className="w-3 h-3 md:w-4 md:h-4 mt-0.5 flex-shrink-0" style={{ color: "#ED2939" }} />
                          <span>Entre <strong>2 y 8 semanas</strong>, según prefectura, oficio y carga administrativa.</span>
                        </p>
                        <p className="font-semibold mb-2 text-xs md:text-sm" style={{ color: "#002654" }}>Una vez aprobada la autorización de trabajo:</p>
                        <p className="mb-2 text-xs md:text-sm">• Se envía automáticamente a la embajada de Francia.</p>
                        <p className="mb-3 text-xs md:text-sm">• La persona solicita su <strong>visa Salarié</strong> y presenta biometría y documentos complementarios.</p>
                        <div className="flex items-center gap-2 mb-2">
                          <Clock className="w-3 h-3 md:w-4 md:h-4" style={{ color: "#002654" }} />
                          <p className="font-semibold text-xs md:text-sm" style={{ color: "#002654" }}>Tiempos de emisión del visado:</p>
                        </div>
                        <p className="flex items-start gap-2 text-xs md:text-sm">
                          <ArrowRightCircle className="w-3 h-3 md:w-4 md:h-4 mt-0.5 flex-shrink-0" style={{ color: "#ED2939" }} />
                          <span>Hasta <strong>15 días</strong> máximo en la mayoría de países latinoamericanos.</span>
                        </p>
                        <p className="flex items-start gap-2 text-xs md:text-sm">
                          <ArrowRightCircle className="w-3 h-3 md:w-4 md:h-4 mt-0.5 flex-shrink-0" style={{ color: "#ED2939" }} />
                          <span>(Otros países pueden tomar alrededor de 1 mes.)</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>

              {/* Paso 5: VALIDACION DE LA VISA */}
              <AnimateOnScroll direction="zoom" delay={0.5}>
                <div className="relative group">
                  <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-4 md:p-6 shadow-md hover:shadow-xl border-t-4 transition-all duration-300 h-full relative overflow-hidden"
                    style={{ borderTopColor: "#ED2939" }}>
                    {/* Banda decorativa lateral */}
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#ED2939] to-[#ED2939]/50"></div>
                    
                    {/* Header con número e icono */}
                    <div className="flex items-center gap-3 md:gap-4 mb-4">
                      <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-lg shadow-sm group-hover:shadow-md transition-all duration-300"
                        style={{ backgroundColor: "#ED2939" }}>
                        <span className="text-lg md:text-xl font-bold text-white">5</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <Shield className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" style={{ color: "#ED2939" }} />
                          <h3 className="text-base md:text-lg font-bold" style={{ color: "#002654" }}>
                            VALIDACIÓN DE LA VISA
                          </h3>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-xs md:text-sm text-gray-700 leading-relaxed space-y-2 md:space-y-3 pl-1">
                      <p>
                        Con la visa estampada en el pasaporte, el trabajador viaja a Francia e inicia su contratación.
                      </p>
                      <div className="bg-blue-50 p-3 md:p-4 rounded-lg border-l-2" style={{ borderLeftColor: "#002654" }}>
                        <p className="font-semibold mb-2 text-xs md:text-sm" style={{ color: "#002654" }}>A su llegada debe:</p>
                        <ul className="list-disc list-inside space-y-1 ml-2 text-xs md:text-sm">
                          <li>Validar la visa</li>
                          <li>Registrar seguridad social</li>
                          <li>Activar derechos laborales</li>
                          <li>Integrarse al sistema francés</li>
                        </ul>
                      </div>
                      <p className="bg-green-50 p-2 md:p-3 rounded-lg border-l-2 text-xs md:text-sm" style={{ borderLeftColor: "#ED2939" }}>
                        Este permiso es <strong>renovable</strong> y permite avanzar hacia la <strong>residencia de larga duración</strong> (TITRE DE SEJOUR SALARIE).
                      </p>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>

            </div>

            {/* Columna Derecha: Visa Saisonier */}
            <div className="space-y-4 md:space-y-6">
              <div className="text-center mb-6 md:mb-8">
                <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full mb-3 md:mb-4" style={{ backgroundColor: "rgba(0, 38, 84, 0.1)" }}>
                  <Sprout className="w-4 h-4 md:w-5 md:h-5" style={{ color: "#002654" }} />
                  <span className="text-xs md:text-sm font-semibold uppercase tracking-wide" style={{ color: "#002654" }}>
                    Visa Saisonier
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-2" style={{ color: "#002654" }}>
                  Visa Saisonier
                </h3>
                <p className="text-xs md:text-sm text-gray-600">
                  7 pasos para visa estacional
                </p>
              </div>
              {/* Paso 1 Saisonier: DEFINICION */}
              <AnimateOnScroll direction="zoom" delay={0.1}>
                <div className="relative group">
                  <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-4 md:p-6 shadow-md hover:shadow-xl border-t-4 transition-all duration-300 h-full relative overflow-hidden"
                    style={{ borderTopColor: "#002654" }}>
                    {/* Banda decorativa lateral */}
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#002654] to-[#002654]/50"></div>
                    
                    {/* Header con número e icono */}
                    <div className="flex items-center gap-3 md:gap-4 mb-4">
                      <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-lg shadow-sm group-hover:shadow-md transition-all duration-300"
                        style={{ backgroundColor: "#002654" }}>
                        <span className="text-lg md:text-xl font-bold text-white">1</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <FileText className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" style={{ color: "#002654" }} />
                          <h3 className="text-base md:text-lg font-bold" style={{ color: "#002654" }}>
                            DEFINICIÓN
                          </h3>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-xs md:text-sm text-gray-700 leading-relaxed space-y-2 md:space-y-3 pl-1">
                      <p>
                        La <strong>Visa Saisonier</strong> es un permiso que permite trabajar legalmente en Francia durante una actividad estacional, generalmente relacionada con <strong>hotelería, restauración, turismo, agricultura o estaciones de esquí</strong>.
                      </p>
                      <p>
                        Este visado se aprueba a partir de un contrato de trabajo de <strong>3 a 6 meses</strong> y está destinado únicamente a actividades consideradas de temporada.
                      </p>
                      <div className="bg-blue-50 p-3 md:p-4 rounded-lg border-l-2" style={{ borderLeftColor: "#ED2939" }}>
                        <p className="font-semibold mb-2 text-xs md:text-sm" style={{ color: "#002654" }}>Diferencia clave:</p>
                        <p className="text-xs md:text-sm">
                          A diferencia de la visa Salarié, la Saisonier <strong>no otorga un derecho laboral anual</strong>, sino un derecho limitado a <strong>6 meses de trabajo por año</strong>, renovable durante <strong>3 años consecutivos</strong> mediante la Carte de Séjour Saisonnier, tramitada una vez que el trabajador llega a Francia.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>

              {/* Paso 2 Saisonier: OFERTA DE EMPLEO/METIER EN TENSION */}
              <AnimateOnScroll direction="zoom" delay={0.2}>
                <div className="relative group">
                  <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-4 md:p-6 shadow-md hover:shadow-xl border-t-4 transition-all duration-300 h-full relative overflow-hidden"
                    style={{ borderTopColor: "#ED2939" }}>
                    {/* Banda decorativa lateral */}
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#ED2939] to-[#ED2939]/50"></div>
                    
                    {/* Header con número e icono */}
                    <div className="flex items-center gap-3 md:gap-4 mb-4">
                      <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-lg shadow-sm group-hover:shadow-md transition-all duration-300"
                        style={{ backgroundColor: "#ED2939" }}>
                        <span className="text-lg md:text-xl font-bold text-white">2</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <Search className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" style={{ color: "#ED2939" }} />
                          <h3 className="text-base md:text-lg font-bold" style={{ color: "#002654" }}>
                            OFERTA DE EMPLEO / MÉTIER EN TENSION
                          </h3>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-xs md:text-sm text-gray-700 leading-relaxed space-y-2 md:space-y-3 pl-1">
                      <p>
                        Para solicitar una Visa Saisonier, se requiere una <strong>oferta de empleo formal</strong> emitida por una empresa francesa para un trabajo estacional con una duración entre <strong>3 y 6 meses</strong>.
                      </p>
                      <p>
                        Cada contrato está vinculado a un <strong>código ROME</strong> que define el tipo de puesto y su categoría profesional.
                      </p>
                      <div className="bg-amber-50 p-3 md:p-4 rounded-lg border-l-2" style={{ borderLeftColor: "#002654" }}>
                        <p className="font-semibold mb-2 text-xs md:text-sm" style={{ color: "#002654" }}>Métiers en Tension en sectores estacionales:</p>
                        <p className="text-xs md:text-sm">
                          En los sectores de temporada, muchos oficios pertenecen a los <strong>Métiers en Tension</strong>, especialmente en regiones turísticas, lo cual <strong>facilita la aprobación</strong>.
                        </p>
                        <p className="mt-2 text-xs">
                          La lista de métiers puede variar según la región y debe verificarse en los enlaces oficiales.
                        </p>
                      </div>
                      <div className="mt-3 pt-3 border-t border-gray-200">
                        <div className="flex items-center gap-2 mb-2">
                          <List className="w-4 h-4" style={{ color: "#002654" }} />
                          <p className="font-semibold text-sm">Listas oficiales:</p>
                        </div>
                        <a href="https://www.legifrance.gouv.fr" target="_blank" rel="noopener noreferrer" className="text-sm text-[#002654] hover:underline flex items-center gap-1 mb-1">
                          <LinkIcon className="w-3 h-3" />
                          Légifrance (listas regionales actualizadas)
                        </a>
                        <a href="https://www.pole-emploi.fr/candidat/le-rome-et-les-fiches-metiers.html" target="_blank" rel="noopener noreferrer" className="text-sm text-[#002654] hover:underline flex items-center gap-1">
                          <LinkIcon className="w-3 h-3" />
                          Códigos ROME y fichas profesionales
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>

              {/* Paso 3 Saisonier: France TRAVAIL */}
              <AnimateOnScroll direction="zoom" delay={0.3}>
                <div className="relative group">
                  <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-4 md:p-6 shadow-md hover:shadow-xl border-t-4 transition-all duration-300 h-full relative overflow-hidden"
                    style={{ borderTopColor: "#002654" }}>
                    {/* Banda decorativa lateral */}
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#002654] to-[#002654]/50"></div>
                    
                    {/* Header con número e icono */}
                    <div className="flex items-center gap-3 md:gap-4 mb-4">
                      <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-lg shadow-sm group-hover:shadow-md transition-all duration-300"
                        style={{ backgroundColor: "#002654" }}>
                        <span className="text-lg md:text-xl font-bold text-white">3</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <Building2 className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" style={{ color: "#002654" }} />
                          <h3 className="text-base md:text-lg font-bold" style={{ color: "#002654" }}>
                            FRANCE TRAVAIL
                          </h3>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-xs md:text-sm text-gray-700 leading-relaxed space-y-2 md:space-y-3 pl-1">
                      <div className="bg-green-50 p-3 md:p-4 rounded-lg border-l-2" style={{ borderLeftColor: "#ED2939" }}>
                        <div className="flex items-center gap-2 mb-2">
                          <CheckCircle className="w-3 h-3 md:w-4 md:h-4" style={{ color: "#002654" }} />
                          <p className="font-semibold text-xs md:text-sm" style={{ color: "#002654" }}>Ventaja importante:</p>
                        </div>
                        <p className="mb-3 text-xs md:text-sm">
                          En la mayoría de casos estacionales, <strong>NO es necesario publicar la oferta durante 3 semanas</strong>, ya que la actividad saisonnière forma parte de sectores reconocidos como de alta demanda.
                        </p>
                        <p className="font-semibold mb-2 text-xs md:text-sm" style={{ color: "#002654" }}>Sectores estacionales reconocidos:</p>
                        <ul className="list-disc list-inside space-y-1 ml-2 text-xs md:text-sm">
                          <li>Hotelería</li>
                          <li>Restauración</li>
                          <li>Turismo</li>
                          <li>Montaña / ski</li>
                          <li>Agricultura estacional</li>
                          <li>Mantenimiento y limpieza estacional</li>
                        </ul>
                      </div>
                      <div className="bg-yellow-50 p-3 md:p-4 rounded-lg border-l-2" style={{ borderLeftColor: "#002654" }}>
                        <div className="flex items-center gap-2 mb-2">
                          <AlertTriangle className="w-3 h-3 md:w-4 md:h-4" style={{ color: "#002654" }} />
                          <p className="font-semibold text-xs md:text-sm" style={{ color: "#002654" }}>Caso excepcional:</p>
                        </div>
                        <p className="mb-2 text-xs md:text-sm">
                          Si el oficio <strong>NO está catalogado como estacional</strong> ni está en tensión en esa región, el empleador podría necesitar publicar la oferta en France Travail (mínimo 21 días).
                        </p>
                        <p className="text-xs md:text-sm">
                          Este paso solo aplica en casos específicos y <strong>no es la norma general</strong>.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>

              {/* Paso 4 Saisonier: PROCEDIMIENTO Y TIEMPOS */}
              <AnimateOnScroll direction="zoom" delay={0.4}>
                <div className="relative group">
                  <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-4 md:p-6 shadow-md hover:shadow-xl border-t-4 transition-all duration-300 h-full relative overflow-hidden"
                    style={{ borderTopColor: "#ED2939" }}>
                    {/* Banda decorativa lateral */}
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#ED2939] to-[#ED2939]/50"></div>
                    
                    {/* Header con número e icono */}
                    <div className="flex items-center gap-3 md:gap-4 mb-4">
                      <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-lg shadow-sm group-hover:shadow-md transition-all duration-300"
                        style={{ backgroundColor: "#ED2939" }}>
                        <span className="text-lg md:text-xl font-bold text-white">4</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <Timer className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" style={{ color: "#ED2939" }} />
                          <h3 className="text-base md:text-lg font-bold" style={{ color: "#002654" }}>
                            PROCEDIMIENTO Y TIEMPOS
                          </h3>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-xs md:text-sm text-gray-700 leading-relaxed space-y-2 md:space-y-3 pl-1">
                      <p>
                        El empleador reúne la documentación e ingresa la solicitud oficial en la plataforma del <strong>Ministerio del Interior (ANEF empleadores)</strong>.
                      </p>
                      <p className="font-semibold" style={{ color: "#002654" }}>La administración revisa:</p>
                      <ul className="list-disc list-inside space-y-1 ml-2">
                        <li>Legalidad del contrato</li>
                        <li>Salario acorde al convenio</li>
                        <li>Actividad real del empleador</li>
                        <li>Coherencia del perfil con el puesto</li>
                        <li>Cumplimiento de normativa francesa</li>
                      </ul>
                      <div className="bg-blue-50 p-3 md:p-4 rounded-lg border-l-2 mt-3" style={{ borderLeftColor: "#002654" }}>
                        <div className="flex items-center gap-2 mb-2">
                          <Clock className="w-3 h-3 md:w-4 md:h-4" style={{ color: "#002654" }} />
                          <p className="font-semibold text-xs md:text-sm" style={{ color: "#002654" }}>Demora promedio de la autorización:</p>
                        </div>
                        <p className="mb-3 flex items-start gap-2 text-xs md:text-sm">
                          <ArrowRightCircle className="w-3 h-3 md:w-4 md:h-4 mt-0.5 flex-shrink-0" style={{ color: "#ED2939" }} />
                          <span>Entre <strong>2 y 8 semanas</strong>, según prefectura, oficio y carga administrativa.</span>
                        </p>
                        <p className="font-semibold mb-2 text-xs md:text-sm" style={{ color: "#002654" }}>Una vez aprobada la autorización de trabajo:</p>
                        <p className="mb-2 text-xs md:text-sm">• Se envía automáticamente a la embajada de Francia.</p>
                        <p className="mb-3 text-xs md:text-sm">• La persona solicita su <strong>visa Saisonier</strong> y presenta biometría y documentos complementarios.</p>
                        <div className="flex items-center gap-2 mb-2">
                          <Clock className="w-3 h-3 md:w-4 md:h-4" style={{ color: "#002654" }} />
                          <p className="font-semibold text-xs md:text-sm" style={{ color: "#002654" }}>Tiempos de emisión del visado:</p>
                        </div>
                        <p className="flex items-start gap-2 text-xs md:text-sm">
                          <ArrowRightCircle className="w-3 h-3 md:w-4 md:h-4 mt-0.5 flex-shrink-0" style={{ color: "#ED2939" }} />
                          <span>Hasta <strong>15 días</strong> máximo en la mayoría de países latinoamericanos.</span>
                        </p>
                        <p className="flex items-start gap-2 text-xs md:text-sm">
                          <ArrowRightCircle className="w-3 h-3 md:w-4 md:h-4 mt-0.5 flex-shrink-0" style={{ color: "#ED2939" }} />
                          <span>(Otros países pueden tomar alrededor de 1 mes.)</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>

              {/* Paso 5 Saisonier: VALIDACION DE LA VISA */}
              <AnimateOnScroll direction="zoom" delay={0.5}>
                <div className="relative group">
                  <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-4 md:p-6 shadow-md hover:shadow-xl border-t-4 transition-all duration-300 h-full relative overflow-hidden"
                    style={{ borderTopColor: "#002654" }}>
                    {/* Banda decorativa lateral */}
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#002654] to-[#002654]/50"></div>
                    
                    {/* Header con número e icono */}
                    <div className="flex items-center gap-3 md:gap-4 mb-4">
                      <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-lg shadow-sm group-hover:shadow-md transition-all duration-300"
                        style={{ backgroundColor: "#002654" }}>
                        <span className="text-lg md:text-xl font-bold text-white">5</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <Shield className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" style={{ color: "#002654" }} />
                          <h3 className="text-base md:text-lg font-bold" style={{ color: "#002654" }}>
                            VALIDACIÓN DE LA VISA
                          </h3>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-xs md:text-sm text-gray-700 leading-relaxed space-y-2 md:space-y-3 pl-1">
                      <div className="bg-red-50 p-3 md:p-4 rounded-lg border-l-2" style={{ borderLeftColor: "#ED2939" }}>
                        <p className="font-semibold mb-2 text-xs md:text-sm" style={{ color: "#002654" }}>Si tu visa Saisonier es de 3 meses o menos:</p>
                        <ul className="list-disc list-inside space-y-1 ml-2 text-xs md:text-sm">
                          <li><strong>NO se valida en Francia</strong></li>
                          <li>Puedes trabajar únicamente durante el período indicado en la visa</li>
                          <li>No genera derechos a carte de séjour</li>
                          <li>El costo de emisión en la embajada es de <strong>0 €</strong> (gratuito)</li>
                        </ul>
                      </div>
                      <div className="bg-green-50 p-3 md:p-4 rounded-lg border-l-2" style={{ borderLeftColor: "#002654" }}>
                        <p className="font-semibold mb-2 text-xs md:text-sm" style={{ color: "#002654" }}>Si tu visa Saisonier es superior a 3 meses (3 a 6 meses):</p>
                        <ul className="list-disc list-inside space-y-1 ml-2 text-xs md:text-sm mb-2">
                          <li><strong>Sí debe ser validada obligatoriamente</strong> al llegar a Francia mediante la plataforma de validación de visas</li>
                          <li>Esta validación es necesaria para estar en situación regular y continuar tu contrato de temporada</li>
                        </ul>
                        <p className="font-semibold mt-3 mb-2 text-xs md:text-sm" style={{ color: "#002654" }}>Después de validarla, puedes solicitar la Carte de Séjour Saisonnier:</p>
                        <ul className="list-disc list-inside space-y-1 ml-2 text-xs md:text-sm">
                          <li>Trabajar hasta <strong>6 meses por año</strong></li>
                          <li>Durante <strong>3 años consecutivos</strong></li>
                          <li>En actividades estrictamente estacionales</li>
                        </ul>
                        <p className="mt-3 text-xs md:text-sm">
                          El costo del visado en la embajada es de <strong>0 € (gratuito)</strong>, ya que la visa Saisonier no tiene tasa consular.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>

            </div>
          </div>

          {/* Pasos 6 y 7 Compartidos - Ancho completo */}
          <div className="mt-8 space-y-6">
            {/* Paso 6: ACOMPAÑAMIENTO - Ancho completo */}
            <AnimateOnScroll direction="up" delay={0.6}>
              <div className="relative group">
                <div className="bg-gradient-to-br from-white via-gray-50 to-white rounded-xl p-6 md:p-8 lg:p-10 shadow-lg border-t-4 hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
                  style={{ borderTopColor: "#002654" }}>
                  {/* Banda decorativa lateral más gruesa */}
                  <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-[#002654] via-[#002654] to-[#002654]/30"></div>
                  
                  <div className="relative z-10 pl-4">
                    <div className="flex flex-col md:flex-row items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-xl shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-300"
                          style={{ backgroundColor: "#002654" }}>
                          <span className="text-2xl md:text-3xl font-bold text-white">6</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                          <CheckCircle2 className="w-6 h-6 md:w-8 md:h-8" style={{ color: "#002654" }} />
                          <h3 className="text-xl md:text-2xl font-bold" style={{ color: "#002654" }}>
                            ACOMPAÑAMIENTO
                          </h3>
                        </div>
                        <div className="text-sm md:text-base text-gray-700 leading-relaxed space-y-3">
                          <p>
                            En <strong>Allée France Lyon</strong> te acompaño personalmente en cada etapa de tu proceso. Soy <strong>Jio</strong>, especialista en trámites migratorios hacia Francia, con <strong>más de 400 procesos exitosos</strong> de visado y autorizaciones de trabajo.
                          </p>
                          <p>
                            Trabajamos en coordinación directa con tu empleador para que tu expediente avance en <strong>tiempo récord</strong>, evitando errores y devoluciones. Hemos gestionado visados desde pequeñas empresas hasta grandes corporaciones.
                          </p>
                          <p className="font-semibold mt-4 p-4 rounded-lg bg-gradient-to-r from-[#002654] to-[#ED2939] text-white text-center md:text-left">
                            Con nosotros no solo haces un trámite: construyes un proyecto de vida con un acompañamiento real, experto y comprometido.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Paso 7: COMUNIDAD - Ancho completo */}
            <AnimateOnScroll direction="up" delay={0.7}>
              <div className="relative group">
                <div className="bg-gradient-to-br from-[#002654] via-[#003d7a] to-[#ED2939] rounded-xl p-6 md:p-8 lg:p-10 shadow-2xl border-t-4 hover:shadow-2xl hover:scale-[1.01] transition-all duration-300 text-white relative overflow-hidden"
                  style={{ borderTopColor: "#25D366" }}>
                  {/* Banda decorativa lateral más gruesa */}
                  <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-[#25D366] via-[#25D366] to-[#25D366]/50"></div>
                  
                  {/* Efecto de brillo animado */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-[shimmer_3s_infinite]"></div>
                  
                  <div className="relative z-10 pl-4">
                    <div className="flex flex-col md:flex-row items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-xl bg-white/20 backdrop-blur-sm border-2 border-white/30 shadow-lg group-hover:scale-105 transition-all duration-300">
                          <span className="text-2xl md:text-3xl font-bold text-white">7</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                          <MessageCircle className="w-6 h-6 md:w-8 md:h-8 text-white" />
                          <h3 className="text-xl md:text-2xl font-bold text-white">
                            COMUNIDAD SALARIÉ/SAISONNIER
                          </h3>
                        </div>
                        <p className="text-base md:text-lg text-white/95 leading-relaxed mb-6">
                          Únete y sé parte de la comunidad exclusiva de trabajadores en Francia para compartir experiencias, consejos y recibir apoyo continuo en tu proceso migratorio.
                        </p>
                        <div className="flex justify-center md:justify-start">
                          <a
                            href="https://chat.whatsapp.com/Jp7yTFyDhAM3i4dhHW0m8Z"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-base md:text-lg"
                          >
                            <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
                            <span>Únete a la comunidad</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>

          {/* CTA Final Combinado */}
          <AnimateOnScroll direction="up" delay={0.8}>
            <div className="mt-16 text-center">
              <div className="bg-white rounded-2xl p-8 shadow-xl border-2" style={{ borderColor: "#002654" }}>
                <h3 className="text-2xl font-bold mb-3" style={{ color: "#002654" }}>
                  ¿Listo para comenzar tu proceso?
                </h3>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                  Te acompañamos en cada paso del proceso para que obtengas tu visa de trabajo en Francia con éxito
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="font-semibold tracking-wide text-white hover:opacity-90 shadow-lg"
                    style={{ backgroundColor: "#ED2939" }}
                    asChild
                  >
                    <a
                      href="https://wa.me/33601526171"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="mr-2 h-5 w-5" />
                      CONSULTAR AHORA
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="font-semibold tracking-wide shadow-lg"
                    style={{ borderColor: "#002654", color: "#002654", borderWidth: "2px" }}
                    asChild
                  >
                    <a
                      href="https://alleefrancelyon.taplink.ws"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Calendar className="mr-2 h-5 w-5" />
                      AGENDAR ASESORÍA
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 px-6" style={{ backgroundColor: "#002654" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            ¿Cuál visa es la adecuada para vos?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Contactanos para una asesoría personalizada y descubrí cuál es la mejor opción para tu situación
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="font-semibold tracking-wide hover:opacity-90"
              style={{ backgroundColor: "#ED2939", color: "white" }}
              asChild
            >
              <a
                href="https://wa.me/33601526171"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone className="mr-2 h-5 w-5" />
                CONSULTAR
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="font-semibold tracking-wide bg-white hover:bg-gray-50"
              style={{ color: "#002654" }}
              asChild
            >
              <Link href="/#contacto">VER MÁS SERVICIOS</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Comparadas */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-3xl lg:text-4xl font-bold mb-8 text-center"
            style={{ color: "#002654" }}
          >
            Preguntas Frecuentes
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* FAQ Visa Salarié */}
            <div>
              <h3
                className="text-2xl font-bold mb-4 text-center"
                style={{ color: "#ED2939" }}
              >
                Visa Salarié
              </h3>
              <div className="space-y-4">
                {[
                  {
                    q: "¿Puedo cambiar de empleador con una Visa Salarié?",
                    a: "Sí, pero necesitás solicitar una nueva autorización de trabajo con el nuevo empleador. Te ayudamos con todo el proceso de cambio.",
                  },
                  {
                    q: "¿Mi familia puede acompañarme?",
                    a: "Sí, podés solicitar reagrupación familiar una vez que estés establecido en Francia. Asesoramos también en este proceso.",
                  },
                  {
                    q: "¿Cuánto tiempo puedo quedarme en Francia?",
                    a: "La duración depende de tu contrato de trabajo. Generalmente se otorga por 1 año renovable, con posibilidad de residencia permanente después de 5 años.",
                  },
                  {
                    q: "¿Necesito hablar francés?",
                    a: "No es obligatorio para la visa, pero es altamente recomendable. Muchos empleadores lo requieren y facilita tu integración.",
                  },
                ].map((faq, index: number) => (
                  <Card key={index} className="p-4">
                    <h4
                      className="text-sm font-bold mb-2"
                      style={{ color: "#002654" }}
                    >
                      {faq.q}
                    </h4>
                    <p className="text-sm text-gray-700 leading-relaxed">{faq.a}</p>
                  </Card>
                ))}
              </div>
            </div>
            
            {/* FAQ Visa Saisonier */}
            <div>
              <h3
                className="text-2xl font-bold mb-4 text-center"
                style={{ color: "#002654" }}
              >
                Visa Saisonier
              </h3>
              <div className="space-y-4">
                {[
                  {
                    q: "¿Necesito experiencia previa?",
                    a: "No siempre. Muchos trabajos agrícolas y de hostelería no requieren experiencia previa, solo disposición para trabajar.",
                  },
                  {
                    q: "¿Puedo extender mi estadía?",
                    a: "La visa es por el período del contrato (máximo 6 meses). Podés renovar para la próxima temporada o solicitar otro tipo de visa.",
                  },
                  {
                    q: "¿El empleador proporciona alojamiento?",
                    a: "Muchos empleadores sí, especialmente en agricultura y turismo. Esto se especifica en el contrato de trabajo.",
                  },
                  {
                    q: "¿Puedo llevar a mi familia?",
                    a: "La Visa Saisonier es individual. Tu familia necesitaría sus propias visas (turista u otra categoría).",
                  },
                ].map((faq, index: number) => (
                  <Card key={index} className="p-4">
                    <h4
                      className="text-sm font-bold mb-2"
                      style={{ color: "#002654" }}
                    >
                      {faq.q}
                    </h4>
                    <p className="text-sm text-gray-700 leading-relaxed">{faq.a}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
