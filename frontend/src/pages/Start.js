import { useState } from "react";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { LayoutDashboard, Settings, BookOpen, HelpCircle, LogOut } from "lucide-react";
import CreateWebsiteDialog from "../components/CreateWebsiteDialog";
import SettingsPage from "./Settings"; // Import Settings component

export default function Start() {
  const navigate = useNavigate();
  const [isDialogOpen, setDialogOpen] = useState(false); 
  const [activeSection, setActiveSection] = useState("dashboard"); // State for section switching

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate("/");
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white p-6 shadow-md flex flex-col justify-between">
        <div>
          <div className="text-2xl font-semibold text-blue-600">portfoliobox</div>
          <nav className="mt-6 space-y-4">
            <div 
              className={`flex items-center space-x-3 p-3 rounded-md cursor-pointer ${
                activeSection === "dashboard" ? "bg-blue-100 text-blue-500 font-medium" : "text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setActiveSection("dashboard")}
            >
              <LayoutDashboard size={20} />
              <span>Dashboard</span>
            </div>
            <div 
              className={`flex items-center space-x-3 p-3 rounded-md cursor-pointer ${
                activeSection === "settings" ? "bg-blue-100 text-blue-500 font-medium" : "text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setActiveSection("settings")}
            >
              <Settings size={20} />
              <span>Settings</span>
            </div>
            <div className="flex items-center space-x-3 p-3 text-gray-700 hover:bg-gray-200 rounded-md cursor-pointer">
              <BookOpen size={20} />
              <span>Learn</span>
            </div>
            <div className="flex items-center space-x-3 p-3 text-gray-700 hover:bg-gray-200 rounded-md cursor-pointer">
              <HelpCircle size={20} />
              <span>Help</span>
            </div>
          </nav>
        </div>

        {/* Logout */}
        <div className="mb-6">
          <p className="text-sm text-gray-600">{auth.currentUser?.email}</p>
          <button
            onClick={handleLogout}
            className="mt-2 flex items-center justify-center w-full px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500"
          >
            <LogOut size={20} className="mr-2" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {activeSection === "dashboard" ? (
          <div>
            <div className="bg-blue-500 text-white p-4 rounded-lg shadow-md flex justify-between items-center">
              <div>
                <p className="text-sm font-medium uppercase">New Feature</p>
                <h2 className="text-lg font-semibold">Custom email address</h2>
                <p className="text-sm">Build customer trust by creating a professional email address for your brand.</p>
              </div>
            </div>

            <section className="mt-6">
              <h2 className="text-xl font-semibold text-gray-800">Your websites</h2>
              <p className="text-gray-500 text-sm">No websites created yet.</p>
              <button
                onClick={() => setDialogOpen(true)}
                className="mt-4 px-6 py-2 text-blue-600 font-medium rounded-lg border border-blue-600 hover:bg-blue-100"
              >
                Create new website
              </button>
            </section>
          </div>
        ) : (
          <SettingsPage /> // Show Settings when activeSection is "settings"
        )}

        {/* Create Website Modal */}
        <CreateWebsiteDialog isOpen={isDialogOpen} onClose={() => setDialogOpen(false)} />
      </main>
    </div>
  );
}
