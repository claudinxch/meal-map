import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  const location = useLocation();
  return (
    <div className="w-full bg-green">
      <nav className="container relative flex items-center justify-between m-auto lg:justify-between py-5 xl:px-16">
        <Link
          to={location.pathname !== "/" ? "/" : ""}
          className="flex gap-2 w-[300px] items-center px-4 relative"
        >
          <img src="/img/logo-png.png" alt="" className="w-11 h-11" />
          <h1 className="text-darkGray font-primary text-2xl font-semibold tracking-wide">
            Meal Map
          </h1>
        </Link>
        <div className="flex items-center px-4">
          <ul className="flex items-center justify-end gap-8 mr-4 flex-1 font-medium list-none lg:flex">
            <li>
              <Link
                to={"/diets"}
                className={`text-darkGray inline-block font-secondary py-2 no-underline relative transition-all duration-500 link-animated-underline ${
                  location.pathname === "/diets" ? "text-orange" : ""
                } text-lg focus:text-orange`}
              >
                Diets
              </Link>
            </li>
            <li>
              <Link
                to={"/cuisines"}
                className={`text-darkGray inline-block font-secondary py-2 no-underline relative transition-all duration-500 link-animated-underline ${
                  location.pathname === "/cuisines" ? "text-orange" : ""
                } text-lg focus:text-orange`}
              >
                Cuisines
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
