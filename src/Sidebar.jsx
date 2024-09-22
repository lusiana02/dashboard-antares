import React from 'react';

function Sidebar() {
  return (
    <aside className="sticky top-0 h-screen bg-white p-4 w-64 bg-white h-screen p-4 flex flex-col w-64 bg-white h-screen p-4">
      <div className="flex items-center mb-8">
        <img src="./images/logo-antares.png" alt="Logo" className="mr-2 w-8 h-8"/>
        <span className="text-xl font-bold">ANTARES</span>
      </div>
      <nav>
        <ul>
          <li className="mb-4">
            <a href="#" className="flex items-center text-gray-700 hover:text-blue-500">
              <i className="fas fa-home mr-2"></i> Overview
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="flex items-center text-gray-700 hover:text-blue-500">
              <i className="fas fa-lightbulb mr-2"></i> Insight Hub
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="flex items-center text-gray-700 hover:text-blue-500">
              <i className="fas fa-briefcase mr-2"></i> Usecase
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="flex items-center text-gray-700 hover:text-blue-500">
              <i className="fas fa-file-alt mr-2"></i> Report
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="flex items-center text-gray-700 hover:text-blue-500">
              <i className="fas fa-book mr-2"></i> Docs
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="flex items-center text-gray-700 hover:text-blue-500">
              <i className="fas fa-life-ring mr-2"></i> Support
            </a>
          </li>
        </ul>
      </nav>
      <div className="mt-auto">
        <div className="flex items-center mb-4">
          <img src="./images/user.png" alt="User Avatar" className="mr-2 rounded-full w-10 h-10"/>
          <div>
            <p className="text-gray-700">Roro Jonggrang</p>
            <p className="text-sm text-gray-500">End User Account</p>
          </div>
        </div>
        <button className="w-full py-2 px-4 bg-red-500 text-white rounded hover:bg-red-600">
          <i className="fas fa-sign-out-alt mr-2"></i> Sign Out
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;