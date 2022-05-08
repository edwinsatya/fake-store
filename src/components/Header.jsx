import { useEffect, useState } from "react";

const Header = () => {
  const [isScroll, setIsScroll] = useState(false);
  useEffect(() => {
    const scrollListener = (e) => {
      const scrollY = Math.ceil(window.scrollY);
      console.log(scrollY);
      if (scrollY > 0) {
        console.log("masuk sini");
        setIsScroll(true);
        return;
      }
      setIsScroll(false);
    };
    window.addEventListener("scroll", scrollListener);

    return () => window.removeEventListener("scroll", scrollListener);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full transition ease-linear duration-300 ${
        isScroll ? "bg-gray-800/90" : ""
      }`}
    >
      <div className="flex justify-between max-w-screen-xl mx-auto py-4 lg:py-8 px-3 md:px-4 lg:px-8">
        <div>
          <h1 className="text-black text-xl font-semibold">
            ART
            <span
              className={`${
                isScroll ? "text-white" : "text-gray-600"
              } text-xl font-light`}
            >
              MASK
            </span>
          </h1>
        </div>
        <ul className={`${isScroll ? "text-white" : "text-gray-600"}`}>
          <li>Catalog</li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
