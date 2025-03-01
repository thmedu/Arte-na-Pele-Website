import React from "react";
import { Star, StarHalf } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Card, CardContent } from "./ui/card";

interface TestimonialProps {
  name: string;
  photo: string;
  rating: number;
  text: string;
  tattooType: string;
}

const TestimonialsSection = ({
  testimonials = [
    {
      name: "Carlos Oliveira",
      photo:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=150&auto=format&fit=crop",
      rating: 5,
      text: "Minha experiência no Arte na Pele foi incrível! A tatuadora entendeu perfeitamente o que eu queria e o resultado superou minhas expectativas. Ambiente limpo e acolhedor.",
      tattooType: "Realismo",
    },
    {
      name: "Ana Souza",
      photo:
        "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=150&auto=format&fit=crop",
      rating: 4.5,
      text: "Fiz minha primeira tatuagem aqui e não poderia ter escolhido lugar melhor. Profissionais atenciosos que me deixaram super à vontade durante todo o processo.",
      tattooType: "Aquarela",
    },
    {
      name: "Pedro Santos",
      photo:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop",
      rating: 5,
      text: "Já fiz várias tatuagens em diferentes estúdios, mas o Arte na Pele é sem dúvida o melhor. Profissionalismo, higiene e talento incomparáveis.",
      tattooType: "Blackwork",
    },
    {
      name: "Juliana Costa",
      photo:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop",
      rating: 4.5,
      text: "Ambiente super acolhedor e profissionais talentosos. Minha tatuagem ficou exatamente como eu imaginava. Recomendo demais!",
      tattooType: "Minimalista",
    },
  ],
  title = "O que nossos clientes dizem",
  subtitle = "Experiências reais de quem confiou sua pele à nossa arte",
}) => {
  // Function to render stars based on rating
  const renderRating = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star
          key={`star-${i}`}
          className="fill-yellow-400 text-yellow-400 w-5 h-5"
        />,
      );
    }

    // Add half star if needed
    if (hasHalfStar) {
      stars.push(
        <StarHalf
          key="half-star"
          className="fill-yellow-400 text-yellow-400 w-5 h-5"
        />,
      );
    }

    return stars;
  };

  return (
    <section className="w-full py-16 px-4 md:px-8 bg-zinc-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="bg-zinc-800 border-zinc-700 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                        <img
                          src={testimonial.photo}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-medium text-lg">
                          {testimonial.name}
                        </h3>
                        <div className="flex items-center">
                          {renderRating(testimonial.rating)}
                          <span className="ml-2 text-sm text-zinc-400">
                            {testimonial.rating.toFixed(1)}
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-zinc-300 mb-4">"{testimonial.text}"</p>
                    <div className="mt-auto">
                      <span className="inline-block px-3 py-1 bg-zinc-700 rounded-full text-xs">
                        Estilo: {testimonial.tattooType}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8 gap-2">
            <CarouselPrevious className="static translate-y-0 mr-2" />
            <CarouselNext className="static translate-y-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;
