import Navbar from "../components/Navbar";

const Contact = () => {
  return (
    <Navbar>
      <div className="flex flex-col md:flex-row">
        {/* Sidebar */}
        <aside className="w-full md:w-1/4 p-4 bg-gray-100 rounded-lg">
          <ul className="space-y-2">
            <li><a href="/sidebar" className="text-gray-600 hover:text-blue-500">À propos</a></li>
            <li className="font-semibold text-blue-600">Contactez-nous</li>
          </ul>
        </aside>

        {/* Main Content */}
        <section className="flex-1 p-4">
          <h1 className="text-3xl font-bold text-black">Contactez-nous</h1>
          <p className="mt-4 text-gray-700">
            Trouvez les coordonnées de lAgence Numérique de lÉtat.
          </p>

          {/* Contact Information */}
          <div className="mt-6 grid md:grid-cols-2 gap-4">
            <div className="bg-blue-100 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-3">Questions générales</h3>
              <p className="mb-2">Si vous avez des questions générales à poser à l’Agence Numérique de l’Etat, veuillez contacter</p>
              <p className="font-bold">Email: contact@an-etat.mr</p>
              <p className="font-bold">Téléphone: +222 32 32 32 32</p>
            </div>
            <div className="bg-blue-100 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-3">Questions relatives à la presse</h3>
              <p className="mb-2">Si vous avez des questions relatives à la presse à poser à l’Agence Numérique de l’Etat, veuillez contacter</p>
              <p className="font-bold">Email: contact@an-etat.mr</p>
              <p className="font-bold">Téléphone: +222 32 32 32 32</p>
            </div>
          </div>

          {/* Map */}
          <h2 className="mt-6 text-2xl font-semibold">Siège social</h2>
          <div className="mt-4">
            <iframe
              className="w-full h-64 rounded-lg"
              src="https://maps.google.com/maps?q=Nouchkott&t=&z=13&ie=UTF8&iwloc=&output=embed"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </section>
      </div>
    </Navbar>
  );
};

export default Contact;
