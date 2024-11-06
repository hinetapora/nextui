"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";

interface Event {
  id: string;
  name: string;
  date: string;
  description: string;
  image: string;
}

interface RecommendedEventsProps {
  events: Event[];
}

const RecommendedEvents: React.FC<RecommendedEventsProps> = ({events}) => {
  const [emblaRef] = useEmblaCarousel();

  return (
    <div ref={emblaRef} className="embla overflow-hidden">
      <div className="embla__container flex">
        {events.map((event) => (
          <div key={event.id} className="embla__slide min-w-full flex flex-col items-center">
            <img
              alt={event.name}
              className="w-full h-40 object-cover rounded-md"
              src={event.image}
            />
            <div className="text-center mt-2">
              <h3 className="text-lg font-semibold">{event.name}</h3>
              <p className="text-sm text-gray-500">{event.date}</p>
              <p className="text-sm">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedEvents;
