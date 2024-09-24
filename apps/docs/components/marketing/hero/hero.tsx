"use client";

import React from "react";
import { Card, Badge, Spacer } from "@nextui-org/react";
import { format } from "date-fns";
import NextLink from "next/link";

export interface Event {
  id: string;
  name: string;
  date: string; // ISO string
  description: string;
  location?: string;
  link?: string;
}

interface EventsScheduleProps {
  events: Event[];
}

export const EventsSchedule: React.FC<EventsScheduleProps> = ({ events }) => {
  return (
    <section className="w-full py-12">
      {/* Section Title */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
          Upcoming Events
        </h2>
      </div>

      {/* Events Container */}
      <div className="flex flex-wrap justify-center gap-6">
        {events.map((event) => (
          <Card
            key={event.id}
            isHoverable
            className="w-full max-w-sm bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <Card.Body>
              {/* Event Name */}
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                {event.name}
              </h3>

              {/* Event Date */}
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {format(new Date(event.date), "PPPpp")}
              </p>

              {/* Event Location (Optional) */}
              {event.location && (
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  📍 {event.location}
                </p>
              )}

              <Spacer y={1} />

              {/* Event Description */}
              <p className="text-base text-gray-700 dark:text-gray-300">
                {event.description}
              </p>
            </Card.Body>

            {/* Learn More Badge (Optional) */}
            {event.link && (
              <Card.Footer>
                <NextLink href={event.link} passHref>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Learn more about ${event.name}`}
                    className="w-full"
                  >
                    <Badge
                      color="primary"
                      variant="flat"
                      className="cursor-pointer text-center"
                    >
                      Learn More
                    </Badge>
                  </a>
                </NextLink>
              </Card.Footer>
            )}
          </Card>
        ))}
      </div>
    </section>
  );
};