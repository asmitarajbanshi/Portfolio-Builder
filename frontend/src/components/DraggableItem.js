import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export default function DraggableItem({ id, content }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      className="p-4 bg-gray-800 border border-gray-700 rounded-lg cursor-grab mb-4"
      style={{ transform: CSS.Transform.toString(transform), transition }}
    >
      {content}
    </div>
  );
}
