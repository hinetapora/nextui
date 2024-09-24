"use client";

import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

// Define the event type directly here
interface Event {
  id: string;
  name: string;
  date: string;
  description: string;
  image: string;
}

interface EventsScheduleProps {
  events: Event[];
}

export const EventsSchedule = ({ events }: EventsScheduleProps) => {
  console.log("EventsSchedule rendered");

  if (events.length === 0) {
    return <div>No events available</div>;
  }

  return (
    <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
      {events.map((event) => (
        <Card
          key={event.id}
          shadow="sm"
          isPressable
          onPress={() => console.log(`Event pressed: ${event.name}`)}
        >
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={event.name}
              className="w-full object-cover h-[140px]"
              src={event.image}
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{event.name}</b>
            <p className="text-default-500">{new Date(event.date).toLocaleDateString()}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};