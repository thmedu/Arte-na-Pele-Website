import React, { useState } from "react";
import { motion } from "framer-motion";
import ArtistCard from "./ArtistCard";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Artist {
  id: string;
  name: string;
  photo: string;
  specialties: string[];
  experience: string;
  sampleWorks: string[];
  bio: string;
}

interface ArtistsSectionProps {
  title?: string;
  subtitle?: string;
  artists?: Artist[];
}

const ArtistsSection = ({
  title = "Nossos Artistas",
  subtitle = "Conheça os talentosos profissionais que transformarão suas ideias em arte na pele",
  artists = [
    {
      id: "1",
      name: "Maria Silva",
      photo:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop",
      specialties: ["Realismo", "Blackwork", "Aquarela"],
      experience: "8 anos",
      sampleWorks: [
        "https://images.unsplash.com/photo-1590246814883-57764a28a6c6?q=80&w=300&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1561120589-7d6730102dc0?q=80&w=300&auto=format&fit=crop",
      ],
      bio: "Especialista em transformar ideias em arte única na pele. Formada pela Escola de Artes Visuais, com passagens por estúdios renomados em São Paulo e Nova York.",
    },
    {
      id: "2",
      name: "Carlos Mendes",
      photo:
        "https://images.unsplash.com/photo-1531891570158-e71b35a485bc?q=80&w=1000&auto=format&fit=crop",
      specialties: ["Old School", "Tribal", "Geométrico"],
      experience: "12 anos",
      sampleWorks: [
        "https://images.unsplash.com/photo-1598971861713-54ad16a7e72e?q=80&w=300&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1594067598377-478c61d59f3f?q=80&w=300&auto=format&fit=crop",
      ],
      bio: "Mestre em estilos tradicionais e contemporâneos. Participou de convenções internacionais e possui certificações em técnicas avançadas de sombreamento.",
    },
    {
      id: "3",
      name: "Ana Oliveira",
      photo:
        "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=1000&auto=format&fit=crop",
      specialties: ["Minimalista", "Fineline", "Pontilhismo"],
      experience: "5 anos",
      sampleWorks: [
        "https://images.unsplash.com/photo-1581342878583-5f71d2dac3d7?q=80&w=300&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?q=80&w=300&auto=format&fit=crop",
      ],
      bio: "Especializada em traços finos e designs minimalistas. Formada em Artes Plásticas com foco em técnicas de ilustração contemporânea.",
    },
    {
      id: "4",
      name: "Rafael Costa",
      photo:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop",
      specialties: ["Oriental", "Colorido", "Cover-up"],
      experience: "10 anos",
      sampleWorks: [
        "https://images.unsplash.com/photo-1598971861713-54ad16a7e72e?q=80&w=300&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1550537687-c91072c4792d?q=80&w=300&auto=format&fit=crop",
      ],
      bio: "Especialista em arte oriental e coberturas complexas. Estudou técnicas tradicionais no Japão e trabalhou em estúdios renomados na Ásia e Europa.",
    },
  ],
}: ArtistsSectionProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsToShow = 3;
  const maxIndex = Math.max(0, artists.length - cardsToShow);

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const visibleArtists = artists.slice(
    currentIndex,
    currentIndex + cardsToShow,
  );

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

        <div className="relative">
          {/* Navigation buttons */}
          <div className="absolute top-1/2 -left-4 md:-left-8 transform -translate-y-1/2 z-10">
            <Button
              variant="ghost"
              size="icon"
              className="h-12 w-12 rounded-full bg-zinc-800/50 text-white hover:bg-zinc-700"
              onClick={handlePrevious}
              disabled={currentIndex === 0}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
          </div>

          <div className="absolute top-1/2 -right-4 md:-right-8 transform -translate-y-1/2 z-10">
            <Button
              variant="ghost"
              size="icon"
              className="h-12 w-12 rounded-full bg-zinc-800/50 text-white hover:bg-zinc-700"
              onClick={handleNext}
              disabled={currentIndex >= maxIndex}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          {/* Artists cards */}
          <div className="overflow-hidden">
            <motion.div
              className="flex justify-center md:justify-start gap-6 md:gap-8"
              initial={{ x: 0 }}
              animate={{ x: `-${currentIndex * (350 + 32)}px` }} // 350px card width + 32px gap
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {artists.map((artist) => (
                <motion.div
                  key={artist.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  <ArtistCard
                    name={artist.name}
                    photo={artist.photo}
                    specialties={artist.specialties}
                    experience={artist.experience}
                    sampleWorks={artist.sampleWorks}
                    bio={artist.bio}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Mobile view indicator dots */}
        <div className="flex justify-center mt-8 md:hidden">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 mx-1 rounded-full ${currentIndex === index ? "bg-white" : "bg-zinc-700"}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to artist group ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArtistsSection;
