// components/EventsThisWeek.tsx

interface Event {
  id: string;
  name: string;
  date: string;
  description: string;
  image: string;
}

interface EventsThisWeekProps {
  events: Event[];
}

const EventsThisWeek: React.FC<EventsThisWeekProps> = ({events}) => (
  <div className="events-this-week my-4">
    <h2 className="text-lg font-semibold mb-2">Events This Week</h2>
    <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {events.map((event) => (
        <div key={event.id} className="event-card">
          <img alt={event.name} className="w-full h-32 object-cover" src={event.image} />
          <h3 className="text-md font-medium">{event.name}</h3>
          <p className="text-sm text-gray-500">{new Date(event.date).toDateString()}</p>
          <p className="text-sm">{event.description}</p>
        </div>
      ))}
    </div>
  </div>
);

export default EventsThisWeek;
