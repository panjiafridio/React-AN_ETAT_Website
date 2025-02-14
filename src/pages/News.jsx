import { useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const newsData = [
  {
    date: "1 DÉCEMBRE 2024",
    title: "Aenean vel est rhoncus massa imperdiet vestibulum condimentum",
    description:
      "Suspendisse pellentesque, nisi scelerisque pulvinar tristique, quam magna elementum diam, sit amet lacinia elit tortor quis ipsum. In non lobortis dui. Donec orci enim, fringilla eu tortor ut, dapibus ultrices velit. Mauris vel orci laoreet, congue arcu a, ornare leo. Sed ut enim arcu.",
    image: "/news-page.png",
  },
  {
    date: "1 DÉCEMBRE 2024",
    title:
      "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    description:
      "Cras efficitur bibendum mollis. Vestibulum interdum tincidunt eros, vel euismod ex cursus nec.",
    image: "/news-page.png",
  },
  {
    date: "1 DÉCEMBRE 2024",
    title:
      "How to design a product that can grow itself 10x in year. Any mechanical keyboard enthusiasts in design?",
    description:
      "Donec tristique nisi sit amet nibh vulputate finibus. Nam at turpis ligula. Sed luctus tempor dapibus.",
    image: "/news-page.png",
  },
  {
    date: "1 DÉCEMBRE 2024",
    title: "Understanding color theory: the color wheel and complementary colors",
    description:
      "Cras egestas eget ultricies sapien, efficitur lacinia urna. Curabitur mollis, eros sed feugiat elementum.",
    image: "/news-page.png",
  },
  {
    date: "1 DÉCEMBRE 2024",
    title:
      "Yo Reddit! What’s a small thing that anyone can do at nearly anytime to improve their mood and make",
    description:
      "Aliquam id turpis fringilla, feugiat ligula quis, vestibulum mauris.",
    image: "/news-page.png",
  },
];

const News = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const newsPerPage = 5;

  // Pagination logic
  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentNews = newsData.slice(indexOfFirstNews, indexOfLastNews);

  return (
    <Navbar>
        <div className="container mx-auto p-6">
        {/* Header */}
        <h1 className="text-2xl font-bold">Dernières actualités</h1>
        <p className="text-gray-600">Lisez les nouvelles de lAgence numérique de lÉtat.</p>

        <div className="flex flex-col md:flex-row gap-6 mt-6">
            {/* Main Content */}
            <div className="w-full md:w-2/3 ">
            {currentNews.map((news, index) => (
                <div key={index} className="pb-6 mb-6 flex flex-col md:flex-row gap-2 items-start">
                  {news.image && (
                      <img src={news.image} alt={news.title} className="rounded-lg w-full md:w-[20%]" />
                  )}
                  <div className="md:mr-3">
                    <p className="text-sm text-gray-500">{news.date}</p>
                    <h2 className="text-lg font-semibold hover:underline text-black">
                      <Link to="/newsdetail">{news.title}</Link>
                    </h2>
                    <p className="text-gray-700">{news.description}</p>
                  </div>
                </div>
            ))}

            {/* Pagination */}
            <div className="flex justify-center space-x-2">
                {Array.from({ length: Math.ceil(newsData.length / newsPerPage) }).map(
                (_, i) => (
                    <button
                    key={i}
                    className={`px-3 py-1 border rounded-md ${
                        currentPage === i + 1 ? "bg-blue-600 text-white" : "bg-white text-gray-600"
                    }`}
                    onClick={() => setCurrentPage(i + 1)}
                    >
                    {i + 1}
                    </button>
                )
                )}
            </div>
            </div>

            {/* Sidebar */}
            <div className="w-full md:w-1/3 h-[40%] p-4 bg-[#F6F6F6] rounded-lg">
            <h3 className="font-semibold text-lg mb-4">Rechercher dans les actualités</h3>
            <input
                type="text"
                placeholder="Recherche..."
                className="w-full p-2 border rounded-md mb-4"
            />
            <select className="w-full p-2 border rounded-md mb-4">
                <option>Année</option>
            </select>
            <select className="w-full p-2 border rounded-md mb-4">
                <option>Mois</option>
            </select>
            <button className="w-[40%] p-2 bg-white text-black rounded-md">
                Rechercher
            </button>
            </div>
        </div>
        </div>
    </Navbar>
  );
};

export default News;
