import React, { useState } from 'react';
import { CalendarIcon, Send, Clock, MapPin } from 'lucide-react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

// Form Schema with more robust validation
const formSchema = z.object({
  name: z.string().trim().min(2, { message: "Nome deve ter pelo menos 2 caracteres" }),
  email: z.string().trim().email({ message: "Email inválido" }),
  phone: z.string()
    .trim()
    .regex(/^\(\d{2}\)\s*\d{4,5}-\d{4}$/, { message: "Telefone inválido. Use (00) 00000-0000" }),
  serviceType: z.enum([
    'consultation', 
    'small', 
    'medium', 
    'large', 
    'coverup', 
    'custom'
  ], { 
    errorMap: () => ({ message: "Selecione um tipo de serviço" }) 
  }),
  preferredDate: z.string().optional(),
  preferredTime: z.string().optional(),
  message: z.string().max(500, { message: "Mensagem muito longa" }).optional(),
  acceptTerms: z.boolean().refine(val => val, {
    message: "Você precisa aceitar os termos para continuar"
  })
});

// Centralized service type options
const SERVICE_TYPES = [
  { value: 'consultation', label: 'Consulta Inicial' },
  { value: 'small', label: 'Tatuagem Pequena' },
  { value: 'medium', label: 'Tatuagem Média' },
  { value: 'large', label: 'Tatuagem Grande' },
  { value: 'coverup', label: 'Cobertura' },
  { value: 'custom', label: 'Projeto Personalizado' }
];

const AppointmentSection = ({
  title = "Agende sua Consulta",
  subtitle = "Dê o primeiro passo para transformar sua ideia em arte. Nossa equipe entrará em contato em até 24 horas.",
  backgroundImage = "/hero/hero.jpg"
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      serviceType: "",
      preferredDate: "",
      preferredTime: "",
      message: "",
      acceptTerms: false
    }
  });

  const onSubmit = async (values) => {
    setIsSubmitting(true);
    try {
      // Simulated async submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log(values);
      form.reset();
      alert("Formulário enviado com sucesso! Entraremos em contato em breve.");
    } catch (error) {
      alert("Erro ao enviar formulário. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Reusable feature item component
  const FeatureItem = ({ icon: Icon, title, description }) => (
    <div className="flex items-center gap-5 mb-6 group">
      <div className="w-14 h-14 rounded-xl bg-red-900/30 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group-hover:bg-red-800/50 border border-red-800/30 shadow-lg">
        <Icon className="w-7 h-7 text-red-400 group-hover:text-white transition-colors" />
      </div>
      <div>
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-zinc-300 text-sm">{description}</p>
      </div>
    </div>
  );

  const FormInput = ({ id, label, type = "text", error, ...props }) => (
    <div className="space-y-1">
      <label htmlFor={id} className="block text-sm font-medium text-zinc-300">
        {label}
      </label>
      <input
        id={id}
        type={type}
        className={`w-full bg-zinc-800/70 border ${error ? 'border-red-500' : 'border-zinc-700'} rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500/50 transition-all`}
        {...props}
      />
      {error && (
        <p className="text-red-500 text-xs mt-1">{error.message}</p>
      )}
    </div>
  );

  return (
    <section className="relative w-full min-h-[700px] bg-zinc-900 text-white overflow-hidden py-16">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/70 z-10" />
        <img
          src={backgroundImage}
          alt="Tattoo studio background"
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-20 container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="text-center md:text-left">
          <div className="inline-block px-4 py-1 bg-red-900/30 backdrop-blur-sm rounded-full text-red-400 text-sm font-medium mb-6 border border-red-800/30">
            Estúdio de Arte Corporal
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{title}</h2>
          <p className="text-zinc-300 mb-10 max-w-md text-lg">{subtitle}</p>
          <div className="hidden md:block space-y-2">
            <FeatureItem 
              icon={CalendarIcon}
              title="Horário Flexível"
              description="Atendemos de segunda a sábado, das 10h às 20h"
            />
            <FeatureItem 
              icon={Clock}
              title="Consulta Gratuita"
              description="Primeira consulta sem compromisso para discutir seu projeto"
            />
            <FeatureItem 
              icon={MapPin}
              title="Localização Central"
              description="Estúdio localizado no centro da cidade, fácil acesso"
            />
          </div>
        </div>

        {/* Form */}
        <div className="w-full bg-zinc-900/80 backdrop-blur-md p-8 rounded-2xl border border-zinc-800/50 shadow-xl">
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <FormInput 
              id="name"
              label="Nome Completo" 
              placeholder="Seu nome"
              {...form.register("name")}
              error={form.formState.errors.name}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <FormInput 
                id="email"
                label="Email" 
                type="email"
                placeholder="seu@email.com"
                {...form.register("email")}
                error={form.formState.errors.email}
              />
              
              <FormInput 
                id="phone"
                label="Telefone" 
                placeholder="(00) 00000-0000"
                {...form.register("phone")}
                error={form.formState.errors.phone}
              />
            </div>
            
            <div className="space-y-1">
              <label htmlFor="serviceType" className="block text-sm font-medium text-zinc-300">
                Tipo de Serviço
              </label>
              <select
                id="serviceType"
                className={`w-full bg-zinc-800/70 border ${form.formState.errors.serviceType ? 'border-red-500' : 'border-zinc-700'} rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500/50 transition-all`}
                {...form.register("serviceType")}
              >
                <option value="">Selecione o tipo de serviço</option>
                {SERVICE_TYPES.map(type => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
              {form.formState.errors.serviceType && (
                <p className="text-red-500 text-xs mt-1">{form.formState.errors.serviceType.message}</p>
              )}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <FormInput 
                id="preferredDate"
                label="Data Preferida" 
                type="date"
                {...form.register("preferredDate")}
                error={form.formState.errors.preferredDate}
              />
              
              <FormInput 
                id="preferredTime"
                label="Horário Preferido" 
                type="time"
                {...form.register("preferredTime")}
                error={form.formState.errors.preferredTime}
              />
            </div>
            
            <div className="space-y-1">
              <label htmlFor="message" className="block text-sm font-medium text-zinc-300">
                Detalhes da Tatuagem (opcional)
              </label>
              <textarea
                id="message"
                rows={3}
                className={`w-full bg-zinc-800/70 border ${form.formState.errors.message ? 'border-red-500' : 'border-zinc-700'} rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500/50 transition-all resize-none`}
                placeholder="Descreva sua ideia, tamanho, localização no corpo, e referências"
                {...form.register("message")}
              />
              {form.formState.errors.message && (
                <p className="text-red-500 text-xs mt-1">{form.formState.errors.message.message}</p>
              )}
            </div>
            
            <div className="flex items-start gap-3">
              <input
                id="acceptTerms"
                type="checkbox"
                className="mt-1 h-4 w-4 rounded border-zinc-700 bg-zinc-800 text-red-600 focus:ring-red-500/50"
                {...form.register("acceptTerms")}
              />
              <label htmlFor="acceptTerms" className="text-sm text-zinc-300">
                Concordo com os <a href="#" className="text-red-400 hover:text-red-300 underline">termos e condições</a> e política de privacidade
              </label>
            </div>
            {form.formState.errors.acceptTerms && (
              <p className="text-red-500 text-xs mt-1">{form.formState.errors.acceptTerms.message}</p>
            )}
            
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-3 px-6 rounded-lg flex items-center justify-center font-medium text-base shadow-lg hover:shadow-red-600/20 transition-all duration-300 disabled:opacity-70"
            >
              {isSubmitting ? 'Enviando...' : 'Agendar Consulta'}
              {!isSubmitting && <Send className="ml-2 h-5 w-5" />}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;