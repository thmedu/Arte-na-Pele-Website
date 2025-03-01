import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  faqs?: FAQItem[];
}

const FAQSection = ({
  title = "Perguntas Frequentes",
  subtitle = "Tudo o que você precisa saber antes de fazer sua tatuagem",
  faqs = [
    {
      question: "Qual a idade mínima para fazer uma tatuagem?",
      answer:
        "A idade mínima para fazer uma tatuagem é 18 anos. Para menores de idade, é necessário estar acompanhado dos pais ou responsáveis legais, que devem assinar um termo de autorização e apresentar documentação.",
    },
    {
      question: "Dói muito fazer uma tatuagem?",
      answer:
        "A dor é relativa e varia de pessoa para pessoa. Algumas áreas do corpo são mais sensíveis que outras. Nossos profissionais trabalham para minimizar o desconforto e podem aplicar anestésicos tópicos quando necessário.",
    },
    {
      question: "Quanto tempo leva para cicatrizar?",
      answer:
        "O processo de cicatrização superficial leva em média de 15 a 30 dias, mas a cicatrização completa pode levar até 3 meses. Durante este período, é importante seguir todas as recomendações de cuidados pós-tatuagem.",
    },
    {
      question: "Posso tomar sol após fazer uma tatuagem?",
      answer:
        "Não é recomendado expor a tatuagem ao sol durante o processo de cicatrização. Após cicatrizada, sempre use protetor solar com FPS alto para preservar as cores e os detalhes da sua tatuagem.",
    },
    {
      question: "Como é feito o pagamento?",
      answer:
        "Aceitamos dinheiro, PIX, cartões de crédito e débito. Para projetos maiores, trabalhamos com um sistema de sinal (30% do valor) no agendamento e o restante no dia da sessão.",
    },
    {
      question: "Vocês fazem cobertura de tatuagens antigas?",
      answer:
        "Sim, realizamos coberturas de tatuagens antigas ou mal executadas. Este tipo de trabalho requer uma consulta prévia para avaliarmos a viabilidade e planejarmos o melhor design para a cobertura.",
    },
    {
      question: "Preciso marcar horário com antecedência?",
      answer:
        "Sim, recomendamos agendar sua sessão com antecedência. Para consultas e orçamentos, você pode nos visitar sem agendamento durante nosso horário comercial ou utilizar nosso formulário de contato online.",
    },
    {
      question: "Quais cuidados devo ter após a tatuagem?",
      answer:
        "Após a tatuagem, você receberá instruções detalhadas sobre os cuidados necessários. Em geral, é importante manter a área limpa, evitar exposição ao sol, piscinas e mar, não coçar e aplicar o hidratante recomendado pelo tatuador.",
    },
  ],
}: FAQSectionProps) => {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-zinc-900 text-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {title}
          </motion.h2>
          <motion.p
            className="text-zinc-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {subtitle}
          </motion.p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <AccordionItem
                value={`item-${index}`}
                className="border-zinc-700"
              >
                <AccordionTrigger className="text-left text-white hover:text-zinc-300">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-zinc-300">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
