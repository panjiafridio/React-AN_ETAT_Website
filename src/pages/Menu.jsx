import Navbar from "../components/Navbar";
import mainFoto from "../assets/main-foto.png";
import mainFotoTwo from "../assets/main-foto2.png";
import Boide from "../assets/boide.png";


const Menu = () => {
  return (
    <Navbar>
    <div className="bg-gray-100">
      {/* Header */}
      <header className="bg-blue-900 text-white p-6">
        <h1 className="text-3xl font-bold">Agence Numérique de lÉtat</h1>
      </header>

      {/* Hero Section */}
      <section className="p-6 bg-white shadow-md">
        <div className="flex flex-col md:flex-row gap-6">
          <img src={mainFoto} alt="Hero" className="w-full md:w-2/3 rounded-lg" />
          <div className="w-full md:w-1/3">
            <img src={mainFotoTwo} alt="Hero" className="w-full md:w-3.5/3 rounded-lg" />
            {/* <h2 className="text-xl font-semibold">Transformation numérique au service de lAdministration</h2>
            <p className="text-gray-600 mt-2">
              Lagence numérique de lÉtat modernise ladministration pour améliorer lefficacité et laccès aux services publics.
            </p> */}
          </div>
        </div>
      </section>

      {/* Dernières Actualités */}
      <section className="p-6">
        <h2 className="text-2xl font-bold mb-4">Dernières Actualités</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white p-4 shadow rounded-lg">
            <h3 className="font-semibold">Aenean vel est rhoncus massa</h3>
            <p className="text-gray-500 text-sm">1 Décembre 2024</p>
            <p className="text-gray-700 mt-2">VMorbi aliquet malesuada ipsum non pharetra. Duis mi est, convallis eu tortor sit amet, sagittis luctus diam. Maecenas et nibh vitae mauris ullamcorper sollicitudin et sed nunc.</p>
          </div>
          <div className="bg-white p-4 shadow rounded-lg">
            <h3 className="font-semibold">Lorem ipsum dolor sit amet</h3>
            <p className="text-gray-500 text-sm">25 Novembre 2024</p>
            <p className="text-gray-700 mt-2">Acenas convallis libero eros, at fringilla massa placerat vel. Etiam non feugiat ante. Donec pharetra erat finibus felis porttitor sagittis. Integer lobortis ac augue non laoreet.</p>
          </div>
          <div className="bg-white p-4 shadow rounded-lg">
            <h3 className="font-semibold">Maecenas consequat pellentesque</h3>
            <p className="text-gray-500 text-sm">19 Novembre 2024</p>
            <p className="text-gray-700 mt-2">Fusce vitae congue sem. Maecenas vitae metus eget lectus ultricies faucibus. Suspendisse ac lectus non velit cursus pellentesque. Suspendisse facilisis, libero quis tristique viverra, nibh libero..</p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-blue-100 p-6">
        <h2 className="text-2xl font-bold mb-5 text-[38px] leading-[44px] w-xl">Transformation numérique au service de l’Administration publique</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white p-[32px] w-[336px] h-[328px] gap-1.5">
            <h3 className="font-semibold">Vision</h3>
            <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br />
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div className="bg-white p-[32px] w-[336px] h-[328px] gap-1.5">
            <h3 className="font-semibold">Mission</h3>
            <p className="text-gray-700">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br />
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div className="bg-white p-[32px] w-[336px] h-[328px] gap-1.5">
            <h3 className="font-semibold">Valeurs</h3>
            <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br />
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="p-6 flex flex-col md:flex-row items-center justify-evenly gap-6">
        <img src={Boide} alt="Director" className="rounded-lg" />
        <blockquote className="w-[40%] mt-5 text-lg italic text-gray-700">
          Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          <br />
          <br />
          <br />
          <span className="font-bold text-black ">Boide Ould Sghair</span> <br /> - Directeur Général de la AN-ETAT
        </blockquote>
      </section>

      {/* Projets Section */}
      <section className="bg-[#042D47] text-white p-[64px]">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-[32px] font-bold mb-4">Les projets de lAN-ETAT</h2>
          <h2 className="text-[15px] font-semibold bg-white w-[15%] p-1.5  text-black">Toutes Les Projects &gt;</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <h3 className="font-semibold">&gt; Malesuada Fermentum Tortor</h3>
            <p className="text-gray-300">Voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </div>
          <div>
            <h3 className="font-semibold">&gt; Magna Malesuada</h3>
            <p className="text-gray-300">Voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </div>
          <div>
            <h3 className="font-semibold">&gt; Parturient Lorem</h3>
            <p className="text-gray-300">Voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </div>
          <div>
            <h3 className="font-semibold">&gt; Parturient Lorem</h3>
            <p className="text-gray-300">Voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </div>
          <div>
            <h3 className="font-semibold">&gt; Parturient Lorem</h3>
            <p className="text-gray-300">Voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </div>
          <div>
            <h3 className="font-semibold">&gt; Parturient Lorem</h3>
            <p className="text-gray-300">Voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </div>
          <div>
            <h3 className="font-semibold">&gt; Parturient Lorem</h3>
            <p className="text-gray-300">Voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </div>
          <div>
            <h3 className="font-semibold">&gt; Parturient Lorem</h3>
            <p className="text-gray-300">Voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="bg-black text-white p-6 text-center">
        <p>© 2025 Agence Numérique de lÉtat. Tous droits réservés.</p>
      </footer> */}
    </div>

    </Navbar>
  );
};

export default Menu;
