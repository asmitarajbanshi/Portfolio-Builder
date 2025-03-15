import { FaRegQuestionCircle, FaMobileAlt, FaSearch } from "react-icons/fa";

const PortfolioBuilder = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* Top Navbar */}
      <div className="bg-white shadow-md p-4 flex justify-between items-center">
        <div className="flex gap-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Create</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Edit</button>
        </div>
        <div className="flex gap-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Styles</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Libraries and Tools</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Settings</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Publish</button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4 bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
          {/* Add your portfolio builder content here */}
        </div>
      </div>

      {/* Bottom Icons */}
      <div className="flex justify-between p-4 shadow-md">
        <div className="flex gap-4">
          <FaSearch size={24} className="text-gray-600" />
          <FaMobileAlt size={24} className="text-gray-600" />
        </div>
        <FaRegQuestionCircle size={24} className="text-gray-600" />
      </div>
    </div>
  );
};

export default PortfolioBuilder;
