import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  function handleNavigate(path: string) {
    navigate(path);
  }

  return (
    <nav className="bg-[#424242]">
      <div className="max-w-screen flex flex-wrap items-center justify-between p-4 text-[white]">
        <h1 className="text-xl font-medium">
          <button onClick={() => handleNavigate("/")}>Kochbuch React</button>
        </h1>
        <div className="block">
          <ul className="font-medium flex flex-row md:p-0 space-x-8">
            <li>
              <button onClick={() => handleNavigate("/")}>Home</button>
            </li>
            <li>
              <button onClick={() => handleNavigate("/recipe")}>Recipes</button>
            </li>
            <li>
              <button onClick={() => handleNavigate("/about")}>About</button>
            </li>
            <li>
              <button onClick={() => handleNavigate("/contact")}>Contact</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
