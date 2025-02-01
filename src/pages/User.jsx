import React from 'react'
import Sidebar from '../components/sidebar';

const User = () => {
  return (
    <>
    <Sidebar/>
      <div className="h-screen bg-gradient-to-br from-blue-600 to-purple-700">
        <div className="max-w-sm items-center mx-auto bg-purple-500 shadow-lg rounded-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-800">Card Title</h2>
            <p className="mt-2 text-gray-600">
              This is a simple card without an image. You can add any content
              here, like text, buttons, etc.
            </p>
          </div>
          <div className="p-4 border-t border-gray-200">
            <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default User