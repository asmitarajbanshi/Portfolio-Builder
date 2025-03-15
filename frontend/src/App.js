import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Start from "./pages/Start";
import TemplateSelection from "./components/TemplateSelection";
import SitesDashboard from "./pages/SitesDashboard";
import SignupModal from "./components/SignupModal";
import CreateWebsiteDialog from "./components/CreateWebsiteDialog";
import PortfolioBuilder from "./pages/PortfolioBuilder";
import PortfolioEditor from "./pages/PortfolioEditor";
import Settings from "./pages/Settings";
import PricingSection from "./components/Pricing";


function App() {
  const [isSignupOpen, setSignupOpen] = useState(false);
  const [isCreateDialogOpen, setCreateDialogOpen] = useState(false);

  return (
    <Router>
      <Navbar onSignupOpen={() => setSignupOpen(true)} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/start" element={<Start />} />
        <Route path="/templates" element={<TemplateSelection />} />
        <Route path="/pricing" element={<PricingSection />} />
        <Route path="/dashboard/sites" element={<SitesDashboard />} />
        <Route path="/design" element={<PortfolioEditor />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/builder" element={<PortfolioBuilder />} />
        {/* Add other routes as needed */}
      </Routes>
      <SignupModal isOpen={isSignupOpen} onClose={() => setSignupOpen(false)} />
      <CreateWebsiteDialog
        isOpen={isCreateDialogOpen}
        onClose={() => setCreateDialogOpen(false)}
      />
    </Router>
  );
}

export default App;
