// components/events/EventCard.tsx
"use client";

import React from "react";
import {Card, CardBody, CardFooter, CardHeader, Avatar} from "@nextui-org/react";
import NextLink from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {format, parseISO} from "date-fns";
import Balancer from "react-wrap-balancer";

interface Event {
  id: string;
  name: string;
  sportType: string;
  date: string; // ISO string
  description: string;
  image: string;
  author?: {
    name: string;
    avatar: string;
  };
}

interface EventCardProps {
  event: Event;
}

const sportTypeGradients: {[key: string]: string} = {
  football: "from-green-300 to-green-500",
  basketball: "from-yellow-300 to-yellow-500",
  tennis: "from-blue-300 to-blue-500",
  baseball: "from-red-300 to-red-500",
  hockey: "from-indigo-300 to-indigo-500",
  // Add more sport types as needed
  default: "from-gray-200 to-gray-400",
};

const EventCard: React.FC<EventCardProps> = ({event}) => {
  const gradientClasses =
    sportTypeGradients[event.sportType.toLowerCase()] || sportTypeGradients.default;

  return (
    <motion.div
      initial={{opacity: 0, y: 20}}
      transition={{duration: 0.5}}
      viewport={{once: true}}
      whileInView={{opacity: 1, y: 0}}
    >
      <Card
        isHoverable
        isPressable
        as={NextLink}
        className={`flex flex-col h-full rounded-xl border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-shadow duration-300`}
        css={{
          background: `linear-gradient(to bottom right, ${gradientClasses})`,
        }}
        href={`/events/${event.id}`}
        variant="bordered"
      >
        {/* Card Header */}
        <CardHeader className="flex justify-between items-center p-4">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
            <Balancer>{event.name}</Balancer>
          </h3>
        </CardHeader>

        {/* Card Body */}
        <CardBody className="p-0 relative h-40">
          <Image
            alt={event.name}
            className="rounded-t-xl"
            layout="fill"
            objectFit="cover"
            sizes="(max-width: 640px) 100vw,
                   (max-width: 768px) 50vw,
                   (max-width: 1024px) 33.33vw,
                   25vw"
            src={event.image}
          />
        </CardBody>

        {/* Card Content */}
        <div className="p-4 flex-grow">
          <p className="text-base text-gray-700 dark:text-gray-300 mt-2 truncate">
            {event.description}
          </p>
        </div>

        {/* Card Footer */}
        <CardFooter className="flex justify-between items-center p-4 bg-black/40 dark:bg-white/20 backdrop-blur-md rounded-b-xl">
          <time className="text-sm text-gray-500 dark:text-gray-400" dateTime={event.date}>
            {format(parseISO(event.date), "LLLL d, yyyy")}
          </time>
          {event.author && (
            <Avatar
              alt={event.author.name}
              size="sm"
              src={event.author.avatar}
              text={event.author.name}
            />
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default EventCard;
