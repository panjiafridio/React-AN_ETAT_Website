import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const events = [
  {
    title: "Maecenas consequat pellentesque venenatis magna laoreet",
    date: "Mercredi 18 décembre",
    time: "13:00 GMT - 17:30 GMT",
    location: "Événement virtuel",
  },
  {
    title: "Maecenas eget ipsum velit. Sed eleme ntum urna magna",
    date: "Mercredi 18 décembre",
    time: "13:00 GMT - 17:30 GMT",
    location: "Palais des Congrès",
    highlight: true,
  },
  {
    title: "Pellentesque malesuada mauris tincidunt. Nunc id nisi quis mi tempor",
    date: "Mercredi 18 décembre",
    time: "13:00 GMT - 17:30 GMT",
    location: "Événement virtuel",
  },
];

const pastEvents = [
  {
    image: "/event-page.png",
    location: "Aenean vel est rhoncus massa imperdiet vestibulum condimentum",
  },
  {
    image: "/event-page.png",
    location: "Palais des Congrès",
  },
  {
    image: "/event-page.png",
    location: "Lorem ipsum dolor sit amet, consectetur adipiscing elit turpis molet adipiscing",
  },
  {
    image: "/event-page.png",
    location: "Palais des Congrès",
  },
  {
    image: "/event-page.png",
    location: "Événement virtuel",
  },
];

const Events = () => {
  return (
    <Navbar>
    <div className="bg-white text-white min-h-screen p-8">
      <h1 className="text-3xl font-bold text-black">Événements à venir</h1>
      <p className="text-gray-300">
        Calendrier des événements à venir organisés par lAN-ETAT
      </p>

      {/* Upcoming Events */}
      <div className="grid md:grid-cols-3 gap-6 my-8">
        {events.map((event, index) => (
          <div
            key={index}
            className={`p-6 border hover:bg-blue-300 border-t-2 border-t-black ${
              event.highlight ? "bg-blue-100 text-black" : "bg-white text-black"
            }`}
          >
            <h2 className="text-lg font-semibold hover:underline">
              <Link to="/eventdetail">{event.title}</Link>
            </h2>
            <p className="text-sm text-gray-700">{event.date}</p>
            <p className="text-sm text-gray-700 mt-8">{event.time}</p>
            <p className="text-sm text-gray-700 mb-60 font-semibold">
              {event.location}
            </p>
            <a href="#" className="mt-4 inline-block text-blue-600">
              En savoir plus →
            </a>
          </div>
        ))}
      </div>

      {/* Past Events */}
      <h2 className="text-2xl font-bold text-black">Événements passés</h2>
      <div className="grid md:grid-cols-3 gap-6 mt-6">
        {pastEvents.map((event, index) => (
          <div key={index} className="relative">
            <img
              src={event.image}
              alt="Événement"
              className="w-full h-48 object-cover rounded-lg"
            />
            <p className="text-gray-400">Événement virtuel</p>
            <div className="bg-opacity-50 py-1 text-black font-bold text-sm rounded">
              {event.location}
            </div>
          </div>
        ))}
      </div>
    </div>

    </Navbar>
  );
};

export default Events;
