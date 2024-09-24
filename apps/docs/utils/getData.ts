import { supabase } from "../utils/supabaseClient";
import { getAllSponsors } from "../utils/get-all-sponsors";

export async function getData() {
  try {
    const sponsors = await getAllSponsors();

    // Fetch all 8 fields from the sports_events table in Supabase
    console.log("Fetching events from Supabase...");
    const { data, error } = await supabase
      .from("sports_events")
      .select(
        `id, event_name, sport_type, event_date, event_image_url, description, created_at, updated_at`
      )
      .order("event_date", { ascending: true });

    if (error) {
      console.error("Error fetching events:", error);
      throw error;
    }

    console.log("Raw data from sports_events table:", data);

    // Map Supabase data to the Event interface with all fields
    const events = data.map((event: any) => ({
      id: event.id,
      name: event.event_name,
      sportType: event.sport_type,   // Added sport_type
      date: event.event_date,
      description: event.description,
      image: event.event_image_url,
      createdAt: event.created_at,   // Added created_at
      updatedAt: event.updated_at,   // Added updated_at
    }));

    console.log("Mapped events:", events);

    return {
      sponsors,
      events,
    };
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return {
      sponsors: [],
      events: [],
    };
  }
}