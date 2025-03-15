import { useState } from "react";
import { motion } from "framer-motion";

const pricingOptions = {
  personal: [
    { title: "Basic", price: "$25", features: ["5,000 pages", "100 GB bandwidth", "10 CMS collections"] },
    { title: "Pro", price: "$50", features: ["10,000 pages", "200 GB bandwidth", "20 CMS collections"] },
  ],
  business: [
    { title: "Startup", price: "$75", features: ["15,000 pages", "200 GB bandwidth", "20 CMS collections"], popular: true },
    { title: "Scaleup", price: "$200", features: ["30,000 pages", "500 GB bandwidth", "30 CMS collections"] },
    { title: "Enterprise", price: "Custom", features: ["Custom limits", "Custom security", "Slack support"] },
  ],
};

export default function PricingSection() {
  const [activeTab, setActiveTab] = useState("business");
  
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center py-16 md:py-20">
      <h2 className="text-4xl font-bold mb-4 text-white drop-shadow-lg relative z-10">Pricing</h2>
      <p className="text-gray-400 mb-6 text-center max-w-lg">
        Use Pixel for free. Upgrade to add a custom domain, access additional features, and increase limits.
      </p>
      
      {/* Toggle */}
      <div className="flex bg-gray-800 p-1 rounded-full mb-8">
        {Object.keys(pricingOptions).map((tab) => (
          <button
            key={tab}
            className={`px-6 py-2 rounded-full transition-all duration-300 ${activeTab === tab ? "bg-white text-black" : "text-gray-400"}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>
      
      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pricingOptions[activeTab].map((plan, index) => (
          <motion.div
            key={index}
            className="p-6 border border-gray-700 rounded-xl bg-gray-900 relative"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {plan.popular && <span className="absolute top-4 right-4 bg-purple-500 text-xs px-2 py-1 rounded-full">POPULAR</span>}
            <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
            <p className="text-3xl font-bold mb-4">{plan.price} <span className="text-sm">/month</span></p>
            <ul className="text-gray-400 mb-6">
              {plan.features.map((feature, i) => (
                <li key={i} className="mb-1">✔ {feature}</li>
              ))}
            </ul>
            <button className="w-full py-3 rounded-lg text-white font-semibold transition-all duration-300 bg-purple-600 hover:bg-purple-500">
              {plan.price === "Custom" ? "Explore" : "Subscribe"}
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
