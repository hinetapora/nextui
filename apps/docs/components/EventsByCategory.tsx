// components/EventsByCategory.tsx

interface Event {
  id: string;
  name: string;
  date: string;
  description: string;
  image: string;
}

interface Category {
  name: string;
  events: Event[];
}

interface EventsByCategoryProps {
  categories: Category[];
}

const EventsByCategory: React.FC<EventsByCategoryProps> = ({categories}) => (
  <div className="events-by-category my-4">
    <h2 className="text-lg font-semibold mb-2">Events by Category</h2>
    {categories.map((category) => (
      <div key={category.name} className="category-section my-2">
        <h3 className="text-md font-medium">{category.name}</h3>
        <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {category.events.map((event) => (
            <div key={event.id} className="event-card">
              <img alt={event.name} className="w-full h-32 object-cover" src={event.image} />
              <h3 className="text-md font-medium">{event.name}</h3>
              <p className="text-sm text-gray-500">{new Date(event.date).toDateString()}</p>
              <p className="text-sm">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default EventsByCategory;
