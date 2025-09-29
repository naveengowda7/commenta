import React from "react";

const Home = () => {
  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold mb-4">Welcome Home!</h1>
      <p className="text-gray-700 mb-4">
        This is the home page of your application.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-bold text-lg mb-2">Feature 1</h3>
          <p className="text-gray-600">Amazing feature description</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-bold text-lg mb-2">Feature 2</h3>
          <p className="text-gray-600">Another great feature</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-bold text-lg mb-2">Feature 3</h3>
          <p className="text-gray-600">One more awesome feature</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
