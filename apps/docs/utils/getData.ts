import {supabase} from "../utils/supabaseClient";

export async function getData() {
  try {
    console.log("Fetching events and instructions from Supabase...");

    // Select data with simpler join structure
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

    if (error) {
      console.error("Error fetching events:", error);
      throw error;
    }

    console.log("Raw data from sports_events table:", data);

    // Map Supabase data to Event interface
    const events = data.map((event: any) => ({
      id: event.id,
      name: event.event_name,
      sportType: event.sport_type,
      date: event.event_date,
      description: event.description,
      image: event.event_image_url,
      instruction:
        event.sites?.unblocking_instructions?.[0]?.instructions || "Instructions coming soon",
    }));

    console.log("Mapped events:", events);

    return {
      events,
    };
  } catch (error) {
    console.error("Failed to fetch data:", error);

    return {
      events: [],
    };
  }
}
