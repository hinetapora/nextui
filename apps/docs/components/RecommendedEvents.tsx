"use client";

import React, {useEffect} from "react";
import useEmblaCarousel from "embla-carousel-react";
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";

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
  const [emblaRef, embla] = useEmblaCarousel({
    loop: true,
    align: "start",
    dragFree: true,
  });

  useEffect(() => {
    if (embla) {
      embla.reInit();
    }
  }, [embla]);

  // Function to format the date
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {year: "numeric", month: "long", day: "numeric"};
    const date = new Date(dateString);

    return new Intl.DateTimeFormat("en-US", options).format(date);
  };

  return (
    <div ref={emblaRef} className="embla overflow-hidden mx-auto mt-6 max-w-6xl">
      <div className="embla__container flex">
        {events.map((event) => (
          <div
            key={event.id}
            className="embla__slide flex-shrink-0 p-2"
            style={{
              flex: "0 0 40%", // Each card takes up 40% of the container's width
              marginRight: "10px", // Space between cards
            }}
          >
            <Card className="w-full shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="flex justify-center">
                <Image
                  alt={event.name}
                  className="rounded-t-md w-full"
                  src={event.image}
                  style={{objectFit: "cover", height: "160px"}}
                />
              </CardHeader>
              <CardBody className="text-center p-4">
                <h3 className="text-lg font-semibold">{event.name}</h3>
                <p className="text-sm text-gray-600">{formatDate(event.date)}</p>
                <p className="text-sm mt-2 text-gray-800">{event.description}</p>
              </CardBody>
              {/* Removed CardFooter with the "Learn More" button */}
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedEvents;
