import Navbar from "../../components/Navbar";

const RecrutementDetail = () => {
  return (
    <Navbar>
    <div className="bg-white text-black min-h-screen px-10 py-6">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-400 mb-4">
        <a href="/" className="hover:underline">Accueil</a> &gt;{" "}
        <a href="#" className="hover:underline">Recruitment</a> &gt;{" "}
        <span className="text-gray-300">Detail</span>
      </nav>

      {/* Card Detail */}
      <div className="mt-6 flex items-start flex-col md:flex-row gap-6">
        <div className="md:w-3/4">
            {/* Judul */}
            <h1 className="text-4xl font-bold text-black mb-14">
                Maecenas consequat pellentesque venenatis magna laoreet
            </h1>
            <h1 className="text-2xl font-bold">Lorem ipsum dolor</h1><br />
            <p className="mb-16">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultrices blandit sapien, a lobortis est venenatis sed. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed purus eros, consequat imperdiet libero accumsan, congue fermentum lacus.
                Ut placerat, risus volutpat elementum placerat, quam purus viverra metus,
                Vel elementum nunc leo non mauris. Class aptent taciti sociosqu ad litora
                Torquent per conubia nostra, per inceptos himenaeos.
                Nullam efficitur ligula non tellus scelerisque, a convallis orci rhoncus.
                Télécharger lavis
            </p>
          {/* PDF Download */}
          <div className="border border-gray-700 rounded-lg p-4 flex items-center gap-4">
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/87/PDF_file_icon.svg" alt="PDF" className="w-10 h-10"/>
            <span className="text-gray-300">220 KB • PDF</span>
            <button className="ml-auto bg-gray-100 px-4 py-2 rounded-md cursor-pointer hover:bg-gray-300">Download</button>
          </div>
        </div>

        {/* Sidebar Detail */}
        <div className="md:w-1/4 bg-gray-100 text-black p-6 pt-2 border-t-2 border-t-black">
          <h2 className="text-lg font-bold">Recruitment détails</h2>
          <p className="text-sm text-gray-600 mt-2">
            <span className="font-bold">Type:</span> Recruitment AN-ETAT
          </p>
          <p className="text-sm text-gray-600 mt-2">
            <span className="font-bold">Date de publication:</span> Mercredi 04 décembre
          </p>
          <p className="text-sm text-gray-600 mt-2">
            <span className="font-bold">Date dexpiration:</span> Vendredi 20 décembre
          </p>
          <button className="w-full bg-gray-100 text-black mt-4 py-2 rounded-md hover:bg-gray-200 cursor-pointer">
            Postuler maintenant →
          </button>
        </div>
      </div>
    </div>
    </Navbar>
  );
};

export default RecrutementDetail;
