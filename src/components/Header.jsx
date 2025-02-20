import { useState } from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";
import headerLogo from "../assets/Header-logo.png";
import headerLogoTwo from "../assets/Header-logo-two.png";
import { Link } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import { useNavigate } from "react-router-dom";


const Header = () => {
        const [isOpen, setIsOpen] = useState(false);
        const navigate = useNavigate(); // Hook untuk navigasi halaman
      
        const changePage = (lang) => {
          if (lang === "ar") {
            document.documentElement.setAttribute("dir", "rtl"); // Ubah ke RTL
          } else {
            document.documentElement.setAttribute("dir", "ltr"); // Kembali ke LTR
          }
      
          // Pindah halaman sesuai bahasa yang dipilih
          switch (lang) {
            case "en":
              navigate("/menu"); // Halaman untuk bahasa Inggris
              break;
            case "ar":
              navigate("/menuarabic"); // Halaman untuk bahasa Arab
              break;
            case "fr":
              navigate("/menu"); // Halaman untuk bahasa Prancis
              break;
            default:
              navigate("/"); // Kembali ke halaman utama
        }
    };
  return (
    <>
        {/* Header */}
        <nav className="bg-white z-10 w-[95%] mx-auto">

            {/* Navbar Desktop */}
            <div className="hidden md:flex justify-between flex-col p-4 container">
                <div className="w-full flex justify-between items-center mx-auto">
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <img src={headerLogo} alt="Logo" className="h-10" />
                        <img src={headerLogoTwo} alt="Logo" className="h-10" />
                    </div>

                    <div className="flex justify-evenly items-center w-[60%]">
                        <ul className="flex space-x-14 text-gray-700">
                            {["À propos", "Contactez-nous"].map((item) => (
                                <li key={item} className="hover:underline cursor-pointer font-bold">
                                    <Link to="/sidebar">{item}</Link>
                                </li>
                            ))}
                            <select
                                className="bg-white font-bold"
                                onChange={(e) => changePage(e.target.value)}
                            >
                                <option value="en">English</option>
                                <option value="ar">العربية</option>
                                <option value="fr">Français</option>
                            </select>
                        </ul>

                        {/* Ikon Sosial Media */}
                        <div className="flex space-x-4 text-gray-600">
                            <FaFacebook className="hover:text-blue-500 cursor-pointer" size={20} />
                            <FaTwitter className="hover:text-blue-400 cursor-pointer" size={20} />
                            <FaLinkedin className="hover:text-blue-700 cursor-pointer" size={20} />
                            <FaEnvelope className="hover:text-gray-700 cursor-pointer" size={20} />
                        </div>
                    </div>
                </div>

                {/* Menu Desktop */}
                <ul className="flex mt-3 space-x-6 text-gray-700 bg-[#EEF6FC] p-4">
                    <li className="cursor-pointer font-bold flex gap-[32px]">
                        <Link className="hover:underline active:underline" to="/menu">Accueil</Link>
                        <Link className="hover:underline active:underline" to="/news">Actualités</Link>
                        <Link className="hover:underline active:underline" to="/events">Évènements</Link>
                        <Link className="hover:underline active:underline" to="/menu">Route/Roadmap</Link>
                        <Link className="hover:underline active:underline" to="/blog">Blog</Link>
                        <Link className="hover:underline active:underline" to="/recruitment">Recruitment</Link>
                    </li>
                </ul>
                <Breadcrumbs />
            </div>

            {/* Navbar Mobile */}
            <div className="md:hidden flex justify-between items-center p-4">
                {/* Logo */}
                <div className="flex items-center space-x-2">
                    <img src={headerLogo} alt="Logo" className="h-10" />
                    <img src={headerLogoTwo} alt="Logo" className="h-10" />
                </div>

                {/* Hamburger Menu */}
                <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
                    {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </div>

            {/* Sidebar Mobile */}
            <div className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform ease-in-out duration-300 md:hidden`}>
                <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-gray-700">
                    <FaTimes size={24} />
                </button>

                <ul className="mt-12 space-y-6 text-gray-700 bg-[#EEF6FC] px-6">
                    <li className="border-b pb-2 hover:underline flex flex-col gap-3 cursor-pointer font-bold">
                        <Link className="hover:underline" to="/menu">Accueil</Link>
                        <Link className="hover:underline" to="/news">Actualités</Link>
                        <Link className="hover:underline" to="/events">Évènements</Link>
                        <Link className="hover:underline" to="/menu">Route/Roadmap</Link>
                        <Link className="hover:underline" to="/blog">Blog</Link>
                        <Link className="hover:underline" to="/recruitment">Recruitment</Link>
                    </li>
                </ul>

                {/* Pilihan Bahasa */}
                <div className="flex justify-center space-x-6 mt-6">
                    <span className="text-gray-600 cursor-pointer hover:underline">العربية</span>
                    <span className="text-black font-semibold cursor-pointer">Français</span>
                    <span className="text-gray-600 cursor-pointer hover:underline">English</span>
                </div>

                {/* Ikon Sosial Media */}
                <div className="flex justify-center space-x-4 text-gray-600 mt-6">
                    <FaFacebook className="hover:text-blue-500 cursor-pointer" size={20} />
                    <FaTwitter className="hover:text-blue-400 cursor-pointer" size={20} />
                    <FaLinkedin className="hover:text-blue-700 cursor-pointer" size={20} />
                    <FaEnvelope className="hover:text-gray-700 cursor-pointer" size={20} />
                </div>
            </div>
        </nav>
    </>
  )
}

export default Header