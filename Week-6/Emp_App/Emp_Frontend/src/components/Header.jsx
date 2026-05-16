import { NavLink } from "react-router";
import { useContext } from "react";
import { counterContextObj } from "./context/ContextProvider";

function Header() {

  const { counter } = useContext(counterContextObj);

  return (
    <nav className="flex justify-end items-center bg-amber-400 p-3 text-white gap-6 text-lg sm:text-xl">

      <h1 className="mr-auto font-bold">
        Counter : {counter}
      </h1>

      <NavLink
        to=""
        className={({ isActive }) =>
          isActive ? "text-blue-700 bg-blue-200" : ""
        }
      >
        Home
      </NavLink>

      <NavLink
        to="create-emp"
        className={({ isActive }) =>
          isActive ? "text-blue-700 bg-blue-200" : ""
        }
      >
        Create Emp
      </NavLink>

      <NavLink
        to="list"
        className={({ isActive }) =>
          isActive ? "text-blue-700 bg-blue-200" : ""
        }
      >
        Employees
      </NavLink>
    </nav>
  );
}

export default Header;