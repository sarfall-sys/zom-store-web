import React from "react";
//Props
// - column: Column configuration object { key, label, sortable, width }
//   - sortConfig: Current sort state { key, direction }
//   - onSort: Function to call when header is clicked
import { BiCaretDown } from "react-icons/bi";
import { BiCaretUp } from "react-icons/bi";
function TableHeaderCell({ column, sortConfig, onSort }) {
  //Check if this column is curentlly beign sorted
  const isSorted = sortConfig?.key === column.key;
  // Check if sorting in ascending order
  const isAsc = isSorted && sortConfig.direction === "asc";
  const isDesc = isSorted && sortConfig.direction === "desc";

  return (
    <th
      //Add cursor-pointer and hover effect only
      className={`px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider  ${
        column.sortable ? "cursor-pointer select-none hover:bg-gray-100" : ""
      }`}
      // Only trigger sort if column is sortable and onSort exists
      onClick={() => column.sortable && onSort && onSort(column.key)}
      //Apply custom width if specifed in column config
      style={{ width: column.width || "auto" }}
    >
      {/* Flex container for label and sort indicators */}

      <div className="flex items-center gap-2">
        {/* Column label text */}
        <span>{column.label}</span>
        {/*Sort indicators -only for sortable columns */}
        {column.sortable && (
          <div className="flex flex-col">
            {/*Up arrow - blue if sorting ascending ,gray otherwise */}
            <BiCaretUp
              size={14}
              className={`${
                isAsc ? "text-blue-600" : "text-gray-400"
              } transition-colors`}
            />
            {/* Down arrow - blue if sorting descending, gray otherwise */}
            {/* -mt-1: negative margin to bring arrows closer together */}
            <BiCaretDown
              size={14}
              className={`-mt-1 ${
                isDesc ? "text-blue-600" : "text-gray-400"
              } transition-colors`}
            />
          </div>
        )}
      </div>
    </th>
  );
}

export default TableHeaderCell;
