// components/marketing/EventsSchedule.tsx
"use client";

import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Link} from "@nextui-org/react";
import NextLink from "next/link";
import Image from "next/image";
import {motion, AnimatePresence} from "framer-motion";
import CountdownTimer from "./CountdownTimer";
import {useIsMounted} from "@/hooks/use-is-mounted";

// Import the utility functions or components
import {title, subtitle, titleWrapper, sectionWrapper} from "@/components/primitives";

interface Event {
  id: string;
  name: string;
  sportType: string;
  date: string;
  description: string;
  image: string;
  instruction: string | null;
}

interface EventsScheduleProps {
  events: Event[];
}

export const EventsSchedule = ({events}: EventsScheduleProps) => {
  const isMounted = useIsMounted();

  if (events.length === 0) {
    return <div>No events available</div>;
  }

  return (
    <>
      {/* Add the new section at the top */}
      <section className={sectionWrapper({class: "mt-6 lg:mt-14"})}>
        <div className="flex flex-col gap-0 md:gap-8">
          <div>
            <div className={titleWrapper({class: "items-center"})}>
              <div>
                <h1 className={title({size: "lg"})}>Watch&nbsp;</h1>
              </div>
              <div>
                <h1 className={title({color: "yellow", size: "lg"})}>What you Want,</h1>
              </div>
              <div>
                <h1 className={title({size: "lg", color: "pink"})}>Where you Want.</h1>
              </div>
            </div>
            <p
              className={subtitle({
                class: "mt-4 md:w-full text-center flex justify-center items-center",
              })}
            >
              Keep watching, at home and on the road.
            </p>
          </div>
        </div>
      </section>

      {/* Existing Events Grid */}
      <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-10">
        <AnimatePresence>
          {isMounted &&
            events.map((event) => (
              <motion.article
                key={event.id}
                animate={{opacity: 1, y: 0}}
                exit={{opacity: 0, y: 5}}
                initial={{opacity: 0, y: 5}}
                transition={{duration: 0.3}}
              >
                <Card
                  isBlurred
                  isPressable
                  as={NextLink}
                  className="p-2 h-full border-transparent text-start bg-gray-100 dark:bg-gray-200 flex flex-col justify-between relative"
                  href={`/events/${event.id}`}
                >
                  <CardHeader className="flex flex-col items-start text-left overflow-hidden">
                    <Link
                      as={NextLink}
                      className="font-semibold text-lg truncate"
                      href={`/events/${event.id}`}
                      style={{color: "#000"}}
                      underline="hover"
                    >
                      {event.name}
                    </Link>

                    <small className="text-default-500">{event.sportType}</small>

                    <small className="text-default-500 truncate">{event.description}</small>

                    <p className="text-gray-900 dark:text-gray-400 font-bold mt-1">
                      Scheduled for:{" "}
                      {new Date(event.date).toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}
                    </p>
                  </CardHeader>

                  <CardBody className="pt-0 px-2 pb-1 flex-grow">
                    <div className="relative w-full h-40 flex justify-center items-center overflow-hidden">
                      <Image
                        alt={event.name}
                        className="rounded-lg"
                        height={160}
                        loading="lazy"
                        objectFit="contain"
                        sizes="(max-width: 640px) 100vw,
                               (max-width: 768px) 50vw,
                               (max-width: 1024px) 33.33vw,
                               25vw"
                        src={event.image}
                        width={300}
                      />
                    </div>
                  </CardBody>

                  <CardFooter className="absolute bg-black/40 dark:bg-white/20 bottom-0 z-10 border-t border-default-600 dark:border-default-100 flex justify-center items-center p-4 w-full backdrop-blur-md rounded-b-xl">
                    <CountdownTimer eventDate={event.date} />
                  </CardFooter>
                </Card>
              </motion.article>
            ))}
        </AnimatePresence>
      </div>
    </>
  );
};
