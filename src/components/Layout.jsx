import React from "react";
import { Outlet, Link, NavLink } from "react-router-dom";
import { ROUTES } from "../router/routes";

const Layout = ({ children }) => {
  const { isAuthenticated, user } = {
    isAuthenticated: false,
    user: { name: "Final Trio" },
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-64 bg-white shadow-md p-4 hidden md:block">
        <h2 className="text-xl font-bold mb-6">Dashboard</h2>
        <nav className="flex flex-col gap-3">
          <NavLink
            to={ROUTES.HOME}
            className={({ isActive }) =>
              `hover:text-blue-600 ${
                isActive ? "text-blue-600 font-semibold" : ""
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to={ROUTES.ABOUT}
            className={({ isActive }) =>
              `hover:text-blue-600 ${
                isActive ? "text-blue-600 font-semibold" : ""
              }`
            }
          >
            About
          </NavLink>

          {isAuthenticated ? (
            <>
              <NavLink
                to={ROUTES.DASHBOARD}
                className={({ isActive }) =>
                  `hover:text-blue-600 ${
                    isActive ? "text-blue-600 font-semibold" : ""
                  }`
                }
              >
                Dashboard
              </NavLink>
              <NavLink
                to={ROUTES.DASHBOARD_VIDEOS}
                className={({ isActive }) =>
                  `hover:text-blue-600 ${
                    isActive ? "text-blue-600 font-semibold" : ""
                  }`
                }
              >
                Videos
              </NavLink>
              <NavLink
                to={ROUTES.ACCOUNT}
                className={({ isActive }) =>
                  `hover:text-blue-600 ${
                    isActive ? "text-blue-600 font-semibold" : ""
                  }`
                }
              >
                Account
              </NavLink>
              <button className="text-red-600 mt-2 hover:underline text-left">
                Logout
              </button>
            </>
          ) : (
            <>
              <NavLink
                to={ROUTES.LOGIN}
                className={({ isActive }) =>
                  `hover:text-blue-600 ${
                    isActive ? "text-blue-600 font-semibold" : ""
                  }`
                }
              >
                Login
              </NavLink>
              <NavLink
                to={ROUTES.SIGNUP}
                className={({ isActive }) =>
                  `hover:text-blue-600 ${
                    isActive ? "text-blue-600 font-semibold" : ""
                  }`
                }
              >
                Sign Up
              </NavLink>
            </>
          )}
        </nav>
      </aside>

      <div className="flex-1 flex flex-col">
        <header className="w-full bg-white shadow-md p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">MyApp</h1>
          {isAuthenticated && <span>Welcome, {user?.name}!</span>}
        </header>
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
