import React from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../../components/ui/carousel";
import Partners from "./Partners";

const Hero: React.FC = () => {
  const featureCards = [
    {
      icon: "https://res.cloudinary.com/dnyouhvwj/image/upload/v1750176559/landing_banners_icon_1_qzbtcb.png",
      alt: "Innovation icon",
      text: "Fostering innovation through collaborative research initiatives.",
    },
    {
      icon: "https://res.cloudinary.com/dnyouhvwj/image/upload/v1750176560/landing_banners_icon_2_kciapm.png",
      alt: "Education icon",
      text: "Empowering communities with AI education and training.",
    },
    {
      icon: "https://res.cloudinary.com/dnyouhvwj/image/upload/v1750176561/landing_banners_icon_3_ymi0p8.png",
      alt: "Ethics icon",
      text: "Promoting ethical AI practices and advocacy.",
    },
  ];

  const heroImgs = [
    "https://res.cloudinary.com/dnyouhvwj/image/upload/v1750176578/landing_img_1_hvbbeq.png",
    "https://res.cloudinary.com/dnyouhvwj/image/upload/v1751235765/landing-lslide-img2_afia6a.jpg",
    "https://res.cloudinary.com/dnyouhvwj/image/upload/v1751236202/landing-lslide-img5_mzmwmp.jpg",
    "https://res.cloudinary.com/dnyouhvwj/image/upload/v1751235758/landing-lslide-img4_pep8hc.jpg",
    "https://res.cloudinary.com/dnyouhvwj/image/upload/v1751236507/landing-lslide-img7_qhrdry.jpg",
  ];

  return (
    <section className="w-full flex flex-col justify-center items-center container">
      <div className="relative bg-transparent overflow-hidden pb-8">
        {/* Container for the carousel and the overlay */}
        <div className="relative w-full h-full">
          {/* Enhanced gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/75 to-black/70 z-10 rounded-b-[30px] shadow-xl" />

          {/* Additional text backdrop for critical readability */}
          <div className="absolute inset-0 z-[11] bg-gradient-to-b from-black/30 via-transparent to-black/40 rounded-b-[30px]" />

          {/* Image Carousel */}
          <Carousel
            className="w-full h-full carousel-container"
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 6000,
                stopOnInteraction: false,
              }),
            ]}
          >
            <CarouselContent>
              {heroImgs.map((img, index) => (
                <CarouselItem key={index} className="carousel-item-animated">
                  <div className="relative overflow-hidden rounded-b-[30px]">
                    <Image
                      src={img}
                      alt={`City skyline at night ${index + 1}`}
                      width={1920}
                      height={1080}
                      className="w-full h-full object-cover max-h-[300px] sm:max-h-[400px] md:max-h-[500px] lg:max-h-[600px] xl:max-h-[640px] rounded-b-[30px] 
                               transform transition-all duration-1000 ease-in-out
                               hover:scale-105 carousel-image"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Enhanced Main Hero Content with better text readability */}
          <div className="absolute inset-0 flex items-center justify-center z-[12]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
              {/* Text container with subtle backdrop */}
              <div className="relative">
                {/* Subtle text backdrop for enhanced readability */}
                <div className="absolute inset-0 bg-black/20 rounded-2xl blur-xl scale-110 -z-10" />

                <h1
                  className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-3 sm:mb-4 md:mb-6 lg:mb-8 text-white leading-tight tracking-tight
                             animate-fade-in-up animation-delay-200 drop-shadow-2xl"
                  style={{
                    textShadow: `
                      0 0 20px rgba(0, 0, 0, 0.8),
                      2px 2px 4px rgba(0, 0, 0, 0.9),
                      0 0 40px rgba(0, 0, 0, 0.5)
                    `,
                  }}
                >
                  Advancing{" "}
                  <span
                    className="text-[#85D1F1] animate-glow font-extrabold"
                    style={{
                      textShadow: `
                        0 0 20px rgba(133, 209, 241, 0.6),
                        2px 2px 4px rgba(0, 0, 0, 0.9),
                        0 0 40px rgba(133, 209, 241, 0.3)
                      `,
                    }}
                  >
                    AI
                  </span>{" "}
                  for
                  <br />
                  <span className="font-accent animate-fade-in-up animation-delay-400">
                    Social Good
                  </span>
                  <br />
                  <span className="animate-fade-in-up animation-delay-600">
                    Together
                  </span>
                </h1>

                <p
                  className="font-sans text-sm sm:text-base md:text-lg lg:text-xl text-gray-100 mb-6 sm:mb-8 md:mb-10 lg:mb-12 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto leading-relaxed
                            animate-fade-in-up animation-delay-800 font-medium"
                  style={{
                    textShadow: `
                      1px 1px 3px rgba(0, 0, 0, 0.8),
                      0 0 15px rgba(0, 0, 0, 0.6)
                    `,
                  }}
                >
                  Collaborative research, innovation, and education in
                  artificial intelligence for a better tomorrow.
                </p>
              </div>
            </div>
          </div>

          {/* Enhanced Feature Cards with improved readability */}
          <div className="absolute -bottom-20 sm:-bottom-16 md:-bottom-12 lg:-bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full max-w-xs sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl px-4 sm:px-6">
            {featureCards.map((card, index) => (
              <div
                key={index}
                className={`bg-white/95 backdrop-blur-md rounded-xl p-3 sm:p-4 flex items-center border border-gray-200/50 shadow-lg 
                          transition-all duration-500 hover:shadow-xl hover:bg-white hover:-translate-y-1 
                          w-full animate-slide-up
                          animation-delay-${(index + 1) * 200}`}
                style={{
                  animationDelay: `${(index + 1) * 200}ms`,
                }}
              >
                <div
                  className="bg-[#85D1F1] rounded-full p-2 sm:p-3 mr-3 sm:mr-4 flex-shrink-0 
                              transition-transform duration-300 hover:rotate-12 hover:scale-110 shadow-md"
                >
                  <Image
                    src={card.icon}
                    alt={card.alt}
                    width={24}
                    height={24}
                    className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                  />
                </div>
                <p className="text-gray-800 text-xs sm:text-sm font-semibold leading-snug">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Spacing element - responsive */}
        <div className="mt-24 sm:mt-20 md:mt-18 lg:mt-16"></div>

        {/* Partner Logos Section */}
        <Partners />
      </div>
    </section>
  );
};

export default Hero;
