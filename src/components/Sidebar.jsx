import Navbar from "./Navbar";
import { Link } from "react-router-dom"

const Sidebar = () => {
  return (
    <Navbar>
      <div className="flex flex-col md:flex-row md:w-[95%] mx-auto">
        {/* Sidebar */}
        <aside className="w-full md:w-1/4 p-4 bg-gray-100 rounded-lg">
          <ul className="space-y-2">
            <li className="font-semibold text-blue-600">À propos</li>
            <li>
              <Link className="hover:underline active:underline" to="/contact">Contactez-nous</Link>
            </li>
          </ul>
        </aside>

        {/* Main Content */}
        <section className="flex-1 p-4">
          <h1 className="text-3xl font-bold text-black">À propos de lAgence Numérique de lÉtat</h1>
          <p className="mt-4 text-gray-700">
            L’agence Numérique de l’Etat ou AN-ETAT joue un rôle primordial dans la mise en œuvre des programmes inscrits dans l’Agenda de Transformation Numérique 2022-2025.
          </p>

          <h1 className="text-3xl font-bold text-black mt-9">Introduction</h1>
          <p className="mt-4 text-gray-700">
            L’agence Numérique de l’Etat ou AN-ETAT joue un rôle primordial dans la mise en œuvre des programmes inscrits dans l’Agenda de Transformation Numérique 2022-2025. Il s’agit de l’instrument principal du ministère en charge du numérique pour la mise en œuvre des programmes de transformation numérique au service de l’Administration publique et les secteurs socio- économiques. <br />

              L’AN-ETAT a été créé conformément au décret 074-2023 du 26 avril 2023. <br />
            
            Dans le cadre de l’élaboration des outils de communication de l’AN-ETAT et du renforcement de la légitimité de lAN-ETAT auprès des acteurs nationaux et internationaux, l’AN-ETAT souhaite mettre en place un Site Web pour fournir des informations clés sur lagence, ses activités, ses projets en cours, et faciliter la communication avec les parties prenantes.
          </p>

          <h2 className="mt-6 text-2xl font-bold md:mt-9">Objectifs de lAN-ETAT</h2>
          <ul className="mt-2 space-y-2 text-gray-600">
            <li>📌 Fournir des informations clés : l’AN-ETAT partagera les informations liées à sa mission, ses activités, ses projets et réalisations…</li>
            <li>📌 Faciliter la communication : des formulaires de contact, des adresses emails voire des coordonnées téléphoniques ou des réseaux sociaux seront partagés via notre site Web ;</li>
            <li>📌 Promouvoir la transparence : L’AN-ETAT publiera sa feuille de route, ses objectifs stratégiques, ses résultats attendus… ;</li>
            <li>📌 Partager les actualités et les évènements : pour tenir le public informé, l’AN-ETAT partagera régulièrement des actualités, des événements à venir et des projets en cours de lagence afin de favoriser ainsi la participation et lengagement des parties prenantes ;</li>
            <li>📌 Faciliter le recrutement : l’AN-ETAT souhaite ouvrir prochainement la porte aux candidatures spontanés et/ou la candidature ciblée. Notre site nous permettra de fournir des informations sur les opportunités demploi au sein de lagence, les procédures de candidature et les critères de sélection, afin dattirer et de recruter les meilleurs talents ;</li>
            <li>📌 Améliorer la visibilité en ligne : L’AN-ETAT souhaite mettre en place un site Web optimisé pour les moteurs de recherche afin daméliorer sa visibilité et dattirer un plus grand nombre de visiteurs intéressés par les activités de lagence.</li>
          </ul>
        </section>
      </div>
    </Navbar>
  );
};

export default Sidebar;
