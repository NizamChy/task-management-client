import { useState } from "react";
import { FaClipboardList, FaMoon } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { MdOutlineLightMode } from "react-icons/md";

const Navbar = () => {
  const [theme, setTheme] = useState("dim");

  const toggleTheme = () => {
    const newTheme = theme === "dim" ? "light" : "dim";
    document.documentElement.setAttribute("data-theme", newTheme);
    setTheme(newTheme);
  };

  const getButtonText = () => {
    return theme === "dim" ? <MdOutlineLightMode /> : <FaMoon />;
  };

  return (
    <div>
      {/* Navbar  */}
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-md font-semibold dropdown-content mt-3 z-[1] p-2 pl-4 shadow bg-base-100 rounded-box w-52"
            >
            <li>
              <button className="text-2xl mt-1" onClick={toggleTheme}>{getButtonText()}</button>
            </li>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "underline" : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "underline" : ""
                  }
                >
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/login"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "underline" : ""
                  }
                >
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/register"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "underline" : ""
                  }
                >
                  Register
                </NavLink>
              </li>
            </ul>
          </div>
          <NavLink to="/" className="btn btn-ghost text-xl">
            {" "}
            <FaClipboardList />
            Task Management
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-xl">
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "underline" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "underline" : ""
                }
              >
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "underline" : ""
                }
              >
                Login
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/register"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "underline" : ""
                }
              >
                Register
              </NavLink>
            </li>

            <li>
              <button className="text-2xl mt-1" onClick={toggleTheme}>{getButtonText()}</button>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {/* profile  */}
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
          {/* profile end */}
        </div>
      </div>
      {/* Navbar ends */}
    </div>
  );
};

export default Navbar;
