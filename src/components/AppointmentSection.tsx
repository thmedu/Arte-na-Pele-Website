import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { CalendarIcon, Send, Clock, MapPin } from "lucide-react";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Checkbox } from "./ui/checkbox";

const formSchema = z.object({
  name: z.string().min(2, { message: "Nome deve ter pelo menos 2 caracteres" }),
  email: z.string().email({ message: "Email inválido" }),
  phone: z.string().min(10, { message: "Telefone inválido" }),
  serviceType: z.string({
    required_error: "Selecione um tipo de serviço",
  }),
  preferredDate: z.string().optional(),
  preferredTime: z.string().optional(),
  acceptTerms: z.boolean().refine((val) => val === true, {
    message: "Você precisa aceitar os termos para continuar",
  }),
  message: z.string().optional(),
});

interface AppointmentSectionProps {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
}

const AppointmentSection = ({
  title = "Agende sua Consulta",
  subtitle = "Dê o primeiro passo para transformar sua ideia em arte. Nossa equipe entrará em contato em até 24 horas.",
  backgroundImage = "https://images.unsplash.com/photo-1585681614545-cd8c7b9d92b3?q=80&w=2070&auto=format&fit=crop",
}: AppointmentSectionProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      serviceType: "",
      preferredDate: "",
      preferredTime: "",
      acceptTerms: false,
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real implementation, this would send the form data to a server
    console.log(values);
    alert("Formulário enviado com sucesso! Entraremos em contato em breve.");
    form.reset();
  }

  return (
    <section className="relative w-full h-[500px] bg-zinc-900 text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/70 z-10" />
        <img
          src={backgroundImage}
          alt="Tattoo studio background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-20 container mx-auto px-4 py-12 h-full flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-zinc-300 mb-6 max-w-md">{subtitle}</p>
          <div className="hidden md:block space-y-4">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                <CalendarIcon className="w-6 h-6 text-red-500" />
              </div>
              <div>
                <h3 className="font-medium">Horário Flexível</h3>
                <p className="text-sm text-zinc-400">
                  Atendemos de segunda a sábado, das 10h às 20h
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                <Clock className="w-6 h-6 text-red-500" />
              </div>
              <div>
                <h3 className="font-medium">Consulta Gratuita</h3>
                <p className="text-sm text-zinc-400">
                  Primeira consulta sem compromisso para discutir seu projeto
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-red-500" />
              </div>
              <div>
                <h3 className="font-medium">Localização Central</h3>
                <p className="text-sm text-zinc-400">
                  Estúdio localizado no centro da cidade, fácil acesso
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="w-full md:w-1/2 max-w-md bg-zinc-900/90 p-6 rounded-lg border border-zinc-800">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Nome</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Seu nome completo"
                        {...field}
                        className="bg-zinc-800 border-zinc-700"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="seu@email.com"
                          {...field}
                          className="bg-zinc-800 border-zinc-700"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Telefone</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="(00) 00000-0000"
                          {...field}
                          className="bg-zinc-800 border-zinc-700"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="serviceType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">
                      Tipo de Serviço
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="bg-zinc-800 border-zinc-700">
                          <SelectValue placeholder="Selecione o tipo de tatuagem" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-zinc-800 border-zinc-700 text-white">
                        <SelectItem value="consultation">
                          Consulta Inicial
                        </SelectItem>
                        <SelectItem value="small">Tatuagem Pequena</SelectItem>
                        <SelectItem value="medium">Tatuagem Média</SelectItem>
                        <SelectItem value="large">Tatuagem Grande</SelectItem>
                        <SelectItem value="coverup">Cobertura</SelectItem>
                        <SelectItem value="custom">
                          Projeto Personalizado
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="preferredDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">
                        Data Preferida
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="date"
                          placeholder="Escolha uma data"
                          {...field}
                          className="bg-zinc-800 border-zinc-700"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="preferredTime"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">
                        Horário Preferido
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="bg-zinc-800 border-zinc-700">
                            <SelectValue placeholder="Selecione um horário" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-zinc-800 border-zinc-700 text-white">
                          <SelectItem value="morning">
                            Manhã (10h-12h)
                          </SelectItem>
                          <SelectItem value="afternoon">
                            Tarde (13h-17h)
                          </SelectItem>
                          <SelectItem value="evening">
                            Noite (18h-20h)
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">
                      Mensagem (opcional)
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Descreva sua ideia de tatuagem ou qualquer detalhe importante..."
                        className="bg-zinc-800 border-zinc-700 min-h-[80px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="acceptTerms"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md p-4 bg-zinc-800/50">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className="data-[state=checked]:bg-red-500 data-[state=checked]:border-red-500"
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="text-white">
                        Aceito os termos e condições do estúdio
                      </FormLabel>
                      <FormDescription className="text-zinc-400 text-xs">
                        Ao agendar, você concorda com nossa política de
                        cancelamento e termos de serviço.
                      </FormDescription>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white"
              >
                <Send className="mr-2 h-4 w-4" /> Agendar Consulta
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;
