import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const templates = {
  Cover: [
    { name: "Heading - Left", image: "/cover-heading-left.png" },
    { name: "Heading - Centered", image: "/cover-heading-center.png" },
    { name: "Heading - Right", image: "/cover-heading-right.png" },
    { name: "Text - Left", image: "/cover-text-left.png" },
    { name: "Text - Centered", image: "/cover-text-center.png" },
    { name: "Text - Bottom", image: "/cover-text-bottom.png" },
    { name: "Text - Right", image: "/cover-text-right.png" },
    { name: "Heading - Bottom/Right", image: "/cover-heading-bottom-right.png" },
  ],
  Blog: [
    { name: "Simple Blog", image: "/blog-simple.png" },
    { name: "Modern Blog", image: "/blog-modern.png" },
  ],
  ECommerce: [
    { name: "Product Showcase", image: "/ecommerce-product.png" },
    { name: "Minimal Store", image: "/ecommerce-minimal.png" },
  ],
};

export default function PageBuilder() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Cover");
  const [selectedTemplate, setSelectedTemplate] = useState(templates.Cover[0]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <div className="flex justify-between items-center p-4 bg-white shadow-md">
        <Button onClick={() => setIsModalOpen(true)}>Create</Button>
      </div>

      {/* Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-4xl flex">
          {/* Sidebar */}
          <div className="w-1/4 border-r p-4">
            <h2 className="font-semibold text-lg">Templates</h2>
            {Object.keys(templates).map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className="w-full my-1"
                onClick={() => {
                  setSelectedCategory(category);
                  setSelectedTemplate(templates[category][0]);
                }}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Template Selection */}
          <div className="w-3/4 p-4">
            <DialogHeader>
              <DialogTitle>Select a Template</DialogTitle>
            </DialogHeader>
            <div className="grid grid-cols-3 gap-4">
              {templates[selectedCategory].map((template) => (
                <div
                  key={template.name}
                  className="cursor-pointer border rounded-lg overflow-hidden"
                  onClick={() => setSelectedTemplate(template)}
                >
                  <img src={template.image} alt={template.name} className="w-full h-24 object-cover" />
                  <p className="text-center p-2 text-sm">{template.name}</p>
                </div>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Live Preview Section */}
      <div className="flex-grow flex items-center justify-center bg-white mx-8 my-4 rounded-lg shadow-sm">
        <div className="text-center">
          <h2 className="text-lg font-medium">{selectedTemplate.name}</h2>
          <img src={selectedTemplate.image} alt={selectedTemplate.name} className="w-full max-w-3xl mt-2 shadow-lg rounded-lg" />
        </div>
      </div>
    </div>
  );
}
