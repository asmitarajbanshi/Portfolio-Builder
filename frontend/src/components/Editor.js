import { useState } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import DraggableItem from "./DraggableItem";

export default function Editor({ template }) {
  const [sections, setSections] = useState(template.sections);

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      const oldIndex = sections.findIndex((s) => s.id === active.id);
      const newIndex = sections.findIndex((s) => s.id === over.id);
      const newSections = [...sections];
      [newSections[oldIndex], newSections[newIndex]] = [newSections[newIndex], newSections[oldIndex]];
      setSections(newSections);
    }
  };

  return (
    <div className="p-6 bg-gray-900 min-h-screen text-white">
      <h1 className="text-3xl font-bold text-center mb-6">Customize Your Template</h1>
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={sections} strategy={verticalListSortingStrategy}>
          {sections.map((section) => (
            <DraggableItem key={section.id} id={section.id} content={section.content} />
          ))}
        </SortableContext>
      </DndContext>
    </div>
  );
}

