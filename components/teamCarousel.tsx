"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export interface TeamMember {
  name: string;
  role: string;
  description?: string;
  image: string;
  id?: string | number;
}

interface TeamCarouselProps {
  team: TeamMember[];
  title?: string;
}

export default function TeamCarousel({
  team,
  title = "Meet Our Team",
}: TeamCarouselProps) {
  return (
    <section className="bg-background h-screen text-foreground py-19 px-4">
      <h2 className="text-4xl py-3 md:text-5xl font-semibold text-center mb-12 text-balance">
        {title}
      </h2>

      <div className="max-w-7xl mx-auto relative">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          slidesPerView={3}
          spaceBetween={24}
          loop={true}
          centeredSlides={true}
          speed={900}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={true}
          breakpoints={{
            320: {
              slidesPerView: 1.3,
              spaceBetween: 16,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
          }}
          className="team-swiper !pb-20"
        >
          {team.map((member) => (
            <SwiperSlide key={member.id || member.name}>
              <div className="team-card rounded-lg overflow-hidden shadow-md transition-all duration-500 hover:shadow-xl max-w-sm">
                <div className="relative w-full aspect-[3/4]">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 300px, 320px"
                    priority={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                  <div className="absolute inset-0 flex flex-col justify-end p-5">
                    <h3 className="text-4xl md:text-3xl font-bold text-white mb-2 leading-tight">
                      {member.name}
                    </h3>
                    <p className=" mb-2 text-sm md:text-sm font-semibold uppercase tracking-wide">
                      {member.role}
                    </p>
                    {member.description && (
                      <p className="text-white/75 text-xs md:text-sm leading-relaxed line-clamp-2">
                        {member.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
