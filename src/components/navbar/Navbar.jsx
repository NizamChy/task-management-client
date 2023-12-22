import { useContext, useState } from "react";
import { FaClipboardList } from "react-icons/fa";
import { LuMoon } from "react-icons/lu";
import { NavLink } from "react-router-dom";
import { MdOutlineLightMode } from "react-icons/md";
import { AuthContext } from "../../provider/AuthProvider";

const Navbar = () => {
  const [theme, setTheme] = useState("dim");

  const { user, logOut } = useContext(AuthContext);


  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const toggleTheme = () => {
    const newTheme = theme === "dim" ? "light" : "dim";
    document.documentElement.setAttribute("data-theme", newTheme);
    setTheme(newTheme);
  };

  const getButtonText = () => {
    return theme === "dim" ? <MdOutlineLightMode /> : <LuMoon />    ;
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
              {user ? (
                <button onClick={handleLogOut} >
                  Logout
                </button>
              ) : (
                <NavLink to="/login" 
                className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "underline" : ""
              }
                >
                  Login
                </NavLink>
              )}
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
              {user ? (
                <button onClick={handleLogOut} >
                  Logout
                </button>
              ) : (
                <NavLink to="/login" 
                className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "underline" : ""
              }
                >
                  Login
                </NavLink>
              )}
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
 {/* user  */}
 <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              
              <div className="w-10 rounded-full">
              {user && user?.photoURL ? (
                  <img src={user?.photoURL} alt="User Avatar" />
                ) : (
                  <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-10 h-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                )}

              </div>
            </div>
            <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <a className="justify-between">
                  {user && (
                    <span style={{ fontSize: "15px", fontWeight: "500" }}>
                      {user?.displayName}
                    </span>
                  )}
                  {/* <span className="badge">New</span> */}
                </a>
              </li>
              <li>
                {user && (
                  <span
                    style={{
                      fontSize: "14px",
                      fontWeight: "400",
                      color: "blue",
                    }}
                  >
                    {user?.email}
                  </span>
                )}
              </li>
              <li>
                {user ? (
                  <button
                    onClick={handleLogOut}
                    
                  >
                    Logout
                  </button>
                ) : (
                  <NavLink
                    to="/login"
                   
                  >
                    Login
                  </NavLink>
                )}
              </li>
            </ul>
          </div>

          {/* user  */}
        </div>
      </div>
      {/* Navbar ends */}
    </div>
  );
};

export default Navbar;
