import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";


const blogPosts = [
  {
    id: 1,
    title:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC",
    author: "Mohamed Laghdav",
    date: "25 novembre 2024",
    readingTime: "7 minutes",
    image: "/blog-image.jpg",
    featured: true,
  },
  {
    id: 2,
    title:
      "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure",
    author: "Mohamed Laghdav",
    date: "24.11.2024",
    readingTime: "5 minutes",
    image: "/blog-image.jpg",
  },
  {
    id: 3,
    title:
      "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.",
    author: "Mohamed Laghdav",
    date: "23.11.2024",
    readingTime: "10 minutes",
    image: "/blog-image2.png",
  },
  {
    id: 4,
    title:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
    author: "Mohamed Laghdav",
    date: "23.11.2024",
    readingTime: "10 minutes",
    image: "/blog-image.jpg",
  },
  {
    id: 5,
    title:
      "All the generators on the Internet tend to repeat predefined chunks as necessary",
    author: "Mohamed Laghdav",
    date: "23.11.2024",
    readingTime: "10 minutes",
    image: "/blog-image2.png",
  },
];

const Blog = () => {
  return (
    <Navbar>
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-2">Blog</h2>
      <p className="text-gray-600 mb-6">
        Lire les articles du blog de lAN-ETAT
      </p>

      {/* Featured Post */}
      <div className="relative w-full h-[400px] mb-8">
        <img
          src={blogPosts[0].image}
          alt={blogPosts[0].title}
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute bottom-4 left-3 bg-white bg-opacity-50 p-6 flex flex-col justify-end">
          <p className="text-white bg-[#042D47] text-sm w-[40%] p-3">
            {blogPosts[0].author} • {blogPosts[0].readingTime} de lecture •{" "}
            {blogPosts[0].date}
          </p>
          <h3 className="text-black font-bold text-lg cursor-pointer hover:underline">
            <Link to="/blogdetail">{blogPosts[0].title}</Link>
          </h3>
        </div>
      </div>

      {/* Grid Blog Posts */}
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4">
        {blogPosts.slice(1).map((post) => (
          <div key={post.id} className="flex flex-col">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover rounded-lg"
            />
            <div className="p-4">
              <p className="text-gray-600 text-sm">
                {post.author} • {post.readingTime} de lecture • {post.date}
              </p>
              <h3 className="font-bold text-lg">{post.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
    </Navbar>
  );
};

export default Blog;
