// utils/getData.ts

import {supabase} from "../utils/supabaseClient";

// Helper function to filter events happening this week
const isEventThisWeek = (eventDate: string): boolean => {
  const today = new Date();
  const eventDay = new Date(eventDate);
  const weekFromToday = new Date(today);

  weekFromToday.setDate(today.getDate() + 7);

  return eventDay >= today && eventDay <= weekFromToday;
};

export async function getData() {
  try {
    const {data, error} = await supabase
      .from("sports_events")
      .select(
        `
        id,
        event_name,
        sport_type,
        event_date,
        description,
        event_image_url,
        sites (
          site_name,
          unblocking_instructions (
            instructions
          )
        )
      `,
      )
      .order("event_date", {ascending: true});

    if (error) throw error;

    const events = data.map((event: any) => ({
      id: event.id,
      name: event.event_name,
      sportType: event.sport_type,
      date: event.event_date,
      description: event.description,
      image: event.event_image_url,
      instruction:
        event.sites?.[0]?.unblocking_instructions?.[0]?.instructions || "Instructions coming soon",
    }));

    const recommendedEvents = events.slice(0, 5); // Top 5 events as a placeholder for recommended
    const weeklyEvents = events.filter((event) => isEventThisWeek(event.date));

    const categories = events.reduce((acc: any[], event) => {
      const categoryIndex = acc.findIndex((cat) => cat.name === event.sportType);

      if (categoryIndex > -1) {
        acc[categoryIndex].events.push(event);
      } else {
        acc.push({name: event.sportType, events: [event]});
      }

      return acc;
    }, []);

    const popularEvents = events.slice(-5); // Last 5 events as placeholder for popular

    return {
      recommendedEvents,
      weeklyEvents,
      categories,
      popularEvents,
    };
  } catch (error) {
    console.error("Failed to fetch data:", error);

    return {
      recommendedEvents: [],
      weeklyEvents: [],
      categories: [],
      popularEvents: [],
    };
  }
}
