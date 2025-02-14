import Footer from "./Footer";
import Header from "./Header";

// eslint-disable-next-line react/prop-types
const Navbar = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Main Content */}
      <main className="flex-grow container mx-auto p-4">{children}</main>

      <Footer />
    </div>
  );
};

export default Navbar;
