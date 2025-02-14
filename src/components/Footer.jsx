import Footerlogo from "../assets/Footer-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (
    <>
        <footer className="bg-gray-100 py-10 px-6 md:px-12 lg:px-20">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0">
                
                {/* Logo dan Keterangan */}
                <div className="flex flex-col space-y-3 text-center md:text-left">
                    <img src={Footerlogo} alt="Logo AN-ETAT" className="w-[80%] mx-auto md:mx-0" />
                    {/* <p className="text-sm text-gray-700 font-medium">
                        Ministère de la Transition Numérique, de lInnovation et de la Modernisation de lAdministration
                    </p> */}
                </div>

                {/* Navigasi */}
                <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-12 text-center md:text-left">
                <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Explorer</h3>
                    <ul className="text-gray-700 space-y-1">
                        <li><a href="/events" className="hover:underline font-bold">Évènements</a></li>
                        <li><a href="#" className="hover:underline font-bold">Projets</a></li>
                        <li><a href="#" className="hover:underline font-bold">Route/Roadmap</a></li>
                        <li><a href="/recruitment" className="hover:underline font-bold">Recruitment</a></li>
                        <li><a href="/blog" className="hover:underline font-bold">Blog</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Ressources</h3>
                    <ul className="text-gray-700 space-y-1">
                        <li><a href="/sidebar" className="font-bold hover:underline">À propos</a></li>
                        <li><a href="/contact" className="font-bold hover:underline">Contactez-nous</a></li>
                        <li><a href="#" className="font-bold hover:underline">FAQ</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Contact</h3>
                    <p className="text-gray-700">
                        AN-ETAT Adresse <br />
                        Tevragh Zeina, Nouakchott, Mauritania
                    </p>
                    <p className="text-gray-700 mt-1">
                        +222 32 32 32 32 <br />
                        contact@anetat.mr
                    </p>
                </div>
                </div>

            </div>

            <div className="mt-5 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0">
                <p className="text-center sm:text-">Website de MTNIMA | Politique de protection des données personnelles</p>

                {/* Sosial Media */}
                <div className="flex space-x-4 text-gray-700 text-2xl">
                    <a href="#" className="hover:text-gray-900"><i className="fab fa-facebook"></i></a>
                    <a href="#" className="hover:text-gray-900"><i className="fab fa-twitter"></i></a>
                    <a href="#" className="hover:text-gray-900"><i className="fab fa-linkedin"></i></a>
                    <a href="#" className="hover:text-gray-900"><FontAwesomeIcon icon={faEnvelope} /></a>
                </div>

            </div>

            {/* Copyright */}
            <div className="mt-10 text-center text-gray-600 text-sm">
                <p>© 2024 Copyright, Tous droits réservés</p>
            </div>
        </footer>
    </>
  )
}

export default Footer