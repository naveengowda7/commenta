import React from "react";
import Subscription from "./Subscription";
import { Link } from "react-router-dom";
export default function Profile() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md rounded-r-xl p-6">
        <h2 className="text-xl font-bold mb-6">Account Settings</h2>
        <nav className="space-y-4">
          <button className="flex items-center w-full px-4 py-2 text-left rounded-lg bg-purple-100 text-purple-600 font-medium">
            <span className="mr-2">👤</span> Profile
          </button>
          <Link to="/subscription">
          <button className="flex items-center w-full px-4 py-2 text-left rounded-lg hover:bg-gray-100">
            <span className="mr-2">💳</span> Subscription 
          </button>
          </Link>
          <button className="flex items-center w-full px-4 py-2 text-left rounded-lg hover:bg-gray-100">
            <span className="mr-2">🔔</span> Notifications
          </button>
          <button className="flex items-center w-full px-4 py-2 text-left rounded-lg hover:bg-gray-100">
            <span className="mr-2">✨</span> Appearance
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">
        <div className="bg-white shadow rounded-xl p-8 max-w-3xl mx-auto">
          <h3 className="text-xl font-bold mb-2">Profile Information</h3>
          <p className="text-gray-500 mb-6">
            Manage your personal details linked to your YouTube account.
          </p>

          {/* Avatar Section */}
          <div className="flex flex-col items-center mb-6">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Avatar"
              className="w-24 h-24 rounded-full border"
            />
            <button className="mt-3 text-purple-600 border border-purple-200 px-4 py-1 rounded-lg hover:bg-purple-50">
              Change Avatar
            </button>
          </div>

          {/* Form */}
          <form className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  defaultValue="Alexandra"
                  className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-purple-200 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  defaultValue="Bennett"
                  className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-purple-200 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1">
                Email Address
              </label>
              <input
                type="email"
                defaultValue="alexandra.bennett@example.com"
                className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-purple-200 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1">
                YouTube Channel Link
              </label>
              <input
                type="url"
                defaultValue="https://youtube.com/@TechInsightHub"
                className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-purple-200 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="bg-purple-600 text-white px-6 py-2 rounded-lg shadow hover:bg-purple-700"
            >
              Save Changes
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
