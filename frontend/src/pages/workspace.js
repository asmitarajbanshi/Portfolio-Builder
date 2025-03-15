import { useState } from "react";
import { Button } from "../components/ui/Button";
import { PlusCircle, UploadCloud, Smile } from "lucide-react";

export default function WebsiteBuilder() {
  const [content, setContent] = useState(null);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <div className="flex justify-between items-center p-4 bg-white shadow-md">
        <div className="flex gap-2">
          <Button variant="default">
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
    </div>
  );
}
