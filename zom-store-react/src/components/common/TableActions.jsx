import React from "react";
//Props
//-row: The data object for this row
//   - onEdit: Function to call when edit button is clicked
//   - onDelete: Function to call when delete button is clicked
import { BiEditAlt } from "react-icons/bi";
import { BiTrash } from "react-icons/bi";
function TableActions({ row, onEdit, onDelete }) {
  return (
    // Container with flexbox, gap between buttons, aligned to right

    <div className="flex gap-2 justify-end">
      {/* Edit button - only render if onEdit handler provided */}

      {onEdit && (
        <button
          onClick={() => onEdit(row)}
          className="text-blue-600 hover:text-blue-800 p-1 hover:bg-blue-50 rounded transition-colors"
          title="Edit"
        >
          <BiEditAlt size={18} />
        </button>
      )}
      {onDelete && (
        <button
          onClick={() => onDelete(row)}
          className="text-red-600 hover:text-red-800 p-1 hover:bg-red-50 rounded transition-colors"
          title="Delete"
        >
          <BiTrash size = {18} />
        </button>
      )}
    </div>
  );
}

export default TableActions;
