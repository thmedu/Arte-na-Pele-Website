import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";

interface PricingPlan {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}

interface PricingSectionProps {
  title?: string;
  subtitle?: string;
  plans?: PricingPlan[];
}

const PricingSection = ({
  title = "Nossos Valores",
  subtitle = "Investimento em arte que durará para sempre",
  plans = [
    {
      id: "basic",
      name: "Tatuagem Pequena",
      price: "R$150",
      description: "Ideal para designs simples e pequenos",
      features: [
        "Até 7cm",
        "Preto e cinza",
        "Consulta prévia",
        "Garantia de retoque",
        "Cuidados pós-tatuagem",
      ],
    },
    {
      id: "standard",
      name: "Tatuagem Média",
      price: "R$350",
      description: "Perfeito para designs mais elaborados",
      features: [
        "Até 15cm",
        "Colorido ou preto e cinza",
        "Consulta personalizada",
        "Garantia de retoque",
        "Kit de cuidados pós-tatuagem",
        "Desconto em próximas sessões",
      ],
      popular: true,
    },
    {
      id: "premium",
      name: "Projeto Personalizado",
      price: "A partir de R$600",
      description: "Para projetos exclusivos e complexos",
      features: [
        "Tamanho personalizado",
        "Colorido ou preto e cinza",
        "Design exclusivo",
        "Múltiplas sessões",
        "Garantia de retoque",
        "Kit premium de cuidados",
        "Desconto em próximas tatuagens",
      ],
    },
  ],
}: PricingSectionProps) => {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <Card
                className={`h-full flex flex-col bg-zinc-900 border-zinc-700 ${plan.popular ? "border-red-500 relative" : ""}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Mais Popular
                  </div>
                )}
                <CardHeader className="pb-0">
                  <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                  <div className="mt-2">
                    <span className="text-3xl font-bold">{plan.price}</span>
                  </div>
                  <p className="text-zinc-400 mt-2">{plan.description}</p>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-3 mt-4">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                        <span className="text-zinc-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className={`w-full ${plan.popular ? "bg-red-600 hover:bg-red-700" : "bg-zinc-800 hover:bg-zinc-700"}`}
                  >
                    Escolher Plano
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
