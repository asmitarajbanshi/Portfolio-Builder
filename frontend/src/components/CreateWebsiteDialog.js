import { useState } from "react";
import { FaRegQuestionCircle, FaMobileAlt, FaSearch } from "react-icons/fa";
import { Button } from "../components/ui/Button";
import { PlusCircle, UploadCloud, Smile } from "lucide-react";

function CreateWebsiteDialog({ isOpen, onClose }) {
  const [showPortfolioBuilder, setShowPortfolioBuilder] = useState(false);
  const [content, setContent] = useState(null);

  const handleCreateWebsite = () => {
    setShowPortfolioBuilder(true);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
      {!showPortfolioBuilder ? (
        // Initial Dialog (Before clicking "Start Building")
        <div className="bg-white p-6 rounded-lg shadow-lg w-96">
          <h2 className="text-lg font-semibold mb-4">Create Your Website</h2>
          <div className="flex justify-end space-x-2">
            <button
              onClick={handleCreateWebsite}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Start Building
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        // Website Builder UI (After clicking "Start Building")
        <div className="flex flex-col h-screen w-full bg-white rounded-lg shadow-lg">
          
          {/* Header Navbar */}
          <div className="flex justify-between items-center p-4 bg-white shadow-md">
            <div className="flex gap-2">
              <Button variant="default">
                <PlusCircle className="mr-2" /> Create
              </Button>
              <Button variant="outline">Edit</Button>
            </div>
            <div className="flex gap-4">
              <Button variant="outline">Styles</Button>
              <Button variant="outline">Libraries & Tools</Button>
              <Button variant="outline">Settings</Button>
              <Button variant="default">
                <UploadCloud className="mr-2" /> Publish
              </Button>
              <Button variant="secondary">Upgrade -50%</Button>
              <Smile className="w-6 h-6 text-gray-600 cursor-pointer" />
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-grow flex items-center justify-center bg-white border-2 border-dashed border-gray-300 mx-8 my-4 rounded-lg shadow-sm">
            {content ? (
              <div className="p-8">{content}</div>
            ) : (
              <div className="text-center text-gray-500">
                <img src="/empty-state.png" alt="Empty workspace" className="w-32 mx-auto mb-4" />
                <p className="text-lg font-medium">Add Your Content to Get Started</p>
                <p className="text-sm">Click <strong>Create</strong> in the top-left corner.</p>
              </div>
            )}
          </div>

          {/* Bottom Icons */}
          <div className="flex justify-between p-4 shadow-md">
            <div className="flex gap-4">
              <FaSearch size={24} className="text-gray-600" />
              <FaMobileAlt size={24} className="text-gray-600" />
            </div>
            <FaRegQuestionCircle size={24} className="text-gray-600" />
          </div>

          {/* Back Button */}
          <div className="p-4 flex justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
            >
              Close
            </button>
          </div>

        </div>
      )}
    </div>
  );
}

export default CreateWebsiteDialog;
