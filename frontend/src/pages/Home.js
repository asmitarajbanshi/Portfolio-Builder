import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [gradientPosition, setGradientPosition] = useState({ x: 50, y: 50 });
  const navigate = useNavigate();

  useEffect(() => {
    const moveGradient = () => {
      setGradientPosition({
        x: Math.random() * 100,
        y: Math.random() * 100,
      });
    };

    const interval = setInterval(moveGradient, 3000);
    return () => clearInterval(interval);
  }, []);

  const goToSitesDashboard = () => {
    navigate("/dashboard/sites");
  };

  return (
    <div
      className="relative min-h-screen text-white overflow-hidden flex flex-col"
      style={{
        background: `radial-gradient(circle at ${gradientPosition.x}% ${gradientPosition.y}%, #3b82f6, #1e3a8a 80%)`
      }}
    >
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center pt-24 px-4">
        <motion.h1
          className="text-4xl sm:text-6xl font-extrabold leading-tight mb-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Just publish it with Pixel
        </motion.h1>
        <motion.p
          className="text-gray-300 text-lg sm:text-2xl mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          The website builder loved by designers.
        </motion.p>

        {/* Image Section */}
        <div className="mb-8">
          <picture>
            <source
              srcSet="https://salecdn.portfoliobox.net/salesite2023/resources-v2/images/video/portfoliobox-admin-panel-1-q88@s1x.jpg, https://salecdn.portfoliobox.net/salesite2023/resources-v2/images/video/portfoliobox-admin-panel-1-q88@s2x.jpg 2x"
              type="image/jpeg"
            />
            <img
              className="auto-height"
              width="1200"
              height="668"
              src="https://salecdn.portfoliobox.net/salesite2023/resources-v2/images/video/portfoliobox-admin-panel-1-q88@s1x.jpg"
              alt="Portfoliobox Admin Dashboard"
              loading="lazy"
            />
          </picture>
        </div>

        {/* Buttons Section */}
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <motion.button
            className="w-full sm:w-auto px-6 py-3 bg-white text-black font-semibold rounded-full shadow-lg hover:bg-gray-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={goToSitesDashboard}
          >
            Go to Sites Dashboard
          </motion.button>
        </div>
      </div>

      {/* Additional content to force scrolling */}
      <div className="flex-grow"></div>

      <div className="p-6 text-center">
        <p className="text-gray-300">Scroll down for more...</p>
      </div>
    </div>
  );
}
