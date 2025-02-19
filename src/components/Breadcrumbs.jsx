import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();

  // Konversi path URL ke array
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <div className="bg-gray-100 py-3 px-4 text-sm text-gray-600">
      <div className="container mx-auto">
        <nav className="flex space-x-2">
          {/* Home Breadcrumb */}
          <Link to="/" className="text-blue-500 hover:underline">
            Accueil
          </Link>
          {pathnames.length > 0 && <span>›</span>}

          {/* Breadcrumbs Dinamis */}
          {pathnames.map((value, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
            const isLast = index === pathnames.length - 1;
            return isLast ? (
              <span key={routeTo} className="text-gray-800 font-semibold">
                {decodeURIComponent(value)}
              </span>
            ) : (
              <Link
                key={routeTo}
                to={routeTo}
                className="text-blue-500 hover:underline"
              >
                {decodeURIComponent(value)}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default Breadcrumbs;
