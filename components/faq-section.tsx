import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { MessageCircle } from "lucide-react"

const faqs = [
  {
    question: "¿Cuánto tiempo tarda el proceso de visa?",
    answer:
      "El tiempo varía según el tipo de visa. Una visa de trabajo (Salarié) puede tardar entre 2-4 meses, mientras que una visa de estudiante (Étudiant) suele procesarse en 1-3 meses.",
  },
  {
    question: "¿Qué documentos necesito para solicitar una visa francesa?",
    answer:
      "Los documentos varían según el tipo de visa, pero generalmente incluyen: pasaporte válido, fotos tipo carnet, comprobante de alojamiento, seguro médico internacional, estados de cuenta bancarios, y documentos específicos según tu visa.",
  },
  {
    question: "¿Ofrecen garantía de aprobación de visa?",
    answer:
      "Si bien no podemos garantizar la aprobación, nuestra experiencia nos permite maximizar tus posibilidades de éxito. Revisamos minuciosamente cada solicitud antes de presentarla.",
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ color: "#002654" }}>
            PRESTONAS FRECUENTES (FAQ)
          </h2>
        </div>

        <div className="text-center mb-12">
          <a
            href="https://wa.me/33601526171"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-white text-lg transition-opacity hover:opacity-90 shadow-lg"
            style={{ backgroundColor: "#ED2939" }}
          >
            <MessageCircle className="w-6 h-6" />
            WhatsApp: 33 6 01 52 61 71
          </a>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white border-2 rounded-lg px-6 data-[state=open]:border-opacity-100"
              style={{ borderColor: "rgba(0, 38, 84, 0.1)" }}
            >
              <AccordionTrigger
                className="text-left font-semibold hover:no-underline py-6"
                style={{ color: "#002654" }}
              >
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 leading-relaxed pb-6">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
