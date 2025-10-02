import React from "react";

export default function Subscription() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black bg-opacity-60 p-4">
      <div className="bg-white rounded-2xl shadow-lg max-w-3xl w-full p-8 relative">
        {/* Close Button */}
        <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
          ✕
        </button>

        {/* Icon */}
        <div className="flex justify-center">
          <div className="bg-gradient-to-r from-green-400 to-purple-400 p-4 rounded-full">
            <span className="text-white text-2xl">👤</span>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-center mt-4">
          Unlock Your Full Audience Potential!
        </h2>
        <p className="text-gray-500 text-center mt-2">
          You've reached your analysis limit. Upgrade to AudienceAI Pro to dive
          deeper into your comments, gain unlimited insights, and grow your
          channel faster than ever.
        </p>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {/* Basic Plan */}
          <div className="border rounded-xl p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold">Basic Plan</h3>
              <p className="text-2xl font-bold mt-2">$0</p>
              <p className="text-sm text-gray-500">/ month</p>

              <ul className="mt-4 space-y-2 text-gray-600">
                <li>✔ Up to 5 video analyses/month</li>
                <li>✔ Basic sentiment analysis</li>
                <li>✔ Top 3 comments & questions</li>
              </ul>
            </div>
            <button className="mt-6 w-full bg-purple-100 text-purple-600 font-medium py-2 rounded-lg">
              Current Plan
            </button>
          </div>

          {/* Pro Plan */}
          <div className="border rounded-xl p-6 flex flex-col justify-between bg-purple-50 border-purple-300 relative">
            {/* Most Popular Tag */}
            <span className="absolute top-4 right-4 bg-green-600 text-white text-xs px-2 py-1 rounded-md">
              Most Popular
            </span>
            <div>
              <h3 className="text-lg font-bold">Pro Plan</h3>
              <p className="text-2xl font-bold mt-2">$29</p>
              <p className="text-sm text-gray-500">/ month</p>

              <ul className="mt-4 space-y-2 text-gray-600">
                <li>✔ Unlimited video analyses</li>
                <li>✔ Deep sentiment insights</li>
                <li>✔ Full comment explorer access</li>
                <li>✔ Priority processing & support</li>
                <li>✔ Advanced trend reports & exports</li>
                <li>✔ Early access to new features</li>
              </ul>
            </div>
            <button className="mt-6 w-full bg-purple-600 text-white font-medium py-2 rounded-lg hover:bg-purple-700">
              Upgrade Now
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-between mt-8 text-sm">
          <button className="text-gray-400 hover:text-gray-600">
            Maybe Later
          </button>
          <button className="text-purple-600 hover:underline">Learn More</button>
        </div>
      </div>
    </div>
  );
}
