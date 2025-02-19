import Navbar from '../../components/Navbar'
import { FaFacebook, FaTwitter, FaLinkedin, FaEnvelope,} from "react-icons/fa";

const EventDetail = () => {
  return (
    <Navbar>
        <div className='flex flex-col md:flex-row'>
            <div className="bg-white text-black min-h-screen p-6 md:w-[80%]">
                {/* Judul */}
                <h1 className="text-3xl font-bold">
                    Pellentesque malesuada mauris tincidunt. <br /> Nunc id nisl quis mi tempor
                </h1>

                {/* Video dan Pendaftaran */}
                <div className="flex flex-col md:flex-row gap-6 mt-6">
                    {/* Video Section */}
                    <div className="md:w-3/4">
                        <div className="relative w-full aspect-video flex items-center justify-center">
                            <button className="w-16 h-16 bg-white text-black rounded-full text-2xl">
                            ▶
                            </button>
                        </div>
                    </div>
                </div>

                {/* Description */}
                <div className="md:w-[75%] mt-7">
                    <h1 className="text-black text-3xl font-bold">Lorem ipsum dolor</h1>
                    <p className='mt-3'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultrices blandit sapien, a lobortis est venenatis sed. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed purus eros, consequat imperdiet libero accumsan, congue fermentum lacus.
                        Ut placerat, risus volutpat elementum placerat, quam purus viverra metus, vel elementum nunc leo non mauris. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam efficitur ligula non tellus scelerisque, a convallis orci rhoncus. Aenean scelerisque ac nulla eu congue.
                        Rencontrez les intervenants
                    </p>
                </div>
                <br />
                <br />

                {/* Speaker List */}
                <h1 className="text-black text-2xl md:text-3xl font-bold">Rencontrez les intervenants</h1>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:w-[75%]">
                    {[
                    { image: "/event-detail.png",name: "Web Designer", company: "Kappa Corporation" },
                    { image: "/event-detail.png",name: "Medical Assistant", company: "VG - Van Group" },
                    { image: "/event-detail.png",name: "Nursing Assistant", company: "Tech - Technologies Co." },
                    { image: "/event-detail.png",name: "Marketing Coordinator", company: "Gen - General Enterprise" },
                    ].map((speaker, index) => (
                    <div key={index} className="flex flex-row gap-2">
                        <div className="w-[50%] flex items-center justify-center  rounded-full">
                            <img src={speaker.image} alt="" />
                        </div>
                        <div className="text-left">
                            <p className="mt-2 font-medium">{speaker.name}</p>
                            <p className="text-gray-400 text-sm">{speaker.company}</p>
                            <div className="mt-2 flex gap-2">
                            <FaFacebook className="hover:text-blue-500 cursor-pointer" size={20} />
                            <FaTwitter className="hover:text-blue-400 cursor-pointer" size={20} />
                            <FaLinkedin className="hover:text-blue-700 cursor-pointer" size={20} />
                            <FaEnvelope className="hover:text-gray-700 cursor-pointer" size={20} />
                        </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
            {/* Pendaftaran */}
            <div className=" bg-gray-200 text-black p-4 h-[30%] md:mt-16 border-t-2 border-t-black">
                <h2 className="font-semibold text-lg">Inscription</h2>
                <div className="mt-2 border-b-2 border-b-gray-300">
                    <p className="text-gray-600 text-sm">Date</p>
                    <p className="font-medium">Mercredi 18 décembre <br /> 13:00 GMT - 17:30 GMT</p>
                </div>
                <div className="mt-4 border-b-2 border-b-gray-300">
                    <p className="text-gray-600 text-sm">Emplacement</p>
                    <p className="font-medium">Événement virtuel</p>
                </div>
                <button className="w-full bg-white text-black mt-4 p-2">
                    Sinscrire maintenant →
                </button>
            </div>
        </div>
    </Navbar>
  )
}

export default EventDetail