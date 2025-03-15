import { useState } from "react";
import { Button } from "../components/ui/Button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { PlusCircle, UploadCloud, Smile } from "lucide-react";

export default function WebsiteBuilder() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const pageOptions = [
    { name: "Cover", description: "Used for introductory and header sections." },
    { name: "Text and Contact", description: "Suitable for info pages and text sections." },
    { name: "Gallery", description: "Used to showcase images and videos." },
    { name: "Link Page", description: "Displays links to other pages. Used for portfolios." },
    { name: "Collections", description: "Showcase services, teams, events, or testimonials." },
    { name: "E-commerce", description: "Sell products, offer services, or schedule appointments." },
    { name: "Blog", description: "Used to add a blog to your website." },
    { name: "Music and Embed", description: "Embed music and media files." },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <div className="flex justify-between items-center p-4 bg-white shadow-md">
        <div className="flex gap-2">
          <Button onClick={() => setIsModalOpen(true)} variant="default">
            <PlusCircle className="mr-2" /> Create
          </Button>
          <Button variant="outline">Edit</Button>
        </div>
        <div className="flex gap-4">
          <Button variant="outline">Styles</Button>
          <Button variant="outline">Libraries and Tools</Button>
          <Button variant="outline">Settings</Button>
          <Button variant="default">
            <UploadCloud className="mr-2" /> Publish
          </Button>
          <Button variant="secondary">Upgrade -50%</Button>
          <Smile className="w-6 h-6 text-gray-600 cursor-pointer" />
        </div>
      </div>

      {/* Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="w-[500px]">
          <DialogHeader>
            <DialogTitle>What type of page would you like to create?</DialogTitle>
          </DialogHeader>
          <div className="space-y-3">
            {pageOptions.map((option, index) => (
              <button
                key={index}
                className="w-full text-left p-3 border border-gray-200 rounded-lg hover:bg-gray-100"
                onClick={() => setIsModalOpen(false)}
              >
                <p className="font-semibold">{option.name}</p>
                <p className="text-sm text-gray-600">{option.description}</p>
              </button>
            ))}
          </div>
        </DialogContent>
      </Dialog>

      {/* Main Content Area */}
      <div className="flex-grow flex items-center justify-center bg-white border-2 border-dashed border-gray-300 mx-8 my-4 rounded-lg shadow-sm">
        <div className="text-center text-gray-500">
          <p className="text-lg font-medium">Add Your Content to Get Started</p>
          <p className="text-sm">Click <strong>Create</strong> in the top-left corner.</p>
        </div>
      </div>
    </div>
  );
}
