// page.tsx

import RecommendedEvents from "@/components/RecommendedEvents";
import EventsThisWeek from "@/components/EventsThisWeek";
import EventsByCategory from "@/components/EventsByCategory";
import PopularEvents from "@/components/PopularEvents";
import {getData} from "@/utils/getData";

export default async function Home() {
  const data = await getData();

  return (
    <main className="container mx-auto max-w-7xl px-6 flex-grow">
      <section className="flex flex-col items-center justify-center space-y-6">
        <RecommendedEvents events={data.recommendedEvents} />
        <EventsThisWeek events={data.weeklyEvents} />
        <EventsByCategory categories={data.categories} />
        <PopularEvents events={data.popularEvents} />
      </section>
    </main>
  );
}
