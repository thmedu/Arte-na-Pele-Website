import React from "react";
import { motion } from "framer-motion";
import { Pencil, Calendar, Palette, Smile } from "lucide-react";

interface ProcessStep {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface ProcessSectionProps {
  title?: string;
  subtitle?: string;
  steps?: ProcessStep[];
}

const ProcessSection = ({
  title = "Como Funciona",
  subtitle = "Conheça o processo para transformar sua ideia em arte na pele",
  steps = [
    {
      icon: <Pencil className="h-8 w-8 text-red-500" />,
      title: "Consulta e Design",
      description:
        "Conversamos sobre sua ideia, referências e expectativas. Nossos artistas criam um design personalizado que atenda aos seus desejos.",
    },
    {
      icon: <Calendar className="h-8 w-8 text-red-500" />,
      title: "Agendamento",
      description:
        "Após aprovar o design, agendamos sua sessão em um horário conveniente. Um sinal é pago para garantir sua reserva.",
    },
    {
      icon: <Palette className="h-8 w-8 text-red-500" />,
      title: "Sessão de Tatuagem",
      description:
        "No dia agendado, realizamos sua tatuagem com os mais altos padrões de higiene e qualidade, garantindo sua segurança e conforto.",
    },
    {
      icon: <Smile className="h-8 w-8 text-red-500" />,
      title: "Cuidados e Acompanhamento",
      description:
        "Fornecemos instruções detalhadas para os cuidados pós-tatuagem e oferecemos acompanhamento durante o processo de cicatrização.",
    },
  ],
}: ProcessSectionProps) => {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="w-20 h-20 rounded-full bg-zinc-800 flex items-center justify-center mb-6">
                  {step.icon}
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-zinc-800 -z-10 transform -translate-x-10">
                    <div className="absolute top-1/2 left-1/2 w-3 h-3 rounded-full bg-red-500 transform -translate-y-1/2"></div>
                  </div>
                )}
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-zinc-400">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
