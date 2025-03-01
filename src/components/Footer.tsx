import React from "react";
import {
  Instagram,
  Facebook,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Button } from "./ui/button";

interface FooterProps {
  studioName?: string;
  address?: string;
  phone?: string;
  email?: string;
  socialLinks?: {
    instagram?: string;
    facebook?: string;
    twitter?: string;
  };
}

const Footer = ({
  studioName = "Arte na Pele",
  address = "Rua das Artes, 123 - Centro, São Paulo - SP",
  phone = "(11) 99999-9999",
  email = "contato@artenapele.com.br",
  socialLinks = {
    instagram: "https://instagram.com/artenapele",
    facebook: "https://facebook.com/artenapele",
    twitter: "https://twitter.com/artenapele",
  },
}: FooterProps) => {
  return (
    <footer className="w-full bg-zinc-900 text-white py-12 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Studio Info */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-bold">{studioName}</h3>
          <p className="text-zinc-400 max-w-xs">
            Transformando ideias em arte única na sua pele desde 2010.
          </p>
          <div className="flex space-x-4 mt-4">
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-300 transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a
              href={socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-300 transition-colors"
            >
              <Facebook size={20} />
            </a>
            <a
              href={socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-300 transition-colors"
            >
              <Twitter size={20} />
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-bold">Contato</h3>
          <div className="flex flex-col space-y-3">
            <div className="flex items-center space-x-3">
              <MapPin size={18} className="text-zinc-400" />
              <span className="text-zinc-300 text-sm">{address}</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone size={18} className="text-zinc-400" />
              <span className="text-zinc-300 text-sm">{phone}</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail size={18} className="text-zinc-400" />
              <span className="text-zinc-300 text-sm">{email}</span>
            </div>
          </div>
        </div>

        {/* Hours & Newsletter */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-bold">Horário de Funcionamento</h3>
          <div className="text-zinc-300 text-sm">
            <p>Segunda a Sexta: 10h às 20h</p>
            <p>Sábado: 10h às 18h</p>
            <p>Domingo: Fechado</p>
          </div>

          <div className="mt-4">
            <h4 className="text-lg font-medium mb-2">Newsletter</h4>
            <div className="flex">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="bg-zinc-800 text-white px-3 py-2 rounded-l-md w-full focus:outline-none focus:ring-1 focus:ring-zinc-500"
              />
              <Button
                variant="default"
                className="rounded-l-none bg-zinc-700 hover:bg-zinc-600"
              >
                Assinar
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-zinc-800 text-center text-zinc-500 text-sm">
        <p>
          © {new Date().getFullYear()} {studioName}. Todos os direitos
          reservados. Desenvolvido por{" "}
          <a
            href="https://github.com/odevthoma"
            className="text-red-500 hover:text-red-400 transition-colors"
          >
            @odevthoma
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
