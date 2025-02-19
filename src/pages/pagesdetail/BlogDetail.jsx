import Navbar from "../../components/Navbar";
import { FaFacebook, FaTwitter, FaLinkedin, FaEnvelope,} from "react-icons/fa";

const BlogDetail = () => {
  return (
    <Navbar>
        <div className="flex flex-col md:flex-row items-start w-[95%] mx-auto gap-4">
            <div className="bg-white text-white min-h-screen py-10 md:w-[120%]">
            {/* Blog Title */}
            <h1 className="text-xl md:text-4xl font-bold mt-4 text-[#042D47]">
                Contrary to popular belief, Lorem Ipsum is not simply random text. It
                has roots in a piece of classical Latin literature from 45 BC
            </h1>

            {/* Author & Date */}
            <p className="text-gray-400 text-sm mt-2 flex flex-col md:flex-row">
                <span>• Mohamed Laghdav</span>
                <span>• 7 minutes de lecture</span>
                <span>• 25 novembre 2024</span>
                  
            </p>

            {/* Main Image */}
            <div className="mt-6">
                <img
                src="/blog-image.jpg"
                alt="AI Technology"
                className="md:w-full rounded-lg"
                />
            </div>

            {/* Article Content */}
            <div className="mt-6 text-black leading-relaxed">
                <p>
                    <span className="font-bold md:text-2xl">What is Lorem Ipsum?</span>
                    <br />
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. <br />
                    <br />
                    <span className="font-bold text-2xl">Why do we use it?</span> <br />
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). <br />
                    <br />
                </p>
                    <img
                        src="/blog-image2.png"
                        alt="AI Technology"
                        className="w-full rounded-lg"
                    />
                <p>
                    <span className="font-bold text-2xl">Where does it come from?</span>
                    <br />
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32. <br />
                    <br />
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.
                    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham. <br />
                    <br />
                </p>
            </div>

            {/* Sidebar */}
            </div>
            <div className="md:flex border-t-2 border-t-black mt-22 h-[40%]">
            {/* Recent Articles */}
            <div className=" bg-gray-200 text-black p-5 rounded-lg">
                <h2 className="text-lg font-semibold mb-4">Articles récents</h2>
                <ul className="space-y-3 text-sm">
                <li className="hover:text-blue-500 cursor-pointer">
                    1 DÉCEMBRE 2024 - Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia...
                </li>
                <li className="hover:text-blue-500 cursor-pointer">
                    25 NOVEMBRE 2024 - The standard chunk of Lorem Ipsum used since the 1500s...
                </li>
                </ul>

                {/* Social Share */}
                <div className="mt-5">
                    <h2 className="text-sm font-semibold">Partager</h2>
                    <div className="flex space-x-3 mt-2">
                        <FaFacebook className="hover:text-blue-500 cursor-pointer" size={20} />
                        <FaTwitter className="hover:text-blue-400 cursor-pointer" size={20} />
                        <FaLinkedin className="hover:text-blue-700 cursor-pointer" size={20} />
                        <FaEnvelope className="hover:text-gray-700 cursor-pointer" size={20} />
                    </div>
                </div>
            </div>
            </div>
        </div>
    </Navbar>
  );
};

export default BlogDetail;