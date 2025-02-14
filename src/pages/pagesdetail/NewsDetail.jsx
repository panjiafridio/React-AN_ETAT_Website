import Navbar from "../../components/Navbar";


const NewsDetail = () => {
  return (
    <Navbar>
    <div className="min-h-screen bg-white text-white px-4 lg:px-20 py-10">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-400 mb-6">
        <span className="hover:text-gray-200 cursor-pointer">Accueil</span> &gt;{" "}
        <span className="hover:text-gray-200 cursor-pointer">Actualités</span> &gt;{" "}
        <span className="text-gray-200">Aenean vel est rhoncus massa</span>
      </nav>

      <div className="lg:flex gap-8">
        {/* Left Content */}
        <div className="lg:w-2/3">
          <h1 className="text-2xl lg:text-3xl font-bold text-black">
            Aenean vel est rhoncus massa imperdiet vestibulum condimentum
          </h1>
          <p className="text-gray-400 text-sm mt-2">1 DÉCEMBRE 2024</p>
          <p className="text-black mt-4">
            Suspendisse pellentesque, nisi scelerisque pulvinar tristique, quam magna elementum diam, sit amet lacinia elit tortor quis ipsum. In non lobortis dui. Donec orci enim, fringilla eu tortor ut, dapibus ultrices velit.
          </p>
          <img
            src="/news-detail.png"
            alt="News"
            className="w-full mt-6 rounded-lg"
          />
          <p className="text-black mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultrices blandit sapien, a lobortis est venenatis sed. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed purus eros, consequat imperdiet libero accumsan, congue fermentum lacus.
            Ut placerat, risus volutpat elementum placerat, quam purus viverra metus, vel elementum nunc leo non mauris. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam efficitur ligula non tellus scelerisque, a convallis orci rhoncus. Aenean scelerisque ac nulla eu congue.
            Nulla vitae enim eu lectus posuere varius vel vitae felis. Nulla semper dolor sit amet quam eleifend tempus. Vivamus faucibus diam magna, sed vestibulum libero eleifend quis. Vivamus rutrum ipsum nec nisi ultricies, eu semper leo tempus. Donec in hendrerit lectus. Aliquam non tortor ac ex ultricies euismod. Proin non augue malesuada, porttitor erat eu, ultrices nisi. Mauris eleifend, metus eget hendrerit aliquet, velit massa vulputate dui, in varius nulla est iaculis augue.
            Fusce id pulvinar nibh, id pretium est. Aliquam porttitor erat nec odio venenatis tincidunt. Vivamus mollis non augue et tempor.
            Vivamus nec arcu neque. Vestibulum luctus cursus metus vitae elementum. Quisque velit nisi, lacinia sed nunc sed, suscipit scelerisque urna.
            Vestibulum et quam in metus dignissim ornare. Aenean euismod quam at cursus ullamcorper.
            Phasellus convallis, risus eget sagittis laoreet, sapien metus feugiat enim, vehicula pretium risus neque quis turpis. Duis auctor accumsan tortor, ut facilisis justo tempus ut. Curabitur sit amet nisl et eros volutpat fringilla. Suspendisse potenti. Etiam dapibus erat id justo varius, vitae commodo magna facilisis. Integer pellentesque dolor eu bibendum elementum. Fusce tempus tempor ornare. Nullam mauris sapien, aliquam nec elementum.
            Suspendisse pellentesque, nisi scelerisque pulvinar tristique, quam magna elementum diam, sit amet lacinia elit tortor quis ipsum. In non lobortis dui. Donec orci enim, fringilla eu tortor ut, dapibus ultrices velit. Mauris vel orci laoreet, congue arcu a, ornare leo. Sed ut enim arcu.
            Donec in pulvinar enim, vitae consequat lacus. Ut facilisis tristique quam et malesuada. Cras efficitur bibendum mollis. Vestibulum interdum tincidunt eros, vel euismod ex cursus nec. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
          </p>
        </div>

        {/* Right Sidebar */}
        <div className="lg:w-1/3 bg-gray-300 p-6 rounded-lg mt-10 lg:mt-0 h-[40%]">
          <h2 className="text-xl font-semibold text-black border-t-4 pt-5 pb-1 border-b-2 border-b-white  border-black">Actualités récentes</h2>
          <div className="mt-4 space-y-4">
            {[1, 2, 3].map((item, index) => (
              <div key={index} className="border-b pb-3">
                <p className="text-gray-400 text-sm">25 NOVEMBRE 2024</p>
                <p className="text-black font-medium hover:text-blue-300 cursor-pointer">
                  Class aptent taciti sociosqu ad litora torquent per conubia nostra.
                </p>
              </div>
            ))}
          </div>

          {/* Social Share */}
          <div className="mt-6 text-black">
            <h3 className="text-lg font-semibold">Partager</h3>
            <div className="flex gap-4 mt-2">
              <i className="fab fa-facebook text-2xl cursor-pointer hover:text-blue-500"></i>
              <i className="fab fa-twitter text-2xl cursor-pointer hover:text-blue-400"></i>
              <i className="fab fa-linkedin text-2xl cursor-pointer hover:text-blue-600"></i>
              <i className="fas fa-envelope text-2xl cursor-pointer hover:text-gray-300"></i>
            </div>
          </div>
        </div>
      </div>
    </div>

    </Navbar>
  );
};

export default NewsDetail;
