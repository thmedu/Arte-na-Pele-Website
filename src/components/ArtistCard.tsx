import React from "react";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";

interface ArtistCardProps {
  name: string;
  photo: string;
  specialties: string[];
  experience: string;
  sampleWorks: string[];
  bio: string;
}

const ArtistCard = ({
  name = "Maria Silva",
  photo = "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop",
  specialties = ["Realismo", "Blackwork", "Aquarela"],
  experience = "8 anos",
  sampleWorks = [
    "https://images.unsplash.com/photo-1590246814883-57764a28a6c6?q=80&w=300&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1562962230-16e4623d36e6?q=80&w=300&auto=format&fit=crop",
  ],
  bio = "Especialista em transformar ideias em arte única na pele. Formada pela Escola de Artes Visuais, com passagens por estúdios renomados em São Paulo e Nova York.",
}: ArtistCardProps) => {
  return (
    <Card className="w-[350px] h-[500px] overflow-hidden bg-zinc-900 text-white border-zinc-700 hover:border-zinc-500 transition-all duration-300 flex flex-col">
      <div className="relative h-[200px] overflow-hidden">
        <img
          src={photo}
          alt={`Tatuador ${name}`}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
          <h3 className="text-xl font-bold">{name}</h3>
          <p className="text-sm text-zinc-300">{experience} de experiência</p>
        </div>
      </div>

      <CardContent className="flex-1 flex flex-col justify-between p-4">
        <div>
          <div className="flex flex-wrap gap-2 mb-4">
            {specialties.map((specialty, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-zinc-800 hover:bg-zinc-700"
              >
                {specialty}
              </Badge>
            ))}
          </div>

          <p className="text-sm text-zinc-300 mb-4">{bio}</p>
        </div>

        <div>
          <h4 className="text-sm font-medium mb-2">Trabalhos recentes:</h4>
          <div className="flex gap-2">
            {sampleWorks.map((work, index) => (
              <div
                key={index}
                className="w-[120px] h-[80px] rounded-md overflow-hidden"
              >
                <img
                  src={work}
                  alt={`Trabalho de ${name}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ArtistCard;
