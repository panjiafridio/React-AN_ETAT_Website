import Navbar from "../components/Navbar";
import Boide from "../assets/boide.png";
import { Link } from "react-router-dom";


const jobListings = [
  {
    id: 1,
    category: "Recrutement AN-ETAT",
    title: "Maecenas consequat pellentesque venenatis magna laoreet",
    publishDate: "Mercredi 04 décembre",
    expirationDate: "Vendredi 20 décembre",
    type: "Événement virtuel",
  },
  {
    id: 2,
    category: "Recrutement AN-ETAT",
    title: "Maecenas consequat pellentesque venenatis magna laoreet",
    publishDate: "Mercredi 04 décembre",
    expirationDate: "Vendredi 20 décembre",
    type: "Palais des Congrès",
  },
  {
    id: 3,
    category: "Recrutement AN-ETAT",
    title: "Maecenas consequat pellentesque venenatis magna laoreet",
    publishDate: "Mercredi 04 décembre",
    expirationDate: "Vendredi 20 décembre",
    type: "Événement virtuel",
  },
  {
    id: 4,
    category: "Appels d'offres",
    title: "Maecenas consequat pellentesque venenatis magna laoreet",
    publishDate: "Mercredi 04 décembre",
    expirationDate: "Vendredi 20 décembre",
    type: "Événement virtuel",
  },
];

const Recrutement = () => {
  return (
    <Navbar>
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-black">Recruitment</h1>
      <p className="mt-2 text-gray-600">
        Nous recherchons des membres passionnés pour nous rejoindre dans notre mission.
      </p>

      {/* Job Listings */}
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {jobListings.map((job) => (
          <div key={job.id} className="border-t-2 bg-[#F6F6F6] border-t-black shadow-lg">
            <div className="p-11">
              <h3 className="text-sm font-semibold text-gray-500">{job.category}</h3>
              <h2 className="text-lg font-bold mt-2">{job.title}</h2>
              <p className="text-sm mt-20">
                <strong>Date de publication:</strong> {job.publishDate} <br />
                <br />
                <strong>Date dexpiration:</strong> {job.expirationDate}
              </p>
            </div>
            <div className="flex justify-center mt-4">
              <button className="border px-14 py-2 text-sm bg-[#EBEBEB] font-bold">Voir plus</button>
              <Link to="/recrutementdetail">
                <button className="bg-[#EBEBEB] px-14 font-bold hover:bg-[#bab9b9] text-black py-2 text-sm cursor-pointer">Postuler →</button>
              </Link>
              
            </div>
          </div>
        ))}
      </div>

      {/* Representations */}
      <div className="bg-blue-100 p-6 mt-12">
        <h2 className="text-lg font-bold">Découvrez ce que nous représentons</h2>
        <div className="grid md:grid-cols-3 gap-4 mt-4">
          <div className="p-4 bg-white shadow-md">
            <h3 className="font-bold">Se concentrer</h3>
            <p className="text-sm text-gray-600">Duis aute irure dolor in reprehenderit.</p>
          </div>
          <div className="p-4 bg-white shadow-md">
            <h3 className="font-bold">Équipe</h3>
            <p className="text-sm text-gray-600">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </div>
          <div className="p-4 bg-white shadow-md">
            <h3 className="font-bold">Vision</h3>
            <p className="text-sm text-gray-600">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </div>
        </div>
      </div>

      {/* CEO Message */}
      <div className="grid md:grid-cols-2 gap-6 mt-12 items-center">
        <div className="text-gray-700 text-lg">
          <p className="italic border-l-4 pl-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className="font-bold text-black mt-4">Boide Ould Sghair</p>
          <p className="text-gray-500">Directeur Général de la AN-ETAT</p>
        </div>
        <img
          src={Boide}
          alt="CEO"
          className="rounded-lg shadow-md"
        />
      </div>
    </div>

    </Navbar>
  );
};

export default Recrutement;
