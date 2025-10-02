import React from "react";
import { Link, Outlet } from "react-router-dom";

const Account = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md rounded-r-xl p-6">
        <h2 className="text-xl font-bold mb-6">Account Settings</h2>
        <nav className="space-y-4">
          <Link to="profile">
            <button className="flex items-center w-full px-4 py-2 text-left rounded-lg hover:bg-gray-100">
              👤 Profile
            </button>
          </Link>

          <Link to="subscription">
            <button className="flex items-center w-full px-4 py-2 text-left rounded-lg hover:bg-gray-100">
              💳 Subscription
            </button>
          </Link>

          <Link to="notifications">
            <button className="flex items-center w-full px-4 py-2 text-left rounded-lg hover:bg-gray-100">
              🔔 Notifications
            </button>
          </Link>

          <Link to="appearance">
            <button className="flex items-center w-full px-4 py-2 text-left rounded-lg hover:bg-gray-100">
              ✨ Appearance
            </button>
          </Link>
        </nav>
      </aside>

      {/* Main Content (nested pages load here) */}
      <main className="flex-1 p-10">
        <Outlet /> {/* ✅ this will render Profile, Subscription etc */}
      </main>
    </div>
  );
};

export default Account;
